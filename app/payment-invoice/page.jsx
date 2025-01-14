import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { FiPrinter } from "react-icons/fi";
import { BsFileEarmarkPdf } from "react-icons/bs";

const paymentInvoice = () => {
    return (
        <div>
            <Navbar title={"Payment Invoice"} path={" / Payments / Payment Invoice"} />
            <div className='mt-4 md:mt-16 p-2 md:p-6'>
                <div className="bg-white w-full relative overflow-x-auto shadow-md py-4 p-2 md:p-6 mt-6 md:mt-8">
                    <div className='flex flex-col gap-6'>

                        <div className='flex flex-wrap gap-0 md:gap-4 justify-start md:justify-between items-center px-2'>
                            <div className='my-4 md:my-0 flex gap-2 justify-center items-center border border-gray-300 p-2'>
                                <Image src={"/assets/main_logo.png"} height={50} width={50} alt='logo' />
                                <h1 className='text-3xl font-semibold text-green-500'>Pro <span className='text-blue-950'>Clinic</span></h1>
                            </div>

                            <h1 className='text-3xl text-blue-950'>INVOICE</h1>
                        </div>

                        <div className='flex flex-wrap gap-0 md:gap-3 justify-start md:justify-between items-center px-2'>
                            <div className='text-blue-950 text-base my-4 md:my-0 '>
                                <h1>Sreet Code</h1>
                                <h1>[City, ST ZIP Code]</h1>
                                <h1>Phone: +00 123456 Fax: 432 1231 3456</h1>
                            </div>

                            <div className='text-blue-950 text-base'>
                                <h1>Invoice # [123]</h1>
                                <h1>Date: Nov 16, 2024</h1>
                            </div>
                        </div>

                        <div className='flex flex-wrap my-6 px-2'>
                            <div>
                                <h1 className='text-pink-500 mb-2'>PATIENT DETAILS:</h1>
                                <h1 className='text-blue-950'><span className='font-bold'>Name:</span> Daniel</h1>
                                <h1 className='text-blue-950'><span className='font-bold'>Address:</span>  60-21/100, Smith street <br />Banglore, India</h1>
                                <h1 className='text-blue-950'><span className='font-bold'>Phone:</span> +91 12345 67890</h1>
                            </div>

                            <div className='ml-0 md:ml-64 mt-4 md:mt-0'>
                                <h1 className='text-blue-950'><span className='font-bold'>Patient ID:</span> PI675</h1>
                                <h1 className='text-blue-950'><span className='font-bold'>Total Days:</span> 10</h1>
                                <h1 className='text-blue-950'><span className='font-bold'>Payment Type:</span> Credit Card</h1>
                                <h1 className='text-blue-950'>1234 5678 9012 3456</h1>
                                <h1 className='text-blue-950'>Paypal</h1>
                            </div>
                        </div>

                        <div className='overflow-x-auto'>
                            <h1 className='mb-2 text-pink-500 font-semibold'>Services:</h1>
                            <table className="w-full text-sm text-left text-gray-600 bg-gray-100 rounded-md border border-gray-300 border-collapse">
                                <thead className="text-sm font-semibold shadow-md border border-b-gray-500 bg-white text-gray-700 border-b border-gray-300">
                                    <tr>
                                        <th className="px-3 py-3 border-r border-gray-300">#</th>
                                        <th className="px-3 py-3 border-r border-gray-300">Service</th>
                                        <th className="px-3 py-3 border-r border-gray-300">Unit Cost</th>
                                        <th className="px-3 py-3 border-r border-gray-300">Discount (%)</th>
                                        <th className="px-3 py-3 border-r border-gray-300">Total</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr className="bg-gray-100 border-b border-gray-300">
                                        <td className="px-3 py-4 border-r border-gray-300">1</td>
                                        <td className="px-3 py-4 border-r border-gray-300">Chest X-ray</td>
                                        <td className="px-3 py-4 border-r border-gray-300">$ 120</td>
                                        <td className="px-3 py-4 border-r border-gray-300">10</td>
                                        <td className="px-3 py-4 border-r border-gray-300">$ 108</td>
                                    </tr>
                                    <tr className="bg-white border-b border-gray-300">
                                        <td className="px-3 py-4 border-r border-gray-300">2</td>
                                        <td className="px-3 py-4 border-r border-gray-300">Injury Operation</td>
                                        <td className="px-3 py-4 border-r border-gray-300">$ 1000</td>
                                        <td className="px-3 py-4 border-r border-gray-300">20</td>
                                        <td className="px-3 py-4 border-r border-gray-300">$ 808</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className='flex justify-end items-end'>
                            <table className="mt-6 table-auto overflow-x-auto w-64 border border-gray-300">
                                <tbody>
                                    <tr className="border bg-gray-100 border-gray-300">
                                        <th className="font-light px-4 py-2 border border-gray-300 text-left">Total</th>
                                        <td className="px-4 py-2 border border-gray-300">$ 1200</td>
                                    </tr>
                                    <tr className="border border-gray-300">
                                        <th className="font-light px-4 py-2 border border-gray-300 text-left">Tax</th>
                                        <td className="px-4 py-2 border border-gray-300">$ 50</td>
                                    </tr>
                                    <tr className="border bg-gray-100 border-gray-300">
                                        <th className="font-light px-4 py-2 border border-gray-300 text-left">Discount</th>
                                        <td className="px-4 py-2 border border-gray-300">$ 212</td>
                                    </tr>
                                    <tr className="border border-gray-300 font-semibold">
                                        <th className="px-4 py-2 border border-gray-300 text-left">Grand Total</th>
                                        <td className="px-4 py-2 border border-gray-300">$ 1038</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className='text-gray-500 border border-gray-300 p-4 w-full'>
                            <p className='mt-2'><span className='font-bold'>Note: </span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur id illo incidunt, iste libero quisquam? A aut cumque fuga fugit iusto libero officia optio quasi, quisquam saepe voluptate voluptatibus voluptatum.</p>
                            <h1 className='font-bold my-4'>Signature</h1>
                        </div>

                        <div className='mt-4 flex justify-center'>
                            <button className='flex items-center gap-2 px-5 py-1 border border-gray-300 hover:bg-gray-200'>
                                <FiPrinter className='text-pink-500' /> Print
                            </button>
                            <button className='flex items-center gap-2 px-5 py-1 border border-gray-300 hover:bg-gray-200'>
                                <BsFileEarmarkPdf className='text-pink-500' /> PDF
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default paymentInvoice