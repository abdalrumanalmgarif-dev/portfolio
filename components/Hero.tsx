import Image from "next/image";
import { ContentType } from "../context/LangContext";

export default function Hero({text} : {text : ContentType['Hero']})
{
    return(
        <div className="  flex flex-col items-center justify-evenly min-h-[90vh]  ">
        
        {/* tilted frame */}
        <div className="flex flex-col items-center justify-center">
            <div className="rotate-6 rounded-3xl overflow-hidden w-64 h-64 shadow-2xl m-3">
                        {/* counter-rotate the image to stay straight */}
                        <div className="relative w-full h-full -rotate-6 scale-125">
                            <Image
                                src="/me.jpg"
                                alt="Hero Image"
                                fill
                                priority
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="text-center text-gray-900 dark:text-white  max-w-2xl">
                    <h1 className="text-2xl font-bold mt-4">{text.Hello}</h1>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4">{text.intro}</h2> 
                    </div>
        </div>
        


        <div className="flex items-center justify-between mt-8 px-8 py-5 min-h-[80px]  w-11/12 bg-[var(--accent)]  rounded-full 
         py-5 text-white text-sm divide-x divide-gray-500 dark:bg-[linear-gradient(160deg,#d0d0d0_0%,#a0a0a0_50%,#d0d0d0_100%)]
          dark:text-black dark:divide-gray-900 ">
                {/* flex-1 splits the width perfectly; py-2 adds height to the clickable target */}
                <a 
                href="#about"
                className="flex-1 text-center py-2 hover:text-gray-600 dark:hover:text-gray-300 transition-colors tracking-wide font-medium cursor-pointer"
                >
                {text.sec1}
                </a>

                <a 
                href="#stack"
                className="flex-1 text-center py-2 hover:text-gray-600 dark:hover:text-gray-300 transition-colors tracking-wide font-medium cursor-pointer"
                >
                {text.sec2}
                </a>

                <a 
                href="#contact"
                className="flex-1 text-center py-2 hover:text-gray-600 dark:hover:text-gray-300 transition-colors tracking-wide font-medium cursor-pointer"
                >
                {text.sec3}
                </a>
        </div>
    </div>
    );
}