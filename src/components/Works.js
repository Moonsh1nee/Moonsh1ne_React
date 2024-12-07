import React from "react";
import WorksCard from "./WorksCard";
import worksCard from "../assets/data/worksCard.json";

const Works = () => {
    const [works, setWorks] = React.useState([]);

    React.useEffect(() => {
        setWorks(worksCard);
    }, []);

    return (
        <section className="works" id="works">
            <div className="container">
                <h2 className="title-2 works__title">My works</h2>
                <div className="works__wrapper">
                    {
                        works.map((work) => (
                            <WorksCard key={work.id} data={work} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
};
export default Works;