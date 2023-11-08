import { useRef, useEffect } from "react"
// import useScrollRedux from "../hooks/useScrollRedux";
// import { dispatchWhoAmI } from "../store/modules/scroll";
import myImg from './image/myImg.jpg'
import snowBg from './image/snowBg.png'
import star from './image/star.png'

export default function WhoAmI() {
    // const [state, dispatch] = useScrollRedux();
    
    // const scrollTopRef = useRef(null);
    const scrollopacity = useRef(null);
    
    // const distanceChildFromTop = () => {
    //     if(scrollTopRef.current) {
    //         let whoAmITop = scrollTopRef.current.getBoundingClientRect().top + window.pageYOffset;;
    //         // console.log("whoami top", whoAmITop);
    //         dispatch(dispatchWhoAmI(whoAmITop))
    //     }
    // };
    const scrollUl = () => {
        const height = window.scrollY;//(300,1) (1300,0.4)
        const uiOpacity = -1/1000 * height + 13/10
        if(scrollopacity.current) scrollopacity.current.style.opacity = uiOpacity;
    }
    useEffect(() => {
        // window.addEventListener("scroll", distanceChildFromTop);
        window.addEventListener("scroll", scrollUl);
    }, [scrollUl]);
    
    return (
        <div className="w-full NanumSquareNeo-Variable h-[calc(200vh-8rem)]">
            <div className="md:flex text-center justify-center items-center sticky top-[4rem] bg-[#1B2735]">
                <div className="w-1/2"  ref={scrollopacity}>
                    <img 
                        className="block mx-auto w-3/4 h-auto rounded-md"
                        src={myImg}
                        alt="myImg"
                        
                    />
                </div>
                <div className="relative bg-[#1B2735] text-center w-1/2 h-[calc(100vh-4rem)] ">
                    <div className="absolute left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%]">
                        <div className="w-96 h-10 pt-2 pl-[20px] bg-[#161F29] text-white text-left opacity-80 rounded-[10px]">
                            📧 ross1222@naver.com
                        </div>
                        <div className="mt-8 w-96 h-10 pt-2 pl-[20px] bg-[#161F29] text-white text-left opacity-80 rounded-[10px]">
                            <a href="https://github.com/Dragonite-Lee">
                                💻 GitHub
                            </a>
                        </div>
                        <div className="mt-8 w-96 h-10 pt-2 pl-[20px] bg-[#161F29] text-white text-left opacity-80 rounded-[10px]">
                            <a href="https://www.notion.so/7e19b612f5aa4fa5a60a53ba84abfca8">
                                📚 Notion
                            </a>
                        </div>
                        <div className="mt-8 w-96 h-10 pt-2 pl-[20px] bg-[#161F29] text-white text-left opacity-80 rounded-[10px]">
                            <a href="https://open.kakao.com/o/sXsLA2Qe">
                                💬 KakaoTalk
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:flex text-center justify-center items-center">
                <div className="bg-[#1B2735] w-1/2 h-[calc(100vh-4rem)] text-NanumSquareNeo-Variable text-[60px] text-white">
                    <div className="relative top-2/4 translate-y-[-50%] text-left px-[10%]">
                        <span>
                            FRONT-END<br />
                            ENGINEER<br />
                            JUNYOUNG LEE
                        </span>
                    </div>
                </div>
                <div className="relative bg-[#1B2735] w-1/2 h-[calc(100vh-4rem)] text-white text-center text-[18px]">
                    <div className="text-left px-[10%] absolute top-2/4 translate-y-[-50%]">
                        <div className="mb-4">
                            <span className="font-bold text-[20px]">FrontEnd</span>를 공부하며 바닥에 차곡차곡 쌓이는 눈처럼<br />
                            실력을 쌓아나가는 개발자입니다.
                        </div>
                        <div className="mb-4">
                            새로운 것을 학습하는 것을 두려워하지 않으며,<br />
                            <span className="font-bold text-[20px]">BackEnd</span>에도 관심사를 넓혀가고 있습니다.<br />
                        </div>
                        또한, 개발이 아닌 여러가지 분야에도 <span className="font-bold text-[20px]">감수성</span>을 가지며,<br />
                        개발을 단순히 코딩이 아닌 <span className="font-bold text-[20px]">문제해결 수단</span>으로 보기 위한<br />
                        시야를 넓히려고 노력중입니다. 
                    </div>
                    <img 
                        className="absolute bottom-0 opacity-80"
                        src={snowBg}
                        alt="snowBg이미지"
                    />
                    <img 
                        className="absolute bottom-0"
                        src={star}
                        alt="star이미지"
                    />
                </div>
            </div>
            
        </div>
    )
}