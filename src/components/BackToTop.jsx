import React, { useState } from 'react';
import '../styles/BackToTop.css';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const checkScrollPosition = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    React.useEffect(() => {
        window.addEventListener('scroll', checkScrollPosition);
        return () => {
            window.removeEventListener('scroll', checkScrollPosition);
        };
    }, []);

    return (
        isVisible && (
            <button className="back-to-top" onClick={scrollToTop}>
                ↑
            </button>
        )
    );
};

export default BackToTop;
