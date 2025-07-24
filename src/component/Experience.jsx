"use client"

import { useRef, useState } from "react"
import { Box, Typography, Container, Card, CardContent, Button, Chip, Collapse } from "@mui/material"
import { Business, CalendarToday, LocationOn, Work } from "@mui/icons-material"
import { motion, useInView } from "framer-motion"

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedExperience, setExpandedExperience] = useState(null)

  const experiences = [
    {
      title: "Software Development Engineer",
      company: "Fincoopers Capital Pvt Ltd",
      location: "Indore, India",
      period: "May 2024 – Present",
      type: "Non-Banking Finance Company",
      achievements: [
        "Contributed to building a full-featured HRMS platform using Next.js and MUI",
        "Developed dynamic Careers page with role-based listing control",
        "Implemented Interview Scheduling module with multiple modes and RBAC permissions",
        "Created PDF document generator for offer/appointment letters",
        "Built File Manager organizing hiring documents with structured role access",
        "Designed frontend for Expense Management System with approval workflows",
        "Developed core components for Vendor Management System",
        "Integrated dynamic chatbot into Finexe app",
        "Optimized UI/UX in Loan Origination System"
      ],
      technologies: ["Next.js", "JavaScript", "MUI", "Axios", "RBAC"],
      color: "#6366f1", // Indigo
    },
    {
      title: "Frontend Engineer",
      company: "Geniehub Solutions Pvt Ltd",
      location: "Remote",
      period: "Oct 2023 – Apr 2024",
      type: "Employment Platform",
      achievements: [
        "Built core frontend of job marketplace using React and Tailwind CSS",
        "Designed responsive, accessible UI with modern UX practices",
        "Developed job category management and subscription modules",
        "Integrated Razorpay for payment processing",
        "Implemented mobile-first design with performance optimizations"
      ],
      technologies: ["React", "JavaScript", "Tailwind CSS", "HTML", "Razorpay"],
      color: "#3b82f6", // Blue
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const toggleExpand = (index) => {
    setExpandedExperience(expandedExperience === index ? null : index)
  }

  return (
    <Box
      id="experience"
      sx={{
        py: 12,
        background: "linear-gradient(to bottom, #0f172a, #1e293b)",
        position: "relative",
        overflow: "hidden",
      }}
      ref={ref}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 10 }}>
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          {/* Section Header */}
          <motion.div variants={itemVariants}>
            <Box textAlign="center" mb={8}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "2.5rem", md: "3rem" },
                  color: "white",
                  mb: 2,
                }}
              >
                Work Experience
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#94a3b8",
                  maxWidth: 600,
                  mx: "auto",
                }}
              >
                My professional journey in software development
              </Typography>
            </Box>
          </motion.div>

          {/* Timeline */}
          <Box sx={{ position: "relative" }}>
            {/* Timeline line */}
            <Box
              sx={{
                position: "absolute",
                left: { xs: 16, md: "50%" },
                transform: { md: "translateX(-50%)" },
                top: 0,
                bottom: 0,
                width: 2,
                background: "linear-gradient(to bottom, #6366f1, #3b82f6)",
                zIndex: 0,
              }}
            />
            
            <Box sx={{ position: "relative", zIndex: 1 }}>
              {experiences.map((exp, index) => (
                <motion.div key={exp.company} variants={itemVariants}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      alignItems: { md: index % 2 === 0 ? "flex-start" : "flex-end" },
                      mb: 6,
                      position: "relative",
                      pl: { xs: 4, md: 0 },
                    }}
                  >
                    {/* Timeline dot */}
                    <Box
                      sx={{
                        position: "absolute",
                        left: { xs: 8, md: "50%" },
                        transform: { md: "translateX(-50%)" },
                        width: 16,
                        height: 16,
                        backgroundColor: "white",
                        border: `4px solid ${exp.color}`,
                        borderRadius: "50%",
                        zIndex: 2,
                      }}
                    />

                    {/* Experience Card */}
                    <Box
                      sx={{
                        width: { xs: "100%", md: "45%" },
                        ml: { md: index % 2 === 0 ? 0 : "55%" },
                        mr: { md: index % 2 === 0 ? "55%" : 0 },
                      }}
                    >
                      <Card
                        sx={{
                          background: "rgba(30, 41, 59, 0.7)",
                          backdropFilter: "blur(12px)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          borderRadius: 3,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            borderColor: `${exp.color}80`,
                            boxShadow: `0 10px 30px -5px ${exp.color}40`,
                          },
                          position: "relative",
                          overflow: "hidden",
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: 4,
                            background: exp.color,
                          },
                        }}
                      >
                        <CardContent sx={{ p: 3 }}>
                          {/* Header */}
                          <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
                            <Box flex={1}>
                              <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: "white" }}>
                                {exp.title}
                              </Typography>
                              <Box display="flex" alignItems="center" gap={1} mb={1}>
                                <Business sx={{ fontSize: 16, color: "#cbd5e1" }} />
                                <Typography variant="subtitle1" sx={{ color: "#cbd5e1" }}>
                                  {exp.company}
                                </Typography>
                              </Box>
                              <Box display="flex" flexWrap="wrap" gap={2} mb={1}>
                                <Box display="flex" alignItems="center" gap={0.5}>
                                  <CalendarToday sx={{ fontSize: 14, color: "#94a3b8" }} />
                                  <Typography variant="body2" sx={{ color: "#94a3b8" }}>
                                    {exp.period}
                                  </Typography>
                                </Box>
                                <Box display="flex" alignItems="center" gap={0.5}>
                                  <LocationOn sx={{ fontSize: 14, color: "#94a3b8" }} />
                                  <Typography variant="body2" sx={{ color: "#94a3b8" }}>
                                    {exp.location}
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                p: 1.5,
                                background: exp.color,
                                borderRadius: 2,
                                color: "white",
                              }}
                            >
                              <Work sx={{ color: "white" }} />
                            </Box>
                          </Box>

                          {/* Company Type */}
                          <Box mb={3}>
                            <Chip
                              label={exp.type}
                              size="small"
                              sx={{
                                backgroundColor: `${exp.color}20`,
                                color: exp.color,
                                fontWeight: "medium",
                                border: `1px solid ${exp.color}40`,
                              }}
                            />
                          </Box>

                          {/* Achievements */}
                          <Box mb={3}>
                            <Typography variant="subtitle2" fontWeight="bold" gutterBottom sx={{ color: "#e2e8f0", mb: 2 }}>
                              Key Achievements:
                            </Typography>
                            <Box component="ul" sx={{ pl: 2, mb: 2 }}>
                              {exp.achievements.slice(0, 2).map((achievement, achIndex) => (
                                <Box component="li" key={achIndex} sx={{ color: "#cbd5e1", mb: 1 }}>
                                  <Typography variant="body2">{achievement}</Typography>
                                </Box>
                              ))}
                            </Box>
                            <Collapse in={expandedExperience === index}>
                              <Box component="ul" sx={{ pl: 2, mb: 2 }}>
                                {exp.achievements.slice(2).map((achievement, achIndex) => (
                                  <Box component="li" key={achIndex + 2} sx={{ color: "#cbd5e1", mb: 1 }}>
                                    <Typography variant="body2">{achievement}</Typography>
                                  </Box>
                                ))}
                              </Box>
                            </Collapse>
                            {exp.achievements.length > 2 && (
                              <Button
                                onClick={() => toggleExpand(index)}
                                size="small"
                                sx={{
                                  color: exp.color,
                                  fontWeight: "bold",
                                  "&:hover": {
                                    backgroundColor: `${exp.color}20`,
                                  },
                                }}
                              >
                                {expandedExperience === index ? "Show Less" : `+${exp.achievements.length - 2} More`}
                              </Button>
                            )}
                          </Box>

                          {/* Technologies */}
                          <Box>
                            <Typography variant="subtitle2" fontWeight="bold" gutterBottom sx={{ color: "#e2e8f0", mb: 1 }}>
                              Technologies:
                            </Typography>
                            <Box display="flex" flexWrap="wrap" gap={1}>
                              {exp.technologies.map((tech, techIndex) => (
                                <Chip
                                  key={techIndex}
                                  label={tech}
                                  size="small"
                                  sx={{
                                    backgroundColor: `${exp.color}10`,
                                    color: "#e2e8f0",
                                    fontWeight: 500,
                                    border: `1px solid ${exp.color}20`,
                                  }}
                                />
                              ))}
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}

export default Experience