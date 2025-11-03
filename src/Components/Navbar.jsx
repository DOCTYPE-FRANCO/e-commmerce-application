import React from "react";
import { MenuIcon } from "lucide-react";

function Navbar(){
    return(
        <div className="pr-20">
            <ul className="hidden md:flex flex-row gap-10 justify-center items-center">
                <p className="font-bold hover:text-gray-500 hover:cursor-pointer">Home</p>
                <p className="font-bold hover:text-gray-500 hover:cursor-pointer">Shop</p>
                <p className="font-bold hover:text-gray-500 hover:cursor-pointer">Cart</p>
            </ul>

            <div>
                <MenuIcon />
            </div>
        </div>
    );
}

export default Navbar;