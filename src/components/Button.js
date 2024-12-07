import React from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export const ButtonLink = ({children, className, href, target = '_self'}) => {
    const relValue = target === '_blank' ? 'noopener noreferrer' : undefined;
    const buttonRef = React.useRef(null);
    const {observe, unobserve} = useIntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add("visible");
                unobserve(entry.target);
            }
        });
    }, {threshold: 1});
    React.useEffect(() => {
        if (buttonRef.current) {
            observe(buttonRef.current);
        }
    }, [observe, buttonRef]);

    return (
        <a href={href} rel={relValue} target={target}>
            <button ref={buttonRef} className={'btn ' + className}>
                {children}
            </button>
        </a>
    )
};