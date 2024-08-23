import React from "react";
import home_full from "../Assets/SVG/home_filled.svg"
import home_outline from "../Assets/SVG/home_outline.svg"
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation()

    return (<div className="col-span-9 row-span-1 flex items-center justify-around text-base font-medium text-textSecoundary py-5 border-b-2 border-lightShapes">
        <Link to={location.pathname === '/' ? undefined : '/'}><img className="h-6 w-6 justify-center items-center" src={location.pathname === '/' ? home_full : home_outline} /></Link>
        <Link to={location.pathname === '/stock' ? undefined : '/stock'}><span className="hover:text-gray-400 cursor-pointer">Stock</span></Link>
        <span className="hover:text-gray-400 cursor-pointer">Paramètres</span>
        <span className="hover:text-gray-400 cursor-pointer">Aide</span>
        <span>Rechercher</span>
    </div>);
}

export default Navbar;