"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  Paper,
  IconButton,
  Divider,
} from "@mui/material";
import {
  School,
  LocationOn,
  CalendarToday,
  Code,
  Rocket,
  Star,
  TrendingUp,
  EmojiEvents,
  Psychology,
  WorkspacePremium,
} from "@mui/icons-material";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const education = [
    {
      degree: "Master of Computer Application",
      institution:
        "Shri Govindram Seksaria Institute of Technology and Science, Indore",
      period: "2022 - 2024",
      cgpa: "7.91",
      icon: <School sx={{ fontSize: 28, color: "white" }} />,
      color: "#6366f1", // Indigo
      description:
        "Advanced studies in computer applications with focus on modern web technologies",
      achievements: [
        "Top 15% of class",
        "Web Development Specialization",
        "Final Project: HRMS System",
      ],
    },
    {
      degree: "Bachelor of Science (Computer Science)",
      institution: "St Paul Institute of Professional Studies, Indore",
      period: "2019 - 2022",
      cgpa: "8.21",
      icon: <WorkspacePremium sx={{ fontSize: 28, color: "white" }} />,
      color: "#4CAF50", // Green
      description:
        "Foundation in computer science with emphasis on programming and software development",
      achievements: [
        "Dean's List",
        "Programming Competition Winner",
        "Student Council Member",
      ],
    },
  ];

 const stats = [
  {
    icon: <Code sx={{ fontSize: 28 }} />,
    value: "2+",
    label: "Years Experience",
    color: "#6366f1", // Indigo
  },
  {
    icon: <Rocket sx={{ fontSize: 28 }} />,
    value: "5+",
    label: "Projects Built",
    color: "#ec4899", // Pink
  },
  {
    icon: <Star sx={{ fontSize: 28 }} />,
    value: "15+",
    label: "Technologies",
    color: "#f59e0b", // Amber
  },
  {
    icon: <TrendingUp sx={{ fontSize: 28 }} />,
    value: "100%",
    label: "Client Satisfaction",
    color: "#10b981", // Emerald
  },
];

  const skills = [
    "Problem Solving",
    "Team Leadership",
    "Quick Learner",
    "Creative Thinking",
    "Communication",
    "Project Management",
  ];

  const skillGradients = [
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
    "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    "linear-gradient(135deg, #ec4899 0%, #db2777 100%)",
    "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
  ];

  return (
    <Box
      id="about"
      sx={{
        position: "relative",
        minHeight: "100vh",
        py: 12,
        overflow: "hidden",
        background: "#0f172a", // slate-950
      }}
      ref={ref}
    >
      {/* Universal Background Animation */}
      <Box sx={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        {/* Stars */}
        {[...Array(100)].map((_, i) => (
          <Box
            key={i}
            sx={{
              position: "absolute",
              width: "4px",
              height: "4px",
              backgroundColor: "white",
              borderRadius: "50%",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${
                2 + Math.random() * 2
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}

        {/* Planets */}
        <Box className="planet planet-1">
          <Box
            sx={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
              boxShadow: "inset 0 0 20px rgba(0,0,0,0.3)",
            }}
          />
        </Box>
        <Box className="planet planet-2">
          <Box
            sx={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
              boxShadow: "inset 0 0 20px rgba(0,0,0,0.3)",
            }}
          />
        </Box>
        <Box className="planet planet-3">
          <Box
            sx={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
              boxShadow: "inset 0 0 20px rgba(0,0,0,0.3)",
            }}
          />
        </Box>
        <Box className="planet planet-4">
          <Box
            sx={{
              width: "35px",
              height: "35px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #a855f7 0%, #9333ea 100%)",
              boxShadow: "inset 0 0 20px rgba(0,0,0,0.3)",
            }}
          />
        </Box>
        <Box className="planet planet-5">
          <Box
            sx={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
              boxShadow: "inset 0 0 20px rgba(0,0,0,0.3)",
            }}
          />
        </Box>

        {/* Nebula Effects */}
        <Box
          sx={{
            position: "absolute",
            top: "25%",
            left: "25%",
            width: "384px",
            height: "384px",
            background:
              "radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 100%)",
            borderRadius: "50%",
            filter: "blur(60px)",
            animation: "pulse 4s ease-in-out infinite",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "25%",
            right: "25%",
            width: "320px",
            height: "320px",
            background:
              "radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, rgba(244, 63, 94, 0.1) 50%, transparent 100%)",
            borderRadius: "50%",
            filter: "blur(60px)",
            animation: "pulse 4s ease-in-out infinite",
            animationDelay: "2s",
          }}
        />

        {/* Shooting Stars */}
        <Box className="shooting-star shooting-star-1" />
        <Box className="shooting-star shooting-star-2" />
        <Box className="shooting-star shooting-star-3" />
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 10 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants}>
            <Box textAlign="center" mb={10}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "3rem", md: "4rem", lg: "5rem" },
                  background:
                    "linear-gradient(45deg, #667eea, #764ba2, #f093fb)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 2,
                }}
              >
                About Me
              </Typography>
              <Box
                sx={{
                  width: 80,
                  height: 6,
                  background: "linear-gradient(45deg, #8b5cf6, #ec4899)",
                  mx: "auto",
                  borderRadius: 3,
                  mb: 3,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: "#cbd5e1", // slate-300
                  maxWidth: 600,
                  mx: "auto",
                  fontSize: "1.25rem",
                }}
              >
                Passionate developer crafting digital experiences with modern
                technologies
              </Typography>
            </Box>
          </motion.div>

          {/* Main Content Grid */}
          <Grid container spacing={8} alignItems="center" mb={10}>
            {/* Avatar Section */}
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Box position="relative" display="flex" justifyContent="center">
                  {/* Main Avatar */}
                  <Box position="relative">
                    <Avatar
                      sx={{
                        width: 320,
                        height: 320,
                        background:
                          "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
                        fontSize: "5rem",
                        fontWeight: "bold",
                        boxShadow:
                          "0 30px 60px rgba(0,0,0,0.3), 0 0 0 8px rgba(255,255,255,0.1)",
                        border: "8px solid rgba(255,255,255,0.2)",
                        position: "relative",
                      }}
                    >
                      RY
                    </Avatar>

                    {/* Floating Elements */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: "15%",
                        right: "-10%",
                        width: 64,
                        height: 64,
                        background: "linear-gradient(45deg, #fbbf24, #f59e0b)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 10px 30px rgba(251, 191, 36, 0.4)",
                        animation: "float 4s ease-in-out infinite",
                      }}
                    >
                      <Code sx={{ color: "white", fontSize: 28 }} />
                    </Box>
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: "10%",
                        left: "-15%",
                        width: 80,
                        height: 80,
                        background: "linear-gradient(45deg, #10b981, #059669)",
                        borderRadius: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 15px 40px rgba(16, 185, 129, 0.4)",
                        animation: "float-reverse 5s ease-in-out infinite",
                        transform: "rotate(15deg)",
                      }}
                    >
                      <Rocket sx={{ color: "white", fontSize: 32 }} />
                    </Box>
                    <Box
                      sx={{
                        position: "absolute",
                        top: "60%",
                        right: "-20%",
                        width: 56,
                        height: 56,
                        background: "linear-gradient(45deg, #ec4899, #db2777)",
                        borderRadius: "15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 8px 25px rgba(236, 72, 153, 0.4)",
                        animation: "float 3s ease-in-out infinite",
                        transform: "rotate(-10deg)",
                      }}
                    >
                      <Psychology sx={{ color: "white", fontSize: 24 }} />
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>

            {/* Content Section */}
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 3,
                      fontSize: { xs: "2rem", md: "2.5rem" },
                      background: "linear-gradient(45deg, #ffffff, #cbd5e1)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Passionate Software Developer
                  </Typography>

                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      mb: 3,
                      background: "rgba(255,255,255,0.1)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      borderRadius: 3,
                    }}
                  >
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{
                        lineHeight: 1.8,
                        fontSize: "1.1rem",
                        color: "#e2e8f0", // slate-200
                        mb: 2,
                      }}
                    >
                      I'm a skilled Software Developer with expertise in{" "}
                      <Box
                        component="span"
                        sx={{ color: "#667eea", fontWeight: "bold" }}
                      >
                        JavaScript, React.js, Next.js
                      </Box>
                      , and{" "}
                      <Box
                        component="span"
                        sx={{ color: "#f093fb", fontWeight: "bold" }}
                      >
                        React Redux
                      </Box>
                      , specializing in building responsive, scalable, and
                      high-performance web applications.
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        lineHeight: 1.8,
                        fontSize: "1.1rem",
                        color: "#e2e8f0", // slate-200
                      }}
                    >
                      Currently contributing to innovative projects at{" "}
                      <Box
                        component="span"
                        sx={{ color: "#10b981", fontWeight: "bold" }}
                      >
                        Fincoopers Capital Pvt Ltd
                      </Box>
                      , where I develop comprehensive HRMS platforms, expense
                      management systems, and vendor management solutions.
                    </Typography>
                  </Paper>

                  <Box display="flex" alignItems="center" mb={3}>
                    <LocationOn sx={{ color: "#ec4899", mr: 1 }} />
                    <Typography
                      variant="h6"
                      sx={{ color: "#e2e8f0", fontWeight: 500 }}
                    >
                      Indore, Madhya Pradesh
                    </Typography>
                  </Box>

                  {/* Skills Tags */}
                  <Box>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      mb={2}
                      sx={{ color: "white" }}
                    >
                      Core Strengths
                    </Typography>
                    <Box display="flex" flexWrap="wrap" gap={1}>
                      {skills.map((skill, index) => (
                        <Chip
                          key={index}
                          label={skill}
                          sx={{
                            background: skillGradients[index % 6],
                            color: "white",
                            fontWeight: 600,
                            "&:hover": {
                              transform: "translateY(-2px) scale(1.05)",
                              boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                            },
                            transition: "all 0.3s ease",
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          {/* Stats Section */}
<motion.div variants={itemVariants}>
  <Paper
    elevation={0}
    sx={{
      p: 4,
      mb: 8,
      background: "rgba(30, 41, 59, 0.7)",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 3,
      transition: "all 0.3s ease",
      "&:hover": {
        borderColor: "rgba(255,255,255,0.2)",
      },
    }}
  >
    <Grid container spacing={3}>
      {stats.map((stat, index) => (
        <Grid item xs={6} md={3} key={index}>
          <motion.div whileHover={{ y: -5 }}>
            <Box 
              textAlign="center"
              sx={{
                p: 3,
                borderRadius: 2,
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "rgba(255,255,255,0.05)",
                },
              }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 72,
                  height: 72,
                  mb: 2,
                  background: `${stat.color}20`,
                  borderRadius: "50%",
                  border: `1px solid ${stat.color}30`,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: `${stat.color}30`,
                    transform: "scale(1.1)",
                  },
                }}
              >
                <Box
                  sx={{
                    p: 2,
                    background: stat.color,
                    borderRadius: "50%",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {stat.icon}
                </Box>
              </Box>
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{
                  color: "white",
                  mb: 1,
                  transition: "all 0.3s ease",
                }}
              >
                {stat.value}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ 
                  color: "#94a3b8",
                  fontWeight: 500,
                  letterSpacing: "0.5px",
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </Paper>
</motion.div>

          {/* Education Section */}
          <motion.div variants={itemVariants}>
            <Box textAlign="center" mb={6}>
              <Typography
                variant="h3"
                fontWeight="bold"
                gutterBottom
                sx={{
                  color: "white",
                  fontSize: { xs: "2rem", md: "3rem" },
                }}
              >
                Educational Journey
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#cbd5e1",
                  fontSize: "1.25rem",
                }}
              >
                Building strong foundations for a successful career
              </Typography>
            </Box>

            <Grid container spacing={4} sx={{ alignItems: "stretch" }}>
              {education.map((edu, index) => (
                <Grid item xs={12} md={6} key={index} sx={{ display: "flex" }}>
                  <motion.div variants={cardVariants} style={{ width: "100%" }}>
                    <Card
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                      sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        background: "rgba(30, 41, 59, 0.7)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: 3,
                        transition: "all 0.3s ease",
                        transform:
                          hoveredCard === index ? "translateY(-8px)" : "none",
                        boxShadow:
                          hoveredCard === index
                            ? `0 10px 30px -5px ${edu.color}40`
                            : "none",
                        overflow: "hidden",
                        position: "relative",
                        "&:hover": {
                          borderColor: `${edu.color}80`,
                        },
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "4px",
                          background: edu.color,
                        },
                      }}
                    >
                      <CardContent
                        sx={{
                          p: 4,
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Box
                          display="flex"
                          alignItems="flex-start"
                          gap={3}
                          mb={3}
                        >
                          <Box
                            sx={{
                              p: 2,
                              background: edu.color,
                              borderRadius: 3,
                              transition: "all 0.3s ease",
                            }}
                          >
                            {edu.icon}
                          </Box>
                          <Box flex={1}>
                            <Typography
                              variant="h5"
                              fontWeight="bold"
                              gutterBottom
                              sx={{ color: "white" }}
                            >
                              {edu.degree}
                            </Typography>
                            <Typography
                              variant="h6"
                              sx={{
                                color: "#cbd5e1",
                                mb: 1,
                              }}
                            >
                              {edu.institution}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: "#94a3b8",
                                mb: 2,
                              }}
                            >
                              {edu.description}
                            </Typography>
                          </Box>
                        </Box>

                        <Box
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          mb={3}
                        >
                          <Box display="flex" alignItems="center" gap={1}>
                            <CalendarToday
                              sx={{
                                fontSize: 16,
                                color: "#94a3b8",
                              }}
                            />
                            <Typography
                              variant="body2"
                              sx={{ color: "#94a3b8" }}
                            >
                              {edu.period}
                            </Typography>
                          </Box>
                          <Chip
                            icon={<EmojiEvents sx={{ fontSize: 16 }} />}
                            label={`CGPA: ${edu.cgpa}`}
                            size="small"
                            sx={{
                              background:
                                "linear-gradient(45deg, #fbbf24, #f59e0b)",
                              color: "white",
                              fontWeight: 600,
                            }}
                          />
                        </Box>

                        <Divider
                          sx={{
                            mb: 2,
                            borderColor: "rgba(255,255,255,0.1)",
                          }}
                        />

                        <Box sx={{ mt: "auto" }}>
                          <Typography
                            variant="subtitle2"
                            fontWeight="bold"
                            mb={1}
                            sx={{ color: "white" }}
                          >
                            Key Achievements:
                          </Typography>
                          {edu.achievements.map((achievement, achIndex) => (
                            <Box
                              key={achIndex}
                              display="flex"
                              alignItems="center"
                              gap={1}
                              mb={1}
                            >
                              <Star
                                sx={{
                                  fontSize: 12,
                                  color: "#fbbf24",
                                }}
                              />
                              <Typography
                                variant="body2"
                                sx={{
                                  color: "#cbd5e1",
                                }}
                              >
                                {achievement}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </motion.div>
      </Container>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float-reverse {
          0%,
          100% {
            transform: translateY(0px) rotate(15deg);
          }
          50% {
            transform: translateY(-15px) rotate(20deg);
          }
        }

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
          }
          50% {
            opacity: 0.8;
          }
        }

        /* Planet Animations */
        .planet {
          position: absolute;
          border-radius: 50%;
          opacity: 0.7;
        }

        .planet-1 {
          top: 20%;
          left: 10%;
          animation: orbit-1 20s linear infinite;
        }

        .planet-2 {
          top: 60%;
          right: 15%;
          animation: orbit-2 25s linear infinite reverse;
        }

        .planet-3 {
          bottom: 30%;
          left: 20%;
          animation: orbit-3 30s linear infinite;
        }

        .planet-4 {
          top: 40%;
          right: 30%;
          animation: orbit-4 15s linear infinite reverse;
        }

        .planet-5 {
          bottom: 20%;
          right: 10%;
          animation: orbit-5 35s linear infinite;
        }

        @keyframes orbit-1 {
          from {
            transform: rotate(0deg) translateX(100px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(100px) rotate(-360deg);
          }
        }

        @keyframes orbit-2 {
          from {
            transform: rotate(0deg) translateX(80px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(80px) rotate(-360deg);
          }
        }

        @keyframes orbit-3 {
          from {
            transform: rotate(0deg) translateX(120px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(120px) rotate(-360deg);
          }
        }

        @keyframes orbit-4 {
          from {
            transform: rotate(0deg) translateX(60px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(60px) rotate(-360deg);
          }
        }

        @keyframes orbit-5 {
          from {
            transform: rotate(0deg) translateX(90px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(90px) rotate(-360deg);
          }
        }

        /* Shooting Stars */
        .shooting-star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: linear-gradient(45deg, #fff, transparent);
          border-radius: 50%;
        }

        .shooting-star::before {
          content: "";
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 1px;
          background: linear-gradient(90deg, #fff, transparent);
        }

        .shooting-star-1 {
          top: 20%;
          left: -50px;
          animation: shooting 3s linear infinite;
        }

        .shooting-star-2 {
          top: 60%;
          left: -50px;
          animation: shooting 4s linear infinite;
          animation-delay: 2s;
        }

        .shooting-star-3 {
          top: 80%;
          left: -50px;
          animation: shooting 5s linear infinite;
          animation-delay: 4s;
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
            transform: translateX(100vw) translateY(-100px);
            opacity: 0;
          }
        }
      `}</style>
    </Box>
  );
};

export default About;
