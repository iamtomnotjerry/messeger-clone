'use client'
import React, { useRef, useEffect, useState } from "react";
import { FaChevronUp } from 'react-icons/fa';
import Navigation from "./components/Navigation";
import Banner from "./components/Banner";
import About from "./components/About";
import Member from "./components/Member";
import Service from "./components/Service";
import Blog from "./components/Blog";

const Home = () => {
    const aboutRef = useRef(null);
    const memberRef = useRef(null);
    const serviceRef = useRef(null);
    const blogRef = useRef(null);
    const [showScrollButton, setShowScrollButton] = useState(false);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setShowScrollButton(true);
        } else {
            setShowScrollButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <Navigation aboutRef={aboutRef} memberRef={memberRef} serviceRef={serviceRef} blogRef={blogRef} contactRef={undefined} />
            <Banner />
            <About aboutRef={aboutRef} />
            <Member memberRef={memberRef} />
            <Service serviceRef={serviceRef} />
            <Blog blogRef={blogRef} />

            {/* Scroll to top button */}
            {showScrollButton && (
                <button onClick={handleScrollToTop} className="fixed bottom-4 right-4 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700">
                    <FaChevronUp size={20} />
                </button>
            )}
        </div>
    );
}

export default Home;
