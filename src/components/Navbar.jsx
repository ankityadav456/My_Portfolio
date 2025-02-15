import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
const Navbar =({navOpen})=> {
    const lastActiveLink = useRef();
    const activeBox = useRef();

    const initActiveBox = () => {
        activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
        activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
        activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
        activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';



    }

    useEffect(initActiveBox, []);
    window.addEventListener('resize', initActiveBox);

    const activeCurrentLink = (event) => {
        lastActiveLink.current?.classList.remove('active');
        event.target.classList.add('active');
        lastActiveLink.current = event.target;

        activeBox.current.style.top = event.target.offsetTop + 'px';
        activeBox.current.style.left = event.target.offsetLeft + 'px';
        activeBox.current.style.width = event.target.offsetWidth + 'px';
        activeBox.current.style.height = event.target.offsetHeight + 'px';

    }


    const navItems = [
        {
          label: 'Home',
          link: '#home',
          className: 'nav-link active',
          ref: lastActiveLink
        },
        {
          label: 'About',
          link: '#about',
          className: 'nav-link'
        },
        {
          label: 'Work',
          link: '#work',
          className: 'nav-link'
        },
        // {
        //   label: 'Reviews',
        //   link: '#reviews',
        //   className: 'nav-link'
        // },
        {
          label: 'Contact',
          link: '#contact',
          className: 'nav-link md:hidden'
        }
      ];
    return(
        <nav className={'navbar ' + (navOpen ? 'active' : '')}>
            {navItems.map(({ label, link, className, ref }, key) => (
                <a href={link}
                  key={key}
                  ref={ref}
                  className={className}
                  onClick={activeCurrentLink}>
                    {label}
                </a>
            ))}
            <div
            className="active-box"
            ref={activeBox}></div>
        </nav>

    )
}

Navbar.propTypes ={
    navOpen: PropTypes.bool.isRequired
}
export default Navbar


// import { useRef, useEffect, useState } from "react";
// import PropTypes from "prop-types";

// const Navbar = ({ navOpen }) => {
//   const lastActiveLink = useRef(null);
//   const activeBox = useRef(null);
//   const [darkMode, setDarkMode] = useState(() => {
//     return localStorage.getItem("theme") === "dark" || 
//            (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
//   });

//   useEffect(() => {
//     if (lastActiveLink.current) {
//       updateActiveBox(lastActiveLink.current);
//     }

//     const handleResize = () => {
//       if (lastActiveLink.current) {
//         updateActiveBox(lastActiveLink.current);
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", darkMode);
//     localStorage.setItem("theme", darkMode ? "dark" : "light");
//   }, [darkMode]);

//   const updateActiveBox = (element) => {
//     if (!activeBox.current || !element) return;

//     activeBox.current.style.top = element.offsetTop + "px";
//     activeBox.current.style.left = element.offsetLeft + "px";
//     activeBox.current.style.width = element.offsetWidth + "px";
//     activeBox.current.style.height = element.offsetHeight + "px";
//   };

//   const activeCurrentLink = (event) => {
//     lastActiveLink.current?.classList.remove("active");
//     event.target.classList.add("active");
//     lastActiveLink.current = event.target;
//     updateActiveBox(event.target);
//   };

//   const toggleDarkMode = () => setDarkMode((prev) => !prev);

//   const navItems = [
//     { label: "Home", link: "#home", className: "nav-link active", ref: lastActiveLink },
//     { label: "About", link: "#about", className: "nav-link" },
//     { label: "Work", link: "#work", className: "nav-link" },
//     { label: "Reviews", link: "#reviews", className: "nav-link" },
//     { label: "Contact", link: "#contact", className: "nav-link md:hidden" },
//   ];

//   return (
//     <nav className={`navbar ${navOpen ? "active" : ""} bg-white dark:bg-zinc-900 transition-all relative px-4 py-2`}>
//       {/* Active Indicator Box */}
//       <div
//         className="absolute bg-white-800 dark:bg-blue-400 transition-all duration-300 rounded-md z-0"
//         ref={activeBox}
//       ></div>

//       {navItems.map(({ label, link, className, ref }, key) => (
//         <a
//           href={link}
//           key={key}
//           ref={ref}
//           className={`${className} dark:text-gray-300 text-gray-800 hover:text-blue-500 dark:hover:text-blue-400 relative px-4 py-2 font-medium`}
//           onClick={activeCurrentLink}
//         >
//           {label}
//         </a>
//       ))}

//       {/* Dark Mode Toggle Button */}
//       <button
//         onClick={toggleDarkMode}
//         className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors ml-4"
//         aria-label="Toggle theme"
//       >
//         {darkMode ? (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="lucide lucide-sun w-5 h-5 text-gray-700 dark:text-gray-300"
//           >
//             <circle cx="12" cy="12" r="5"></circle>
//             <line x1="12" y1="1" x2="12" y2="3"></line>
//             <line x1="12" y1="21" x2="12" y2="23"></line>
//             <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
//             <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
//             <line x1="1" y1="12" x2="3" y2="12"></line>
//             <line x1="21" y1="12" x2="23" y2="12"></line>
//             <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
//             <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
//           </svg>
//         ) : (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="lucide lucide-moon w-5 h-5 text-gray-700 dark:text-gray-300"
//           >
//             <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
//           </svg>
//         )}
//       </button>
//     </nav>
//   );
// };

// Navbar.propTypes = {
//   navOpen: PropTypes.bool.isRequired,
// };

// export default Navbar;
