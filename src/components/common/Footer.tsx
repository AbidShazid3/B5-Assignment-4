import { Link } from "react-router";


const Footer = () => {
    return (
        <footer className="bg-black/85 text-white mt-16">
            <div className="container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row">
                <Link to="/">
                    <h1 className="text-2xl inline-flex gap-3 items-center font-bold">BookMaster
                    </h1>
                    <p className="font-bold text-[13px]  tracking-[8px]">Quick Explore</p>
                </Link>
                <div className="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
                    <a href="#" className="text-sm text-gray-300 transition-colors duration-300 hover:text-blue-500">
                        Overview
                    </a>
                    <a href="#" className="text-sm text-gray-300 transition-colors duration-300 hover:text-blue-500">
                        Features
                    </a>
                    <a href="#" className="text-sm text-gray-300 transition-colors duration-300 hover:text-blue-500">
                        Pricing
                    </a>
                    <a href="#" className="text-sm text-gray-300 transition-colors duration-300 hover:text-blue-500">
                        Careers
                    </a>
                    <a href="#" className="text-sm text-gray-300 transition-colors duration-300 hover:text-blue-500">
                        Help
                    </a>
                    <a href="#" className="text-sm text-gray-300 transition-colors duration-300 hover:text-blue-500">
                        Privacy
                    </a>
                </div>

                <p className="mt-6 text-sm text-white lg:mt-0">
                    © Copyright 2025 BookMaster.
                </p>
            </div>
        </footer>

    );
};

export default Footer;