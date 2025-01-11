"use client"
import Navbar from '@/components/Navbar';
import { useState } from 'react';


const editPatient = () => {

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

    return (
        <div>
            <Navbar title={"Edit Patient"} path={" / Patients / Edit Patient"} />

            <div className='mt-4 md:mt-16 p-2 md:p-6'>
                <div className="w-full mx-auto bg-white p-6 rounded-sm shadow-md">
                    <h2 className="text-2xl text-pink-500 mb-4">Edit Patient</h2>
                    <hr />
                    <form className="space-y-4">

                        <div className='flex gap-4 flex-col md:flex-row justify-center md:justify-between items-center'>
                            {/* Name */}
                            <div className='flex-1 w-full'>
                                <label className="font-bold block text-sm text-gray-500">Patient Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value="Daniel Smith"
                                    onChange={handleChange}
                                    className="mt-1 p-2 py-3 block w-full border border-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>

                            {/* Date of Birth */}
                            <div className='flex-1 w-full'>
                                <label className="font-bold block text-sm text-gray-500">Date of Birth</label>
                                <input
                                    type="date"
                                    name="dob"
                                    placeholder="19-Nov-2001"
                                    className="mt-1 p-2 block w-full border border-gray-100 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className='flex gap-4 flex-col md:flex-row justify-center md:justify-between items-center'>
                            {/* Age */}
                            <div className='flex-1 w-full'>
                                <label className="font-bold block text-sm text-gray-500">Age</label>
                                <input
                                    type="number"
                                    name="age"
                                    value="23"
                                    onChange={handleChange}
                                    className="mt-1 p-2 block w-full border border-gray-100 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>

                            {/* Phone */}
                            <div className='flex-1 w-full'>
                                <label className="font-bold block text-sm text-gray-500">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value="90345 67890"
                                    onChange={handleChange}
                                    className="mt-1 p-2 block w-full border border-gray-100 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className='flex gap-4 flex-col md:flex-row justify-center md:justify-between items-center'>
                            {/* Email */}
                            <div className='flex-1 w-full'>
                                <label className="font-bold block text-sm text-gray-500">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value="email@gmail.com"
                                    onChange={handleChange}
                                    className="mt-1 p-2 block w-full border border-gray-100 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>

                            {/* Gender */}
                            <div className='flex-1 w-full'>
                                <label className="font-bold block text-sm text-gray-500">Gender</label>
                                <select
                                    name="gender"
                                    onChange={handleChange}
                                    className="mt-1 p-2 block w-full border border-gray-100 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                >
                                    <option value="male">Male</option>                                    
                                    <option value="female">Female</option>                                    
                                    <option value="other">Other</option>                                    
                                </select>
                            </div>
                        </div>

                        {/* Address */}
                        <div className='w-full'>
                            <label className="font-bold block text-sm text-gray-500">Address</label>
                            <textarea
                                name="address"
                                value="Koramangala Banglore, India"
                                onChange={handleChange}
                                className="mt-1 p-2 block w-full h-28 border border-gray-100 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            ></textarea>
                        </div>

                        {/* File Upload */}
                        <div>
                            <label className="font-bold block text-sm text-gray-500">File</label>
                            <input
                                type="file"
                                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file file:border border-none file:text-sm file:font-medium file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
                            />
                        </div>

                        {/* Confirm Checkbox */}
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="confirm"
                                value=""
                                onChange={handleChange}
                                className="h-4 w-4 text-indigo-600 border border-gray-100 py-3 rounded focus:ring-indigo-500"
                            />
                            <label className="ml-2 text-gray-500 text-xs md:text-sm">Please Confirm</label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-[#e57498] text-white py-2 px-5 rounded-md shadow-md hover:bg-[#f281a5] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default editPatient