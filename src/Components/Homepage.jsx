import React, {useEffect, useRef} from "react";
import Herosection from "./Herosection";
import {motion, useAnimation, useInView} from "framer-motion"
import PlainTee from "../assets/plain.jpg"
import Jean from "../assets/baggyjean.jpg"
import Joggers from "../assets/joggers.jpg"
import Jacket from "../assets/jacket.jpeg"
import Cap from "../assets/hats.jpeg"
import Glasses from "../assets/shades.jpeg"
import Shoes from "../assets/shoes.jpeg"
import Slides from "../assets/slides.jpeg"
import Boxers from "../assets/boxers.jpeg"

function Homepage(){
    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();

    const variants = {
        hidden: {opacity: 0, x: 75},
        visible: {opacity: 1, x: 0, transition:{duration: 1.5}}
    }

    useEffect(() =>{
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

    const products = [
        {
            id: 1,
            name : "Plain T-shirt",
            image: PlainTee,
        },

        {
            id: 2,
            name : "Baggy Jeans",
            image: Jean,
        },

        {
            id: 3,
            name : "Joggers",
            image: Joggers,
        },

        {
            id: 4,
            name : "Jacket",
            image: Jacket,
        },

        {
            id: 5,
            name : "Cap",
            image: Cap,
        },

        {
            id: 6,
            name : "Glasses",
            image: Glasses,
        },
    ]

    return(
        <div className="z-30">
            <Herosection />

            <p className="mt-20 text-black text-3xl md:text-5xl font-extrabold text-center">CURATED FOR YOU</p>

           <motion.div
                initial="hidden"
                animate={mainControls}
                variants={variants}
                ref={ref}
                className="md:grid  md:grid-cols-4 flex flex-col justify-center items-center gap-3.5 z-20 md:pl-4 mt-10"
            >
                {products.map((product) => (
                    <div key={product.id} className="flex flex-col gap-2 justify-center items-center bg-white w-[250px] h-[300px] shadow-2xl shadow-gray-500 rounded-md">
                        <div className="w-[180px] h-[170px] overflow-hidden rounded-2xl">
                            <img src={product.image} className="w-full object-top hover:scale-110 transition-transform duration-500"/>
                        </div>
                        <div>
                            <p className="font-bold">{product.name}</p>
                        </div>

                        <p onClick={() => alert("Not Yet in Store!")} className="bg-black text-white p-1 px-7 mt-5 font-bold rounded-sm">GO TO SHOP</p>
                    </div>
                ))}
           </motion.div>
        </div>
    );
}

export default Homepage;