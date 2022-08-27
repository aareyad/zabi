import React from "react";

import Service from "../components/Service";

const Home = () => {
    return (
        <main>
            <div className="service-wrapper">
                <Service/>
                <Service/>
                <Service/>
            </div>
        </main>
    );
}

export default Home;