'use client';

import {  useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LangContext";
import { Sun, Moon } from 'lucide-react';

export default function Nav()
{
    const {theme , toggleTheme} = useTheme();
    console.log('current theme:', theme);
    const {t , toggleLang , language} = useLanguage();




    return(
        <nav className="flex relative h-20 w-full  justify-end items-center dark:text-white ">
            <button className="bg[var(--accent)]  flex items-center justify-center h-9 w-9 m-2    rounded-full transition-all duration-200 hover:scale-105"
            onClick={toggleLang}>
                {language}</button>
            <button onClick={toggleTheme} className="bg[var(--accent)] flex items-center justify-center h-9 w-9 m-2  rounded-full transition-all duration-200 hover:scale-105"
            >{theme === 'dark' ? <Sun size={20 }/> : <Moon size={20}/> }</button>
            <button className="bg[var(--accent)] h-10 w-23 rounded-full m-2  ">{t.Nav.cta1}</button>
        </nav>
    );
}