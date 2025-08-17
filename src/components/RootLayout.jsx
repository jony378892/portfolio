import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function RootLayout() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-[#0a0a0a] text-white pb-20">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default RootLayout;
