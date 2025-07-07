import { useState } from "react";
import { Link, NavLink } from "react-router";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links =
        <>
            <NavLink to="/" className={({ isActive }) => `text-gray-400 hover:text-white cursor-pointer px-2 py-1 font-medium ${isActive ? 'bg-gray-800 text-white rounded-md' : ''}`}>Home</NavLink>

            <NavLink to="/books" className={({ isActive }) => `text-gray-400 hover:text-white cursor-pointer px-2 py-1 font-medium ${isActive ? 'bg-gray-800 text-white rounded-md' : ''}`}>All Books</NavLink>

            <NavLink to="/create-book" className={({ isActive }) => `text-gray-400 hover:text-white cursor-pointer px-2 py-1 font-medium ${isActive ? 'bg-gray-800 text-white rounded-md' : ''}`}>Add Books</NavLink>

            <NavLink to="/borrow-summary" className={({ isActive }) => `text-gray-400 hover:text-white cursor-pointer px-2 py-1 font-medium ${isActive ? 'bg-gray-800 text-white rounded-md' : ''}`}>Borrow Summary</NavLink>
        </>

    return (
        <nav className="fixed z-10 bg-black/70 text-white w-full md:px-4 lg:px-6">
            <div className="relative">
                <div className="px-4 py-3 md:flex md:justify-between md:items-center">
                    <div className="flex items-center justify-between">
                        <Link to="/">
                            <h1 className="text-2xl inline-flex gap-3 items-center font-bold">BookMaster
                            </h1>
                            <p className="font-bold text-[13px]  tracking-[8px]">Quick Explore</p>
                        </Link>

                        {/* Mobile menu button */}
                        <div className="flex md:hidden lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="text-gray-700 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                                aria-label="toggle menu"
                            >
                                {isOpen ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 8h16M4 16h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div
                        className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${isOpen ? 'translate-x-0 opacity-100 mt-4' : 'opacity-0 -translate-x-full mt-2'
                            }`}
                    >
                        <div className="flex flex-col md:flex-row md:mx-4 gap-5">
                            {links}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;