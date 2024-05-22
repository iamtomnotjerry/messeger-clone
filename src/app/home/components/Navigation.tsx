import React, { useRef } from "react";
interface NavigationProps {
    aboutRef: React.RefObject<any>;
    memberRef: React.RefObject<any>;
    serviceRef: React.RefObject<any>;
    blogRef: React.RefObject<any>;

}

const Navigation: React.FC<NavigationProps> = ({ aboutRef, memberRef, serviceRef, blogRef }) => {
    const scrollToRef = (ref:any) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className=" text-black py-4 top-0 font-roboto">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">HEADLING BRIDGE</div>
                <ul className="flex space-x-4">
                    <li><a href="#" className="hover:text-gray-300" onClick={() => scrollToRef(aboutRef)}>About</a></li>
                    <li><a href="#" className="hover:text-gray-300" onClick={() => scrollToRef(memberRef)}>Psychotherapy Expert</a></li>
                    <li><a href="#" className="hover:text-gray-300" onClick={() => scrollToRef(serviceRef)}>Service</a></li>
                    <li><a href="#" className="hover:text-gray-300" onClick={() => scrollToRef(blogRef)}>Blog</a></li>
                    <li><a href="Donate" >Donate</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
