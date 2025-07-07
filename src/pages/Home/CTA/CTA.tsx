import { useState } from "react";
import toast from "react-hot-toast";


const CTA = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = () => {
        if (!email) {
            toast.error('Write Your Mail')
        } else {
            setEmail("");
            toast.success("Mail Send Successfully")
        }
    };

    return (
        <section className="bg-white">
            <div className="container mx-auto px-4 my-16 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl">
                    Join us and get the update from anywhere
                </h2>

                <div className="mt-8 lg:mt-0">
                    <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">
                        <input
                            id="email"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-lg sm:mx-2 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="Email Address"
                        />

                        <button
                            onClick={handleSubscribe}
                            className="px-6 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg sm:mx-2 hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                        >
                            Get Started
                        </button>
                    </div>

                    <p className="mt-3 text-sm text-gray-500">
                        Attention! Offer expires in 30 days. Make sure not to miss this opportunity
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CTA;