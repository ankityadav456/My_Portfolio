import { useState } from "react";
import GlassDrawer from "./GlassDrawer";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-30 flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">Ankit.dev</h1>

        <button
          onClick={() => setOpen(true)}
          className="
px-5 py-2 rounded-full
bg-[#ff5722]
text-white
shadow-lg
hover:scale-105 transition
"
        >
          Menu
        </button>
      </header>

      <GlassDrawer open={open} setOpen={setOpen} />
    </>
  );
}