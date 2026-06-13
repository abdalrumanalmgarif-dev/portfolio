import { ContentType } from "../context/LangContext";

export default function About({text} : {text : ContentType['About']})
{
    return(
        <div className="flex flex-col items-start justify-evenly h-[50dvh] dark:text-white ">
            <div className="flex items-center justify-center w-full p-2">
                <h1 className="px-4 bg-[var(--accent)] dark:bg-[linear-gradient(160deg,#d0d0d0_0%,#a0a0a0_50%,#d0d0d0_100%)] dark:text-black rounded-full text-center text-2xl flex-1 font-bold">{text.title}</h1>
                <hr className="w-full flex-2 h-1 bg-[var(--accent)] dark:bg-gray-600" />
            </div>
            <h2 className="text-xl font-bold my-2">{text.smallTitle}</h2>
            <p className="mx-2 my-2">{text.description}</p>
            
        </div>
    );
}