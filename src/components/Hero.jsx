import { useState } from "react"
import TorreEiffel from "/assets/torre-eiffel.png"
import PizzaItaly from "/assets/italy.png"
import Lisbon from "/assets/lisbon.png"
import Navbar from "../components/Navbar"
import { motion, AnimatePresence, easeInOut } from "motion/react"
import { Link } from "wouter"

const SlideRight = (delay) => {
    return {
        hidden: {
            opacity: 0,
            X: 100,
        },
        show: {
            opacity: 1,
            X: 0,
            transition: {
                duration: 0.5,
                delay: delay,
                ease: easeInOut,
            },
        },
        exit: {
            opacity: 0,
            X: -50,
            transition: {
                duration: 0.2,
                ease: easeInOut,
            },
        }
    };
}

const HeroData = [
    {
        id: 1,
        image: TorreEiffel,
        title: "França",
        subtitle: "França oferece uma experiência única com suas icônicas paisagens, gastronomia renomada e uma rica história cultural. De Paris aos vinhedos de Bordeaux, é um destino imperdível para explorar e se encantar",
        cta: "/lista-viagens/paris",
        price: "França",
        modal: "Paris",
        bgColor: "#cf4f00",
        
    },
    {
        id: 2,
        image: PizzaItaly,
        title: "Itália",
        subtitle: "Itália é o coração da arte, história e gastronomia, com paisagens deslumbrantes e cidades como Roma, Veneza e Florença. Um destino perfeito para quem busca cultura e beleza em cada esquina.",
        cta: "/lista-viagens/roma",
        price: "Itália",
        modal: "Roma",
        bgColor: "#727272",
        
    },
    {
        id: 3,
        image: Lisbon,
        title: "Portugal",
        subtitle: "Portugal é um destino encantador, com praias deslumbrantes, uma rica história e uma gastronomia única. Explore as suas cidades vibrantes e descubra a beleza do país em cada canto.",
        cta: "/lista-viagens/lisboa",
        price: "Portugal",
        modal: "Lisboa",
        bgColor: "#ac1a00",
        
    },
]

function Hero(){

    const [activeData, setActiveData] = useState(HeroData[0]);

    const handlerActiveData = (data) => {
        setActiveData(data);
    }

    return (
        <>
            <motion.div 
                initial={{backgroundColor: activeData.bgColor}} 
                animate={{backgroundColor: activeData.bgColor}} 
                transition={{duration:0.8}}
            >
                <Navbar />

                <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[605px]">
                    <div className="flex flex-col justify-content py-14 md:py-0 xl:max-w-[500px] text-white order-2 md:order-1">
                        <div className="space-y-5 text-center md:text-left">
                            <motion.h1 key={activeData.id} variants={SlideRight(0.2)} initial="hidden" animate="show" exit="exit" className="text-3xl lg:text-6xl xl:text-7xl font-bold font-handwriting text-shadow">{activeData.title}</motion.h1>
                            <motion.p variants={SlideRight(0.4)} initial="hidden" animate="show" exit="exit" className="text-sm leading-loose text-white/80">{activeData.subtitle}</motion.p>
                            <motion.button variants={SlideRight(0.6)} initial="hidden" animate="show" exit="exit" className="px-4 py-2 bg-white text-black inline-block font-normal rounded-sm"><Link href={activeData.cta}>Ver mais</Link></motion.button>
                            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5,delay:0.2, ease:"easeInOut"}} className="flex items-center justify-center md:justify-start gap-4 !md:mt-24 !mb-10">
                                <div className="w-20 h-[1px] bg-white"></div>
                                <p>Recomendações</p>
                                <div className="w-20 h-[1px] bg-white"></div>
                            </motion.div>

                            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5,delay:0.2, ease:"easeInOut"}}  className="grid grid-cols-3 gap-10">
                                {
                                    HeroData.map((data) => {
                                        return (
                                            <div onClick={() => handlerActiveData(data)} className="cursor-pointer space-y-3 hover:scale-105 transition-all duration-200">
                                                <div className="flex justify-center">
                                                    <img src={data.image} alt="" className={`w-[80px] img-shadow ${activeData.image === data.image ? "opacity-100 scale-100" : "opacity-50"}`}/>
                                                </div>
                                                <div className="text-center !mt-6 spacy-y-1">
                                                    <p className="text-xl font-bold">{data.price}</p>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </motion.div>

                        </div>
                    </div>

                    <div className="flex flex-col justify-end items-center relative order-1 md:order-2">
                        <img src={activeData.image} alt="" className="w-[150px] md:w-[200px] xl:w-[350px] img-shadow relative z-10" />
                        <div className="text-white/5 text-[300px] font-poppins font-extrabold absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            {activeData.modal}
                        </div>
                    </div>

                </div>

            </motion.div>
        </>
    )
}

export default Hero