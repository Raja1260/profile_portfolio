"use client"

import { useRef, useState } from "react"
import { Box, Typography, Container, Grid, Card, CardContent, Button, Chip } from "@mui/material"
import { GitHub, Launch, Group, TrendingUp, Event } from "@mui/icons-material"
import { motion, useInView } from "framer-motion"

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredProject, setHoveredProject] = useState(null)

 const projects = [
  {
    title: "HRMS Platform",
    description: "A Comprehensive Human Resource Management System (HRMS) designed to streamline HR operations with advanced features, including dynamic career pages, automated interview scheduling, and secure document management. Enhances recruitment workflows, improves candidate experience, and centralizes HR documentation in a user-friendly interface.",
    tech: ["Next.js", "JavaScript", "MUI", "RBAC"],
    features: ["Dynamic Careers Page", "Interview Scheduling", "PDF Generation", "File Manager"],
    icon: <Group sx={{ fontSize: 40 }} />,
    color: "#6366f1", // Indigo
    accentColor: "rgba(99, 102, 241, 0.1)" // For hover effects
  },
  {
    title: "Employment Platform",
    description: "A modern job portal connecting job seekers and employers with integrated subscription management and secure payment processing. Streamlines recruitment with automated job postings and premium membership tiers.",
    tech: ["React", "Tailwind CSS", "Razorpay", "JavaScript"],
    features: ["Job Management", "Subscription Plans", "Payment Integration", "Responsive Design"],
    icon: <Event sx={{ fontSize: 40 }} />,
    color: "#3b82f6", // Blue
    accentColor: "rgba(59, 130, 246, 0.1)"
  },
  {
    title: "Expense Management System",
    description: "A full-featured expense tracking platform with role-based dynamic forms, automated approval workflows, and streamlined reimbursement processing. Simplifies financial oversight and ensures compliance with customizable access controls.",
    tech: ["Next.js", "MUI", "JavaScript", "Workflow Engine"],
    features: ["Dynamic Forms", "Approval Workflows", "Reimbursement Tracking", "Role-based Access"],
    icon: <TrendingUp sx={{ fontSize: 40 }} />,
    color: "#ec4899", // Pink
    accentColor: "rgba(236, 72, 153, 0.1)"
  },
  {
    title: "Gas Metering Data Analysis",
    description: "A data-driven solution for detecting revenue losses in municipal gas metering systems. Leverages Python-based analytics to uncover inefficiencies and provide actionable insights for cost recovery.",
    tech: ["Python", "Pandas", "Matplotlib", "Data Analysis"],
    features: ["Data Cleaning", "Visualization", "Loss Analysis", "Strategic Insights"],
    icon: <TrendingUp sx={{ fontSize: 40 }} />,
    color: "#f59e0b", // Amber
    accentColor: "rgba(245, 158, 11, 0.1)"
  }
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

  return (
    <Box
      id="projects"
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
                My Projects
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#94a3b8",
                  maxWidth: 600,
                  mx: "auto",
                }}
              >
                Selected work showcasing my full-stack development capabilities
              </Typography>
            </Box>
          </motion.div>

          {/* Projects Grid */}
          <Grid container spacing={4} sx={{ alignItems: "stretch" }}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={index} sx={{ display: "flex" }}>
                <motion.div variants={itemVariants} style={{ width: "100%" }}>
                  <Card
                    onMouseEnter={() => setHoveredProject(index)}
                    onMouseLeave={() => setHoveredProject(null)}
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
                      transform: hoveredProject === index ? "translateY(-8px)" : "none",
                      boxShadow: hoveredProject === index 
                        ? `0 10px 30px -5px ${project.color}40` 
                        : "none",
                      overflow: "hidden",
                      position: "relative",
                      "&:hover": {
                        borderColor: `${project.color}80`,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        background: project.color,
                      }}
                    />
                    
                    <CardContent sx={{ 
                      p: 4,
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}>
                      <Box display="flex" alignItems="center" gap={2} mb={3}>
                        <Box
                          sx={{
                            p: 2,
                            background: `linear-gradient(135deg, ${project.color}, ${project.color}80)`,
                            borderRadius: 2,
                            color: "white",
                          }}
                        >
                          {project.icon}
                        </Box>
                        <Typography
                          variant="h5"
                          fontWeight="bold"
                          sx={{
                            color: "white",
                          }}
                        >
                          {project.title}
                        </Typography>
                      </Box>

                      <Typography
                        variant="body1"
                        paragraph
                        sx={{
                          color: "#e2e8f0",
                          lineHeight: 1.7,
                          mb: 3,
                          flex: 1,
                        }}
                      >
                        {project.description}
                      </Typography>

                      <Box mb={3}>
                        <Typography
                          variant="subtitle2"
                          fontWeight="bold"
                          gutterBottom
                          sx={{
                            color: "#e2e8f0",
                            mb: 1,
                          }}
                        >
                          Features:
                        </Typography>
                        <Grid container spacing={1}>
                          {project.features.map((feature, featureIndex) => (
                            <Grid item xs={6} key={featureIndex}>
                              <Box display="flex" alignItems="center" gap={1}>
                                <Box
                                  sx={{
                                    width: 6,
                                    height: 6,
                                    background: project.color,
                                    borderRadius: "50%",
                                  }}
                                />
                                <Typography
                                  variant="body2"
                                  sx={{
                                    color: "#94a3b8",
                                  }}
                                >
                                  {feature}
                                </Typography>
                              </Box>
                            </Grid>
                          ))}
                        </Grid>
                      </Box>

                      <Box display="flex" flexWrap="wrap" gap={1} mb={3}>
                        {project.tech.map((tech, techIndex) => (
                          <Chip
                            key={techIndex}
                            label={tech}
                            size="small"
                            sx={{
                              background: "rgba(255,255,255,0.05)",
                              color: "#e2e8f0",
                              fontWeight: 500,
                              border: "1px solid rgba(255,255,255,0.1)",
                            }}
                          />
                        ))}
                      </Box>

                      {/* <Box display="flex" gap={2} mt="auto">
                        <Button
                          variant="outlined"
                          startIcon={<GitHub />}
                          sx={{
                            borderColor: "rgba(255,255,255,0.2)",
                            color: "white",
                            "&:hover": {
                              borderColor: project.color,
                              background: `${project.color}20`,
                            },
                          }}
                        >
                          Code
                        </Button>
                        <Button
                          variant="contained"
                          startIcon={<Launch />}
                          sx={{
                            background: project.color,
                            color: "white",
                            "&:hover": {
                              background: `${project.color}e0`,
                            },
                          }}
                        >
                          Live Demo
                        </Button>
                      </Box> */}
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  )
}

export default Projects