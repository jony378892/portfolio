import { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";
import { AlignJustify, X } from "lucide-react";

function RootLayout() {
  const [hidden, setHidden] = useState(true);

  function handleClick() {
    setHidden(!hidden);
  }

  return (
    <main className="flex relative text-gray-100">
      <Sidebar hidden={hidden} setHidden={setHidden} />
      {!hidden ? (
        <X
          className="absolute sm:hidden top-3 right-3 z-10"
          onClick={handleClick}
        />
      ) : (
        <AlignJustify
          className="absolute sm:hidden top-3 left-3 hover:bg-white/10"
          onClick={handleClick}
        />
      )}
      <section className="bg-black h-screen w-full pt-10 overflow-scroll">
        <Outlet />
      </section>
    </main>
  );
}

export default RootLayout;
