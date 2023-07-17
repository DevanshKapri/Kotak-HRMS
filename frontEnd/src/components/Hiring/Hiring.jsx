import { Card } from '@mui/material'
import { Button } from 'bootstrap'
// import { MDBContainer } from "mdbreact";
import { Bar, Line } from "react-chartjs-2";
import Piec from '../Charts/piechart'
import '../Hiring/Hiring.css'
import BarChartNew from '../Charts/barchart'
import Example from '../Charts/charts';
import CustomizedLabel from '../Charts/barchart';
import BarGraphExtra from '../Charts/barchart';
import PieNew from '../Charts/piechartnew';
// import { BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
// import CanvasJSReact from './canvasjs.react';
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export const Hiring = () => {

  const data3 = [
    {name: 'Geeksforgeeks', students: 400},
    {name: 'Technical scripter', students: 700},
    {name: 'Geek-i-knack', students: 200},
    {name: 'Geek-o-mania', students: 1000}
  ];
  return (
    <>
    <div className="container-fluid dashboard">
      <h3>Hiring</h3>
      <div className="row section">
       {/* <div className=''> */}
       <div className="col-md-6 col-lg-3">
            <div className="card getCards">
            <div className="card-body">
            <div className='' id='left'>
            <div className=''>
            <h5 className='card-title'>Paul </h5>
            <div className='card-text'>Public Relation</div>
            <a href='/userprofile' className='card-link'>Get More Info</a>
            </div>
        </div> 
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card getCards">
            <div className="card-body">
              <div className="">
              <h5 className='card-title'>Unnati</h5>
                {/* <h6 className='card-subtitle mb-2 text-muted'>Card Subtitle </h6> */}
                <p className='card-text'>Finance IT</p>
                <a href='/userprofile' className='card-link'>Get More Info</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card getCards">
            <div className="card-body">
              <div className="">
              <h5 className='card-title'>Siddhesh</h5>
                {/* <h6 className='card-subtitle mb-2 text-muted'>Card Subtitle </h6> */}
                <p className='card-text'>Software IT</p>
                <a href='/userprofile' className='card-link'>Get More Info</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card getCards">
            <div className="card-body">
            <div className='' id='left'>
            <div className=''>
            <h5 className='card-title'>Ridhi</h5>
            {/* <h6 className='card-subtitle mb-2 text-muted'>Card Subtitle </h6> */}
            <p className='card-text'>Public Relations</p>
            <a href='/userprofile' className='card-link'>Get More Info</a>
        </div>
        </div> 
            </div>
          </div>
        </div>
        <div className="card">
        <h5 className="card-header">Aplictaion Status</h5>
        <div className="card-body">
        <PieNew/>
        </div>
        </div> 
        {/* <div className="card">
        <h5 className="card-header">Aplictaion Status</h5>
        <div className="card-body">
        <LineChart
        width={400}
        height={400}
        data={data}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
        <XAxis dataKey="name" />
        <Tooltip />
        <CartesianGrid stroke="/userprofilef5f5f5" />
        <Line type="monotone" dataKey="uv" stroke="/userprofileff7300" yAxisId={0} />
        <Line type="monotone" dataKey="pv" stroke="/userprofile387908" yAxisId={1} />
        </LineChart>

        </div>
        </div>  */}
        <div className="col-md-6">
        <div className="card">
        <h5 className="card-header">Public Relation</h5>
        <div className="card-body">
        <BarGraphExtra/>
        </div>
        </div>
        </div>
         
        {/* </div> */}

       
      </div>
    </div>
    </>
  )
}
