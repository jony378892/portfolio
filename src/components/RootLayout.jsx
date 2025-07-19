import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function RootLayout() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default RootLayout;
