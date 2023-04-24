import { useEffect, useState } from "react";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

 let initialStateTheme = localStorage.getItem("theme") === "dark";

const Header = () => {

  const [darkMode, setDarkMode] = useState(initialStateTheme);

  useEffect(() => {
    if(darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme","dark")
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme","light")
    }
  },[darkMode]);

  const handleClickToggleTheme = () => {
   setDarkMode(!darkMode);
  }

    return(
        <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between ">
          <h1 className="text-3xl font-semibold  text-white ">T O D O</h1>
          <button onClick={handleClickToggleTheme}>
            { darkMode ? <SunIcon/> : <MoonIcon/> }
          </button>
        </div>
      </header>
    )
}

export default Header;