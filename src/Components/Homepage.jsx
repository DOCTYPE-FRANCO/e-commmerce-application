import React from "react";
import Herosection from "./Herosection";
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

            <p className="mt-20 text-black text-5xl font-extrabold text-center">CURATED FOR YOU</p>

           <div className="grid grid-cols-4 gap-3.5 z-20 pl-4 mt-10">
                {products.map((product) => (
                    <div key={product.id} className="flex flex-col gap-2 justify-center items-center bg-white w-[250px] h-[300px] shadow-2xl shadow-gray-500 rounded-md">
                        <div className="w-[180px] h-[170px] overflow-hidden rounded-2xl">
                            <img src={product.image} className="w-full object-top hover:scale-110 transition-transform duration-500"/>
                        </div>
                        <div>
                            <p className="font-bold">{product.name}</p>
                        </div>

                        <p className="bg-black text-white p-1 px-7 mt-5 font-bold rounded-sm">GO TO SHOP</p>
                    </div>
                ))}
           </div>
        </div>
    );
}

export default Homepage;