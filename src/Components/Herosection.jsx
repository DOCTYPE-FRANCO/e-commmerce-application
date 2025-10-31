import React from "react";
import {motion, useAnimation, useInView} from "framer-motion"
import heroimg from "../assets/mekus-hero.jpg"
function Herosection(){
    return(
        <div className="relative w-full h-[800px]">
            <img 
                src={heroimg}
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />
        </div>
    );
}
export default Herosection;