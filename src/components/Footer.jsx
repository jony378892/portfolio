import { Link } from "react-router";
import githubLogo from "../assets/images/github-mark-white.png";
import linkedinLogo from "../assets/images/icons8-linkedin-48.png";

function Footer() {
  return (
    <footer className="absolute bg-black/30 text-white backdrop-blur-lg bottom-0 inset-x-0 z-50 py-4 border-t border-white/10">
      <div className="max-w-4xl lg:max-w-5xl mx-auto flex items-center justify-between text-sm text-white/80 px-5 lg:px-0">
        <p>
          &copy; {new Date().getFullYear()} Jony Kanti Das. All rights reserved.
        </p>
        <div className="flex gap-5 items-center">
          <Link to="https://github.com/jony378892" target="_blank">
            <img src={githubLogo} alt="github" className="w-5 h-auto" />
          </Link>
          <Link to="https://www.linkedin.com/in/jony-dev" target="_blank">
            <img src={linkedinLogo} alt="github" className="w-7 h-auto" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
