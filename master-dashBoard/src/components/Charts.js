import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const Charts = ({ data }) => {
    //console.log("data", data);
    return (
        <ResponsiveContainer width="100%" aspect={2.5}>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 5,
                    left: 5,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="subject" tick={{ stroke: '#212529' }} />
                <YAxis tick={{ stroke: '#212529' }} />
                <Legend />
                <Bar dataKey="fun" fill="#212529" />
                <Bar dataKey="difficulty" fill="#ffc107" />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default Charts;