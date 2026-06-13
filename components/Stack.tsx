import Image from "next/image";
import { ContentType } from "../context/LangContext";

const stackItems = ['React-icon.svg', 'Next.js.svg', 'Node.js.svg', 'MongoDB.svg', 'Tailwind CSS.svg', 'TypeScript.svg', 'JavaScript.svg',  'github2.svg', 'Git.svg' ,  'Figma.svg' , 'Express.svg', 'Redis.svg',  'Python.svg' , 'SQL Developer.svg' , 'Vite.js.svg'  ];

export default function Stack({text} : {text : ContentType['Stack']})
{
    return(
        <div className="flex flex-col  dark:bg-[var(--accent-dark)]  items-center    ">
            <h2 className="text-4xl my-3 w-3/4 h-[7dvh]  rounded-full font-semibold text-center mb-4 text-[var(--accent)] dark:text-[var(--text-primary)]">{text.title}</h2>
            
            <div className="grid grid-cols-3 gap-7 my-6   ">
                {stackItems.map((item, index) => (
                    <div key={index} className="flex items-center justify-center p-4   rounded-lg ">
                        <Image src={`/${item}`} alt={item.split('.')[0]} width={70} height={70} />
                    </div>
                ))}
            </div>
        </div>
    );
}