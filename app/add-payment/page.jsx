"use client"
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';

const addPayment = () => {

    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        age: '',
        phone: '',
        email: '',
        gender: '',
        address: '',
        file: null,
        confirm: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };


    return (
        <div>
            <Navbar title={"Add Payment"} path={" / Payments / Add Payment "} />
            <div className='mt-4 md:mt-16 p-2 md:p-6'>
                <div className="w-full mx-auto bg-white p-6 rounded-sm shadow-md">
                    <h2 className="text-2xl text-pink-500 mb-4">Add Payment</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">

                        <div className='flex gap-4 flex-col md:flex-row justify-center md:justify-between items-center'>
                            {/* Patient ID */}
                            <div className='flex-1 w-full'>
                                <label className="font-bold block text-sm text-gray-500">Patient ID</label>
                                <input
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    placeholder='Patient ID'
                                    required
                                    className="mt-1 p-2 py-3 block w-full border border-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>

                            {/* Patient Name */}
                            <div className='flex-1 w-full'>
                                <label className="font-bold block text-sm text-gray-500">Patient Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    placeholder='Patient Name'
                                    required
                                    className="mt-1 p-2 py-3 block w-full border border-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>

                        </div>

                        <div className='flex gap-4 flex-col md:flex-row justify-center md:justify-between items-center'>

                            {/* Department */}
                            <div className='flex-1 w-full'>
                                <label className="font-bold block text-sm text-gray-500">Department</label>
                                <select
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    placeholder='Department'
                                    required
                                    className="mt-1 p-2 block w-full border border-gray-100 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                >
                                    <option value="male">Neuro</option>
                                    <option value="female">Ortho</option>
                                    <option value="other">General</option>
                                </select>
                            </div>

                            {/* Doctor Name */}
                            <div className='flex-1 w-full'>
                                <label className="font-bold block text-sm text-gray-500"> Doctor Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder='Doctor Name'
                                    required
                                    className="mt-1 p-2 py-3 block w-full border border-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className='flex gap-4 flex-col md:flex-row justify-center md:justify-between items-center'>
                            {/* Admission Date */}
                            <div className='flex-1 w-full'>
                                <label className="font-bold block text-sm text-gray-500">Admission Date</label>
                                <input
                                    type="date"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                    placeholder='Admission Date'
                                    required
                                    className="mt-1 p-2 block w-full border border-gray-100 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>

                            {/* Cost of Treatment */}
                            <div className='flex-1 w-full'>
                                <label className="font-bold block text-sm text-gray-500">Cost of Treatment</label>
                                <input
                                    type="date"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                    placeholder='Cost of Treatment'
                                    required
                                    className="mt-1 p-2 block w-full border border-gray-100 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>


                        <div>
                            <h1 className='px-3 text-3xl text-blue-950 bg-gray-100 p-1 my-6'>Services</h1>
                            <div className=' my-4 flex gap-4 flex-col md:flex-row justify-center md:justify-between items-center'>

                                {/* Service Name */}
                                <div className='flex-1 w-full'>
                                    <label className="font-bold block text-sm text-gray-500">Service Name</label>
                                    <input
                                        type="text"
                                        name="dob"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder='Service Name'
                                        required
                                        className="mt-1 p-2 block w-full border border-gray-100 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>

                                {/* Cost of Treatment */}
                                <div className='flex-1 w-full'>
                                    <label className="font-bold block text-sm text-gray-500">Cost of Treatment</label>
                                    <input
                                        type="tel"
                                        name="dob"
                                        value={formData.age}
                                        onChange={handleChange}
                                        placeholder='Cost of Treatment'
                                        required
                                        className="mt-1 p-2 block w-full border border-gray-100 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <button type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">+ Add Service</button>

                        </div>

                        <div>
                            <h1 className='text-3xl text-blue-950 bg-gray-100 p-1 my-6'>Payment</h1>
                            <div className='px-3 flex gap-4 flex-col md:flex-row justify-center md:justify-between items-center'>

                                {/* Discount (%) */}
                                <div className='flex-1 w-full my-4'>
                                    <label className="font-bold block text-sm text-gray-500">Discount (%)</label>
                                    <input
                                        type="tel"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder='Discount'
                                        required
                                        className="mt-1 p-2 block w-full border border-gray-100 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>

                                {/* Advance Paid */}
                                <div className='flex-1 w-full'>
                                    <label className="font-bold block text-sm text-gray-500">Advance Paid</label>
                                    <input
                                        type="tel"
                                        name="dob"
                                        value={formData.age}
                                        onChange={handleChange}
                                        placeholder='Advance Paid'
                                        required
                                        className="mt-1 p-2 block w-full border border-gray-100 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>

                                {/* Payment Type */}
                                <div className='flex-1 w-full'>
                                    <label className="font-bold block text-sm text-gray-500">Payment Type</label>
                                    <select
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        placeholder='Payment Type'
                                        required
                                        className="mt-1 p-2 block w-full border border-gray-100 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    >
                                        <option value="male">Check</option>
                                        <option value="female">Card</option>
                                        <option value="other">Cash</option>
                                    </select>
                                </div>

                                {/* Card/Check No */}
                                <div className='flex-1 w-full'>
                                    <label className="font-bold block text-sm text-gray-500">Card/Check No</label>
                                    <input
                                        type="text"
                                        name="dob"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder='Card/Check No'
                                        required
                                        className="mt-1 p-2 block w-full border border-gray-100 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                        </div>


                        {/* Confirm Checkbox */}
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="confirm"
                                checked={formData.confirm}
                                onChange={handleChange}
                                required
                                className="h-4 w-4 text-indigo-600 border border-gray-100 py-3 rounded focus:ring-indigo-500"
                            />
                            <label className="ml-2 text-gray-500 text-xs md:text-sm">Please Confirm</label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-[#e57498] text-white py-2 px-5 rounded-md shadow-md hover:bg-[#f281a5] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default addPayment