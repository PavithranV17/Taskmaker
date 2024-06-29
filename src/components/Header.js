import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";

export const Header = () => {

  const [clr, setClr] = useState(JSON.parse(localStorage.getItem("clr")) || "medium");

  useEffect(() => {
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(clr);
    localStorage.setItem("clr", JSON.stringify(clr));
  }, [clr]);

  return (
    <header>
        <div className="logo">
            <img src={logo} alt="Taskmate logo" />
            <span>Taskmate</span>
        </div>

        <div className="themeSelector">
          <span className={clr === "light" ? "light activeTheme" : "light"} onClick={() => setClr("light")}></span>
          <span className={clr === "medium" ? "medium activeTheme" : "medium"} onClick={() => setClr("medium")}></span>
          <span className={clr === "dark" ? "dark activeTheme" : "dark"} onClick={() => setClr("dark")}></span>
          <span className={clr === "gOne" ? "gOne activeTheme" : "gOne"} onClick={() => setClr("gOne")}></span>
          <span className={clr === "gTwo" ? "gTwo activeTheme" : "gTwo"} onClick={() => setClr("gTwo")}></span>
          <span className={clr === "gThree" ? "gThree activeTheme" : "gThree"} onClick={() => setClr("gThree")}></span>
        </div>
    </header>
  )
}
