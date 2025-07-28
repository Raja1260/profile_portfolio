"use client"

import { useRef, useState } from "react"
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material"
import { Email, Phone, LocationOn, Send, GitHub, LinkedIn, WhatsApp } from "@mui/icons-material"
import { motion, useInView } from "framer-motion"

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setShowSuccess(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
  }
const contactInfo = [
  {
    icon: <Email sx={{ fontSize: 32 }} />,
    title: "Email",
    value: "rajayadav12061@gmail.com",
    href: "mailto:rajayadav12061@gmail.com",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    icon: <WhatsApp sx={{ fontSize: 32 }} />,
    title: "WhatsApp",
    value: "+91 7489009596",
    href: "https://wa.me/917489009596", // ✅ WhatsApp link
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
  },
  {
    icon: <LocationOn sx={{ fontSize: 32 }} />,
    title: "Location",
    value: "Indore, Madhya Pradesh",
    // href: "#",
gradient: "linear-gradient(135deg, #10b981 0%, #0d9277 25%, #0a6e6e 50%, #075985 75%, #004d7a 100%)"  },

]

  const socialLinks = [
    // {
    //   icon: <GitHub sx={{ fontSize: 24 }} />,
    //   name: "GitHub",
    //   href: "#", // Placeholder
    //   gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    // },
    // {
    //   icon: <LinkedIn sx={{ fontSize: 24 }} />,
    //   name: "LinkedIn",
    //   href: "https://www.linkedin.com/in/raja-yadav-906073283",
    //   gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    // },
  ]

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
      id="contact"
      sx={{
        py: 12,
        background: "#0f172a", // Consistent dark background
        position: "relative",
        overflow: "hidden",
      }}
      ref={ref}
    >
      {/* Universal Background Animation */}
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

        {/* Floating Contact Icons (subtle) */}
        {["📧", "📞", "📍", "💬", "✨"].map((symbol, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-10, 10, -10],
              x: [-5, 5, -5],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 5 + i,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.7,
            }}
            style={{
              position: "absolute",
              fontSize: "1.8rem",
              top: `${15 + ((i * 20) % 70)}%`,
              left: `${5 + ((i * 25) % 90)}%`,
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
                  fontSize: { xs: "2.5rem", md: "4rem" },
                  background: "linear-gradient(45deg, #667eea, #764ba2, #f093fb)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 2,
                }}
              >
                Get In Touch
              </Typography>
              <Box
                sx={{
                  width: 100,
                  height: 6,
                  background: "linear-gradient(45deg, #8b5cf6, #ec4899, #fbbf24)",
                  mx: "auto",
                  borderRadius: 3,
                  mb: 3,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: "#cbd5e1",
                  maxWidth: 600,
                  mx: "auto",
                  fontSize: "1.2rem",
                }}
              >
                I'm always open to discussing new opportunities and interesting projects. Let's connect and create
                something amazing together!
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={6}>
            {/* Contact Information */}
            <Grid item xs={12} lg={6}>
              <motion.div variants={itemVariants}>
                <Box mb={4}>
                  <Typography variant="h4" gutterBottom fontWeight="bold" sx={{ color: "white" }}>
                    Let's Connect
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#cbd5e1", lineHeight: 1.7 }} paragraph>
                    Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear
                    from you. Feel free to reach out through any of the channels below.
                  </Typography>
                </Box>
                <Box mb={4}>
                  {contactInfo.map((info, index) => (
                    <Card
                      key={info.title}
                      component="a"
                      href={info.href}
                      sx={{
                        mb: 2,
                        textDecoration: "none",
                        cursor: "pointer",
                        background: "rgba(255,255,255,0.1)", // Glass morphism
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        borderRadius: 3,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-4px) scale(1.01)",
                          boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
                        },
                      }}
                    >
                      <CardContent sx={{ p: 3 }}>
                        <Box display="flex" alignItems="center" gap={2}>
                          <Box
                            sx={{
                              p: 1.5,
                              background: info.gradient,
                              borderRadius: 2,
                              color: "white",
                            }}
                          >
                            {info.icon}
                          </Box>
                          <Box>
                            <Typography variant="h6" fontWeight="bold" sx={{ color: "#e2e8f0" }}>
                              {info.title}
                            </Typography>
                            <Typography sx={{ color: "#cbd5e1" }}>{info.value}</Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  ))}
                </Box>
            
                {/* <Box>
                  <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: "white" }}>
                    Follow Me
                  </Typography>
                  <Box display="flex" gap={2}>
                    {socialLinks.map((social, index) => (
                      <IconButton
                        key={social.name}
                        component="a"
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          background: social.gradient,
                          color: "white",
                          width: 56,
                          height: 56,
                          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                          "&:hover": {
                            transform: "translateY(-2px) rotate(5deg)",
                            boxShadow: "0 12px 30px rgba(0,0,0,0.3)",
                            opacity: 0.9,
                          },
                          transition: "all 0.3s ease",
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    ))}
                  </Box>
                </Box> */}
              </motion.div>
            </Grid>

            {/* Contact Form */}
            {/* <Grid item xs={12} lg={6}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    background: "rgba(255,255,255,0.1)", // Glass morphism
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: 4,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h4" gutterBottom fontWeight="bold" sx={{ color: "white" }}>
                      Send Message
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            variant="outlined"
                            InputLabelProps={{ style: { color: "#cbd5e1" } }} // Label color
                            InputProps={{
                              style: { color: "white" }, // Input text color
                              sx: {
                                "& .MuiOutlinedInput-notchedOutline": {
                                  borderColor: "rgba(255,255,255,0.3)", // Border color
                                },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                  borderColor: "rgba(255,255,255,0.5)", // Hover border color
                                },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                  borderColor: "#667eea", // Focus border color
                                },
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            variant="outlined"
                            InputLabelProps={{ style: { color: "#cbd5e1" } }}
                            InputProps={{
                              style: { color: "white" },
                              sx: {
                                "& .MuiOutlinedInput-notchedOutline": {
                                  borderColor: "rgba(255,255,255,0.3)",
                                },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                  borderColor: "rgba(255,255,255,0.5)",
                                },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                  borderColor: "#667eea",
                                },
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            variant="outlined"
                            InputLabelProps={{ style: { color: "#cbd5e1" } }}
                            InputProps={{
                              style: { color: "white" },
                              sx: {
                                "& .MuiOutlinedInput-notchedOutline": {
                                  borderColor: "rgba(255,255,255,0.3)",
                                },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                  borderColor: "rgba(255,255,255,0.5)",
                                },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                  borderColor: "#667eea",
                                },
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Message"
                            name="message"
                            multiline
                            rows={5}
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            variant="outlined"
                            InputLabelProps={{ style: { color: "#cbd5e1" } }}
                            InputProps={{
                              style: { color: "white" },
                              sx: {
                                "& .MuiOutlinedInput-notchedOutline": {
                                  borderColor: "rgba(255,255,255,0.3)",
                                },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                  borderColor: "rgba(255,255,255,0.5)",
                                },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                  borderColor: "#667eea",
                                },
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            size="large"
                            disabled={isSubmitting}
                            startIcon={isSubmitting ? null : <Send />}
                            sx={{
                              background: "linear-gradient(45deg, #8b5cf6, #ec4899)",
                              color: "white",
                              "&:hover": {
                                background: "linear-gradient(45deg, #7c3aed, #db2777)",
                                transform: "translateY(-2px)",
                              },
                              transition: "all 0.3s ease",
                              py: 1.5,
                            }}
                          >
                            {isSubmitting ? "Sending..." : "Send Message"}
                          </Button>
                        </Grid>
                      </Grid>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid> */}
          </Grid>
        </motion.div>
      </Container>
      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setShowSuccess(false)}
          severity="success"
          sx={{ width: "100%", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", color: "white" }}
        >
          Message sent successfully! Thank you for reaching out. I'll get back to you soon.
        </Alert>
      </Snackbar>
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

export default Contact
