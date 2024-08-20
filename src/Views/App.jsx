import React from "react";
import Navbar from "../Components/Navbar.jsx";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import NotFound from "../Components/NotFound.jsx";
import Home from "./home.jsx";
import Layout from "./layout.jsx";

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='store' element={<NotFound />} />
                    <Route path='discover' element={<NotFound />} />
                </Route>
                <Route path='/stock' element={<Layout />}>
                    <Route index element={<NotFound />} />
                    <Route path='transactions' element={<NotFound />} />
                    <Route path='database' element={<NotFound />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}