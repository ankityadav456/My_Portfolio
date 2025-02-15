import { useState } from "react";
import Navbar from "./Navbar";
const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center
      z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4
          flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          <a href="/" className="logo">
            <img
              src="/images/logo.png"
              width={40}
              height={40}
              alt="Ankit Yadav"
            />
          </a>
        </h1>

        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span
              className="material-symbols-rounded text-3xl"
              style={{
                fontFamily: "Material Symbols Rounded",
                fontSize: "24px",
                lineHeight: "1",
              }}
              aria-hidden="true"
            >
              {navOpen ? 'close' : 'menu'}
            </span>
          </button>

          <Navbar navOpen={navOpen} />
        </div>

        <div className="text-right">
          <a
            href="#contact"
            className="contact-btn">
            Contact Me
            <span className="absolute w-2 h-2 bg-white rounded-full animate-ping top-1 right-1"></span>
          </a>
        </div>
        {/* <button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label="Toggle theme"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon w-5 h-5 text-gray-700"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
        </button> */}
      </div>

    </header>
  )
}
export default Header


// import { useState, useEffect } from "react";
// import Navbar from "./Navbar";

// const Header = () => {
//   const [navOpen, setNavOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(() => {
//     if (typeof window !== "undefined") {
//       return localStorage.getItem("theme") === "dark" || 
//              (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
//     }
//     return false;
//   });

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [darkMode]);

//   const toggleDarkMode = () => setDarkMode((prev) => !prev);

//   return (
//     <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-white dark:bg-zinc-900 shadow-md dark:shadow-zinc-800 transition-colors">
//       <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6">
        
//         {/* Logo */}
//         <h1>
//           <a href="/" className="logo">
//             <img src="/images/logo.png" width={40} height={40} alt="Ankit Yadav" />
//           </a>
//         </h1>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button className="menu-btn" onClick={() => setNavOpen((prev) => !prev)}>
//             <span
//               className="material-symbols-rounded text-3xl"
//               aria-hidden="true"
//             >
//               {navOpen ? "close" : "menu"}
//             </span>
//           </button>
//         </div>

//         {/* Navbar */}
//         <nav className={`absolute top-20 left-0 w-full bg-white dark:bg-zinc-900 md:static md:w-auto md:bg-transparent transition-transform ${navOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
//           <Navbar navOpen={navOpen} />
//         </nav>

//         {/* Contact Button & Dark Mode Toggle */}
//         <div className="flex items-center gap-4">
//           <a href="#contact" className="contact-btn relative px-4 py-2 bg-blue-500 text-white rounded-lg dark:bg-blue-600">
//             Contact Me
//             <span className="absolute w-2 h-2 bg-white rounded-full animate-ping top-1 right-1"></span>
//           </a>

//           {/* Dark Mode Toggle */}
//           <button
//             onClick={toggleDarkMode}
//             className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
//             aria-label="Toggle theme"
//           >
//             {darkMode ? (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="lucide lucide-sun w-5 h-5 text-gray-700 dark:text-gray-300"
//               >
//                 <circle cx="12" cy="12" r="5"></circle>
//                 <line x1="12" y1="1" x2="12" y2="3"></line>
//                 <line x1="12" y1="21" x2="12" y2="23"></line>
//                 <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
//                 <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
//                 <line x1="1" y1="12" x2="3" y2="12"></line>
//                 <line x1="21" y1="12" x2="23" y2="12"></line>
//                 <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
//                 <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
//               </svg>
//             ) : (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="lucide lucide-moon w-5 h-5 text-gray-700 dark:text-gray-300"
//               >
//                 <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
//               </svg>
//             )}
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

