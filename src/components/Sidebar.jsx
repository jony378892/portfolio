import {
  BicepsFlexed,
  CodeXml,
  Github,
  Headset,
  House,
  Instagram,
  Linkedin,
  User,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

function CustomLink({ handleClick, icon, to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex gap-3 items-center p-1.5 pl-3 rounded-md min-w-full hover:bg-white/20 ${
          isActive ? "bg-white/10" : ""
        }`
      }
      onClick={handleClick}
    >
      {icon}
      <p>{children}</p>
    </NavLink>
  );
}

function Sidebar({ hidden, setHidden }) {
  function handleClick() {
    setHidden(true);
  }

  return (
    <aside
      className={`${
        hidden
          ? "hidden sm:inline-flex"
          : "absolute inset-y-0 top-0 z-10 sm:inline-flex"
      } flex flex-col bg-[#0d0d0d] w-52 sm:min-w-52 md:min-w-72 h-screen p-2 justify-between`}
    >
      <div className="flex-1">
        <img
          className="rounded-lg h-56 md:h-64 object-cover"
          src="/premium_photo-1689568126014-06fea9d5d341.jpeg"
          alt="profile photo"
        />
        <div className="mt-10 space-y-3">
          <CustomLink
            to={"/"}
            icon={<House className="size-5" />}
            handleClick={handleClick}
          >
            Home
          </CustomLink>
          <CustomLink
            to={"/about"}
            icon={<User className="size-5" />}
            handleClick={handleClick}
          >
            About
          </CustomLink>
          <CustomLink
            to={"/skills"}
            icon={<BicepsFlexed className="size-5" />}
            handleClick={handleClick}
          >
            Skills
          </CustomLink>
          <CustomLink
            to={"/projects"}
            icon={<CodeXml className="size-5" />}
            handleClick={handleClick}
          >
            Projects
          </CustomLink>
          <CustomLink
            to={"/contact"}
            icon={<Headset className="size-5" />}
            handleClick={handleClick}
          >
            Contact
          </CustomLink>
        </div>
      </div>
      <footer className="flex gap-2 justify-center mb-4">
        <Instagram className="hover:bg-white/20 rounded-md p-2 size-9" />
        <Github className="hover:bg-white/20 rounded-md p-2 size-9" />
        <Linkedin className="hover:bg-white/20 rounded-md p-2 size-9" />
      </footer>
    </aside>
  );
}

export default Sidebar;
