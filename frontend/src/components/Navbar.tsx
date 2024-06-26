"use client";

import { Navbar as FlowbiteNav } from "flowbite-react";
import { Link } from "react-router-dom";
import logo from "../assets/Navbar/logo.png";
const Navbar = () => {
    return (
        <FlowbiteNav fluid rounded className="w-11/12 mx-auto z-50 bg-grey-tertiary">
            <FlowbiteNav.Brand href="#">
                <img
                
                    src={logo}
                    className="mr-3 h-10 sm:h-9"
                    alt=""
                />
                <span className="self-center whitespace-nowrap text-2xl font-semibold text-white font-caveat">
                    Getogether
                </span>
            </FlowbiteNav.Brand>
            <Link className="flex gap-2 md:order-2" to={"/login"}>
                <button className="text-white border rounded-md px-4 hover:scale-105 duration-150 text-xs font-normal py-2">
                    Login | Sign up
                </button>
            </Link>
        </FlowbiteNav>
    );
};
export default Navbar;
