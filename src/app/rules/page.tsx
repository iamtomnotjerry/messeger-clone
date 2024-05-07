import React from 'react';

const Rules = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-semibold mb-8 text-center text-purple-600 font-serif">Rules</h1>
            <ul className="list-disc pl-6 text-lg font-medium">
                <li className="mb-4 text-blue-600">Respect others&apos; privacy and boundaries.</li>
                <li className="mb-4 text-green-600">Avoid offensive language and harassment.</li>
                <li className="mb-4 text-red-600">Do not share personal information with strangers.</li>
                <li className="mb-4 text-yellow-600">Report any abusive behavior to the admin.</li>
                <li className="mb-4 text-indigo-600">Stay on topic during conversations.</li>
                <li className="mb-4 text-pink-600">Use appropriate language and tone.</li>
                <li className="mb-4 text-purple-600">Refrain from spamming or flooding the chat.</li>
                <li className="mb-4 text-orange-600">Be mindful of cultural differences.</li>
                <li className="mb-4 text-teal-600">Any violation of these rules may result in account suspension.</li>
            </ul>
        </div>
    );
};

export default Rules;
