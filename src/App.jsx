import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme/theme';
import Hero from './component/Hero';
import About from './component/About';
import Skills from './component/Skills';
import Projects from './component/Project';
import Experience from './component/Experience';
import Contact from './component/Contact';
import Navigation from './component/Navigation';


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
