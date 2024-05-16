import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const Blog = ({ blogRef }) => {
    return (
        <section ref={blogRef} className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Latest Blog Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Blog Post 1 */}
                    <Link href={'/Meat'} className="hover:scale-105 transform transition-transform duration-300">
                    <div className=" bg-white rounded-lg shadow-md overflow-hidden h-full">
                        <div className="relative h-64">
                            <Image src="/meat.jpg" alt="Blog Post 1" layout="fill" objectFit="cover" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Meat doesn't make you fat</h3>
                            
                        </div>
                    </div>
                    </Link >
                    {/* Blog Post 2 */}
                    <Link href={'Fat'} className="hover:scale-105 transform transition-transform duration-300">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                        <div className="relative h-64">
                            <Image src="/fat.jpg" alt="Blog Post 2" layout="fill" objectFit="cover" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">The reason we are fat</h3>
                            
                        </div>
                    </div>
                    </Link>
                    {/* Blog Post 3 */}
                    <Link href={'Diet'} className="hover:scale-105 transform transition-transform duration-300">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                        <div className="relative h-64">
                            <Image src="/diet.jpg" alt="Blog Post 3" layout="fill" objectFit="cover" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">DAS Diet - Diet method</h3>
                            
                        </div>
                    </div>
                    </Link>
                    {/* Blog Post 4 */}
                    <Link href={'Insomnia'} className="hover:scale-105 transform transition-transform duration-300">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                        <div className="relative h-64">
                            <Image src="/sleep.jpg" alt="Blog Post 4" layout="fill" objectFit="cover" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Insomnia</h3>
                            
                        </div>
                    </div>
                    </Link>
                    <Link href={'Mindful'} className="hover:scale-105 transform transition-transform duration-300">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                        <div className="relative h-64">
                            <Image src="/mind.jpg" alt="Blog Post 4" layout="fill" objectFit="cover" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Mindful Healing</h3>
                            
                        </div>
                    </div>
                    </Link>
                    <Link href={'Power'} className="hover:scale-105 transform transition-transform duration-300">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                        <div className="relative h-64">
                            <Image src="/power.jpg" alt="Blog Post 4" layout="fill" objectFit="cover" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">The Power of Vulnerability</h3>
                            
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Blog;
