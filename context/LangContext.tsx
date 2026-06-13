'use client';

import { useContext , createContext , useState } from "react";

const content = {
    EN : {
        Nav : {
            cta1 : 'Contact'
        }, 
        Hero :{
            Hello : "Hello, I'm Abdalruhman",
            intro : "Full-Stack Developer & Problem Solver",
            sec1 : "About Me",
            sec2 : "My Stack",
            sec3 : "Contact Me"
        },
        About : {
                title : "About Me",
                smallTitle : "Who am I ?",
                description : "I'm a full-stack developer who enjoys turning complex problems into clean, scalable solutions. With hands-on experience across the frontend and backend — from crafting responsive UIs with React to building robust APIs with Node.js and managing data with PostgreSQL — I focus on writing code that's both maintainable and user-centred."
                },
        Stack : {
            title : "My Stack",
                 },
        Contact : {
            title : "Let's Work Together",
            caption : "Have a project in mind or just want to say hello? My inbox is always open — whether it's a collaboration, a job opportunity, or simply a chat.",
            namePlaceholder : "Your Name",
            emailPlaceholder : "Your Email",
            emailExample : "you@example.com",
            messagePlaceholder : "Your Message",
            messageExample : "Hey, let's talk about a project...",
            sendButton : "Send"
        }        
    },
    AR : {
        Nav : {
            cta1 : 'تواصل الأن'
        } , Hero :{
            Hello : "مرحبا أنا عبدالرحمن",
            intro : "مطوّر ويب متكامل · أحوّل الأفكار إلى حلول",
            sec1 : "عني",
            sec2 : "تقنياتي  ",
            sec3 : "تواصل الأن"
        },
        About : {
            title : "عني",
            smallTitle : "من أنا ؟",
            description : " مطوّر ويب متكامل أستمتع بتحويل المشكلات المعقدة إلى حلول برمجية نظيفة وقابلة للتوسع. أعمل على الواجهة الأمامية بتصميم واجهات متجاوبة باستخدام React، وعلى الخلفية ببناء APIs قوية مع Node.js وإدارة قواعد البيانات بـ PostgreSQL — مع تركيز دائم على جودة الكود وتجربة المستخدم."
        } , 
        Stack : {
            title : "تقنياتي",
        },
        Contact : {
            title : "هل لديك فكرة؟ لنتحدث",
            caption : "سواء كان لديك مشروع في ذهنك، فرصة عمل، أو مجرد رغبة في التواصل — بريدي الإلكتروني مفتوح دائماً.",
            namePlaceholder : "اسمك",
            emailPlaceholder : "بريدك الإلكتروني",
            emailExample : "you@example.com",
            messagePlaceholder : "رسالتك",
            messageExample : "مرحبًا، دعنا نتحدث عن مشروع...",
            sendButton : "إرسال"
        }
    }
};

export type ContentType = typeof content.EN;

type Language = 'EN' | 'AR';

type LangContextType = {
    language : Language;
    dir : 'ltr' | 'rtl';
    t : ContentType;
    toggleLang : () => void
}

const LangContext = createContext<LangContextType | null >(null);


export function useLanguage()
{
    const context = useContext(LangContext);
    if(!context) throw new Error('must only be used within the wrapper');
    return context;
}


export function LangProvider({children} : {children : React.ReactNode})
{
    const [language , setLanguage] = useState<Language>('EN');

    function toggleLang() {
        console.log('inside toggle');
        setLanguage(prev => prev === 'EN' ? 'AR' : 'EN');
    }
    const t = content[language];
    const dir = language === 'EN' ? 'ltr' : 'rtl';
    return(
        <LangContext.Provider value={{ language  , dir , t ,   toggleLang}}>
            {children}
        </LangContext.Provider>
    );
}


