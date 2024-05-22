import Link from "next/link";
import DonationInfo from "./Donate";
import { FaArrowLeft } from "react-icons/fa";

const Home = () => {
    return (
        <div>
            <Link href="/" className="text-blue-600 hover:underline">
                <FaArrowLeft className="text-lg" />
            </Link>
            <DonationInfo accountNumber="0944606719" bankName="MOMO" />
        </div>
    )
}
export default Home;