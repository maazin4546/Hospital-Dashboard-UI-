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
            { name: "Patients Details", path: "/patients-details" },
            { name: "Edit Patients", path: "/edit-patient" },
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

export const Table_data = [
    {
        id: 1,
        name: "John Doe",
        age: 35,
        phone: "9876543210",
        lastvisit: "2025-01-01",
        status: "Completed",
    },
    {
        id: 2,
        name: "Jane Smith",
        age: 42,
        phone: "8765432109",
        lastvisit: "2024-12-28",
        status: "Pending",
    },
    {
        id: 3,
        name: "Michael Brown",
        age: 29,
        phone: "7654321098",
        lastvisit: "2025-01-05",
        status: "Scheduled",
    },
    {
        id: 4,
        name: "Emily Davis",
        age: 31,
        phone: "6543210987",
        lastvisit: "2025-01-07",
        status: "Pending",
    },
    {
        id: 5,
        name: "William Johnson",
        age: 48,
        phone: "5432109876",
        lastvisit: "2024-12-31",
        status: "Completed",
    },
    {
        id: 6,
        name: "Sophia Wilson",
        age: 26,
        phone: "4321098765",
        lastvisit: "2025-01-06",
        status: "Scheduled",
    },
    {
        id: 7,
        name: "James Martinez",
        age: 38,
        phone: "3210987654",
        lastvisit: "2025-01-02",
        status: "Cancelled",
    },
    {
        id: 8,
        name: "John Doe",
        age: 35,
        phone: "9876543210",
        lastvisit: "2025-01-01",
        status: "Completed",
    },
    {
        id: 9,
        name: "Jane Smith",
        age: 42,
        phone: "8765432109",
        lastvisit: "2024-12-28",
        status: "Pending",
    },
    {
        id: 10,
        name: "Michael Brown",
        age: 29,
        phone: "7654321098",
        lastvisit: "2025-01-05",
        status: "Scheduled",
    },
    {
        id: 11,
        name: "Emily Davis",
        age: 31,
        phone: "6543210987",
        lastvisit: "2025-01-07",
        status: "Pending",
    },
    {
        id: 12,
        name: "William Johnson",
        age: 48,
        phone: "5432109876",
        lastvisit: "2024-12-31",
        status: "Completed",
    },
    {
        id: 13,
        name: "Sophia Wilson",
        age: 26,
        phone: "4321098765",
        lastvisit: "2025-01-06",
        status: "Scheduled",
    },
    {
        id: 14,
        name: "James Martinez",
        age: 38,
        phone: "3210987654",
        lastvisit: "2025-01-02",
        status: "Cancelled",
    },
    {
        id: 15,
        name: "John Doe",
        age: 35,
        phone: "9876543210",
        lastvisit: "2025-01-01",
        status: "Completed",
    },
    {
        id: 16,
        name: "Jane Smith",
        age: 42,
        phone: "8765432109",
        lastvisit: "2024-12-28",
        status: "Pending",
    },
    {
        id: 17,
        name: "Michael Brown",
        age: 29,
        phone: "7654321098",
        lastvisit: "2025-01-05",
        status: "Scheduled",
    },
    {
        id: 18,
        name: "Emily Davis",
        age: 31,
        phone: "6543210987",
        lastvisit: "2025-01-07",
        status: "Pending",
    },
    {
        id: 19,
        name: "William Johnson",
        age: 48,
        phone: "5432109876",
        lastvisit: "2024-12-31",
        status: "Completed",
    },
    {
        id: 20,
        name: "Sophia Wilson",
        age: 26,
        phone: "4321098765",
        lastvisit: "2025-01-06",
        status: "Scheduled",
    },

];

export const Patient_Visits = [
    {
        name: "Dr. Ayesha Khan",
        cost: 1200,
        visitDate: "2025-01-08",
        status: "Rescheduled"
    },
    {
        name: "Dr. Rajesh Mehta",
        cost: 1500,
        visitDate: "2025-01-09",
        status: "Operation"
    },
    {
        name: "Dr. Priya Sharma",
        cost: 1000,
        visitDate: "2025-01-10",
        status: "Fever"
    },
    {
        name: "Dr. Arjun Reddy",
        cost: 1400,
        visitDate: "2025-01-11",
        status: "Ortho"
    },
    {
        name: "Dr. Sunita Patel",
        cost: 1300,
        visitDate: "2025-01-12",
        status: "General Check-up"
    },
    {
        name: "Dr. Vikram Gupta",
        cost: 1600,
        visitDate: "2025-01-15",
        status: "Injury"
    }
];

export const invoice_data = [
    {
      date: "2025-01-05",
      cost: 1500,
      discount: 200,
      paymentType: "Credit Card",      
      status: "Paid"
    },
    {
      date: "2025-01-07",
      cost: 2000,
      discount: 150,
      paymentType: "Cash",      
      status: "Pending"
    },
    {
      date: "2025-01-09",
      cost: 1200,
      discount: 100,
      paymentType: "UPI",      
      status: "Cancelled"
    },
    {
      date: "2025-01-10",
      cost: 1800,
      discount: 250,
      paymentType: "Net Banking",      
      status: "Paid"
    },
    {
      date: "2025-01-11",
      cost: 1600,
      discount: 200,
      paymentType: "Debit Card",      
      status: "Refunded"
    },
    {
      date: "2025-01-13",
      cost: 2200,
      discount: 300,
      paymentType: "Credit Card",      
      status: "Pending"
    }
  ];
  

  
