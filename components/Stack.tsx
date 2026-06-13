'use client';
import Image from "next/image";
import { ContentType } from "../context/LangContext";
import { useEffect, useRef } from "react";

const stackItems = ['React-icon.svg', 'Next.js.svg', 'Node.js.svg', 'MongoDB.svg', 'Tailwind CSS.svg', 'TypeScript.svg', 'JavaScript.svg',  'github2.svg', 'Git.svg' ,  'Figma.svg' , 'Express.svg', 'Redis.svg',  'Python.svg' , 'SQL Developer.svg' , 'Vite.js.svg'  ];

export default function Stack({text} : {text : ContentType['Stack']})
{
    const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-drop')
          }
        })
      },
      { threshold: 0.2 }
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])


    return(
        <div className="flex flex-col  dark:bg-[var(--accent-dark)]  items-center " id="stack">
            <h2 className="text-4xl my-3 w-3/4 h-[7dvh]  rounded-full font-semibold text-center mb-4 text-[var(--accent)] dark:text-[var(--text-primary)]">{text.title}</h2>
            
            <div className="grid grid-cols-3 md:grid-cols-5 gap-7 my-6   ">
                {stackItems.map((item, index) => (
                    <div key={index} 
                    ref={(el) => { itemRefs.current[index] = el }}
                    className="flex items-center justify-center p-4 transition-transform duration-300 hover:scale-110  rounded-lg ">
                        <Image src={`/${item}`} alt={item.split('.')[0]} width={150} height={150} className="w-[70px] h-[70px] md:w-[150px] md:h-[150px]" />
                    </div>
                ))}
            </div>
        </div>
    );
}