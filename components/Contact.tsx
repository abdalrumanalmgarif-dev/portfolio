'use client';
import Image from "next/image";
import { ContentType } from '@/context/LangContext';

export default function Contact({text} : {text : ContentType['Contact']})
{
    return(
        <div className='flex flex-col my-25'>
            <h1 className='text-4xl text-[var(--accent)] font-bold mb-4  dark:text-[#b8b8b8] mx-2'>{text.title}</h1>    
            <hr className='border-t h-2 bg-[var(--accent)] dark:bg-[linear-gradient(160deg,#d0d0d0_0%,#a0a0a0_50%,#d0d0d0_100%)] mb-6'/>
            <p className='text-lg dark:text-white mb-6'>{text.caption}</p>
            <div className="flex justify-center gap-6 my-3">
                <Image src={'/facebook (2).svg'} alt={"facebook"} width={50} height={50} />
                <Image src={'/insta.svg'} alt={"instagram"} width={50} height={50} />
                <Image src={'/whatsapp.svg'} alt={'whatsapp'} width={50} height={50} />
                <Image src={'/github2.svg'} alt={'github'} width={50} height={50} />
            </div>


            <form action="https://formspree.io/f/mwvjwbbl" className="flex flex-col gap-4 mt-6 w-full max-w-lg mx-auto" method="POST">
            <div className="mx-3">
                <label className="block text-black text-sm font-medium text-slate-300 mb-1 ">{text.emailPlaceholder}</label>
                <input 
                type="email" 
                name="email" 
                required 
                className="w-full p-3 focus:outline-none  focus:border-transparent  text-black   bg-[var(--accent)] dark:bg-[#b8b8b8]"
                placeholder={text.emailExample}
                />
          </div>
          <div className="mx-3">
            <label className="block text-black focus:outline-none text-sm font-medium text-slate-300 mb-1">{text.messagePlaceholder}</label>
            <textarea 
              name="message" 
              required 
              rows={5}
              className="w-full p-3    text-black  focus:outline-none  focus:border-transparent transition-colors resize-none bg-[var(--accent)] dark:bg-[#b8b8b8]"
              placeholder={text.messageExample}
            />
          </div>

          <button 
            type="submit" 
            className="w-1/3 rounded-full mx-3 py-3 bg-[var(--accent)] dark:bg-[#b8b8b8] text-white font-semibold  hover:bg-opacity-90 transition-all duration-300 shadow-md shadow-[var(--accent)]/20"
          >
            {text.sendButton}
          </button>
            </form>

            
        </div>
    );
}