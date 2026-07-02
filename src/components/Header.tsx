import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from '../assets/logo.png';
import { GraduationCap } from "lucide-react";

export const Header = memo(() => {
return (
    <div className="bg-white shadow-sm md:py-4">
        <div className="container mx-auto px-4 items-center flex justify-between">
            <Link href={"/"}
            className="flex  items-center gap-3 md:gap-4 group"
            >
            <Image
            src={logo}
alt="ssrvm"
width={64}
height={64}
            />
<div>
    <h1 className=" text-lg md:text-2xl lg:text-3xl font-bold font-serif leading-tight text-blue-800">Sri Sri Ravishankar Vidya Mandir</h1>
    <span className="uppercase font-medium tracking-wide bg-blue-900 text-white text-[20px] md:text-xs px-3 py-1 rounded-lg">Biratnagar</span>
</div>
            </Link>
            <Link href={'/admission'} 
            className="flex gap-2 bg-gradient-to-r from-purple-500 via-blue-500 to-blue-950 text-white px-4 py-2.5 md:px-6 rounded-sm hover:shadow-lg transition-all hover:scale-105 font-medium"
            >
            <GraduationCap size={30} />
            <span>Admission</span>
            
            </Link>
        </div>
    
    </div>
)
})

Header.displayName = 'Header'
