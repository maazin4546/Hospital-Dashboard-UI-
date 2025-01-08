"use client"
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    { uv: 100 },
    { name: '2023', uv: 60 },
    { uv: 220 },
    { uv: 270 },
    { uv: 360 },
    { name: "2024", uv: 300 },
    { uv: 380 },
];

const Graph = () => (
    <div className="p-6 bg-white shadow-md">
        <h1 className="text-2xl text-pink-500 mb-4">Appointments Year by Year</h1>
        <div className="flex">
            {typeof window !== "undefined" && ( // Ensure the chart only renders on the client
                <LineChart
                    width={430} // Reduced width
                    height={200} // Reduced height
                    data={data}
                    margin={{ top: 10, right: 10, left: 0, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="name" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip />
                    <Line type="monotone" dataKey="uv" stroke="#ec4899" activeDot={{ r: 6 }} />
                </LineChart>
            )}
        </div>
    </div>

);

export default Graph;
