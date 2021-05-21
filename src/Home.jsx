import React from 'react';
import Common from "./Common";
import web from "../src/images/Ranking_Monochromatic.svg";
const Home = () => {
    return (
        <>
            <Common
                name="Grow your business withs"
                imgsrc={web}
                visit="/services"
                btnname="Get Started"
            />
        </>
    )
};

export default Home;
