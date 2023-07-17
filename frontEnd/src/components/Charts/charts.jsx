import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
    
const data = [
  {
    name: ' A',
    AvgSalary: 4000,
    MedianSalary: 2400,
    amt: 2400,
  },
  {
    name: ' B',
    AvgSalary: 3000,
    MedianSalary: 1398,
    amt: 2210,
  },
  {
    name: ' C',
    AvgSalary: 2000,
    MedianSalary: 9800,
    amt: 2290,
  },
  {
    name: ' D',
    AvgSalary: 2780,
    MedianSalary: 3908,
    amt: 2000,
  },
  {
    name: ' E',
    AvgSalary: 1890,
    MedianSalary: 4800,
    amt: 2181,
  },
  {
    name: ' F',
    AvgSalary: 2390,
    MedianSalary: 3800,
    amt: 2500,
  },
  {
    name: ' G',
    AvgSalary: 3490,
    MedianSalary: 4300,
    amt: 2100,
  },
];


function Example() {
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
          <Bar dataKey="MedianSalary" fill="#8884d8" />
          <Bar dataKey="AvgSalary" fill="#82ca9d" />
        </BarChart>
       );
}

export default Example;