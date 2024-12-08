import React from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import {ButtonLink} from "./Button";
import {useTranslation} from "react-i18next";

const WorksCard = ({data}) => {
    const workRef = React.useRef(null);

    const { t } = useTranslation();

    const {observe, unobserve} = useIntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add('visible');
                unobserve(entry.target);
            }
        });
    }, {threshold: 0.5});

    React.useEffect(() => {
        if (workRef.current) {
            observe(workRef.current);
        }
    }, [observe, workRef]);

    return (
        <article className="works__card" ref={workRef}>
            <img src={data.image} alt={data.title + ' website'} className="works__card-img"/>
            <div className="works__card-content">
                <h3 className="title-3 works__card-title">{t(data.title)}</h3>
                <p className="works__card-desc">{t(data.description)}</p>
                <h4 className="title-4 works__card-tech">Technologies used:</h4>
                <ul className="works__card-list">
                    {data.technologies.map((item, index) => (
                        <li key={index} className="works__card-item">
                            <span>{item.name}: </span>
                            {t(item.desc)}
                        </li>
                    ))}
                </ul>
                <ButtonLink href={data.link} className={"btn--works-view " + data.buttonClass} target={'_blank'}>
                    {t('workBtnLink')}
                </ButtonLink>
            </div>
        </article>
    )
};

export default WorksCard;