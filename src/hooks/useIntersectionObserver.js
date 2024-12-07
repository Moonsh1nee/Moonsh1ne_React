import { useEffect, useRef } from 'react';

const useIntersectionObserver = (callback, options) => {
    const observer = useRef(null);

    useEffect(() => {
        observer.current = new IntersectionObserver(callback, options);
        return () => observer.current.disconnect();
    }, [callback, options]);

    const observe = (element) => {
        if (observer.current && element) {
            observer.current.observe(element);
        }
    };

    const unobserve = (element) => {
        if (observer.current && element) {
            observer.current.unobserve(element);
        }
    };

    return { observe, unobserve };
};

export default useIntersectionObserver;
