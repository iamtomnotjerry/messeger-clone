import React from "react";

interface DonationInfoProps {
    accountNumber: string;
    bankName: string;
}

const DonationInfo: React.FC<DonationInfoProps> = ({ accountNumber, bankName }) => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Donate to Support Us</h2>
                <div className="max-w-lg mx-auto rounded-lg overflow-hidden shadow-md bg-white p-6">
                    <p className="text-lg leading-relaxed text-gray-800 mb-6">
                        Thank you for considering a donation to support our cause! Your generosity helps us continue our mission.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-800 mb-6">
                        To make a donation, please use the following bank account details:
                    </p>
                    <div className="text-lg leading-relaxed text-gray-800 mb-6">
                        <p className="mb-2"><strong>Method Name:</strong> {bankName}</p>
                        <p className="mb-2"><strong>Phone Number:</strong> {accountNumber}</p>
                    </div>
                    <p className="text-lg leading-relaxed text-gray-800 mb-6">
                        We appreciate your support and contribution to our organization.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default DonationInfo;
``
