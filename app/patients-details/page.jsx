"use client"
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import Navbar from '@/components/Navbar'
import { invoice_data, Patient_Visits } from '@/lib/data'
import { useRef } from 'react';
import { IoIosArrowRoundDown } from "react-icons/io";

const PatientsDetails = () => {

    const tableRef = useRef(null);

    // Handle export logic
    const handleExport = (e) => {
        const exportFormat = e.target.value;
        if (exportFormat === "Excel") exportToExcel();
        else if (exportFormat === "PDF") exportToPDF();
        else if (exportFormat === "Word") exportToWord();
    };

    const exportToPDF = () => {
        const doc = new jsPDF();
        doc.autoTable({ html: tableRef.current });
        doc.save("PatientsList.pdf");
    };

    const exportToExcel = () => {
        const worksheet = XLSX.utils.table_to_sheet(tableRef.current);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Patients List");
        XLSX.writeFile(workbook, "PatientsList.xlsx");
    };

    const exportToWord = () => {
        const tableHTML = tableRef.current.outerHTML;
        const blob = new Blob(['\ufeff', tableHTML], { type: 'application/msword' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "PatientsList.doc";
        link.click();
    };

    // Function to dynamically assign CSS class based on status
    const getStatusClass = (status) => {
        switch (status.toLowerCase()) {
            case "paid":
                return "bg-green-500";
            case "pending":
                return "bg-yellow-500";
            default:
                return "bg-red-500";
        }
    };

    return (
        <div>
            <Navbar title={"Patient Details"} path={" / Patients / Patient Details"} />

            <div className='mt-4 md:mt-16 p-2 md:p-6'>

                <div className='flex flex-col md:flex-row items-center justify-center md:justify-between gap-3'>
                    <div className="bg-white overflow-x-auto flex-1 text-gray-500 w-full relative shadow-md py-4 p-3 md:p-6 mt-6 md:mt-8">
                        <h1 className="text-2xl text-pink-500 mb-4">Patients Details</h1>
                        <hr className='bg-red-500' />
                        <table className="table-auto w-full border border-gray-300">
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

                    <div className="bg-white overflow-x-auto flex-1 w-full relative shadow-md py-4 p-3 md:p-6 mt-6 md:mt-8">
                        <div className='flex flex-col md:flex-row items-center justify-center md:justify-between py-4 md:py-0 mb-2'>
                            <h1 className="text-2xl text-pink-500 mb-4">Patient Visits</h1>
                            <div className='flex gap-2 items-center'>
                                <h1 className='text-gray-500'>Export:</h1>
                                <select
                                    onChange={handleExport}
                                    className="block w-24 p-1 py-2 border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                >
                                    <option value="">Select</option>
                                    <option value="PDF">PDF</option>
                                    <option value="Excel">Excel</option>
                                    <option value="Word">Word</option>
                                </select>
                            </div>
                        </div>
                        <hr />

                        <table ref={tableRef} className="w-full text-sm text-left text-gray-500 bg-gray-100 rounded-md border border-gray-300 border-collapse">
                            <thead className="text-sm font-semibold border border-b-gray-500 bg-white text-gray-700 border-b border-gray-300">
                                <tr>
                                    <th className="px-3 py-3 border-r border-gray-300">Doctor Name</th>
                                    <th className="px-3 py-3 border-r border-gray-300">Cost</th>
                                    <th className="px-3 py-3 border-r border-gray-300">Visit Date</th>
                                    <th className="px-3 py-3 border-r border-gray-300">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Patient_Visits.map((item, index) => (
                                    <tr key={index} className={`${index % 2 !== 0 ? "bg-white" : "bg-gray-100"} border-b border-gray-300`}>
                                        <td className="px-3 py-4 border-r border-gray-300">{item.name}</td>
                                        <td className="px-3 py-4 border-r border-gray-300">₹{item.cost}</td>
                                        <td className="px-3 py-4 border-r border-gray-300">{item.visitDate}</td>
                                        <td className="px-3 py-4 border-r border-gray-300">{item.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="bg-white w-full overflow-x-auto relative shadow-md py-4 p-3 md:p-6 mt-6 md:mt-8">
                    <div className='flex flex-col md:flex-row items-center justify-center md:justify-between py-4 md:py-0 mb-2'>
                        <h1 className="text-2xl text-pink-500 mb-4">Patient Payment Transactions</h1>
                        <div className='flex gap-2 items-center'>
                            <h1 className='text-gray-500'>Export:</h1>
                            <select
                                onChange={handleExport}
                                className="block w-24 p-1 py-2 border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            >
                                <option value="">Select</option>
                                <option value="PDF">PDF</option>
                                <option value="Excel">Excel</option>
                                <option value="Word">Word</option>
                            </select>
                        </div>
                    </div>
                    <hr />

                    <table ref={tableRef} className="w-full text-sm text-left text-gray-600 bg-gray-100 rounded-md border border-gray-300 border-collapse">
                        <thead className="text-sm font-semibold shadow-md border border-b-gray-500 bg-white text-gray-700 border-b border-gray-300">
                            <tr>
                                <th className="px-3 py-3 border-r border-gray-300">Date</th>
                                <th className="px-3 py-3 border-r border-gray-300">Cost</th>
                                <th className="px-3 py-3 border-r border-gray-300">Discount</th>
                                <th className="px-3 py-3 border-r border-gray-300">Payment Type</th>
                                <th className="px-3 py-3 border-r border-gray-300">Invoice</th>
                                <th className="px-3 py-3 border-r border-gray-300">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {invoice_data.map((item, index) => (
                                <tr key={index} className={`${index % 2 !== 0 ? "bg-white" : "bg-gray-100"} border-b border-gray-300`}>
                                    <td className="px-3 py-4 border-r border-gray-300">{item.date}</td>
                                    <td className="px-3 py-4 border-r border-gray-300">₹{item.cost}</td>
                                    <td className="px-3 py-4 border-r border-gray-300">₹{item.discount}</td>
                                    <td className="px-3 py-4 border-r border-gray-300">{item.paymentType}</td>
                                    <td className="px-3 py-4 border-r border-gray-300">
                                        <button className="flex items-center justify-center gap-1 text-lg text-sky-600 border border-sky-600 px-4 py-1 rounded-md hover:text-white hover:bg-sky-600 group transition-all duration-300">
                                            <IoIosArrowRoundDown fontSize={24} className="text-sky-600 group-hover:text-white transition-colors duration-300" />
                                            Invoice
                                        </button>

                                    </td>

                                    <td className="px-3 py-4">
                                        <span className={`px-3 py-1 text-white text-xs font-semibold ${getStatusClass(item.status)}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PatientsDetails