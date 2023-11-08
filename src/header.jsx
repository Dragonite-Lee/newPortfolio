// tailwindCss 적용
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./index.css";

export default function Header() {
    // const [state, dispatch] = useScrollRedux();
    const [menuModal, setMenuModal] = useState(false);
    const textRef = useRef([]);

    const toWhoAmI = () => {
        console.log(window);
        // console.log(state.WhoAmI)
        // window.scrollTo({left: 0, top : state.WhoAmI, behavior : 'smooth'})
    };
    const toSkills = () => {
        console.log(1);
        // console.log(state.Skills)
        // window.scrollTo({left: 0, top : state.Skills, behavior : 'smooth'})
    };
    const toCertificate = () => {
        console.log(1);
        // console.log(state.Certificate)
        // window.scrollTo({left: 0, top : state.Certificate, behavior : 'smooth'})
    };
    const toAward = () => {
        console.log(1);
        // console.log(state.Award)
        // window.scrollTo({left: 0, top : state.Award, behavior : 'smooth'})
    };
    const toActivity_Project = () => {
        console.log(1);
        // console.log(state.Award)
        // window.scrollTo({left: 0, top : state.Activity_Project, behavior : 'smooth'})
    };

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
        <div className="NanumSquareNeo-Variable w-full shadow-2xl opacity-90 px-12 fixed z-40 bg-[#161F29] min-w-[516px] font-bold">
            <div className="flex justify-between items-center h-16">
                <div className="text-lg text-white" ref={e => textRef.current[0] = e}>
                    PORTFOLIO
                </div>
                <div className="hidden md:flex gap-6 text-white">
                    <div ref={e => textRef.current[1] = e} onClick={()=>toWhoAmI()}>
                        Who am I
                    </div>
                    <div ref={e => textRef.current[2] = e} onClick={()=>toSkills()}>
                        Skills
                    </div>
                    <div ref={e => textRef.current[3] = e} onClick={()=>toCertificate()}>
                        Certificate
                    </div>
                    <div ref={e => textRef.current[4] = e} onClick={()=>toAward()}>
                        Award
                    </div>
                    <div ref={e => textRef.current[5] = e} onClick={()=>toActivity_Project()}>
                        Activity & Projects
                    </div>
                </div>
                
            </div>
        </div>
    )
}