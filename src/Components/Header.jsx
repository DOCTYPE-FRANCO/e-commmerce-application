import React from "react";
import Navbar from "./Navbar";
import Logo from "../assets/logo.png"
function Header(){
    return(
        <div className="mx-auto fixed top-4 z-50 w-[80vw] h-[60px] bg-gray-200/80 flex justify-between items-center justify-self-center rounded-2xl ">
            <img src={Logo} className="w-[60px] ml-10" />
            <Navbar />
        </div>
    );
}

export default Header;