import React, { useRef } from "react";

interface ServiceProps {
    serviceRef: React.RefObject<any>;
}

const Service: React.FC<ServiceProps> = ({ serviceRef }) => {
    return (
        <section ref={serviceRef} className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-xl font-semibold mb-2">Stress Relief</h3>
    <p className="text-gray-600 leading-relaxed">Effective techniques to manage stress and find balance in life.</p>
</div>


<div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-xl font-semibold mb-2">Anxiety Management</h3>
    <p className="text-gray-600 leading-relaxed">Tools and support to overcome anxiety and regain control.</p>
</div>


<div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-xl font-semibold mb-2">Memory Restoration</h3>
    <p className="text-gray-600 leading-relaxed">Innovative solutions to sharpen memory and cognitive abilities.</p>
</div>


<div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-xl font-semibold mb-2">Concentration Enhancement</h3>
    <p className="text-gray-600 leading-relaxed">Strategies to boost focus and improve cognitive performance.</p>
</div>


<div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-xl font-semibold mb-2">Sleep Improvement</h3>
    <p className="text-gray-600 leading-relaxed">Effective protocols for better sleep and overall well-being.</p>
</div>


<div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-xl font-semibold mb-2">Addiction Recovery</h3>
    <p className="text-gray-600 leading-relaxed">Supportive programs to overcome addiction and achieve sobriety.</p>
</div>

                </div>
            </div>
        </section>
    );
}

export default Service;
