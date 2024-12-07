import React from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import {ButtonLink} from "./Button";

const WorksCard = ({data}) => {
    const workRef = React.useRef(null);

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
                <h3 className="title-3 works__card-title">{data.title}</h3>
                <p className="works__card-desc">{data.description}</p>
                <h4 className="title-4 works__card-tech">Technologies used:</h4>
                <ul className="works__card-list">
                    {data.technologies.map((item, index) => (
                        <li key={index} className="works__card-item">
                            <span>{item.name}: </span>
                            {item.desc}
                        </li>
                    ))}
                </ul>
                {/*<a*/}
                {/*    href={data.link}*/}
                {/*    className={"btn btn--works-view " + data.buttonClass}*/}
                {/*>*/}
                {/*    View work*/}
                {/*</a>*/}
                <ButtonLink href={data.link} className={"btn--works-view " + data.buttonClass} target={'_blank'}>
                    View work
                </ButtonLink>
            </div>
        </article>
    )
};

export default WorksCard;