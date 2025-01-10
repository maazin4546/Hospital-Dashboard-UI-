"use client"
import { useRef, useState, useEffect } from "react";
import jsPDF from "jspdf";
import * as XLSX from "xlsx";
import Navbar from '@/components/Navbar';
import { Table_data } from "@/lib/data";

const AllPatients = () => {
    const tableRef = useRef(null);

    const [rowsPerPage, setRowsPerPage] = useState(5); // Default number of rows per page
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredRows, setFilteredRows] = useState(Table_data);

    // Handle export logic
    const handleExport = (e) => {
        const exportFormat = e.target.value;
        if (exportFormat === "Excel") exportToExcel();
        else if (exportFormat === "PDF") exportToPDF(tableRef);
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

    // Pagination calculations
    const totalPages = Math.ceil(filteredRows.length / rowsPerPage);
    const startRow = (currentPage - 1) * rowsPerPage;
    const currentRows = filteredRows.slice(startRow, startRow + rowsPerPage);

    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    // Handle rowsPerPage selection change
    const handleRowsPerPageChange = (e) => {
        setRowsPerPage(Number(e.target.value));
        setCurrentPage(1); // Reset to first page after rows per page change
    };

    // Filter rows based on search query
    useEffect(() => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        const filteredData = Table_data.filter((row) =>
            row.name.toLowerCase().includes(lowerCaseQuery)
        );
        setFilteredRows(filteredData);
        setCurrentPage(1); // Reset to first page when filtering
    }, [searchQuery]);

    // Function to dynamically assign CSS class based on status
    const getStatusClass = (status) => {
        switch (status.toLowerCase()) {
            case "completed":
                return "bg-green-500";
            case "pending":
                return "bg-yellow-500";
            case "scheduled":
                return "bg-blue-500";
            default:
                return "bg-red-500";
        }
    };


    return (
        <div>
            <Navbar title={"Patients"} path={" / Patients / All Patients"} />
            <div className='mt-4 md:mt-16 p-2 md:p-6'>
                <div className="flex justify-center items-center p-2 md:p-0">
                    <div className="bg-white w-full relative overflow-x-auto shadow-md py-4 p-2 md:p-6 mt-6 md:mt-8">
                        <div className='flex flex-col md:flex-row items-center justify-center md:justify-between py-4 md:py-0 mb-2'>
                            <h1 className="text-2xl text-pink-500 mb-4">Patients List</h1>
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

                        <div className='my-4 flex flex-col md:flex-row items-center justify-center md:justify-between gap-2 md:gap-0'>
                            <div className="flex gap-2 items-center">
                                <h1 className="text-gray-500">Show</h1>
                                <select
                                    value={rowsPerPage}
                                    onChange={handleRowsPerPageChange}
                                    className="mt-1 p-2 block w-14 border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                >
                                    <option value={5}>5</option>
                                    <option value={10}>10</option>
                                    <option value={15}>15</option>
                                    <option value={20}>20</option>
                                </select>
                                <h1 className="text-gray-500">entries</h1>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <label className="font-bold block text-sm text-gray-500">Search:</label>
                                <input
                                    type="search"
                                    placeholder="Search By Name"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="mt-1 p-2 block w-full border border-gray-300 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <table ref={tableRef} className="w-full text-sm text-left text-gray-600 bg-gray-100 rounded-md border border-gray-300 border-collapse">
                            <thead className="text-sm font-semibold shadow-md border border-b-gray-500 bg-white text-gray-700 border-b border-gray-300">
                                <tr>
                                    <th className="px-3 py-3 border-r border-gray-300"></th>
                                    <th className="px-3 py-3 border-r border-gray-300">Patient ID</th>
                                    <th className="px-3 py-3 border-r border-gray-300">Patient Name</th>
                                    <th className="px-3 py-3 border-r border-gray-300">Age</th>
                                    <th className="px-3 py-3 border-r border-gray-300">Phone</th>
                                    <th className="px-3 py-3 border-r border-gray-300">Last Visit</th>
                                    <th className="px-3 py-3 border-r border-gray-300">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentRows.map((item, index) => (
                                    <tr key={index} className={`${index % 2 !== 0 ? "bg-white" : "bg-gray-100"} border-b border-gray-300`}>
                                        <td className="px-3 py-4 border-r border-gray-300">
                                            <input type="checkbox" className="h-4 w-4 text-indigo-600" />
                                        </td>
                                        <td className="px-3 py-4 border-r border-gray-300">{item.id}</td>
                                        <td className="px-3 py-4 border-r border-gray-300">{item.name}</td>
                                        <td className="px-3 py-4 border-r border-gray-300">{item.age}</td>
                                        <td className="px-3 py-4 border-r border-gray-300">{item.phone}</td>
                                        <td className="px-3 py-4 border-r border-gray-300">{item.lastvisit}</td>
                                        <td className="px-3 py-4">
                                            <span className={`px-3 py-1 text-white text-xs font-semibold ${getStatusClass(item.status)}`}>
                                                {item.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-2 md:gap-0 my-4">
                            <p className="text-gray-500">
                                Showing {startRow + 1} to {Math.min(startRow + rowsPerPage, filteredRows.length)} of {filteredRows.length} entries
                            </p>

                            <nav aria-label="Page navigation example">
                                <ul className="inline-flex text-sm border border-gray-300 ">
                                    <li>
                                        <button onClick={() => handlePageChange(currentPage - 1)} className="border border-gray-300 px-3 h-8 text-gray-500">
                                            Previous
                                        </button>
                                    </li>
                                    {Array.from({ length: totalPages }).map((_, index) => (
                                        <li key={index}>
                                            <button
                                                onClick={() => handlePageChange(index + 1)}
                                                className={`px-3 h-8 ${currentPage === index + 1 ? "border border-gray-300 text-white bg-[#e57498]" : "text-gray-500"}`}
                                            >
                                                {index + 1}
                                            </button>
                                        </li>
                                    ))}
                                    <li>
                                        <button onClick={() => handlePageChange(currentPage + 1)} className="px-3 h-8 text-pink-500">
                                            Next
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllPatients;
