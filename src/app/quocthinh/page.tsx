'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowLeft, FaChevronUp, FaComment, FaEnvelope } from "react-icons/fa";

export default function QuocThinhInfo() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <Link href="/" className="text-blue-600 hover:underline">
                <FaArrowLeft className="text-lg" />
            </Link>

            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
                <div className="text-center mb-6">
                    <Image src="/member4.jpg" alt="Quốc Thịnh" className="mx-auto rounded-full mb-4" width={200} height={100} />
                    <h1 className="text-3xl font-bold">Quốc Thịnh</h1>
                    <p className="text-lg">Psychotherapy Expert</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
                        <ul className="list-disc pl-6">
                            <li><strong>Date of Birth:</strong> 01 / 01 / 1982</li>
                            <li><strong>Nationality:</strong> Vietnamese</li>
                            <li><strong>Location:</strong> Ho Chi Minh City, Vietnam</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Expertise</h2>
                        <p className="text-gray-700 leading-relaxed">Quốc Thịnh is a highly experienced psychotherapist specializing in:</p>
                        <ul className="list-disc pl-6">
                            <li>Stress Management</li>
                            <li>Anxiety and Depression Counseling</li>
                            <li>Relationship Therapy</li>
                            <li>Behavioral Therapy</li>
                            <li>Life Coaching</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-2">About Quốc Thịnh</h2>
                    <p className="text-gray-700 leading-relaxed">Quốc Thịnh is dedicated to helping individuals achieve mental wellness and personal growth. With over 10 years of experience in psychotherapy, he has helped numerous clients overcome obstacles and lead fulfilling lives.</p>
                    <p className="text-gray-700 leading-relaxed">Combining empathy, expertise, and evidence-based approaches, Quốc Thịnh creates a safe and supportive environment for clients to explore their thoughts, emotions, and behaviors. He believes in the power of collaboration and tailors each therapy session to meet the unique needs and goals of his clients.</p>
                </div>
                <Link href={'/users'}>
                    <button className="fixed bottom-4 right-4 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700">
                        <FaComment size={20} />
                    </button>
                </Link>
            </div>
        </div>
    );
}
