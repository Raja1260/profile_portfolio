"use client";

import {
  Box,
  Typography,
  Button,
  Container,
  Avatar,
  IconButton,
  Stack,
} from "@mui/material";
import {
  Email,
  LinkedIn,
  KeyboardArrowDown,
  Download,
  WhatsApp,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = [
    "Software Developer",
    "Frontend Engineer",
    "React.js Developer",
    "Next.js Expert",
  ];

const contactInfo = [
  {
    icon: <Email sx={{ fontSize: 40}} />,
    title: "Email",
    value: "rajayadav12061@gmail.com",
    href: "mailto:rajayadav12061@gmail.com",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    icon: <LinkedIn sx={{ fontSize: 40 }} />,
    title: "LinkedIn",
    value: "Raja Yadav",
    href: "https://www.linkedin.com/in/raja-yadav-906073283",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    icon: <WhatsApp sx={{ fontSize: 40 }} />,
    title: "WhatsApp",
    value: "+91 7489009596",
    href: "https://wa.me/917489009596",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
  },
];
// const itemVariants = {
//   hidden: { opacity: 0, y: 50 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % titles.length;
      const fullText = titles[current];
      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );
      setTypingSpeed(isDeleting ? 10 : 120);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, titles]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "#0f172a", // slate-950 to match About section
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Universal Background Animation - Same as About section */}
      <Box sx={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        {/* Stars */}
        {/* {[...Array(150)].map((_, i) => (
          <Box
            key={i}
            sx={{
              position: "absolute",
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              backgroundColor: "white",
              borderRadius: "50%",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))} */}

        {/* Planets - Same as About section */}
        <Box className="planet planet-1">
          <Box
            sx={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
              boxShadow:
                "inset 0 0 20px rgba(0,0,0,0.3), 0 0 40px rgba(59, 130, 246, 0.3)",
            }}
          />
        </Box>
        <Box className="planet planet-2">
          <Box
            sx={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
              boxShadow:
                "inset 0 0 20px rgba(0,0,0,0.3), 0 0 30px rgba(239, 68, 68, 0.3)",
            }}
          />
        </Box>
        <Box className="planet planet-3">
          <Box
            sx={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
              boxShadow:
                "inset 0 0 20px rgba(0,0,0,0.3), 0 0 50px rgba(34, 197, 94, 0.3)",
            }}
          />
        </Box>
        <Box className="planet planet-4">
          <Box
            sx={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #a855f7 0%, #9333ea 100%)",
              boxShadow:
                "inset 0 0 20px rgba(0,0,0,0.3), 0 0 25px rgba(168, 85, 247, 0.3)",
            }}
          />
        </Box>
        <Box className="planet planet-5">
          <Box
            sx={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
              boxShadow:
                "inset 0 0 20px rgba(0,0,0,0.3), 0 0 35px rgba(251, 191, 36, 0.3)",
            }}
          />
        </Box>
        

        {/* Enhanced Nebula Effects */}
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            right: "10%",
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(139, 92, 246, 0.15) 50%, transparent 100%)",
            borderRadius: "50%",
            filter: "blur(80px)",
            animation: "pulse 6s ease-in-out infinite",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "15%",
            left: "5%",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, rgba(244, 63, 94, 0.15) 50%, transparent 100%)",
            borderRadius: "50%",
            filter: "blur(80px)",
            animation: "pulse 8s ease-in-out infinite",
            animationDelay: "2s",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, rgba(5, 150, 105, 0.1) 50%, transparent 100%)",
            borderRadius: "50%",
            filter: "blur(100px)",
            animation: "pulse 10s ease-in-out infinite",
            animationDelay: "4s",
          }}
        />

        {/* Shooting Stars */}
        <Box className="shooting-star shooting-star-1" />
        <Box className="shooting-star shooting-star-2" />
        <Box className="shooting-star shooting-star-3" />
        <Box className="shooting-star shooting-star-4" />
         <Box className="shooting-star shooting-star-5" />
        <Box className="shooting-star shooting-star-6" />

        {/* Floating Code Elements */}
        {["</>", "{}", "()", "[]", "=>","...","&&","||","</>","{`if` & `else`}"].map((symbol, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-40, 40, -40],
              x: [-20, 20, -20],
              rotate: [0, 10, -10, 0],
              opacity: [0.5, 0.9, 0.5],
            }}
            transition={{
              duration: 4 + i,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
            style={{
              position: "absolute",
              fontSize: `${1.5 + (i % 3) * 0.3}rem`,
              color: "rgba(255,255,255,0.4)",
              top: `${15 + ((i * 15) % 70)}%`,
              left: `${5 + ((i * 18) % 90)}%`,
              textShadow: "0 0 10px rgba(255,255,255,0.3)",
              fontFamily: "monospace",
              fontWeight: "bold",
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 10 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Box textAlign="center" color="white">
            {/* Enhanced Avatar Section */}
            <motion.div variants={itemVariants}>
              <Box position="relative" display="inline-block" mb={4}>
                {/* <Avatar
                  sx={{
                    width: 200,
                    height: 200,
                    mx: "auto",
                    mb: 3,
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
                    fontSize: "5rem",
                    fontWeight: "bold",
                    boxShadow: "0 30px 80px rgba(0,0,0,0.4), 0 0 0 8px rgba(255,255,255,0.1)",
                    border: "6px solid rgba(255,255,255,0.2)",
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      inset: "-15px",
                      background: "linear-gradient(45deg, #667eea, #764ba2, #f093fb, #667eea)",
                      borderRadius: "50%",
                      opacity: 0.4,
                      animation: "spin 8s linear infinite",
                      zIndex: -1,
                    },
                  }}
                >
                  <motion.div
                    animate={{
                      textShadow: [
                        "0 0 20px rgba(255,255,255,0.5)",
                        "0 0 40px rgba(255,255,255,0.8)",
                        "0 0 20px rgba(255,255,255,0.5)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    RY
                  </motion.div>
                </Avatar> */}

                {/* Floating Tech Icons */}
                {/* <motion.div
                  animate={{
                    y: [-15, 15, -15],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  style={{
                    position: "absolute",
                    top: "10%",
                    right: "-20%",
                    width: "60px",
                    height: "60px",
                    background: "linear-gradient(45deg, #fbbf24, #f59e0b)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.8rem",
                    boxShadow: "0 10px 30px rgba(251, 191, 36, 0.4)",
                  }}
                >
                  ⚛️
                </motion.div>
                <motion.div
                  animate={{
                    y: [15, -15, 15],
                    rotate: [0, -10, 10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  style={{
                    position: "absolute",
                    bottom: "10%",
                    left: "-25%",
                    width: "70px",
                    height: "70px",
                    background: "linear-gradient(45deg, #10b981, #059669)",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    boxShadow: "0 15px 40px rgba(16, 185, 129, 0.4)",
                    transform: "rotate(15deg)",
                  }}
                >
                  🚀
                </motion.div>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  style={{
                    position: "absolute",
                    top: "60%",
                    right: "-30%",
                    width: "50px",
                    height: "50px",
                    background: "linear-gradient(45deg, #ec4899, #db2777)",
                    borderRadius: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    boxShadow: "0 8px 25px rgba(236, 72, 153, 0.4)",
                    transform: "rotate(-10deg)",
                  }}
                >
                  💻
                </motion.div> */}
              </Box>
            </motion.div>

            {/* Enhanced Name */}
     {/* <motion.div variants={textVariants}>
  <Typography
    variant="h2"
    sx={{
      mb: 3,
      fontWeight: 700,  // Increased weight for better prominence
      fontSize: { xs: "2.5rem", md: "4rem", lg: "4.5rem" },  // More balanced sizing
      background: "linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899)",  // Professional color palette
      backgroundSize: "200% 200%",  // Smoother animation
      animation: "gradientAnimation 8s ease infinite",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      position: "relative",
      letterSpacing: { xs: "0.5px", md: "1px" },  // Better typography
      lineHeight: 1.1,  // Tighter line height
      "@keyframes gradientAnimation": {
        "0%": { backgroundPosition: "0% 50%" },
        "50%": { backgroundPosition: "100% 50%" },
        "100%": { backgroundPosition: "0% 50%" },
      },
      "&:after": {  // Subtle underline effect
        content: '""',
        position: "absolute",
        bottom: -8,
        left: 0,
        width: "100%",
        height: "2px",
        background: "rgba(255,255,255,0.1)",
      }
    }}
  >
    Raja Yadav
  </Typography>
</motion.div> */}
            {/* Enhanced Typing Animation */}
            <motion.div variants={textVariants}>
              <Box
                sx={{
                  height: "120px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 4,
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: "1.8rem", md: "2.8rem" },
                    background: "linear-gradient(45deg, #ffffff, #cbd5e1)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "0 0 30px rgba(255,255,255,0.4)",
                  }}
                >
                  <i> {text} </i>
                  <motion.span
                    animate={{
                      opacity: [1, 0, 1],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    style={{
                      display: "inline-block",
                      width: "4px",
                      height: "1em",
                      background: "linear-gradient(45deg, #667eea, #f093fb)",
                      marginLeft: "8px",
                      boxShadow: "0 0 15px rgba(255,255,255,0.8)",
                    }}
                  />
                </Typography>
              </Box>
            </motion.div>

            {/* Enhanced Description */}
            <motion.div variants={textVariants}>
              <Typography
                variant="h6"
                sx={{
                  mb: 6,
                  maxWidth: 800,
                  mx: "auto",
                  color: "#e2e8f0", // slate-200
                  lineHeight: 1.8,
                  fontSize: { xs: "1.1rem", md: "1.3rem" },
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "25px",
                  padding: "30px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
                  fontStyle: "italic",
                }}
              >
                I’m a frontend developer with a passion for creating visually
                compelling, high-performance web interfaces. I specialize in
                building clean, responsive UIs that prioritize both aesthetics
                and usability—leveraging modern tools like{" "}
                <Box
                  component="span"
                  sx={{ color: "#667eea", fontWeight: "bold" }}
                >
                  React.js
                </Box>
                ,{" "}
                <Box
                  component="span"
                  sx={{ color: "#f093fb", fontWeight: "bold" }}
                >
                  Next.js
                </Box>
                , and{" "}
                <Box
                  component="span"
                  sx={{ color: "#10b981", fontWeight: "bold" }}
                >
                  JavaScript
                </Box>
                . I thrive on turning ideas into engaging digital experiences.
                Let’s build the future—pixel by pixel. 🚀
              </Typography>
            </motion.div>

            {/* Enhanced Buttons */}
            <motion.div variants={itemVariants}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={3}
                justifyContent="center"
                sx={{ mb: 6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => scrollToSection("contact")}
                    sx={{
                      //   background: "linear-gradient(45deg, #667eea, #764ba2)",
                      color: "white",
                      px: 6,
                      py: 2.5,
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      borderRadius: "50px",
                      border: "2px solid rgba(255,255,255,0.2)",
                      boxShadow: "0 15px 50px rgba(102, 126, 234, 0.3)",
                      "&:hover": {
                        // background: "linear-gradient(45deg, #764ba2, #f093fb)",
                        boxShadow: "0 20px 60px rgba(102, 126, 234, 0.4)",
                        transform: "translateY(-2px)",
                      },
                      transition: "all 0.4s ease",
                    }}
                  >
                    Get In Touch ✨
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => scrollToSection("projects")}
                    sx={{
                      color: "white",
                      px: 6,
                      py: 2.5,
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      borderRadius: "50px",
                      border: "2px solid rgba(255,255,255,0.2)",
                      boxShadow: "0 15px 50px rgba(102, 126, 234, 0.3)",
                      "&:hover": {
                        // background: "linear-gradient(45deg, #764ba2, #f093fb)",
                        boxShadow: "0 20px 60px rgba(102, 126, 234, 0.4)",
                        transform: "translateY(-2px)",
                      },
                      transition: "all 0.4s ease",
                    }}
                    //   transition: "all 0.4s ease",
                    // }}
                  >
                    View My Work 🎯
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<Download />}
                     onClick={() => window.open("UpdatedCv.pdf", "_blank")}                   
                      sx={{
                      color: "white",
                      px: 6,
                      py: 2.5,
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      borderRadius: "50px",
                      border: "2px solid rgba(255,255,255,0.2)",
                      boxShadow: "0 15px 50px rgba(102, 126, 234, 0.3)",
                      "&:hover": {
                        // background: "linear-gradient(45deg, #764ba2, #f093fb)",
                        boxShadow: "0 20px 60px rgba(102, 126, 234, 0.4)",
                        transform: "translateY(-2px)",
                      },
                      transition: "all 0.4s ease",
                    }}
                  >
                    Resume
                  </Button>
                </motion.div>
              </Stack>
            </motion.div>

            {/* Enhanced Social Links */}
        <motion.div variants={itemVariants}>
      <Stack
        direction="row"
        spacing={4}
        justifyContent="center"
        sx={{ mb: 8 }}
      >
        {contactInfo.map((social, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.2,
              rotate: [0, -10, 10, 0],
              y: -10,
            }}
            whileTap={{ scale: 0.9 }}
          >
            <IconButton
              href={social.href}
              target="_blank"
              sx={{
                background: social.gradient,
                color: "white",
                width: 80,
                height: 80,
                backdropFilter: "blur(20px)",
                border: "2px solid rgba(255,255,255,0.2)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                "&:hover": {
                  boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
                  "& svg": {
                    filter: "drop-shadow(0 0 15px rgba(255,255,255,0.8))",
                  },
                },
                transition: "all 0.4s ease",
                "& svg": {
                  filter: "drop-shadow(0 0 8px rgba(255,255,255,0.5))",
                },
              }}
            >
              {social.icon}
            </IconButton>
          </motion.div>
        ))}
      </Stack>
    </motion.div>
            {/* Enhanced Scroll Down Button */}
            {/* <motion.div variants={itemVariants}>
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <IconButton
                  onClick={() => scrollToSection("about")}
                  sx={{
                    color: "white",
                    background:
                      "linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                    backdropFilter: "blur(20px)",
                    border: "2px solid rgba(255,255,255,0.3)",
                    width: 70,
                    height: 70,
                    boxShadow: "0 10px 30px rgba(255,255,255,0.1)",
                    "&:hover": {
                      background:
                        "linear-gradient(45deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))",
                      transform: "scale(1.2)",
                      boxShadow: "0 15px 40px rgba(255,255,255,0.2)",
                      "& svg": {
                        filter: "drop-shadow(0 0 15px rgba(255,255,255,0.8))",
                      },
                    },
                    transition: "all 0.4s ease",
                    "& svg": {
                      filter: "drop-shadow(0 0 8px rgba(255,255,255,0.5))",
                    },
                  }}
                >
                  <KeyboardArrowDown sx={{ fontSize: 40 }} />
                </IconButton>
              </motion.div>
            </motion.div> */}
          </Box>
        </motion.div>
      </Container>

      <style jsx global>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Planet Animations */
        .planet {
          position: absolute;
          border-radius: 50%;
          opacity: 0.8;
        }

        .planet-1 {
          top: 15%;
          left: 8%;
          animation: orbit-1 25s linear infinite;
        }

        .planet-2 {
          top: 70%;
          right: 12%;
          animation: orbit-2 30s linear infinite reverse;
        }

        .planet-3 {
          bottom: 25%;
          left: 15%;
          animation: orbit-3 35s linear infinite;
        }

        .planet-4 {
          top: 35%;
          right: 25%;
          animation: orbit-4 20s linear infinite reverse;
        }

        .planet-5 {
          bottom: 15%;
          right: 8%;
          animation: orbit-5 40s linear infinite;
        }

        @keyframes orbit-1 {
          from {
            transform: rotate(0deg) translateX(120px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(120px) rotate(-360deg);
          }
        }

        @keyframes orbit-2 {
          from {
            transform: rotate(0deg) translateX(100px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(100px) rotate(-360deg);
          }
        }

        @keyframes orbit-3 {
          from {
            transform: rotate(0deg) translateX(140px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(140px) rotate(-360deg);
          }
        }

        @keyframes orbit-4 {
          from {
            transform: rotate(0deg) translateX(80px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(80px) rotate(-360deg);
          }
        }

        @keyframes orbit-5 {
          from {
            transform: rotate(0deg) translateX(110px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(110px) rotate(-360deg);
          }
        }

        /* Shooting Stars */
        .shooting-star {
          position: absolute;
          width: 3px;
          height: 3px;
          background: linear-gradient(45deg, #fff, transparent);
          border-radius: 50%;
        }

        .shooting-star::before {
          content: "";
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 80px;
          height: 2px;
          background: linear-gradient(90deg, #fff, transparent);
        }

        .shooting-star-1 {
          top: 15%;
          left: -80px;
          animation: shooting 4s linear infinite;
        }

        .shooting-star-2 {
          top: 45%;
          left: -80px;
          animation: shooting 5s linear infinite;
          animation-delay: 2s;
        }

        .shooting-star-3 {
          top: 75%;
          left: -80px;
          animation: shooting 6s linear infinite;
          animation-delay: 4s;
        }

        .shooting-star-4 {
          top: 30%;
          left: -80px;
          animation: shooting 4.5s linear infinite;
          animation-delay: 6s;
        }

        @keyframes shooting {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translateX(100vw) translateY(-150px);
            opacity: 0;
          }
        }
      `}</style>
    </Box>
  );
};

export default Hero;
