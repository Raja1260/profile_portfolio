"use client"

import { useState, useEffect } from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  ListItemIcon,
} from "@mui/material"
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material"
import { motion } from "framer-motion"
import {
  Home,
  Person,
  Code,
  Work,
  School,
  Email,
} from '@mui/icons-material';

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const navItems = [
    { 
      label: "Home", 
      href: "#home",
      icon: <Home fontSize="small" /> 
    },
    { 
      label: "About", 
      href: "#about",
      icon: <Person fontSize="small" /> 
    },
    { 
      label: "Skills", 
      href: "#skills",
      icon: <Code fontSize="small" /> 
    },
    { 
      label: "Projects", 
      href: "#projects",
      icon: <Work fontSize="small" /> 
    },
    { 
      label: "Experience", 
      href: "#experience",
      icon: <School fontSize="small" /> 
    },
    { 
      label: "Contact", 
      href: "#contact",
      icon: <Email fontSize="small" /> 
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileOpen(false)
  }

  const drawer = (
    <Box
      sx={{
        width: 250,
        pt: 2,
        height: "100%",
        background: "#0f172a", // Dark background for drawer
        color: "white",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end", pr: 2, pb: 2 }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: "white" }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.label}
            button
            onClick={() => scrollToSection(item.href)}
            sx={{
              "&:hover": {
                background: "rgba(255,255,255,0.1)", // Subtle hover for drawer items
              },
            }}
          >
            <ListItemIcon sx={{ color: "white", minWidth: "40px" }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} sx={{ color: "white" }} />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled ? "rgba(15, 23, 42, 0.8)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.3)" : "none",
          transition: "all 0.3s ease-in-out",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.1)" : "none",
        }}
      >
        <Toolbar sx={{ py: { xs: 1, md: 2 }, gap: 2 }}>
          <Box
            component="img"
            src="/bussiness-man.png"
            alt="logo"
            sx={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover" }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              background: "linear-gradient(45deg, #667eea, #764ba2, #f093fb)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Raja Yadav
          </Typography>
          {isMobile ? (
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", gap: 1 }}>
              {navItems.map((item) => (
                <motion.div key={item.label} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={() => scrollToSection(item.href)}
                    startIcon={item.icon}
                    sx={{
                      color: "white",
                      px: 2,
                      py: 1,
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      borderRadius: "8px",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background: "rgba(139, 92, 246, 0.15)",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </motion.div>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
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
    </>
  )
}

export default Navigation