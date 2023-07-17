import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
    
const data = [
  {
    name: '2000',
    male: 4000,
    female: 2400,
    amt: 2400,
  },
  {
    name: '2001',
    male: 3000,
    female: 1398,
    amt: 2210,
  },
  {
    name: '2002',
    male: 2000,
    female: 9800,
    amt: 2290,
  },
  {
    name: '2003',
    male: 2780,
    female: 3908,
    amt: 2000,
  },
  {
    name: '2004',
    male: 1890,
    female: 4800,
    amt: 2181,
  },
  {
    name: '2005',
    male: 2390,
    female: 3800,
    amt: 2500,
  },
  {
    name: '2006',
    male: 3490,
    female: 4300,
    amt: 2100,
  },
];


function BarGraphExtra() {
    return (

<BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="male" fill="#8884d8" />
          <Bar dataKey="female" fill="#82ca9d" />
        </BarChart>
       );
}

export default BarGraphExtra;