import { Equal } from "lucide-react";

function Navbar() {
  return (
    <div className="bg-black/30 backdrop-blur-lg fixed top-0 inset-x-0 z-50">
      <nav className="flex items-center justify-between px-3 md:px-5 lg:px-0 py-5 max-w-4xl xl:max-w-5xl  mx-auto">
        <h1 className="text-3xl font-semibold text-white/80">Jony</h1>

        <ul className="flex items-center gap-7 text-sm ">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#porjects">Porjects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
