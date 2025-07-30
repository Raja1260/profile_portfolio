"use client"

import { useRef, useState } from "react"
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Paper,
  IconButton,
  Chip,
} from "@mui/material"
import { Code, Storage, Palette, Speed, TrendingUp, EmojiEvents, Star, DeveloperMode } from "@mui/icons-material"
import { motion, useInView } from "framer-motion"

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredSkill, setHoveredSkill] = useState(null)
const skillsData = [
  {
    name: "React.js",
    level: 90,
    icon: "⚛️",
    category: "frontend",
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    level: 90,
    icon: "▲",
    category: "frontend",
    color: "#000000",
  },
  {
    name: "JavaScript",
    level: 90,
    icon: "🟨",
    category: "frontend",
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    level: 70,
    icon: "🔷",
    category: "frontend",
    color: "#3178C6",
  },
  {
    name: "Tailwind CSS",
    level: 80,
    icon: "🎨",
    category: "frontend",
    color: "#38B2AC",
  },
  {
    name: "Material UI",
    level: 95,
    icon: "🎭",
    category: "frontend",
    color: "#007FFF",
  },
  {
    name: "Python",
    level: 80,
    icon: "🐍",
    category: "backend",
    color: "#3776AB",
  },
  {
    name: "SQL",
    level: 80,
    icon: "🗄️",
    category: "backend",
    color: "#336791",
  },
  {
    name: "RESTful APIs",
    level: 85,
    icon: "🔗",
    category: "backend",
    color: "#6B7280",
  },
   {
    name: "RBAC",
    level: 80,
    icon: "🔐",
    category: "backend",
    color: "#FF9900",
  },
  {
    name: "Git",
    level: 85,
    icon: "📝",
    category: "tools",
    color: "#F05032",
  },
  {
    name: "Figma",
    level: 75,
    icon: "🎯",
    category: "tools",
    color: "#A259FF",
  },
  {
    name: "Jira",
    level: 90,
    icon: "📋",
    category: "tools",
    color: "#0052CC",
  },
  {
    name: "UI/UX Design",
    level: 85,
    icon: "🎨",
    category: "tools",
    color: "#FF6B6B",
  },
  {
    name: "Docker",
    level: 85,
    icon: "🐳",
    category: "devops",
    color: "#2496ED",
  },
  {
    name: "Kubernetes",
    level: 80,
    icon: "☸️",
    category: "devops",
    color: "#326CE5",
  },
  {
    name: "CI/CD",
    level: 80,
    icon: "🔁",
    category: "devops",
    color: "#00C7B7",
  },
   // Data
  { name: "Matplotlib", level: 85, icon: "📊", category: "data", color: "#11557C" },
  { name: "Pandas", level: 85, icon: "🐼", category: "data", color: "#150458" },
  { name: "NumPy", level: 85, icon: "🔢", category: "data", color: "#013243" },
];

const categories = [
  { id: "all", label: "All Skills", icon: <Star />, color: "#8b5cf6" },
  { id: "frontend", label: "Frontend", icon: <Code />, color: "#6366f1" },
  { id: "backend", label: "Backend", icon: <Storage />, color: "#ec4899" },
  { id: "tools", label: "Tools & Design", icon: <Palette />, color: "#10b981" },
  {
    id: "devops",
    label: "DevOps",
    icon: <DeveloperMode />, // You can use another icon if preferred
    color: "#f59e0b", // Orange shade for DevOps
  },
    // { id: "data", label: "Data Science", icon: <DataView />, color: "#0ea5e9" },

];


// In your component render:

  const achievements = [
    {
      icon: <Speed />,
      value: "2+",
      label: "Years Experience",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      icon: <TrendingUp />,
      value: "15+",
      label: "Projects Built",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      icon: <EmojiEvents />,
      value: "8+",
      label: "Technologies",
      gradient: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
    },
    {
      icon: <Star />,
      value: "100%",
      label: "Client Satisfaction",
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const filteredSkills =
    activeCategory === "all" ? skillsData : skillsData.filter((skill) => skill.category === activeCategory)

  return (
    <Box
      id="skills"
      sx={{
        py: 12,
        background: "#0f172a", // Same as Hero and About
        position: "relative",
        overflow: "hidden",
      }}
      ref={ref}
    >
      {/* Universal Background Animation - Same as other sections */}
      <Box sx={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        {/* Stars */}
        {[...Array(80)].map((_, i) => (
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
        ))}

        {/* Nebula Effects */}
        <Box
          sx={{
            position: "absolute",
            top: "20%",
            right: "10%",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 100%)",
            borderRadius: "50%",
            filter: "blur(80px)",
            animation: "pulse 8s ease-in-out infinite",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "20%",
            left: "5%",
            width: "350px",
            height: "350px",
            background:
              "radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, rgba(244, 63, 94, 0.1) 50%, transparent 100%)",
            borderRadius: "50%",
            filter: "blur(80px)",
            animation: "pulse 6s ease-in-out infinite",
            animationDelay: "2s",
          }}
        />

        {/* Floating Code Elements */}
        {["⚛️", "🟨", "🐍", "🎨", "📝", "🔗"].map((symbol, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-15, 15, -15],
              x: [-8, 8, -8],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            style={{
              position: "absolute",
              fontSize: "1.5rem",
              top: `${20 + ((i * 15) % 60)}%`,
              left: `${10 + ((i * 18) % 80)}%`,
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 10 }}>
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          {/* Section Header */}
         <motion.div variants={itemVariants}>
  <Box textAlign="center" mb={8}>
    <Typography
      variant="h2"
      sx={{
        fontWeight: 700,
        fontSize: { xs: "2.5rem", md: "3.5rem" },
        color: "white",
        mb: 2,
        position: "relative",
        display: "inline-block",
        "&:after": {
          content: '""',
          position: "absolute",
          bottom: -12,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80px",
          height: "4px",
          background: "linear-gradient(to right, #6366f1, #ec4899)",
          borderRadius: "2px",
        }
      }}
    >
      Skills & Technologies
    </Typography>
    <Typography
      variant="subtitle1"
      sx={{
        color: "#94a3b8",
        maxWidth: 600,
        mx: "auto",
        fontSize: "1.1rem",
        lineHeight: 1.6,
      }}
    >
      Crafting digital experiences with cutting-edge technologies and modern development practices
    </Typography>
  </Box>
</motion.div>
          {/* Category Filter */}
      
<motion.div variants={itemVariants}>
  <Box display="flex" justifyContent="center" mb={6}>
    <Paper
      elevation={0}
      sx={{
        p: 1,
        background: "rgba(30, 41, 59, 0.7)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 3,
        display: "flex",
        flexWrap: "wrap",
        gap: 1,
      }}
    >
      {categories.map((category) => (
        <motion.div
          key={category.id}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Chip
            icon={category.icon}
            label={category.label}
            onClick={() => setActiveCategory(category.id)}
            sx={{
              px: 7,
              py: 1.5,
              height: "auto",
              background:
                activeCategory === category.id
                  ? `${category.color}20`
                  : "transparent",
              color:
                activeCategory === category.id
                  ? "white"
                  : "#cbd5e1",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.3s ease",
              border: `1px solid ${
                activeCategory === category.id
                  ? `${category.color}80`
                  : "rgba(255,255,255,0.1)"
              }`,
              "&:hover": {
                background: `${category.color}20`,
                borderColor: `${category.color}80`,
              },
              "& .MuiChip-icon": {
                color:
                  activeCategory === category.id
                    ? "white"
                    : category.color,
                fontSize: 20,
              },
            }}
          />
        </motion.div>
      ))}
    </Paper>
  </Box>
</motion.div>

          {/* Skills Grid - Individual Cards */}
      
<motion.div variants={itemVariants}>
  <Grid container spacing={3} mb={8}>
    {filteredSkills.map((skill, index) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={skill.name}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          <Card
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
            sx={{
              height: "100%",
              background: "rgba(30, 41, 59, 0.7)",
              backdropFilter: "blur(12px)",
              border: `1px solid ${hoveredSkill === skill.name ? `${skill.color}80` : "rgba(255,255,255,0.1)"}`,
              borderRadius: 3,
              transition: "all 0.3s ease",
              cursor: "pointer",
              "&:hover": {
                boxShadow: `0 10px 30px -5px ${skill.color}40`,
              },
            }}
          >
            <CardContent sx={{ p: 3, textAlign: "center" }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 72,
                  height: 72,
                  mb: 3,
                  background: hoveredSkill === skill.name ? `${skill.color}20` : "rgba(255,255,255,0.05)",
                  borderRadius: "50%",
                  border: `1px solid ${hoveredSkill === skill.name ? `${skill.color}40` : "rgba(255,255,255,0.1)"}`,
                  transition: "all 0.3s ease",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "2.5rem",
                    transition: "all 0.3s ease",
                    transform: hoveredSkill === skill.name ? "scale(1.2)" : "scale(1)",
                  }}
                >
                  {skill.icon}
                </Typography>
              </Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{
                  color: hoveredSkill === skill.name ? skill.color : "#e2e8f0",
                  mb: 2,
                  transition: "all 0.3s ease",
                }}
              >
                {skill.name}
              </Typography>
              <Box sx={{ mb: 2 }}>
                <LinearProgress
                  variant="determinate"
                  value={isInView ? skill.level : 0}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: "rgba(255,255,255,0.1)",
                    "& .MuiLinearProgress-bar": {
                      background: skill.color,
                      borderRadius: 4,
                      transition: "transform 1.5s ease-out 0.3s",
                    },
                  }}
                />
              </Box>
              <Typography
                variant="body1"
                fontWeight="bold"
                sx={{
                  color: hoveredSkill === skill.name ? skill.color : "#94a3b8",
                  transition: "all 0.3s ease",
                }}
              >
                {skill.level}%
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </Grid>
    ))}
  </Grid>
</motion.div>
          {/* Achievements Section */}
          {/* <motion.div variants={itemVariants}>
            <Paper
              elevation={0}
              sx={{
                p: 6,
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(30px)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 4,
                boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
              }}
            >
              <Typography variant="h4" textAlign="center" fontWeight="bold" sx={{ color: "white", mb: 4 }}>
                Professional Achievements
              </Typography>
              <Grid container spacing={4}>
                {achievements.map((achievement, index) => (
                  <Grid item xs={6} md={3} key={index}>
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      <Box textAlign="center">
                        <IconButton
                          sx={{
                            background: achievement.gradient,
                            color: "white",
                            width: 70,
                            height: 70,
                            mb: 2,
                            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                            "&:hover": {
                              transform: "scale(1.1) rotate(5deg)",
                              boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
                            },
                            transition: "all 0.3s ease",
                          }}
                        >
                          {achievement.icon}
                        </IconButton>
                        <Typography
                          variant="h3"
                          fontWeight="bold"
                          sx={{
                            background: achievement.gradient,
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            mb: 1,
                          }}
                        >
                          {achievement.value}
                        </Typography>
                        <Typography variant="body1" sx={{ color: "#94a3b8", fontWeight: 600 }}>
                          {achievement.label}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </motion.div> */}
        </motion.div>
      </Container>
      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.8; 
            transform: scale(1.2); 
          }
        }
        
        @keyframes pulse {
          0%, 100% { 
            opacity: 0.4; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.8; 
            transform: scale(1.05); 
          }
        }
      `}</style>
    </Box>
  )
}

export default Skills
