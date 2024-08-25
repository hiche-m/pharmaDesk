import React from "react";
import SideMenu from "../Components/SideMenu.jsx";
import HalfSlabs from "../Components/HalfSlabs.jsx";
import IncomePerPost from "../Components/IncomePerPost.jsx";
import DailyIncome from "../Components/DailyIncome.jsx";
import ActivePosts from "../Components/ActivePosts.jsx";
import WideGraph from "../Components/WideGraph.jsx";

const Home = () => {
    return (<>
        <div className="col-span-3 row-span-2 bg-lightShapes">
            Side Content
        </div>
        <div className="col-span-9 col-start-1 row-start-2 flex bg-background h-auto">
            <div className="w-max">
                <SideMenu option_list={["Tableau de bord", "Boutique"]} />
            </div>
            <div className="flex-1">
                <div className="max-w-[190px] sm:max-w-[825px] min-h-[465px] max-h-[580px] grid grid-cols-12 grid-rows-14 w-full h-auto space-x-2 space-y-2 pb-3 pr-3 pt-1 bg-background mb-40">
                    <HalfSlabs className="col-span-12 sm:col-span-5 small:col-span-2 sm:row-span-2 small:row-span-4" />
                    <IncomePerPost className="col-span-12 sm:col-span-7 small:col-span-6 sm:row-span-7 small:row-span-7" />
                    <DailyIncome className="col-span-12 min-h-48 sm:col-span-5 small:col-span-4 sm:row-span-5 small:row-span-7" />
                    <ActivePosts className="max-h-36 col-span-12 sm:col-span-4 small:col-span-2 sm:row-span-7 small:row-span-3" />
                    <WideGraph className="max-small:hidden sm:col-span-8 small:col-span-12 sm:row-span-7 small:row-span-7" />
                </div>
            </div>
        </div>
    </>
    );
}

export default Home;