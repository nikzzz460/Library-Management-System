import React, { useState } from 'react';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import LineChart from './RecordChart';
import { ProgressBar, Card } from 'react-bootstrap';

//for this install:   npm install chart.js
//2. installed:   npm install chart.js react-chartjs-2
//3. installed: npm install react-bootstrap bootstrap

Chart.register(CategoryScale);

function StudentPageRecords() {
    const [chartData1, setChartData1] = useState({
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Books Issued",
                data: [3, 2, 2, 5, 6, 4, 7],
                borderColor: "rgba(75,192,192,1)",
                backgroundColor: "rgba(75,192,192,0.2)",
                tension: 0.4,
            },
            {
                label: "Books Returned",
                data: [1, 3, 2, 2, 5, 6, 3],
                borderColor: "rgba(153,102,255,1)",
                backgroundColor: "rgba(153,102,255,0.2)",
                tension: 0.4,
            }
        ]
    });

    const [chartData2, setChartData2] = useState({
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Library visits",
                data: [3, 2, 2, 5, 6, 4, 7],
                borderColor: "rgba(75,192,192,1)",
                backgroundColor: "rgba(75,192,192,0.2)",
                tension: 0.4,
            },
            {
                label: "Reading hall visits",
                data: [1, 3, 2, 2, 5, 6, 3],
                borderColor: "rgba(153,102,255,1)",
                backgroundColor: "rgba(153,102,255,0.2)",
                tension: 0.4,
            }
        ]
    });


    const issuedBooks = 6;
    const goal = 10;
    const progress = (issuedBooks / goal) * 100;

    const icons = [];
    for (let i = 0; i < 5; i++) {
        icons.push(<i key={i} className="fa-solid fa-medal fa-2x"></i>);
    }

    return (
        <div className="container mt-5 bg-light">
        
            <div className='row'>

            <div className='container bg-dark'>
                
                </div>
                <div className='col'>
                    <div className='bg-dark'>
                    <LineChart chartData={chartData1} />
                    </div>
                    <br/>
                    <br/>
                    <div className='bg-dark'>
                    <LineChart chartData={chartData2} />
                    </div>
                    
                </div>
                
                <div className='col'>
                    <div className='row mb-5 p-5'>
                            <Card style={{ width: '18rem', margin: 'auto', height: '8rem'}}>
                                <Card.Body>
                                    <Card.Title>Your Badges</Card.Title>
                                    <br/>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        {icons}
                                    </div>
                                </Card.Body>
                            </Card>
                    </div>
                    
                    <div className='row p-3'>
                            <Card style={{ width: '18rem', margin: 'auto' , height: '8rem'}}>
                                <Card.Body>
                                    <Card.Title>Monthly Issuing Goal</Card.Title>
                                    <div className="d-flex justify-content-between mt-4">
                                        <span>{issuedBooks} Books</span>
                                        <span>{goal} Books</span>
                                    </div>
                                    <ProgressBar now={progress} label={`${progress}%`} variant="success" />
                                </Card.Body>
                            </Card>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default StudentPageRecords;
