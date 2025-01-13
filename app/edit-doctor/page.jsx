"use client"
import React, { useState } from 'react';
import Navbar from '@/components/Navbar'

const EditDoctor = () => {

    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        age: '',
        phone: '',
        email: '',
        gender: '',
        address: '',
        specialization: '',
        experience: '',
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
            <Navbar title={"Edit Doctor"} path={"/ Doctors / Edit Doctors"} />
            <div className='mt-4 md:mt-16 p-2 md:p-6'>
                <div className="w-full mx-auto bg-white p-6 rounded-sm shadow-md">
                    <h2 className="text-2xl text-pink-500 mb-4">Edit Doctor</h2>
                    <form className="space-y-4">

                        <div className='flex gap-4 flex-col md:flex-row justify-center md:justify-between items-center'>
                            {/* Name */}
                            <div className='flex-1 w-full'>
                                <label className="font-bold block text-sm text-gray-500">Doctor Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value="Dr Daniel Smith"
                                    onChange={handleChange}
                                    placeholder='Doctor Name'
                                    required
                                    className="mt-1 p-2 py-3 block w-full border border-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>

                            {/* Date of Birth */}
                            <div className='flex-1 w-full'>
                                <label className="font-bold block text-sm text-gray-500">Date of Birth</label>
                                <input
                                    type="date"
                                    name="dob"
                                    value="12-Dec-1989"
                                    onChange={handleChange}
                                    placeholder='Patient DOB'
                                    required
                                    className="mt-1 p-2 block w-full border border-gray-100 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className='flex gap-4 flex-col md:flex-row justify-center md:justify-between items-center'>
                            {/* Specialization */}
                            <div className='flex-1 w-full'>
                                <label className="font-bold block text-sm text-gray-500">Specialization</label>
                                <input
                                    type="text"
                                    name="Specialization"
                                    value="Dentist"
                                    onChange={handleChange}
                                    placeholder='Specialization'
                                    required
                                    className="mt-1 p-2 block w-full border border-gray-100 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>

                            {/* Experience */}
                            <div className='flex-1 w-full'>
                                <label className="font-bold block text-sm text-gray-500">Experience</label>
                                <input
                                    type="text"
                                    value="10 years"
                                    onChange={handleChange}
                                    placeholder='Experience'
                                    required
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
                                    value="29"
                                    onChange={handleChange}
                                    placeholder='Patient Age'
                                    required
                                    className="mt-1 p-2 block w-full border border-gray-100 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>

                            {/* Phone */}
                            <div className='flex-1 w-full'>
                                <label className="font-bold block text-sm text-gray-500">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value="+91 12345 67890"
                                    onChange={handleChange}
                                    placeholder='Patient Number'
                                    required
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
                                    value="email@yourdomain.com"
                                    onChange={handleChange}
                                    placeholder='Patient Email'
                                    required
                                    className="mt-1 p-2 block w-full border border-gray-100 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>

                            {/* Gender */}
                            <div className='flex-1 w-full'>
                                <label className="font-bold block text-sm text-gray-500">Gender</label>
                                <select
                                    name="gender"
                                    value=""
                                    onChange={handleChange}
                                    placeholder='Gender'
                                    required
                                    className="mt-1 p-2 block w-full border border-gray-100 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className='flex gap-4 flex-col md:flex-row justify-center md:justify-between items-center'>
                            {/* Doctor Details */}
                            <div className='flex-1 w-full'>
                                <label className="font-bold block text-sm text-gray-500">Doctor Details</label>
                                <textarea
                                    name="Doctor Details"
                                    value="He has done his graduation form Liverpool University and he is having more than 20 years of experience in this field."
                                    onChange={handleChange}
                                    placeholder='Doctor Details'
                                    required
                                    className="mt-1 p-2 block w-full h-28 border border-gray-100 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                ></textarea>
                            </div>

                            {/* Address */}
                            <div className='flex-1 w-full'>
                                <label className="font-bold block text-sm text-gray-500">Address</label>
                                <textarea
                                    name="address"
                                    value="He has done his graduation form Liverpool University and he is having more than 20 years of experience in this field."
                                    onChange={handleChange}
                                    placeholder='Patient Address'
                                    required
                                    className="mt-1 p-2 block w-full h-28 border border-gray-100 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                ></textarea>
                            </div>
                        </div>

                        {/* File Upload */}
                        <div>
                            <label className="font-bold block text-sm text-gray-500">File</label>
                            <input
                                type="file"
                                name="file"
                                onChange={handleChange}
                                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file file:border border-none file:text-sm file:font-medium file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
                            />
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
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditDoctor