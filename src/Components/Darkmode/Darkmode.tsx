import React from "react";
import { ReactComponent as Sun } from "../../Assets/images/Sun.svg";
import { ReactComponent as Moon } from "../../Assets/images/Moon.svg";
import "./style.scss";

const DarkMode = () => {

    const setDarkMode = () => {
        document?.querySelector("body")?.setAttribute('data-theme', 'dark');
        localStorage.setItem("selectedTheme", "dark")
    }

    const setLightMode = () => {
        document?.querySelector("body")?.setAttribute('data-theme', 'light');
        localStorage.setItem("selectedTheme", "light")
    }
    
    const toggleTheme = (e: any) => {
        if (e.target.checked) setDarkMode();
        else setLightMode();
    }

    const selectedTheme = localStorage.getItem("selectedTheme");

    if (selectedTheme === "dark") {
        setDarkMode();
    }

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
                defaultChecked={selectedTheme === "dark"}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
