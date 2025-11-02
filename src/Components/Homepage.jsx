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

           <div>

           </div>
        </div>
    );
}

export default Homepage;