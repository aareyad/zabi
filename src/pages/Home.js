import React from "react";

import Service from "../components/Service";

const Home = () => {
    return (
        <main>
            <div className="service-wrapper">
                <Service/>
                <Service title="Web Development"/>
                <Service title="Application Development"/>
            </div>
        </main>
    );
}

export default Home;