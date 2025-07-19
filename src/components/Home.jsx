import { Cursor, useTypewriter } from "react-simple-typewriter";
import Navbar from "./Navbar";
import { ArrowUpRight } from "lucide-react";

function Home() {
  const [text] = useTypewriter({
    words: ["Frontend Devloper", "Fullstack Developer", "Mernstack Developer"],
    loop: 0,
    Cursor: true,
  });

  return (
    <header className="w-full">
      <Navbar />
      <section className="w-full max-w-4xl xl:max-w-5xl mx-auto mt-44 px-5 lg:px-0 flex flex-col sm:flex-row justify-between gap-8 sm:gap-5">
        <div>
          <h1 className="text-5xl font-semibold font-ptsans leading-relaxed tracking-tight">
            HI, I AM <br /> JONY KANTI DAS
          </h1>
          <h3 className="h-8 text-2xl font-semibold text-white">{text}</h3>
          <p className="max-w-md text-white/80 my-4 text-lg font-inter">
            A Dhaka based fullstack developer passionate about buiding
            accessible and user friendly website.
          </p>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-[#d9b891] px-4 py-1.5 text-black rounded-full font-semibold mt-7">
              CONTACT ME{" "}
              <ArrowUpRight className="bg-black rounded-full box-content p-2.5 -mr-2 text-white self-end" />
            </button>
          </div>
        </div>

        <img
          src="/public/profile.jpeg"
          alt=""
          className="h-[400px] sm:w-[250px] md:w-[320px] sm:rotate-3 object-cover rounded-2xl"
        />
      </section>
    </header>
  );
}

export default Home;
