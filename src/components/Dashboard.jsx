import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Dashboard = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'User Activity',
                data: [65, 59, 80, 81, 56],
                backgroundColor: 'rgba(99, 102, 241, 0.6)',
            },
        ],
    };

    return (
        <>

            <div className='h-[46vh] md:w-[46vw] w-[96vw]'>
                <div className="p-8">
                    <h1 className="md:text-2xl font-bold mb-4 text-center">Sample_Dashboard</h1>
                    <div className="md:w-[40vw] w-[80vw] h-[30vh] max-w-2xl m-auto bg-red-200">
                        <Bar data={data} />
                    </div>
                </div>
            </div>

        </>
    );
};

export default Dashboard;