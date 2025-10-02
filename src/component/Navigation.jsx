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
import { motion, AnimatePresence } from "framer-motion"
import {
  Home,
  Person,
  Code,
  Work,
  School,
  Email,
} from "@mui/icons-material"

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const navItems = [
    { label: "Home", href: "#home", icon: <Home fontSize="small" /> },
    { label: "About", href: "#about", icon: <Person fontSize="small" /> },
    { label: "Skills", href: "#skills", icon: <Code fontSize="small" /> },
    { label: "Projects", href: "#projects", icon: <Work fontSize="small" /> },
    { label: "Experience", href: "#experience", icon: <School fontSize="small" /> },
    { label: "Contact", href: "#contact", icon: <Email fontSize="small" /> },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
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

  const drawerContent = (
    <motion.div
      key="drawer"
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{ height: "100%", display: "flex", flexDirection: "column" }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end", pr: 2, pb: 2 }}>
        <motion.div whileTap={{ rotate: 90, scale: 0.9 }} whileHover={{ rotate: 90 }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </motion.div>
      </Box>

      <List>
        {navItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <ListItem
              button
              onClick={() => scrollToSection(item.href)}
              sx={{
                "&:hover": { background: "rgba(255,255,255,0.1)" },
              }}
            >
              <ListItemIcon sx={{ color: "white", minWidth: "40px" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} sx={{ color: "white" }} />
            </ListItem>
          </motion.div>
        ))}
      </List>
    </motion.div>
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
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={mobileOpen ? "close" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                </motion.div>
              </AnimatePresence>
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", gap: 1 }}>
              {navItems.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
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

      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay background */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "black",
                zIndex: 1200,
              }}
              onClick={handleDrawerToggle}
            />
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{ keepMounted: true }}
              PaperProps={{
                sx: { background: "#0f172a", color: "white", width: 250 },
              }}
            >
              {drawerContent}
            </Drawer>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
