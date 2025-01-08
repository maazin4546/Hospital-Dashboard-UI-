"use client";

import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
    { name: '2021', uv: 200 },
    { uv: 130 },
    { name: '2022', uv: 200 },
    { uv: 240 },
    { name: '2023', uv: 160 },
    { uv: 300 },
    { name: "2024", uv: 250 },
];

const BarGraph = () => (
    <div className="p-6 bg-white shadow-md">
        <h1 className="text-2xl text-pink-500 mb-4">Sales Year by Year</h1>
        <div className="flex">
            {typeof window !== "undefined" && ( // Ensure recharts renders only on the client
                <BarChart
                    width={430}
                    height={200}
                    data={data}
                    margin={{ top: 20, right:5, left: 0, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="name" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af"/> 
                    <Tooltip />
                    {/* <Legend /> */}
                    <Bar dataKey="uv" fill="#f97316" barSize={30} />
                </BarChart>
            )}
        </div>
    </div>
);

export default BarGraph;
