'use client';
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LangContext";

export default function PageContent()
{
    const {theme} = useTheme();
    const { t , dir} = useLanguage();
    return(
        <div className={`page-wrapper flex flex-col  ${theme === 'dark' ? 'dark' : 'light'} `} 
        dir={dir}>
        <Nav />
        <Hero text={t.Hero}/>
        <About text={t.About} />
        <Stack text={t.Stack} />
        <Contact text={t.Contact} />
        </div>
    );
}