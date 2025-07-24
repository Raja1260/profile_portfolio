import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './Theme/theme';
import Hero from './Component/hero';
import About from './Component/About';
import Skills from './Component/Skills';
import Projects from './Component/Project';
import Experience from './Component/Experience';
import Contact from './Component/Contact';
import Navigation from './Component/Navigation';


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Navigation /> */}
      <Navigation/>
      {/* <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact /> */}
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
    </ThemeProvider>
  );
}
