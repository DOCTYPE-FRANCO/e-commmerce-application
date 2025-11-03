import React from "react";
function Footer(){
    return(
        <div className=" flex flex-col gap-3 bg-black justify-between text-white w-full h-[600px] md:h-[300px] mt-20 bottom-0 right-0 left-0">
            <div className="flex flex-col gap-4 md:flex-row justify-between">
                <div className="flex flex-col  gap-2 ml-10 mt-10">
                    <p className="font-extrabold text-2xl">CONTACT US</p>< br/>
                    <p className="font-bold">Email: mekusluxury@gmail.com</p>
                    <p className="font-bold">Phone: +1 234 567 890</p>
                    <p className="font-bold">Address: 2, Mopo Road United Estate, Sangotedo Ajah Lagos, Nigeria</p>
                </div>

                <div className="flex flex-col  gap-3 md:gap-2 justify-center items-center mr-10 mt-10">
                    <p className="font-extrabold text-2xl max-w-[300px] md:max-w-[600px]">SIGN UP FOR DISCOUNTS & UPDATES</p>< br/>
                    <input type="text" placeholder="Enter your email" className=" text-white flex border border-gray-300 rounded-2xl w-[250px] md:w-[450px] h-10 pl-4"/>
                    <button className="bg-black text-white w-43 h-10 font-bold rounded-full mt-3 hover:bg-gray-600 transition-all duration-500">SUBSCRIBE</button>
                </div>
            </div>
            <div className="flex justify-center items-center mt-10">
                <p className="font-bold">© 2025 Mekus Luxury. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;