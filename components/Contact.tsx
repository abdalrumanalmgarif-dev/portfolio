'use client';

import {useState , useEffect} from "react";
import Image from "next/image";
import { ContentType } from '@/context/LangContext';
import { useForm } from '@formspree/react'; // Import Formspree hook
export default function Contact({text} : {text : ContentType['Contact']})
{
    const [message, setMessage] = useState('');

   const [state, handleSubmit] = useForm("mwvjwbbl");

    // 2. Watch the submission state; clear message once it succeeds
    useEffect(() => {
        if (state.succeeded) {
            setMessage('');
            alert('Message sent successfully!'); // Optional: user feedback
        }
    }, [state.succeeded]);


    return(
        <div className='flex flex-col my-25 ' id="contact">
            <h1 className=' text-4xl text-[var(--accent)] font-bold mb-4  dark:text-[#b8b8b8] mx-2'>{text.title}</h1>    
            <hr className='border-none  h-px bg-[linear-gradient(to_right,transparent,var(--accent),transparent)] dark:bg-[linear-gradient(to_right,transparent,#b8b8b8,transparent)] w-[80%] mx-auto mb-6' />
            <p className='text-lg  dark:text-white mb-6 mx-3'>{text.caption}</p>
            <div className="flex justify-center md:justify-start mx-4 gap-6 my-3 ">
                <a href="https://www.facebook.com/abdalruhman.almgarif"><Image className="dark:invert hover:scale-110" src={'/facebook (2).svg'} alt={"facebook"} width={50} height={50} /></a>
                <a href="https://instagram.com/Almgarif.Dev"><Image className="dark:invert hover:scale-110" src={'/insta.svg'} alt={"instagram"} width={50} height={50} /></a>
                <a href="https://wa.me/218930038188" target="_blank"  rel="noopener noreferrer"><Image className="dark:dark:invert hover:scale-110" src={'/whatsapp.svg'} alt={'whatsapp'} width={50} height={50} /></a>
                <a href="https://github.com/abdalrumanalmgarif-dev"><Image className="dark:invert hover:scale-110" src={'/github2.svg'} alt={'github'} width={50} height={50} /></a>
                
            </div>


            <form action="https://formspree.io/f/mwvjwbbl" onSubmit={handleSubmit} className="flex flex-col  mt-6  w-full  mx-auto " method="POST">
                <div className="flex flex-col  gap-4  mt-6  md:w-6/12   ">
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full p-3    text-black  focus:outline-none  focus:border-transparent transition-colors resize-none bg-[var(--accent)] dark:bg-[#b8b8b8]"
                placeholder={text.messageExample}

                />
            </div>

            <button 
                type="submit" 
                className="w-1/3 md:w-3/12 rounded-full mx-3 py-3 bg-[var(--accent)] dark:bg-[#b8b8b8] text-white font-semibold  hover:bg-opacity-90 transition-all duration-300 shadow-md shadow-[var(--accent)]/20 hover:text-black"
            >
                {text.sendButton}
            </button>
        </div>
        </form>

            
        </div>
    );
}