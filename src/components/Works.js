import React from "react";
import WorksCard from "./WorksCard";
import worksCard from "../assets/data/worksCard.json";
import {useTranslation} from "react-i18next";

const Works = () => {
    const [works, setWorks] = React.useState([]);

    const { t } = useTranslation();

    React.useEffect(() => {
        setWorks(worksCard);
    }, []);

    return (
        <section className="works" id="works">
            <div className="container">
                <h2 className="title-2 works__title">{t('workTitle')}</h2>
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