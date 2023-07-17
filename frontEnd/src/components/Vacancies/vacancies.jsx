import { Card } from '@mui/material'
import { Button } from 'bootstrap'
// import { MDBContainer } from "mdbreact";
import { Bar, Line } from "react-chartjs-2";
import Piec from '../Charts/piechart'
import '../Hiring/Hiring.css'
// import BarChartNew from '../Charts/barchart'
// import Example from '../Charts/charts';
// import CustomizedLabel from '../Charts/barchart';
// import BarGraphExtra from '../Charts/barchart';
// import PieNew from '../Charts/piechartnew';
// import { BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
// import CanvasJSReact from './canvasjs.react';
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export const Vacancies = () => {

//   const data3 = [
//     {name: 'Geeksforgeeks', students: 400},
//     {name: 'Technical scripter', students: 700},
//     {name: 'Geek-i-knack', students: 200},
//     {name: 'Geek-o-mania', students: 1000}
//   ];
  return (
    <>
    <div className="container-fluid dashboard">
      <h3 className='text-dark p-2'>Vacancies</h3>
      <div className="row section2 p-5">
       {/* <div className=''> */}
       <div className="col-md-6 col-lg-3">
            <div className="card bg-success">
            <div className="card-body">
            <div className='' id='left'>
            <div className=''>
            <h5 className='card-title'>Sales </h5>
            <div className='card-text mb-5 text-dark'>This role requires one who can speak to day-to-day expectations</div>
            <a href='#' className='card-link bg-white p-2 m-1 rounded  '>Apply Now</a>
            </div>
        </div> 
            </div>
          </div>
        </div>
       <div className="col-md-6 col-lg-3">
            <div className="card bg-success">
            <div className="card-body">
            <div className='' id='left'>
            <div className=''>
            <h5 className='card-title'>Tech </h5>
            <div className='card-text mb-5 text-dark'>This role requires one who has beforehand experience of working with technologies</div>
            <a href='#' className='card-link bg-white p-2 m-1 rounded  '>Apply Now</a>
            </div>
        </div> 
            </div>
          </div>
        </div>
       <div className="col-md-6 col-lg-3">
            <div className="card bg-success">
            <div className="card-body">
            <div className='' id='left'>
            <div className=''>
            <h5 className='card-title'>Corporate </h5>
            <div className='card-text mb-2 text-dark'>Corporate Position means a director, officer and/or fiduciary of the Company or of any other corporation, trust, employee benefit plan.</div>
            <a href='#' className='card-link bg-white p-2 m-1 rounded  '>Apply Now</a>
            </div>
        </div> 
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card bg-success">
            <div className="card-body">
              <div className="">
              <h5 className='card-title'>Communications</h5>
                {/* <h6 className='card-subtitle mb-2 text-muted'>Card Subtitle </h6> */}
                <p className='card-text mb-5 text-dark'>Communications Specialists have the general responsibility is to handle public relations</p>
                <a href='#' className='card-link bg-white p-2 m-1 rounded '>Apply Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card bg-success">
            <div className="card-body">
              <div className="">
              <h5 className='card-title'>Finance</h5>
                {/* <h6 className='card-subtitle mb-2 text-muted'>Card Subtitle </h6> */}
                <p className='card-text mb-5 text-dark'>Accounting and finance professionals must have excellent analytical ability </p>
                <a href='#' className='card-link bg-white p-2 m-1 rounded '>Apply Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card bg-danger">
            <div className="card-body">
            <div className='' id='left'>
            <div className=''>
            <h5 className='card-title'>Public Relations</h5>
            {/* <h6 className='card-subtitle mb-2 text-muted'>Card Subtitle </h6> */}
            <p className='card-text mb-5 text-dark'> A Public Relations Officer responds to requests for information from media outlets.</p>
            <a href='#' className='card-link text-muted bg-white p-2 m-1 rounded '>Apply Now</a>
        </div>
        </div> 
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card bg-danger">
            <div className="card-body">
            <div className='' id='left'>
            <div className=''>
            <h5 className='card-title'>Software</h5>
            <p className='card-text mb-5 text-dark'>Hands-on programming experience using relevant languages.</p>
            <a href='#' className='card-link text-muted bg-white p-2 m-1 rounded '>Apply Now</a>
        </div>
        </div> 
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card bg-danger">
            <div className="card-body">
            <div className='' id='left'>
            <div className=''>
            <h5 className='card-title'>Services</h5>
            <p className='card-text mb-4 text-dark'>Service means an unforeseen circumstance, or combination of circumstances which calls for immediate action.</p>
            <a href='#' className='card-link text-muted bg-white p-2 m-1 rounded '>Apply Now</a>
            </div>
            </div> 
            </div>
          </div>
        </div>


        
       
      </div>
    </div>
    </>
  )
}
