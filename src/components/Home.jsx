import { useTypewriter } from "react-simple-typewriter";
import Navbar from "./Navbar";
import githubLogo from "../assets/images/github-mark-white.png";
import linkedinLogo from "../assets/images/icons8-linkedin-48.png";
import { Link } from "react-router";

function Home() {
  const [text] = useTypewriter({
    words: ["Frontend Devloper", "Fullstack Developer", "Mernstack Developer"],
    loop: 0,
    Cursor: true,
  });

  return (
    <header id="home" className="w-full">
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

          <div className="flex gap-5 mt-8 items-center">
            <Link
              target="_blank"
              to="https://drive.google.com/file/d/1djN5iGC1LTobb2qb2m2tZyHCLFKAky69/view?usp=sharing"
            >
              {" "}
              <button className="flex items-center gap-2 bg-primary px-6 py-2 text-black rounded-lg font-semibold text-lg cursor-pointer">
                Resume{" "}
              </button>
            </Link>

            <Link to="https://github.com/jony378892" target="_blank">
              <img src={githubLogo} alt="github" className="w-7 h-auto" />
            </Link>
            <Link to="https://www.linkedin.com/in/jony-dev" target="_blank">
              <img src={linkedinLogo} alt="github" className="w-9 h-auto" />
            </Link>
          </div>
        </div>

        <img
          src="/21609 copy_1.JPG"
          alt=""
          className="h-full sm:h-[400px] sm:w-[250px] md:w-[320px] sm:rotate-3 object-cover object-top sm:object-center rounded-2xl"
        />
      </section>
    </header>
  );
}

export default Home;
