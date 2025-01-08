import { FaHome, FaWheelchair } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoFolderOpenOutline, IoKeyOutline, IoPieChartSharp } from "react-icons/io5";
import { TbTableShortcut } from "react-icons/tb";
import { SiGooglemaps } from "react-icons/si";

export const Sidebar_menu = [
    {
        title: "Dashboard",
        icon: <FaHome fontSize={20} color="white" />,
        links: [
            { name: "Dashboard 1" },
            { name: "Dashboard 2" },
            { name: "Dashboard 3" },
        ]
    },
    {
        title: "Patients",
        icon: <FaWheelchair fontSize={20} color="white" />,
        links: [
            { name: "Add Patients" },
            { name: "All Patients" },
            { name: "Patients Details" },
            { name: "Edit Patients" },
        ]
    },
    {
        title: "Doctors",
        icon: <FaUserDoctor fontSize={20} color="white" />,
        links: [
            { name: "Add Doctors" },
            { name: "All Doctors" },
            { name: "Doctors Details" },
            { name: "Edit Doctors" },
        ]
    },
    {
        title: "Appointments",
        icon: <RiCalendarScheduleFill fontSize={20} color="white" />,
        links: [
            { name: "Add Appointment" },
            { name: "All Appointment" },
            { name: "Appointment Details" },
            { name: "Edit Appointment" },
        ]
    },
    {
        title: "Payments",
        icon: <BsCurrencyDollar fontSize={20} color="white" />,
        links: [
            { name: "Add Payment" },
            { name: "All Payment" },
            { name: "Payment Invoice" },
        ]
    },
    {
        title: "Room Allotment",
        icon: <IoKeyOutline fontSize={20} color="white" />,
        links: [
            { name: "Add Room Allotment" },
            { name: "All Rooms" },
            { name: "Edit Room Allotment" },
        ]
    },
    {
        title: "UI Kit",
        icon: <IoFolderOpenOutline  fontSize={20} color="white" />,
        links: [
            { name: "Typography" },
            { name: "Buttons" },
            { name: "Cards" },
            { name: "Tabs" },
            { name: "Accordion" },
            { name: "Modals" },
            { name: "List & Media Objects" },
            { name: "Grid" },
        ]
    },
    {
        title: "Tables",
        icon: <TbTableShortcut fontSize={20} color="white" />,
        links: [
            { name: "Typography" },
            { name: "Buttons" },
            { name: "Cards" },
        ]
    },
    {
        title: "Charts",
        icon: <IoPieChartSharp  fontSize={20} color="white" />,
        links: [
            { name: "Typography" },
            { name: "Buttons" },
            { name: "Cards" },
        ]
    },
    {
        title: "Maps",
        icon: <SiGooglemaps fontSize={20} color="white" />,
        links: [
            { name: "Typography" },
            { name: "Buttons" },
            { name: "Cards" },
        ]
    },
]