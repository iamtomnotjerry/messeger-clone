import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

interface AboutProps {
    aboutRef: React.RefObject<any>;
}

const About: React.FC<AboutProps> = ({ aboutRef }) => {
    return (
        <section ref={aboutRef} className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="max-w-lg mx-auto rounded-lg overflow-hidden ">
                        <Image
                            src="/about-image.jpg"
                            alt="About Us"
                            objectFit="cover"
                            width={350}
                            height={400}
                        />
                    </div>
                    <div className="md:col-span-2 lg:col-span-2">
                        <p className="text-lg leading-relaxed text-gray-800 mb-6">
                            Welcome to our team of dedicated psychologists at UIT SOCIAL! We provide compassionate and effective mental health care to help you lead a fulfilling life.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-800 mb-6">
                            Our experienced psychologists specialize in clinical psychology, counseling, and behavioral therapy, offering a holistic approach to address your unique needs and promote healing.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-800 mb-6">
                            We create a safe and supportive environment for you to explore your thoughts and emotions without judgment. Together, we can overcome challenges and achieve meaningful change.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-800 mb-6">
                            Whether you&apos;re dealing with anxiety, depression, trauma, or relationship issues, our team is here to help you on your journey to mental wellness. Let&apos;s work towards a brighter future together.
                        </p>
                        <div className="text-center">
                            <Link href="/about" className="text-blue-600 hover:underline">
                                Read more
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
