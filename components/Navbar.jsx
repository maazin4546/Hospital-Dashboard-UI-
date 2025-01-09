import { MdOutlinePersonOutline } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { PiMicrophoneStageLight } from "react-icons/pi";
import { BsArrowsFullscreen } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="bg-slate-100 md:h-16">
            <div className="flex items-center justify-end p-4">
                <div className="w-full" id="navbar-default">
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
