import Link from "next/link";
import React from "react";

interface MemberProps {
    memberRef: React.RefObject<any>;
}

const Member: React.FC<MemberProps> = ({ memberRef }) => {
    return (
        <section ref={memberRef} className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Our Psychotherapy Experts</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Member 1 */}
                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
                        <div>
                            <img
                                src="/member1.jpg"
                                alt="Member 1"
                                className="w-full h-64 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">Nguyễn Đình Bảo</h3>
                            <p className="text-gray-600">The joy of others is my joy.</p>
                        </div>
                        <Link href={'/bao'}>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mt-4">
                            View Profile
                        </button>
                        </Link>
                    </div>
                    {/* Member 2 */}
                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
                        <div>
                            <img
                                src="/member2.jpg"
                                alt="Member 2"
                                className="w-full h-64 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">Trình Võ</h3>
                            <p className="text-gray-600">Dedicated and very pleased to have been of service.</p>
                        </div>
                        <Link href={'/trinhvo'}>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mt-4">
                            View Profile
                        </button>
                        </Link>
                    </div>
                    {/* Member 3 */}
                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
                        <div>
                            <img
                                src="/member3.jpg"
                                alt="Member 3"
                                className="w-full h-64 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">Phúc Thinh</h3>
                            <p className="text-gray-600">Nothing is impossible.</p>
                        </div>
                        <Link href={'/phucthinh'}>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mt-4">
                            View Profile
                        </button>
                        </Link>
                    </div>
                    {/* Member 4 */}
                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
                        <div>
                            <img
                                src="/member4.jpg"
                                alt="Member 4"
                                className="w-full h-64 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">Quốc Thịnh</h3>
                            <p className="text-gray-600">Never give up, don't lose hope.</p>
                        </div>
                        <Link href={'/quocthinh'}>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mt-4">
                            View Profile
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Member;
