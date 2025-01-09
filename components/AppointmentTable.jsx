"use client";

const data = [
    {
        patientName: "John Doe",
        doctor: "Dr. Smith",
        checkup: "Dental",
        date: "10-01-25",
        time: "10:00 AM",
        status: "Completed",
    },
    {
        patientName: "Jane Roe",
        doctor: "Dr. Patel",
        checkup: "Ortho",
        date: "11-01-25",
        time: "11:30 AM",
        status: "Pending",
    },
    {
        patientName: "Michael Johnson",
        doctor: "Dr. Brown",
        checkup: "Ortho",
        date: "12-01-25",
        time: "2:00 PM",
        status: "Scheduled",
    },
    {
        patientName: "Emily Davis",
        doctor: "Dr. Wilson",
        checkup: "Dental",
        date: "16-01-25",
        time: "9:00 AM",
        status: "Completed",
    },
    {
        patientName: "Christopher Lee",
        doctor: "Dr. Taylor",
        checkup: "Ortho",
        date: "22-01-25",
        time: "4:30 PM",
        status: "Cancelled",
    },
];


const AppointmentTable = () => {
    return (
        <div className="flex justify-center items-center p-6 md:p-0">
            <div className="bg-white w-[500px] md:w-[977px] relative overflow-x-auto shadow-md p-6 mt-6 md:mt-8">
                <h1 className="text-2xl text-pink-500 mb-4">Appointments</h1>
                <table className="w-full text-sm text-left text-gray-600 bg-gray-100 rounded-md border border-gray-300 border-collapse">
                    <thead className="text-sm font-semibold shadow-md bg-white text-gray-700 border-b border-gray-300">
                        <tr>
                            <th scope="col" className="px-6 py-3 border-r border-gray-300">Patient name</th>
                            <th scope="col" className="px-6 py-3 border-r border-gray-300">Doctor</th>
                            <th scope="col" className="px-6 py-3 border-r border-gray-300">Checkup</th>
                            <th scope="col" className="px-6 py-3 border-r border-gray-300">Date</th>
                            <th scope="col" className="px-6 py-3 border-r border-gray-300">Time</th>
                            <th scope="col" className="px-6 py-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr
                                key={index}
                                className={`${index % 2 === 0 ? "bg-white" : "bg-gray-100"
                                    } border-b border-gray-300`}
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap border-r border-gray-300"
                                >
                                    {item.patientName}
                                </th>
                                <td className="px-6 py-4 border-r border-gray-300">{item.doctor}</td>
                                <td className="px-6 py-4 border-r border-gray-300">{item.checkup}</td>
                                <td className="px-6 py-4 border-r border-gray-300">{item.date}</td>
                                <td className="px-6 py-4 border-r border-gray-300">{item.time}</td>
                                <td className="px-6 py-4">
                                    <span
                                        className={`px-3 py-1 text-white text-xs font-semibold ${item.status === "Completed"
                                            ? "bg-green-500"
                                            : item.status === "Pending"
                                                ? "bg-yellow-500"
                                                : item.status === "Scheduled"
                                                    ? "bg-blue-500"
                                                    : "bg-red-500"
                                            }`}
                                    >
                                        {item.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>

    );
};

export default AppointmentTable;


