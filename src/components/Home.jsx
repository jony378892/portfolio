import { Link } from "react-router";

import { Cursor, useTypewriter } from "react-simple-typewriter";

function Home() {
  const [text] = useTypewriter({
    words: ["Frontend Devloper", "Fullstack Developer", "Mernstack Developer"],
    loop: 0,
    cursor: "|",
  });

  return (
    <section className="flex flex-col gap-8 items-center justify-center h-screen text-center max-w-2xl lg:max-w-4xl mx-auto px-5">
      <p className="text-lg lg:text-xl -mb-6">Hi, I'm passinate about coding</p>
      <h1 className="font-semibold text-5xl lg:text-6xl ">Jony Kanti Das</h1>
      <div className="flex items-baseline">
        <h3 className="text-lg lg:text-xl font-semibold -mt-2">
          I'm a {text}{" "}
        </h3>
        <Cursor />
      </div>

      <p className="lg:text-lg">
        Building sleek, modern websites with clean design, smooth interactions,
        and purposeful layout. Yes, I center things with Flexbox. Yes, I’m proud
        of it—because every detail matters.
      </p>
      <div className="flex gap-3 sm:gap-6 lg:text-lg">
        <Link to="/projects">
          <button className="px-5 sm:px-8 py-2 border border-gray-200 text-white rounded-md cursor-pointer">
            Resume
          </button>
        </Link>
        <Link to="/resume">
          <button className="px-5 sm:px-8 py-2 border border-gray-200 text-white rounded-md cursor-pointer">
            Download Resume
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Home;
