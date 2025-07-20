import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/" || location.hash === "#home";

  const navLinks = [
    { label: "About", hash: "#about" },
    { label: "Projects", hash: "#projects" },
    { label: "Contact", hash: "#contact" },
  ];

  return (
    <div
      id="home"
      className="bg-black/30 text-white backdrop-blur-lg fixed top-0 inset-x-0 z-50"
    >
      <nav className="flex items-center justify-between px-3 md:px-5 lg:px-0 py-5 max-w-4xl xl:max-w-5xl  mx-auto">
        <h1 className="text-3xl font-semibold text-white/80">
          {isHome ? (
            <AnchorLink href="#home">Jony</AnchorLink>
          ) : (
            <Link to="/">Jony</Link>
          )}
        </h1>

        <ul className="flex items-center gap-7 text-sm md:text-base">
          {navLinks.map((item) => (
            <li
              key={item.hash}
              className="hover:font-semibold hover:text-white/80 transition-all hover:underline underline-offset-4 decoration-2 duration-300 cursor-pointer text-white/70"
            >
              {isHome ? (
                <AnchorLink offset="100" href={item.hash}>
                  {item.label}
                </AnchorLink>
              ) : (
                <Link to={`/${item.hash}`}>{item.label}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
