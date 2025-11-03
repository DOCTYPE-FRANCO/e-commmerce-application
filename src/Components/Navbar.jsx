import React, {useState} from "react";
import { MenuIcon, XIcon } from "lucide-react";

function Navbar(){
    const [tab, setTab] = useState(false);
    return(
        <div className="md:pr-20 pr-2">
            <ul className="hidden md:flex flex-row gap-10 justify-center items-center">
                <p className="font-bold hover:text-gray-500 hover:cursor-pointer">Home</p>
                <p className="font-bold hover:text-gray-500 hover:cursor-pointer">Shop</p>
                <p className="font-bold hover:text-gray-500 hover:cursor-pointer">Cart</p>
            </ul>

            <div className="md:hidden" onClick={() => setTab(!tab)}>
                {tab ? <XIcon /> : <MenuIcon />}
            </div>

            {tab && (
                <div onClick={() => alert("No Products Yet!")} className="flex justify-center items-center  backdrop-blur-sm top-20 right-10 fixed bg-gray-500/80 w-[150px] h-[170px] rounded-md">
                    <ul className="flex flex-col text-white font-bold gap-5 justify-center items-center">
                        <p className="font-bold hover:text-gray-500 hover:cursor-pointer">Home</p>
                        <p className="font-bold hover:text-gray-500 hover:cursor-pointer">Shop</p>
                        <p className="font-bold hover:text-gray-500 hover:cursor-pointer">Cart</p>
                    </ul>  
                </div>
            )}
        </div>
    );
}

export default Navbar;