"use client";
import { Sidebar_menu } from "@/lib/data";
import React, { useState, useEffect } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaArrowLeftLong, FaMobileScreen } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import Image from "next/image";

const Sidebar = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState(null);

    // Set sidebar default state based on screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsSidebarOpen(false);
            } else {
                setIsSidebarOpen(true);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenu = (index) => {
        setActiveMenu((prev) => (prev === index ? null : index)); // Toggle or close other menus
    };

    const handleSidebarToggle = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <div className="flex relative">
            {/* Sidebar */}
            <div
                className={`bg_sidebar fixed top-0 left-0 z-50 flex flex-col h-full ${isSidebarOpen ? "w-64 overflow-y-auto" : "w-16"} text-white transition-all duration-300 ease-in-out`}
            >

                {/* Toggle Button */}
                <button className="flex items-center justify-end p-4 text-gray-300">
                    {!isSidebarOpen ? (
                        <FaLongArrowAltRight fontSize={24} onClick={handleSidebarToggle} />
                    ) : (
                        <FaArrowLeftLong fontSize={24} onClick={handleSidebarToggle} />
                    )}
                </button>

                {/* Logo Section */}
                <div
                    className={`flex items-center justify-start h-16 cursor-pointer ${isSidebarOpen ? "pt-1 pl-4" : "justify-center"
                        }`}
                >
                    <Image src="/assets/main_logo.png" width={60} height={100} alt="Logo" />
                    {isSidebarOpen && (
                        <h1 className="text-4xl ml-2">ProClinic</h1>
                    )}
                </div>

                {/* Navigation Options */}
                <nav className="flex flex-col mt-8 space-y-2 relative">
                    {Sidebar_menu.map((items, index) => {
                        const { title, icon, links } = items;
                        const isOpen = activeMenu === index; // Check if this menu is active

                        return (
                            <div
                                key={index}
                                className="relative group"
                                onMouseEnter={() => setHoveredMenu(index)}
                                onMouseLeave={() => setHoveredMenu(null)}
                            >
                                <button
                                    onClick={() => toggleMenu(index)}
                                    className={`flex items-center justify-between w-full h-fit px-4 py-2 text-gray-300 hover:bg-[#545454] hover:text-white ${isOpen && isSidebarOpen ? "bg-[#666666]" : ""
                                        }`}
                                >
                                    <div className="flex items-center">
                                        {icon}
                                        {isSidebarOpen && <span className="ml-2">{title}</span>}
                                    </div>
                                    {isSidebarOpen && (
                                        <>
                                            {isOpen ? (
                                                <FiChevronUp fontSize={20} className="text-gray-300" />
                                            ) : (
                                                <FiChevronDown
                                                    fontSize={20}
                                                    className="text-gray-300"
                                                />
                                            )}
                                        </>
                                    )}
                                </button>

                                {isSidebarOpen ? (
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-fit" : "max-h-0"
                                            }`}
                                    >
                                        <div className="pt-2 space-y-2 bg-[#818181]">
                                            {links.map((link, subIndex) => (
                                                <a
                                                    key={subIndex}
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#545454] hover:text-white"
                                                >
                                                    {link.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    hoveredMenu === index && (
                                        <div className="absolute left-16 top-0 mt-2 w-48 z-10 bg-[#666666] p-2 shadow-lg">
                                            {links.map((link, subIndex) => (
                                                <a
                                                    key={subIndex}
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                                                >
                                                    {link.name}
                                                </a>
                                            ))}
                                        </div>
                                    )
                                )}
                            </div>
                        );
                    })}

                    <div
                        className={`mt-4 flex-col gap-3 py-10 px-4 bg-[#ba5589a4] p-4 ${!isSidebarOpen ? "hidden" : "flex"
                            }`}
                    >
                        <div className="flex space-x-2">
                            <IoChatbubblesOutline fontSize={24} color="white" />
                            <h1 className="text-xl">Need Help</h1>
                        </div>
                        <hr />
                        <div className="flex space-x-2">
                            <FaMobileScreen fontSize={20} color="white" />
                            <p>+9028104546</p>
                        </div>
                        <div className="flex space-x-2">
                            <MdOutlineMailOutline fontSize={20} color="white" />
                            <p>email@site.com</p>
                        </div>
                        <p>Copy rights © 2025</p>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
