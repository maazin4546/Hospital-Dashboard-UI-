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
            { name: "Dashboard 1", path: "/" },
            { name: "Dashboard 2", path: "/" },
            { name: "Dashboard 3", path: "/" },
        ]
    },
    {
        title: "Patients",
        icon: <FaWheelchair fontSize={20} color="white" />,
        links: [
            { name: "Add Patient", path: "/addpatient" },
            { name: "All Patients", path: "/allpatients" },
            { name: "Patients Details", path: "/" },
            { name: "Edit Patients", path: "/" },
        ]
    },
    {
        title: "Doctors",
        icon: <FaUserDoctor fontSize={20} color="white" />,
        links: [
            { name: "Add Doctors", path: "/" },
            { name: "All Doctors", path: "/" },
            { name: "Doctors Details", path: "/" },
            { name: "Edit Doctors", path: "/" },
        ]
    },
    {
        title: "Appointments",
        icon: <RiCalendarScheduleFill fontSize={20} color="white" />,
        links: [
            { name: "Add Appointment", path: "/" },
            { name: "All Appointment", path: "/" },
            { name: "Appointment Details", path: "/" },
            { name: "Edit Appointment", path: "/" },
        ]
    },
    {
        title: "Payments",
        icon: <BsCurrencyDollar fontSize={20} color="white" />,
        links: [
            { name: "Add Payment", path: "/" },
            { name: "All Payment", path: "/" },
            { name: "Payment Invoice", path: "/" },
        ]
    },
    {
        title: "Room Allotment",
        icon: <IoKeyOutline fontSize={20} color="white" />,
        links: [
            { name: "Add Room Allotment", path: "/" },
            { name: "All Rooms", path: "/" },
            { name: "Edit Room Allotment", path: "/" },
        ]
    },
    {
        title: "UI Kit",
        icon: <IoFolderOpenOutline fontSize={20} color="white" />,
        links: [
            { name: "Typography", path: "/" },
            { name: "Buttons", path: "/" },
            { name: "Cards", path: "/" },
            { name: "Tabs", path: "/" },
            { name: "Accordion", path: "/" },
            { name: "Modals", path: "/" },
            { name: "List & Media Objects", path: "/" },
            { name: "Grid", path: "/" },
        ]
    },
    {
        title: "Tables",
        icon: <TbTableShortcut fontSize={20} color="white" />,
        links: [
            { name: "Typography", path: "/" },
            { name: "Buttons", path: "/" },
            { name: "Cards", path: "/" },
        ]
    },
    {
        title: "Charts",
        icon: <IoPieChartSharp fontSize={20} color="white" />,
        links: [
            { name: "Typography", path: "/" },
            { name: "Buttons", path: "/" },
            { name: "Cards", path: "/" },
        ]
    },
    {
        title: "Maps",
        icon: <SiGooglemaps fontSize={20} color="white" />,
        links: [
            { name: "Typography", path: "/" },
            { name: "Buttons", path: "/" },
            { name: "Cards", path: "/" },
        ]
    },
]