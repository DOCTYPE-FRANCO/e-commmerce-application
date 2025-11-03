import React from "react";
import Navbar from "./Navbar";
import Logo from "../assets/logo.png"
function Header(){
    return(
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[85vw] h-[60px] bg-gray-200/80 flex items-center justify-between rounded-2xl px-6">
            <img src={Logo} className="w-[60px]" />
            <Navbar />
        </div>
    );
}

export default Header;