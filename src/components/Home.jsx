import Button from "./Button";

import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";

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
        Building sleek websites that capture minds and hearts of others. Yes, I
        center things with <em>Flexbox</em>. Yes, I'm proud of it.
      </p>
      <div className="flex gap-3 sm:gap-6 lg:text-lg">
        <Button to={"/projects"}>Resume</Button>
        <Button to={"/resume"}>Download Resume</Button>
      </div>
    </section>
  );
}

export default Home;
