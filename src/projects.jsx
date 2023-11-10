import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap";

const activity_arr = [
    {
        name: 'Querico',
        content: '요리레시피 전달 플랫폼',
        date: '2023년 11월 1일 → 현재 진행중',
        id: 3,
    },
    {
        name: 'O:Nul',
        content: 'TIL(Today I lerarned)기반 sns플랫폼',
        date: '2023년 10월 12일 → 현재 진행중',
        id: 2,
        git: 'https://github.com/onul-project/onul-frontend'
    },
    {
        name: 'footprint',
        content: '스토리로 전하는 취업이야기 플랫폼',
        date: '2023년 3월 3일 → 2023년 9월 3일',
        id: 1,
        git: 'https://github.com/Dragonite-Lee/footprint-newLandingpage',
        url: 'https://footprintstory.kr/'
    },
    {
        name: '흥부하우스',
        content: '한양대에리카 단기임대플랫폼 창업동아리',
        date: '2022년 8월 1일 → 2022년 12월 1일',
        id: 0,
        git: 'https://github.com/Dragonite-Lee/DunJi-FrontEnd'
    }
]

export default function Project() {
    const boxesRef = useRef([]);
    const [boxes, setBoxes] = useState(false);
    const containerRef = useRef();

    let scrollY;
    let windowHeight, windowWidth;
    const handleResize = () => {
        windowHeight = window.innerHeight;
        windowWidth = window.innerWidth;
        if(boxes) {
            for (let i = 0; i < boxesRef.current.length; i++) {
                gsap.to(boxesRef.current[i], {
                    opacity: 1,
                    duration: 1,  
                    delay: i * 0.2,
                    ease: "power3.inOut",
                    y: windowHeight / 2 - 100,
                    x: windowWidth / 2 - (i * 200 - 200)
                });
            }
        }
    }
    handleResize()
    useEffect(() => {
        
        // console.log(windowHeight,windowWidth)
        const tween = () => {
            window.addEventListener('scroll', ()=>{
                scrollY = window.scrollY;
                // console.log(scrollY)
                // console.log(containerRef.current.offsetTop)
                if (scrollY > containerRef.current.offsetTop - 100) {
                    // console.log(1)
                    setBoxes(true);
                }
            })
            window.addEventListener('resize', handleResize);
        }
        tween();
        handleResize()
        if(boxes) {
            for (let i = 0; i < boxesRef.current.length; i++) {
                gsap.to(boxesRef.current[i], {
                    opacity: 1,
                    duration: 1,  
                    delay: i * 0.2,
                    ease: "power3.inOut",
                    y: windowHeight / 2 - 100,
                    x: windowWidth / 2 - (i * 200 - 200)
                });
            }
        }
        
        return () => {
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('scroll', tween)
        }
    })

    return (
        <div className="overflow-hidden relative w-full Pretendard-Bold h-[calc(100vh-4rem)] bg-[#1B2735]" ref={containerRef}>
            <div >
               <div className="text-3xl text-left text-white py-12 pl-12">PROJECT</div>
                <div className="w-full h-[calc(100vh-4rem-132px)]">
                    {
                        activity_arr.map((data, index) => (
                            <div className="text-white bg-slate-700 opacity-0 px-2 w-48 h-64 absolute top-0 left-0 rounded-[15px]" key={data.id}
                                ref={e => boxesRef.current[index] = e}
                            >
                                <div className="mt-2 text-center">
                                    {data.name}
                                </div>
                                <div className="mt-4 text-center text-sm">
                                    {data.content}
                                </div>
                                <div className="mt-4 pb-4 text-center text-sm border-b">
                                    {data.date}
                                </div>
                                <div className="mt-4 flex justify-center items-center">
                                {data.git ? (
                                    <a className="block text-center text-sm" href={data.git}>github</a>
                                ) : (
                                    <div className="text-center text-sm">디자인 / 기획 단계</div>
                                )}
                                {data.url && (
                                    <a className="block ml-4 text-center text-sm" href={data.url}>URL</a>
                                )}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            
            
            
        </div>
    )
}
