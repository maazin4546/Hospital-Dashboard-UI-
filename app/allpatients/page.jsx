"use client";
import Navbar from '@/components/Navbar'

const data = [
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
];


const allPatients = () => {
    return (
        <div>
            <Navbar title={"Patients"} path={" / Patients / All Patients"} />
            <div className='mt-4 md:mt-16 p-2 md:p-6'>
                <div className="flex justify-center items-center p-2 md:p-0">
                    <div className="bg-white w-full relative overflow-x-auto shadow-md p-2 md:p-6 mt-6 md:mt-8">
                        <h1 className="text-2xl text-pink-500 mb-4">Patients List</h1>
                        <hr />

                        <div className='my-4 flex justify-between items-center'>
                            <div className='flex gap-2 items-center'>
                                <h1 className='text-gray-500'>Show</h1>
                                <select
                                    placeholder='10'
                                    className="mt-1 p-2 block w-14 border border-gray-300 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                >
                                    <option>10</option>
                                    <option>25</option>
                                    <option>50</option>
                                    <option>100</option>
                                </select>
                                <h1 className='text-gray-500'>entries</h1>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <label className="font-bold block text-sm text-gray-500">Search:</label>
                                <input
                                    type="search"
                                    className="mt-1 p-2 block w-full border border-gray-300 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>


                        <table className="w-full text-sm text-left text-gray-600 bg-gray-100 rounded-md border border-gray-300 border-collapse">
                            <thead className="text-sm font-semibold shadow-md bg-white text-gray-700 border-b border-gray-300">
                                <tr>
                                    <th scope="col" className="px-3 py-3 border-r border-gray-300"></th>
                                    <th scope="col" className="px-3 py-3 border-r border-gray-300">Patient ID</th>
                                    <th scope="col" className="px-3 py-3 border-r border-gray-300">Patient Name</th>
                                    <th scope="col" className="px-3 py-3 border-r border-gray-300">Age</th>
                                    <th scope="col" className="px-3 py-3 border-r border-gray-300">Phone</th>
                                    <th scope="col" className="px-3 py-3 border-r border-gray-300">Last Visit</th>
                                    <th scope="col" className="px-3 py-3 border-r border-gray-300">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr
                                        key={index}
                                        className={`${index % 2 === 0 ? "bg-white" : "bg-gray-100"
                                            } border-b border-gray-300`}
                                    >
                                        <td className="px-3 py-4 border-r border-gray-300">
                                            <input type="checkbox" className='h-4 w-4 text-indigo-600 border border-gray-100 py-3 rounded focus:ring-indigo-500' />
                                        </td>
                                        <td className="px-3 py-4 border-r border-gray-300">{item.id}</td>
                                        <td className="px-3 py-4 border-r border-gray-300">{item.name}</td>
                                        <td className="px-3 py-4 border-r border-gray-300">{item.age}</td>
                                        <td className="px-3 py-4 border-r border-gray-300">{item.phone}</td>
                                        <td className="px-3 py-4 border-r border-gray-300">{item.lastvisit}</td>
                                        <td className="px-3 py-4">
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

                        <div className='flex justify-between items-center my-4'>
                            <p className='text-gray-500'>Showing 1 to 10 of 12 entries</p>
                            <nav aria-label="Page navigation example">
                                <ul class="inline-flex -space-x-px text-sm">
                                    <li>
                                        <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight border border-gray-300 text-gray-500">Previous</a>
                                    </li>
                                    <li>
                                        <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-white bg-[#e57498] border border-gray-300">1</a>
                                    </li>
                                    <li>
                                        <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300">2</a>
                                    </li>
                                    <li>                                   
                                        <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight border border-gray-300 text-pink-500">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default allPatients