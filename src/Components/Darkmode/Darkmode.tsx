import React from "react";
import { ReactComponent as Sun } from "../../Assets/Images/Sun.svg";
import { ReactComponent as Moon } from "../../Assets/Images/Moon.svg";
import "./style.scss";

const DarkMode = () => {
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
