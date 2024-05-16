'use client'
import React from 'react';
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

export default function About() {
    return (
        <div className="container mx-auto px-4 py-8">
            <Link href="/" className="text-blue-600 hover:underline">
                <FaArrowLeft className="text-lg" />
            </Link>
            {/* Introduction Section */}
            <section className="mb-12">
                <h1 className="text-4xl font-bold text-center mb-4">About Us</h1>
                <p className="text-lg text-center text-gray-700 leading-relaxed">
                    Welcome to our Psychotherapy Center, where we are dedicated to providing compassionate and professional mental health services. Our team of experts is here to support you on your journey towards emotional well-being and personal growth.
                </p>
            </section>

            {/* Vision and Mission Section */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold text-center mb-4">Our Vision & Mission</h2>
                <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                    <div className="text-center">
                        <h3 className="text-2xl font-semibold mb-2">Vision</h3>
                        <p>
                            Our vision is to create a world where mental health is prioritized, and everyone has access to the support they need to lead a fulfilling life. We strive to break the stigma surrounding mental health and promote a culture of understanding and empathy.
                        </p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl font-semibold mb-2">Mission</h3>
                        <p>
                            Our mission is to provide high-quality, evidence-based psychotherapy services to individuals and families. We are committed to fostering a safe, inclusive, and supportive environment where clients can explore their thoughts, emotions, and behaviors to achieve lasting positive change.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team of Experts Section */}
            <section>
                <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team of Experts</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Expert 1 */}
                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                        <Image src="/member1.jpg" alt="Nguyễn Đình Bảo" className="rounded-full mb-4" width={150} height={150} />
                        <h3 className="text-xl font-semibold">Nguyễn Đình Bảo</h3>
                        <p className="text-gray-600">Psychotherapy Expert</p>
                    </div>
                    {/* Expert 2 */}
                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                        <Image src="/member2.jpg" alt="Trình Võ" className="rounded-full mb-4" width={150} height={150} />
                        <h3 className="text-xl font-semibold">Trình Võ</h3>
                        <p className="text-gray-600">Counseling Specialist</p>
                    </div>
                    {/* Expert 3 */}
                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                        <Image src="/member3.jpg" alt="Phúc Thịnh" className="rounded-full mb-4" width={150} height={150} />
                        <h3 className="text-xl font-semibold">Phúc Thịnh</h3>
                        <p className="text-gray-600">Mental Health Consultant</p>
                    </div>
                    {/* Expert 4 */}
                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                        <Image src="/member4.jpg" alt="Quốc Thịnh" className="rounded-full mb-4" width={150} height={150} />
                        <h3 className="text-xl font-semibold">Quốc Thịnh</h3>
                        <p className="text-gray-600">Behavioral Therapist</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
