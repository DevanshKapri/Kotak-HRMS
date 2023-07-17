import React from 'react';
import './Hirings.css'
import Sidebar from '../Sidebar/Sidebar';
import Container from '../Charts/chartContainer';
import TitleBar from '../TitleCard/TitleBar';
function Employees() {
    return (
    <>
    <div style={{backgroundColor:'black',color:'white',padding:'1rem',marginBottom:'1rem', display:'flex',justifyContent:'space-between'}}>
        <h2>Employee Data</h2>
        <h4 style={{marginTop:"0.5rem"}}>Dashboard</h4>
    </div>

    <div className="container-fluid dashboard">
    <Container/>
    <div classname="titlecont" style={{display:'flex',justifyContent:'space-around',padding:'2rem'}}>
    <TitleBar/>
    </div>
    </div>
    </>
    );
}

export default Employees;