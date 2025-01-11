import Navbar from '@/components/Navbar';
import { doctor_details } from '@/lib/data';
import Image from 'next/image';
import React from 'react'

const doctorDetails = () => {
    return (
        <div>
            <Navbar title={"Doctor Details"} path={" / Doctors / Doctors Details"} />
            <div className='mt-4 md:mt-8 p-2 md:p-6'>
                <div className="bg-white overflow-x-auto text-gray-500 w-full shadow-md py-4 p-3 md:p-6 mt-6 md:mt-8">
                    <h1 className="text-2xl text-pink-500 mb-4">Doctor Details</h1>
                    <hr />

                    <div className='flex gap-4 flex-col md:flex-row justify-center md:justify-between mt-4'>
                        <div className='border border-gray-300 w-auto md:w-96'>
                            <Image src={"/assets/doctor.jpeg"} width={200} height={200} className='w-full' alt='bg' />
                            <div className='p-4'>
                                <h1 className='text-2xl text-blue-950 my-3'>Dr Daniel Smith</h1>
                                <p className='text-gray-500 mb-3'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button type="button" className=" mb-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Edit Doctor</button>
                                <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete Doctor</button>
                            </div>
                        </div>


                        <table className="table-auto overflow-x-auto w-auto md:w-[680px] h-[300px] border border-gray-300">
                            <tbody>
                                <tr className="border border-gray-300">
                                    <th className="px-4 py-2 border border-gray-300 text-left">Name</th>
                                    <td className="px-4 py-2 border border-gray-300">Daniel Smith</td>
                                </tr>
                                <tr className="border border-gray-300">
                                    <th className="px-4 py-2 border border-gray-300 text-left">Date of Birth</th>
                                    <td className="px-4 py-2 border border-gray-300">26-10-1989</td>
                                </tr>
                                <tr className="border border-gray-300">
                                    <th className="px-4 py-2 border border-gray-300 text-left">Gender</th>
                                    <td className="px-4 py-2 border border-gray-300">Male</td>
                                </tr>
                                <tr className="border border-gray-300">
                                    <th className="px-4 py-2 border border-gray-300 text-left">Address</th>
                                    <td className="px-4 py-2 border border-gray-300">Koramangala Banglore, India</td>
                                </tr>
                                <tr className="border border-gray-300">
                                    <th className="px-4 py-2 border border-gray-300 text-left">Phone</th>
                                    <td className="px-4 py-2 border border-gray-300">+91 11111 11111</td>
                                </tr>
                                <tr className="border border-gray-300">
                                    <th className="px-4 py-2 border border-gray-300 text-left">Email</th>
                                    <td className="px-4 py-2 border border-gray-300">your@email.com</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="bg-white overflow-x-auto text-gray-500 w-full shadow-md py-4 p-3 md:p-6 mt-6 md:mt-8">
                    <h1 className="text-2xl text-pink-500 mb-4">Doctor Activity</h1>
                    <hr />
                    <table className="w-full text-sm text-left text-gray-600 bg-gray-100 rounded-md border border-gray-300 border-collapse">
                        <thead className="text-sm font-semibold shadow-md border border-b-gray-500 bg-white text-gray-700 border-b border-gray-300">
                            <tr>
                                <th className="px-3 py-3 border-r border-gray-300">Patient Name</th>
                                <th className="px-3 py-3 border-r border-gray-300">Injury/Condition</th>
                                <th className="px-3 py-3 border-r border-gray-300">Visit Date</th>
                                <th className="px-3 py-3 border-r border-gray-300">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {doctor_details.map((item, index) => (
                                <tr key={index} className={`${index % 2 !== 0 ? "bg-white" : "bg-gray-100"} border-b border-gray-300`}>
                                    <td className="px-3 py-4 border-r border-gray-300">{item.name}</td>
                                    <td className="px-3 py-4 border-r border-gray-300">{item.condition}</td>
                                    <td className="px-3 py-4 border-r border-gray-300">{item.visitDate}</td>
                                    <td className="px-3 py-4 border-r border-gray-300">{item.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default doctorDetails;