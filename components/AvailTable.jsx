"use client";

const data = [
    {
        doctor: "Dr. Smith",
        checkup: "Dental",
        status: "Completed",
    },
    {
        doctor: "Dr. Patel",
        checkup: "Ortho",
        status: "Pending",
    },
    {
        doctor: "Dr. Brown",
        checkup: "Ortho",
        status: "Scheduled",
    },
    {
        doctor: "Dr. Wilson",
        checkup: "Dental",
        status: "Completed",
    },
];


const AvailTable = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="bg-white w-[480px] relative overflow-x-auto shadow-md p-6">
                <h1 className="text-2xl text-pink-500 mb-4">Doctors Availability</h1>
                <table className="w-full text-sm text-left text-gray-600 bg-gray-100 rounded-md border border-gray-300 border-collapse">
                    <thead className="text-sm font-semibold shadow-md bg-white text-gray-700 border-b border-gray-300">
                        <tr>
                            <th scope="col" className="px-6 py-3 border-r border-gray-300">Doctor</th>
                            <th scope="col" className="px-6 py-3 border-r border-gray-300">Speciality</th>
                            <th scope="col" className="px-6 py-3">Availability</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr
                                key={index}
                                className={`${index % 2 === 0 ? "bg-white" : "bg-gray-100"
                                    } border-b border-gray-300`}
                            >
                                <td className="px-6 py-4 border-r border-gray-300">{item.doctor}</td>
                                <td className="px-6 py-4 border-r border-gray-300">{item.checkup}</td>
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
    )
}

export default AvailTable