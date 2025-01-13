import Navbar from '@/components/Navbar'
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const Appointment_Details = () => {
    return (
        <div>
            <Navbar title={"Appointment Details"} path={" / Appointment / Appointments Details"} />
            <div className='mt-4 md:mt-8 p-2 md:p-6'>
                <div className="bg-white overflow-x-auto text-gray-500 w-full shadow-md py-4 p-3 md:p-6 mt-6 md:mt-8">
                    <h1 className="text-2xl text-pink-500 mb-4">Appointment Details</h1>
                    <hr />
                    <table className="mt-6 table-auto overflow-x-auto w-full border border-gray-300">
                        <tbody>
                            <tr className="border bg-gray-100 border-gray-300">
                                <th className="px-4 py-2 border border-gray-300 text-left">Patient ID</th>
                                <td className="px-4 py-2 border border-gray-300">PT56</td>
                            </tr>
                            <tr className="border border-gray-300">
                                <th className="px-4 py-2 border border-gray-300 text-left">Department</th>
                                <td className="px-4 py-2 border border-gray-300">Dental</td>
                            </tr>
                            <tr className="border bg-gray-100 border-gray-300">
                                <th className="px-4 py-2 border border-gray-300 text-left">Appointment Date</th>
                                <td className="px-4 py-2 border border-gray-300">16-nov-2018</td>
                            </tr>
                            <tr className="border border-gray-300">
                                <th className="px-4 py-2 border border-gray-300 text-left">Time Slot</th>
                                <td className="px-4 py-2 border border-gray-300">10AM-11AM</td>
                            </tr>
                            <tr className="border bg-gray-100 border-gray-300">
                                <th className="px-4 py-2 border border-gray-300 text-left">Token Number</th>
                                <td className="px-4 py-2 border border-gray-300">27</td>
                            </tr>
                            <tr className="border border-gray-300">
                                <th className="px-4 py-2 border border-gray-300 text-left">Problem</th>
                                <td className="px-4 py-2 border border-gray-300">Patient reports persistent migraines with occasional nausea and light sensitivity.</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className='flex flex-col md:flex-row gap-2 mt-4'>
                        <button type="button" className="flex items-center gap-2 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            <FaRegEdit color='white' fontSize={22} />   Edit Appointment
                        </button>

                        <button type="button" className="flex items-center gap-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                            <RiDeleteBin6Line color='white' fontSize={22} />  Delete Appointmnet
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Appointment_Details