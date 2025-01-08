import { MdOutlinePersonOutline } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { PiMicrophoneStageLight } from "react-icons/pi";
import { BsArrowsFullscreen } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="bg-slate-100 h-16">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-4">
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <div className="flex justify-end items-center space-x-3">
                        <RxHamburgerMenu fontSize={30} className="text-black bg-slate-300 p-2 rounded-full cursor-pointer" />
                        <BsArrowsFullscreen fontSize={30} className="text-black bg-slate-300 p-2 rounded-full cursor-pointer" />
                        <IoIosSearch fontSize={30} className="text-black bg-slate-300 p-2 rounded-full cursor-pointer" />
                        <PiMicrophoneStageLight fontSize={30} className="text-black bg-slate-300 p-2 rounded-full cursor-pointer" />
                        <MdOutlinePersonOutline fontSize={30} className="text-black bg-slate-300 p-2 rounded-full cursor-pointer" />
                    </div>
                </div>
            </div>

            <div className="bg-[#666666] flex items-center justify-between px-4 py-2">
                <h1 className="text-white text-2xl">Quick Statistics</h1>
                <div className="flex space-x-2 bg-[#e57498] rounded-3xl p-2 px-3 cursor-pointer">
                    <FaHome fontSize={20} color="white" />
                    <h1 className="text-white"> / Dashboard</h1>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
