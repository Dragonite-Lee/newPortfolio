// tailwindCss 적용
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./index.css";

export default function Header() {

    const textRef = useRef([]);

   

    useEffect(()=>{
        
        for (let i = 0; i < textRef.current.length; i++) {
            gsap.from( textRef.current[i], {
                duration: 1.3,
                opacity: 0,
                delay: Math.random() * 1,
                ease: "power3.inOut",
            });
        }
    },[])

    return (
        <div className="NanumSquareNeo-Variable w-full shadow-2xl px-12 fixed z-40 bg-cover bg-[url('/src/image/navi.png')] min-w-[768px] font-bold">
                <div className="h-16 flex gap-6 text-white justify-center items-center">
                    <div ref={e => pillsRef.current[0] = e}>
                        Who am I
                    </div>
                    <div ref={e => pillsRef.current[1] = e}>
                        Skills & Certificate
                    </div>
                    <div ref={e => pillsRef.current[2] = e}>
                        Projects
                    </div>
                </div>
        </div>
    )
}