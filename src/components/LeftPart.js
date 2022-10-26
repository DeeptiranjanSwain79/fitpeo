import React from 'react';
import { FcDoughnutChart } from "react-icons/fc";
import { FcBriefcase } from "react-icons/fc";
import { IoMdPeople } from "react-icons/io";
import "./LeftPart.css";
import Items from './Items';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar, Chart, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        }
    },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', "Aug", "Sep", "Oct"];

export const data = {
    labels,
    datasets: [
        {
            label: 'Graph',
            data: [65000, 70000, 80000, 90000, 85000, 65000, 70000, 80000, 90000, 50000],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', "Aug", "Sep", "Oct"],
    datasets: [
        {
            label: 'Current Users',
            data: [65000, 59000, 80000, 50000, 80000, 20000, 75000, 85000, 76000, 89000],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        },
        {
            label: 'Previous Users',
            data: [59000, 80000, 50000, 70000, 67000, 89000, 63000, 95000, 75000, 60000],
            fill: false,
            borderColor: 'rgb(255, 49, 49)',
            tension: 0.1
        },
    ],
};

const doughnutState = {
    labels: ["Cancelled", "Pending", "Completed"],
    datasets: [
        {
            backgroundColor: ["#FF0000", "#87ceeb", "#8600B4"],
            hoverBackgroundColor: ["#8B0000", "#879ceb", "#75014F"],
            data: [50, 60, 70],
        },
    ],
};

const LeftPart = () => {
    return (
        <div className='leftpart'>
            <div className="leftpart-1">
                <div className="leftpart-1-1">
                    <FcDoughnutChart />
                    <div>
                        <h6>Revenue</h6>
                        <h3>&#36;21,456</h3>
                    </div>
                    <h6>+2.85&#37;</h6>
                </div>
                <div className="leftpart-1-1">
                    <FcBriefcase />
                    <div>
                        <h6>Revenue</h6>
                        <h3>&#36;21,456</h3>
                    </div>
                    <h6>-0.85&#37;</h6>
                </div>
                <div className="leftpart-1-1">
                    <IoMdPeople />
                    <div>
                        <h6>Revenue</h6>
                        <h3>&#36;21,456</h3>
                    </div>
                    <h6>-1.05&#37;</h6>
                </div>
            </div>


            <div className="leftpart-2">
                <div className="leftpart-2-top">
                    <h5>Overview</h5>
                    <div>
                        <label htmlFor="sort">Sort By:</label>
                        <select>
                            <option>Yearly</option>
                            <option>Half-yearly</option>
                            <option>Quarterly</option>
                            <option>Monthly</option>
                        </select>
                    </div>
                </div>

                <div className="leftpart-2-bottom">
                    <div className="leftpart-2-bottom-left">
                        <div className="top-div">
                            <div>
                                <p>This Month</p>
                                <span>40k</span>
                            </div>
                            <div>
                                <p>&#36;24,568</p>
                                <span>+2.75 &#37;</span>
                            </div>
                        </div>


                        <div className="leftpart-2-bottom-left-1">
                            <div className="top-div-1">
                                <div>
                                    <span>Order</span>
                                    <p>5,683</p>
                                </div>
                                <div>
                                    <span>Order Value</span>
                                    <p>12.03%</p>
                                </div>
                                <div>
                                    <span>Income</span>
                                    <p>$35,652</p>
                                </div>
                            </div>
                            <div className="top-div-1">
                                <div>
                                    <span>Sales</span>
                                    <p>15,683</p>
                                </div>
                                <div>
                                    <span>Customers</span>
                                    <p>21,789</p>
                                </div>
                                <div>
                                    <span>Expenses</span>
                                    <p>$12,652</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="leftpart-2-bottom-right">
                        <Bar options={options} data={data} />
                    </div>
                </div>
            </div>

            <div className="leftpart-3">
                <div className="leftpart-3-1">
                    <div className="leftpart-2-top">
                        <h5>Overview</h5>
                        <div>
                            <label htmlFor="sort">Sort By:</label>
                            <select>
                                <option>Yearly</option>
                                <option>Half-yearly</option>
                                <option>Quarterly</option>
                                <option>Monthly</option>
                            </select>
                        </div>
                    </div>
                    <Chart type='line' data={chartData} />
                </div>

                <div className="leftpart-3-2">
                    <div className="leftpart-2-top">
                        <h5>Overview</h5>
                        <div>
                            <label htmlFor="sort">Sort By:</label>
                            <select>
                                <option>Yearly</option>
                                <option>Half-yearly</option>
                                <option>Quarterly</option>
                                <option>Monthly</option>
                            </select>
                        </div>
                    </div>
                    <Doughnut data={doughnutState} />
                </div>
                
                <div className="leftpart-3-3">
                    <div className="leftpart-2-top">
                        <h5>Overview</h5>
                        <div>
                            <label htmlFor="sort">Sort By:</label>
                            <select>
                                <option>Yearly</option>
                                <option>Half-yearly</option>
                                <option>Quarterly</option>
                                <option>Monthly</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="leftpart-3-3-items">
                        <Items tag='1' name='Polo Blue T-shirt' amount='500' quantity='52K' />
                        <Items tag='2' name='Hoodie for men' amount='50' quantity='32.8K' />
                        <Items tag='3' name='Ankle fit jeans' amount='50' quantity='12.9K' />
                        <Items tag='4' name='Blue color cap' amount='50' quantity='1.6K' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftPart
