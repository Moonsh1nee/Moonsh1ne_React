import React from "react";
import sprite from "../assets/images/svgsprite/sprite.symbol.svg";

const Icon = ({name}) => (
    <svg className={`icon icon--${name}`}>
        <use xlinkHref={`${sprite}#${name}`}/>
    </svg>
);
export default Icon;