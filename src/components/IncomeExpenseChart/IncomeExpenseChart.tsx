"use client"

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    plugins: {
        title: {
            display: true,
            text: 'Ingresos vs Gastos',
        },
        legend: {
            position: 'top', // Display the legend to the right of the chart
            align: 'end',
            labels: {
                usePointStyle: true, // Use a circle instead of a square for legend items
            },
        }
    },
    responsive: true,
    scales: {
        x: {
            stacked: true,
            grid: {
                display: false,
                drawBorder: false,
                lineWidth: 0
            }
        },
        y: {
            stacked: true,
            display: true,
            grid: {
                display: true,
                drawBorder: false
            },
            ticks: {
                callback: (value: number) => {
                    if (value >= 1000) {
                        return (value / 1000) + 'K'; // Format as K for thousands
                    }
                    return value; // No formatting for values less than 1000
                },
            },
        },
    },
};

const labels = ['Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre'];

export const data: ChartData<"bar", number[], string> = {
    labels,
    datasets: [
        {
            label: 'Gastos',
            data: labels.map(() => Math.random() * 5000),
            backgroundColor: '#BB002A',
            barThickness: 16,
            borderRadius: 5,
        },
        {
            label: 'Ingresos',
            data: labels.map(() => Math.random() * 5000),
            backgroundColor: '#21FB4B',
            barThickness: 16,
            borderRadius: 5
        }
    ],
};

const IncomeExpenseChart = () => {
    return (
        <div>
            <Bar
                //@ts-ignore
                options={options}
                data={data}
            />
        </div>
    )
}

export default IncomeExpenseChart;