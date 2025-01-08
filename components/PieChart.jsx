"use client"
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from "chart.js";


ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

const PieChart = () => {
    // Data for the Pie chart
    const data = {
        labels: ["Canceled", "Pending", "Completed"], // Status labels
        datasets: [
            {
                label: "Appointment Status",
                data: [10, 20, 30], // Replace with dynamic values for your appointments
                backgroundColor: ["#FF6384", "#FFCE56", "#36A2EB"], // Different colors for each status
                borderColor: ["#FF6384", "#FFCE56", "#36A2EB"],
                borderWidth: 1,
            },
        ],
    };

    // Options for the chart
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "left",
            },
        },
    };

    return (
        <div className="bg-white shadow-md p-6 w-[486px] h-[361px]">
            <div className="flex flex-col justify-center w-80">
                <h2 className="text-2xl text-pink-500">Appointment Status</h2>
                <Pie data={data} options={options} />
            </div>
        </div>
    );
};

export default PieChart;
