import React, {useEffect, useRef} from "react";
import {motion, useAnimation, useInView} from "framer-motion"
import heroimg from "../assets/mekus-hero.jpg"
function Herosection(){
    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();
    const variants = {
        hidden:{opacity: 0, x: 75},
        visible:{opacity: 1, x: 0, transition: {duration: 2}}
    }

    useEffect(() =>{
        if(isInView){
            mainControls.start("visible");
        }
    }, [isInView]);
    return(
        <div className="relative w-full h-[800px] pt-32 pl-28">
            <img 
                src={heroimg}
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <motion.div
                ref={ref}
                className="relative z-20 flex flex-col gap-4"
                variants={variants}
                initial="hidden"
                animate={mainControls}
            >

                <p
                    className="md:text-6xl text-white font-extrabold"
                >
                    Elevate Your Style
                </p>

                <p 
                    variants={variants}
                    initial="hidden"
                    animate={mainControls}
                    className="md:text-4xl text-white font-bold mb-7"
                >
                    Discover premium clothing designed just for you.
                </p>

                <p 
                    variants={variants}
                    initial="hidden"
                    animate={mainControls}
                    className="w-[300px] h-[45px] font-extrabold bg-white hover:scale-110 flex justify-center items-center transition-transform duration-500 rounded-sm"
                >
                    SHOP NOW
                </p>
            </motion.div>
        </div>
    );
}
export default Herosection;