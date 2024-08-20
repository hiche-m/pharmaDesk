import React, { useState } from "react";
import SideMenu from "../Components/SideMenu.jsx";

const Home = () => {

    return (<>
        <div className="col-span-3 row-span-2 bg-lightShapes">
            Side Content
        </div>
        <div className="col-span-9 col-start-1 row-start-2 flex">
            <div className="w-max">
                <SideMenu option_list={["Tableau de bord", "Boutique", "Découvrir"]} />
            </div>
            <div className="flex-1 bg-gray-100">
                Content
            </div>
        </div>
    </>
    );
}

export default Home;