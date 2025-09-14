// import React, {
//   createContext,
//   useContext,
//   useState,
//   useEffect,
// } from "react";

// const ThemeContext = createContext({
//   theme: "light",
//   switchTheme: () => {},
// });

// export function ThemeProvider({ children }: { children: React.ReactElement }) {
//   const [theme, setTheme] = useState(getInitialTheme());

//   function getInitialTheme() {
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme) return savedTheme;

//     const prefersDark = window.matchMedia(
//       "(prefers-color-scheme: dark)"
//     ).matches;
//     if (savedTheme) return savedTheme;
//     const hours = new Date().getHours();
//     return hours < 6 || hours >= 22 ? "dark" : "light";
//   }

//   const switchTheme = () => {
//     setTheme((prev) => {
//       const newTheme = prev === "light" ? "dark" : "light";
//       localStorage.setItem("theme", newTheme);
//       return newTheme;
//     });
//   };
//   useEffect(() => {
//     document.documentElement.className = theme === "dark" ? "dark" : "light";
//   }, [theme]);

//   return (
//     <ThemeContext.Provider value={{ theme, switchTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// // }

// export const useTheme = () => useContext(ThemeContext);
