'use client';

import { useContext , createContext , useState } from "react";

const content = {
    EN : {
        Nav : {
            cta1 : 'Contact'
        }, 
        Hero :{
            Hello : "Hello, I'm Abdalruhman",
            intro : "I'm A  Full-Stack Developer",
            sec1 : "About Me",
            sec2 : "My Stack",
            sec3 : "Contact Me"
        },
        About : {
                title : "About Me",
                smallTitle : "Who am I ?",
                description : "I'm a passionate web developer with experience in building dynamic and responsive websites. I specialize in both frontend and backend development, utilizing technologies such as React, Node.js, and MongoDB to create seamless user experiences."
                },
        Stack : {
            title : "My Stack",
                 },
        Contact : {
            title : "LET'S CONTACT",
            caption : "Feel free to reach out to me for any inquiries or collaborations. I'm always open to discussing new projects and opportunities.",
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
            intro : "أنا مطور ويب متحمس",
            sec1 : "عني",
            sec2 : "الستاك الخاص بي",
            sec3 : "تواصل الأن"
        },
        About : {
            title : "عني",
            smallTitle : "من أنا ؟",
            description : "أنا مطور ويب شغوف ولدي خبرة في بناء مواقع ديناميكية ومتجاوبة. أتخصص في تطوير الواجهة الأمامية والخلفية، باستخدام تقنيات مثل React و Node.js و MongoDB لإنشاء تجارب مستخدم سلسة."
        } , 
        Stack : {
            title : "الستاك الخاص بي",
        },
        Contact : {
            title : "تواصل معي",
            caption : "لا تتردد في التواصل معي لأي استفسارات أو تعاون. أنا دائمًا مفتوح لمناقشة مشاريع وفرص جديدة.",
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


