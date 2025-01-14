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
            { name: "Admin", path: "/" },
            { name: "Doctor", path: "/" },
            { name: "Patient", path: "/" },
        ]
    },
    {
        title: "Patients",
        icon: <FaWheelchair fontSize={20} color="white" />,
        links: [
            { name: "Add Patient", path: "/add-patient" },
            { name: "All Patients", path: "/all-patients" },
            { name: "Patients Details", path: "/patients-details" },
            { name: "Edit Patients", path: "/edit-patient" },
        ]
    },
    {
        title: "Doctors",
        icon: <FaUserDoctor fontSize={20} color="white" />,
        links: [
            { name: "Add Doctors", path: "/add-doctor" },
            { name: "All Doctors", path: "/all-doctors" },
            { name: "Doctors Details", path: "/doctor-details" },
            { name: "Edit Doctors", path: "/edit-doctor" },
        ]
    },
    {
        title: "Appointments",
        icon: <RiCalendarScheduleFill fontSize={20} color="white" />,
        links: [
            { name: "Add Appointment", path: "/add-appointment" },
            { name: "All Appointment", path: "/all-appointment" },
            { name: "Appointment Details", path: "/appointment-details" },
            { name: "Edit Appointment", path: "/edit-appointment" },
        ]
    },
    {
        title: "Payments",
        icon: <BsCurrencyDollar fontSize={20} color="white" />,
        links: [
            { name: "Add Payment", path: "/add-payment" },
            { name: "All Payment", path: "/all-payment" },
            { name: "Payment Invoice", path: "/payment-invoice" },
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
        status: "Cancelled",
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

export const doctors_data = [
    { id: 1, name: "Dr. Aditi Sharma", experience: 10, phone: "9876543210", specialization: "Cardiologist", availability: "Available" },
    { id: 2, name: "Dr. Rohan Patel", experience: 8, phone: "9876543211", specialization: "Orthopedic", availability: "On Leave" },
    { id: 3, name: "Dr. Kavita Singh", experience: 5, phone: "9876543212", specialization: "Gynecologist", availability: "Available" },
    { id: 4, name: "Dr. Vishal Gupta", experience: 15, phone: "9876543213", specialization: "Neurologist", availability: "Not Available" },
    { id: 5, name: "Dr. Sneha Nair", experience: 7, phone: "9876543214", specialization: "Dermatologist", availability: "Available" },
    { id: 6, name: "Dr. Arjun Mehta", experience: 9, phone: "9876543215", specialization: "General Physician", availability: "On Leave" },
    { id: 7, name: "Dr. Priya Desai", experience: 6, phone: "9876543216", specialization: "Pediatrician", availability: "Available" },
    { id: 8, name: "Dr. Sameer Verma", experience: 12, phone: "9876543217", specialization: "Urologist", availability: "Not Available" },
    { id: 9, name: "Dr. Richa Pandey", experience: 8, phone: "9876543218", specialization: "Psychiatrist", availability: "Available" },
    { id: 10, name: "Dr. Karan Rao", experience: 14, phone: "9876543219", specialization: "Pulmonologist", availability: "Available" },
    { id: 11, name: "Dr. Shweta Jain", experience: 5, phone: "9876543220", specialization: "ENT Specialist", availability: "On Leave" },
    { id: 12, name: "Dr. Anil Thakur", experience: 10, phone: "9876543221", specialization: "Nephrologist", availability: "Available" },
    { id: 13, name: "Dr. Meera Kulkarni", experience: 7, phone: "9876543222", specialization: "Endocrinologist", availability: "Not Available" },
    { id: 14, name: "Dr. Vikram Choudhary", experience: 11, phone: "9876543223", specialization: "Oncologist", availability: "Available" },
    { id: 15, name: "Dr. Sanya Ghosh", experience: 6, phone: "9876543224", specialization: "Ophthalmologist", availability: "Available" },
    { id: 16, name: "Dr. Manish Kapoor", experience: 13, phone: "9876543225", specialization: "Gastroenterologist", availability: "On Leave" },
    { id: 17, name: "Dr. Harsha Joshi", experience: 9, phone: "9876543226", specialization: "Radiologist", availability: "Not Available" },
    { id: 18, name: "Dr. Ravi Bhatt", experience: 5, phone: "9876543227", specialization: "Pathologist", availability: "Available" },
    { id: 19, name: "Dr. Nidhi Agarwal", experience: 10, phone: "9876543228", specialization: "Hematologist", availability: "On Leave" },
    { id: 20, name: "Dr. Sanjay Malhotra", experience: 15, phone: "9876543229", specialization: "Surgeon", availability: "Available" }
];

export const doctor_details = [
    {
        name: "Arjun Mehta",
        condition: "Fractured Arm",
        visitDate: "2024-12-01",
        status: "Recovering"
    },
    {
        name: "Priya Sharma",
        condition: "Migraine",
        visitDate: "2024-11-25",
        status: "Under Observation"
    },
    {
        name: "Rohan Verma",
        condition: "Sprained Ankle",
        visitDate: "2024-12-02",
        status: "Stable"
    },
    {
        name: "Neha Gupta",
        condition: "High Fever",
        visitDate: "2024-12-03",
        status: "Discharged"
    },
    {
        name: "Karan Patel",
        condition: "Diabetes Checkup",
        visitDate: "2024-11-30",
        status: "Stable"
    },
    {
        name: "Aditi Rao",
        condition: "Back Pain",
        visitDate: "2024-11-28",
        status: "Under Observation"
    },
    {
        name: "Vikram Singh",
        condition: "Skin Allergy",
        visitDate: "2024-12-04",
        status: "Recovering"
    },
    {
        name: "Meera Nair",
        condition: "Flu Symptoms",
        visitDate: "2024-12-05",
        status: "Stable"
    },
    {
        name: "Rajesh Khanna",
        condition: "Post-Surgery Recovery",
        visitDate: "2024-11-26",
        status: "Critical"
    },
    {
        name: "Pooja Sethi",
        condition: "Routine Checkup",
        visitDate: "2024-12-06",
        status: "Healthy"
    }
];


export const Appointment_Details = [
    {
        "appointmentId": "AP872",
        "patientId": "P12G",
        "tokenNumber": 1,
        "doctorName": "Dr. A. Sharma",
        "problem": "Fever",
        "status": "Active"
    },
    {
        "appointmentId": "AP873",
        "patientId": "P34X",
        "tokenNumber": 2,
        "doctorName": "Dr. R. Gupta",
        "problem": "Back Pain",
        "status": "Active"
    },
    {
        "appointmentId": "AP874",
        "patientId": "P56T",
        "tokenNumber": 3,
        "doctorName": "Dr. M. Singh",
        "problem": "Diabetes Checkup",
        "status": "Pending"
    },
    {
        "appointmentId": "AP875",
        "patientId": "P78Y",
        "tokenNumber": 4,
        "doctorName": "Dr. N. Patel",
        "problem": "Headache",
        "status": "Pending"
    },
    {
        "appointmentId": "AP876",
        "patientId": "P90Z",
        "tokenNumber": 5,
        "doctorName": "Dr. A. Sharma",
        "problem": "Cough",
        "status": "Active"
    },
    {
        "appointmentId": "AP877",
        "patientId": "P01A",
        "tokenNumber": 6,
        "doctorName": "Dr. R. Gupta",
        "problem": "High Blood Pressure",
        "status": "Pending"
    },
    {
        "appointmentId": "AP878",
        "patientId": "P23B",
        "tokenNumber": 7,
        "doctorName": "Dr. M. Singh",
        "problem": "Chest Pain",
        "status": "Active"
    },
    {
        "appointmentId": "AP879",
        "patientId": "P45C",
        "tokenNumber": 8,
        "doctorName": "Dr. N. Patel",
        "problem": "Allergy",
        "status": "Active"
    },
    {
        "appointmentId": "AP880",
        "patientId": "P67D",
        "tokenNumber": 9,
        "doctorName": "Dr. A. Sharma",
        "problem": "Skin Rash",
        "status": "Pending"
    },
    {
        "appointmentId": "AP881",
        "patientId": "P89E",
        "tokenNumber": 10,
        "doctorName": "Dr. R. Gupta",
        "problem": "Eye Infection",
        "status": "Active"
    },
    {
        "appointmentId": "AP882",
        "patientId": "P10F",
        "tokenNumber": 11,
        "doctorName": "Dr. M. Singh",
        "problem": "Stomach Pain",
        "status": "Pending"
    },
    {
        "appointmentId": "AP883",
        "patientId": "P32G",
        "tokenNumber": 12,
        "doctorName": "Dr. N. Patel",
        "problem": "Migraine",
        "status": "Active"
    },
    {
        "appointmentId": "AP884",
        "patientId": "P54H",
        "tokenNumber": 13,
        "doctorName": "Dr. A. Sharma",
        "problem": "Cold",
        "status": "Pending"
    },
    {
        "appointmentId": "AP885",
        "patientId": "P76I",
        "tokenNumber": 14,
        "doctorName": "Dr. R. Gupta",
        "problem": "Sinusitis",
        "status": "Active"
    },
    {
        "appointmentId": "AP886",
        "patientId": "P98J",
        "tokenNumber": 15,
        "doctorName": "Dr. M. Singh",
        "problem": "Arthritis",
        "status": "Active"
    },
    {
        "appointmentId": "AP887",
        "patientId": "P21K",
        "tokenNumber": 16,
        "doctorName": "Dr. N. Patel",
        "problem": "Asthma",
        "status": "Pending"
    },
    {
        "appointmentId": "AP888",
        "patientId": "P43L",
        "tokenNumber": 17,
        "doctorName": "Dr. A. Sharma",
        "problem": "Earache",
        "status": "Active"
    },
    {
        "appointmentId": "AP889",
        "patientId": "P65M",
        "tokenNumber": 18,
        "doctorName": "Dr. R. Gupta",
        "problem": "High Cholesterol",
        "status": "Active"
    },
    {
        "appointmentId": "AP890",
        "patientId": "P87N",
        "tokenNumber": 19,
        "doctorName": "Dr. M. Singh",
        "problem": "Thyroid Checkup",
        "status": "Pending"
    },
    {
        "appointmentId": "AP891",
        "patientId": "P09O",
        "tokenNumber": 20,
        "doctorName": "Dr. N. Patel",
        "problem": "Dental Checkup",
        "status": "Active"
    }
]

export const Payment_Data = [
    {
        "patientName": "Amit Kumar",
        "doctorName": "Dr. Rajesh Gupta",
        "serviceName": "General Consultation",
        "charges": 500,
        "discount": 10,
        "status": "Completed"
    },
    {
        "patientName": "Priya Sharma",
        "doctorName": "Dr. Neha Singh",
        "serviceName": "Dental Cleaning",
        "charges": 1200,
        "discount": 5,
        "status": "Pending"
    },
    {
        "patientName": "Rahul Verma",
        "doctorName": "Dr. Sanjay Patel",
        "serviceName": "Eye Checkup",
        "charges": 800,
        "discount": 15,
        "status": "Completed"
    },
    {
        "patientName": "Suman Mishra",
        "doctorName": "Dr. Kavita Mehra",
        "serviceName": "Cardiology Consultation",
        "charges": 1500,
        "discount": 0,
        "status": "Cancelled"
    },
    {
        "patientName": "Vikas Singh",
        "doctorName": "Dr. Manish Desai",
        "serviceName": "Orthopedic Consultation",
        "charges": 2000,
        "discount": 10,
        "status": "Completed"
    },
    {
        "patientName": "Rita Gupta",
        "doctorName": "Dr. Alok Jain",
        "serviceName": "Dermatology Treatment",
        "charges": 2500,
        "discount": 20,
        "status": "Completed"
    },
    {
        "patientName": "Anil Yadav",
        "doctorName": "Dr. Ramesh Chandra",
        "serviceName": "ENT Checkup",
        "charges": 700,
        "discount": 5,
        "status": "Pending"
    },
    {
        "patientName": "Sunita Rao",
        "doctorName": "Dr. Anjali Kapoor",
        "serviceName": "Gynecology Consultation",
        "charges": 1800,
        "discount": 0,
        "status": "Completed"
    },
    {
        "patientName": "Karan Malhotra",
        "doctorName": "Dr. Suresh Nair",
        "serviceName": "Physiotherapy Session",
        "charges": 1000,
        "discount": 10,
        "status": "Pending"
    },
    {
        "patientName": "Geeta Iyer",
        "doctorName": "Dr. Naveen Reddy",
        "serviceName": "Nutrition Counseling",
        "charges": 1500,
        "discount": 8,
        "status": "Completed"
    },
    {
        "patientName": "Akhil Bhatia",
        "doctorName": "Dr. Pooja Agrawal",
        "serviceName": "Vaccination",
        "charges": 500,
        "discount": 0,
        "status": "Completed"
    },
    {
        "patientName": "Neha Jain",
        "doctorName": "Dr. Vijay Sinha",
        "serviceName": "Pediatric Consultation",
        "charges": 1300,
        "discount": 5,
        "status": "Cancelled"
    },
    {
        "patientName": "Rohan Desai",
        "doctorName": "Dr. Priyanka Rao",
        "serviceName": "Neurology Consultation",
        "charges": 2500,
        "discount": 10,
        "status": "Completed"
    },
    {
        "patientName": "Sneha Kapoor",
        "doctorName": "Dr. Abhay Kulkarni",
        "serviceName": "General Checkup",
        "charges": 600,
        "discount": 0,
        "status": "Pending"
    },
    {
        "patientName": "Aarti Pandey",
        "doctorName": "Dr. Meenakshi Tiwari",
        "serviceName": "Psychiatric Counseling",
        "charges": 2200,
        "discount": 15,
        "status": "Completed"
    },
    {
        "patientName": "Rakesh Nair",
        "doctorName": "Dr. Shreya Iyer",
        "serviceName": "Skin Treatment",
        "charges": 3000,
        "discount": 12,
        "status": "Completed"
    },
    {
        "patientName": "Varun Mehta",
        "doctorName": "Dr. Kiran Bedi",
        "serviceName": "Dental Surgery",
        "charges": 5000,
        "discount": 10,
        "status": "Pending"
    },
    {
        "patientName": "Divya Reddy",
        "doctorName": "Dr. Sameer Kulkarni",
        "serviceName": "Physical Therapy",
        "charges": 1200,
        "discount": 5,
        "status": "Completed"
    },
    {
        "patientName": "Pooja Patel",
        "doctorName": "Dr. Ravi Shankar",
        "serviceName": "Endocrinology Consultation",
        "charges": 2800,
        "discount": 7,
        "status": "Pending"
    },
    {
        "patientName": "Ajay Verma",
        "doctorName": "Dr. Sunil Joshi",
        "serviceName": "Heart Checkup",
        "charges": 4000,
        "discount": 0,
        "status": "Completed"
    }
]
