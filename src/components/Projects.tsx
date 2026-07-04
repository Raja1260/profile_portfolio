import React, { useState, useEffect, useCallback } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/portfolioData";
import { AnimatedText } from "./AnimatedText";

// Descriptions longer than this (in characters) get clamped with a "Read more" toggle.
const DESCRIPTION_CLAMP_THRESHOLD = 200;

// Auto-advance interval for the carousel, in milliseconds.
const AUTO_SLIDE_INTERVAL = 4000;

const ProjectDescription: React.FC<{ text: string }> = ({ text }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > DESCRIPTION_CLAMP_THRESHOLD;

  return (
    <div className="mb-4">
      <p
        className={`text-gray-600 dark:text-gray-300 ${!expanded && isLong ? "line-clamp-3" : ""
          }`}
      >
        {text}
      </p>
      {isLong && (
        <motion.button
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          whileTap={{ scale: 0.96 }}
        >
          {expanded ? "Show less" : "Read more"}
        </motion.button>
      )}
    </div>
  );
};

type Project = (typeof projects)[number];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <motion.div
    whileHover={{ y: -10, transition: { type: "spring", stiffness: 280, damping: 20 } }}
    className="h-full flex flex-col bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300"
  >
    {/* Image with zoom */}
    <div className="relative overflow-hidden h-48">
      <motion.img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      />
      {/* Gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </div>

    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
      <ProjectDescription text={project.description} />

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <motion.span
            key={tech}
            className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full border border-blue-200 dark:border-blue-700"
            whileHover={{ scale: 1.12, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>

      <div className="flex space-x-4 mt-auto">
        {project.liveUrl && (
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </motion.a>
        )}
        {project.githubUrl && (
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Github className="w-4 h-4" />
            <span>Source Code</span>
          </motion.a>
        )}
      </div>
    </div>
  </motion.div>
);

/** Cards shown per slide: 2 on md+ screens, 1 on mobile. */
function usePerPage() {
  const [perPage, setPerPage] = useState<number>(() =>
    typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches ? 2 : 1
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => setPerPage(mq.matches ? 2 : 1);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return perPage;
}

export const Projects: React.FC = () => {
  const perPage = usePerPage();
  const pageCount = Math.max(1, Math.ceil(projects.length / perPage));

  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);

  // Keep the active page in range when the layout (perPage) changes.
  useEffect(() => {
    setPage((p) => Math.min(p, pageCount - 1));
  }, [pageCount]);

  const goPrev = useCallback(() => setPage((p) => Math.max(0, p - 1)), []);
  const goNext = useCallback(
    () => setPage((p) => Math.min(pageCount - 1, p + 1)),
    [pageCount]
  );

  // Auto-slide to the right; wraps back to the start after the last slide.
  // Pauses while the user is hovering the carousel.
  useEffect(() => {
    if (paused || pageCount <= 1) return;
    const id = setInterval(() => {
      setPage((p) => (p + 1) % pageCount);
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, [paused, pageCount]);

  const isFirst = page === 0;
  const isLast = page === pageCount - 1;

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <AnimatedText
            text="Projects"
            as="h2"
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 justify-center"
          />
          <motion.p
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            A showcase of my recent work and personal projects that demonstrate my skills and passion.
          </motion.p>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Track viewport */}
          <div className="overflow-hidden">
            <motion.div
              className="flex items-stretch"
              animate={{ x: `-${page * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 34 }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="w-full md:w-1/2 shrink-0 px-3 py-2"
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Left arrow — hidden on the first slide */}
          <AnimatePresence>
            {!isFirst && (
              <motion.button
                key="prev"
                onClick={goPrev}
                aria-label="Previous projects"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Right arrow — hidden on the last slide */}
          <AnimatePresence>
            {!isLast && (
              <motion.button
                key="next"
                onClick={goNext}
                aria-label="Next projects"
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        {pageCount > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-8">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="p-1"
              >
                <motion.span
                  className="block rounded-full bg-gray-300 dark:bg-gray-600"
                  animate={{
                    width: i === page ? 24 : 8,
                    backgroundColor: i === page ? "#2563eb" : undefined,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  style={{ height: 8 }}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
