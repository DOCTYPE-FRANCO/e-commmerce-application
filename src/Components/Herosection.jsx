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
        <div className="relative w-full h-[800px]">
            <img 
                src={heroimg}
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div ref={ref} className="relative z-20 flex flex-col gap-2">
                <motion.p 
                    variants={variants}
                    initial="hidden"
                    animate={mainControls}
                    className="text-5xl text-white font-extrabold"
                >
                    Elevate Your Style
                </motion.p>

                <motion.p 
                    variants={variants}
                    initial="hidden"
                    animate={mainControls}
                    className="text-3xl text-white bold"
                >
                    Discover premium clothing designed just for you.
                </motion.p>

                <motion.p 
                    variants={variants}
                    initial="hidden"
                    animate={mainControls}
                    className="w-[250px] h-[35px] font-extrabold bg-white hover:scale-110"
                >
                    SHOP NOW
                </motion.p>
            </div>
        </div>
    );
}
export default Herosection;