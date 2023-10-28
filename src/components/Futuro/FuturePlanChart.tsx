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
import styles from './FuturePlanChart.module.scss'
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
            text: 'Plan de pagos de inicial',
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

const labels = ['Ene-23', 'Jun-23', 'Dic-23', 'Dic-23', 'Dec-24'];

export const data: ChartData<"bar", number[], string> = {
    labels,
    datasets: [
        {
            label: 'Monto acumulado de cuotas',
            data: [10_000, 15_000, 20_000, 25_000, 30_000],
            backgroundColor: '#21FB4B',
            barThickness: 16,
            borderRadius: 5
        }
    ],
};

const FuturePlanChart = () => {
    return (
        <div className={styles.incomesexpensechart}>
            <Bar
                //@ts-ignore
                options={options}
                data={data}
            />
        </div>
    )
}

export default FuturePlanChart;