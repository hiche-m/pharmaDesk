import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "../Components/Navbar.jsx";

const Layout = () => {
    return (
        <div className="grid grid-cols-12 grid-rows-[auto_1fr] min-h-screen gap-0 bg-background">
            <Navbar />
            <Outlet />
        </div>
    );
}

export default Layout;