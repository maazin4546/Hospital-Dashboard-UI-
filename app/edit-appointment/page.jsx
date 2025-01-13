"use client"
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';

const editAppointment = () => {

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
            <Navbar title={"Edit Appointment"} path={" / Appointments / Edit Appointment "} />
            <div className='mt-4 md:mt-16 p-2 md:p-6'>
                <div className="w-full mx-auto bg-white p-6 rounded-sm shadow-md">
                    <h2 className="text-2xl text-pink-500 mb-4">Edit Appointment</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">

                        <div className='flex gap-4 flex-col md:flex-row justify-center md:justify-between items-center'>
                            {/* Patient ID */}
                            <div className='flex-1 w-full'>
                                <label className="font-bold block text-sm text-gray-500">Patient ID</label>
                                <input
                                    type="text"
                                    name="name"
                                    value="P654T"
                                    onChange={handleChange}
                                    placeholder='Patient ID'
                                    required
                                    className="mt-1 p-2 py-3 block w-full border border-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>

                            {/* Department */}
                            <div className='flex-1 w-full'>
                                <label className="font-bold block text-sm text-gray-500">Department</label>
                                <select
                                    name="gender"
                                    onChange={handleChange}
                                    placeholder='Department'
                                    required
                                    className="mt-1 p-2 block w-full border border-gray-100 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                >
                                    <option value="female">Ortho</option>
                                    <option value="male">Neuro</option>
                                    <option value="other">General</option>
                                </select>
                            </div>

                        </div>

                        <div className='flex gap-4 flex-col md:flex-row justify-center md:justify-between items-center'>
                            {/* Doctor Name */}
                            <div className='flex-1 w-full'>
                                <label className="font-bold block text-sm text-gray-500"> Doctor Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value="Dr Kiran Sharma"
                                    onChange={handleChange}
                                    placeholder='Doctor Name'
                                    required
                                    className="mt-1 p-2 py-3 block w-full border border-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>

                            {/* Appointment Date */}
                            <div className='flex-1 w-full'>
                                <label className="font-bold block text-sm text-gray-500">Appointment Date</label>
                                <input
                                    type="date"
                                    name="dob"                                    
                                    onChange={handleChange}
                                    placeholder='Appointment Date'
                                    required
                                    className="mt-1 p-2 block w-full border border-gray-100 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className='flex gap-4 flex-col md:flex-row justify-center md:justify-between items-center'>
                            {/* Time Slot */}
                            <div className='flex-1 w-full'>
                                <label className="font-bold block text-sm text-gray-500">Time Slot</label>
                                <input
                                    type="time"
                                    name="time"
                                    value="4PM-5PM"
                                    placeholder='Time Slot'
                                    required
                                    className="mt-1 p-2 block w-full border border-gray-100 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>

                            {/* Token Number */}
                            <div className='flex-1 w-full'>
                                <label className="font-bold block text-sm text-gray-500">Token Number <span className='text-sm text-gray-500 font-light'>(Auto Generated)</span></label>
                                <input
                                    type="tel"
                                    name="token"
                                    value="58"
                                    placeholder='Auto Generated'
                                    required
                                    className="mt-1 p-2 block w-full border border-gray-100 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        {/* Problem */}
                        <div className='w-full'>
                            <label className="font-bold block text-sm text-gray-500">Problem</label>
                            <textarea
                                name="address"
                                value="Patient reports persistent migraines with occasional nausea and light sensitivity."
                                onChange={handleChange}
                                placeholder='Problem'
                                required
                                className="mt-1 p-2 block w-full h-28 border border-gray-100 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            ></textarea>
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

export default editAppointment