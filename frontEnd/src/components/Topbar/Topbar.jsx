import React from 'react';
import './White.css'
import {Link} from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar';

function Topbar() {
    return (
    <>
 <>
  <div className="topbar transition">
    <div className="bars">
      <button type="button" className="btn transition" id="sidebar-toggle">
        <i className="las la-bars" />
      </button>
    </div>
    <div className="menu">
      <ul>
        <li>
          <div className="theme-switch-wrapper">
            <label className="theme-switch" htmlFor="checkbox">
              <input type="checkbox" id="checkbox" title="Dark Or White" />
              <div className="slider round" />
            </label>
          </div>
        </li>
        <li>
          <div className="dropdown">
            <div
              className="dropdown-toggle"
              id="dropdownProfile"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img src="assets/images/avatar/avatar-2.png" alt="Profile" />
            </div>
            <div className="dropdown-menu" aria-labelledby="dropdownProfile">
              <a className="dropdown-item" href="profile.html">
                <i className="las la-user mr-2" /> <Link to='/profile' status={100}>My Profile</Link>
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" >
                <i className="las la-sign-out-alt mr-2" /> <Link to='/' status={100}>Sign Out</Link>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <Sidebar/>
  {/*Sidebar*/}
  {/*  */}
  {/*Content Start*/}
  <div className="content transition">
    <div className="container-fluid dashboard">
      <h3 className='text-dark'>Dashboard</h3>
      <div className="row">
        <div className="col-md-6 col-lg-3">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-4 d-flex align-items-center">
                  <i className="las la-inbox icon-home bg-primary text-light" />
                </div>
                <div className="col-8">
                  <p>Departments</p>
                  <h5 className='text-dark'>5</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-4 d-flex align-items-center">
                  <i className="las la-clipboard-list icon-home bg-success text-light" />
                </div>
                <div className="col-8">
                  <p>Concerns</p>
                  <h5 className='text-dark'>3000</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-4 d-flex align-items-center">
                  <i className="las la-chart-bar  icon-home bg-info text-light" />
                </div>
                <div className="col-8">
                  <p>Stats</p>
                  <h5 className='text-dark'>550</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-4 d-flex align-items-center">
                  <i className="las la-id-card  icon-home bg-warning text-light" />
                </div>
                <div className="col-8">
                  <p>Employees</p>
                  <h5 className='text-dark'>256</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <h5 className="card-header">To Do</h5>
            <div className="card-body">
              <div className="row mb-1">
                <div className="col-6 mt-4">Concern Review</div>
                <div className="col-6 mt-4 text-right">20%</div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "20%" }}
                  aria-valuenow={20}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <div className="row mt-4 mb-1">
                <div className="col-6">Employee Data Tracking</div>
                <div className="col-6 text-right">40%</div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "40%" }}
                  aria-valuenow={40}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <div className="row mt-4 mb-1">
                <div className="col-6">Employee HR Database</div>
                <div className="col-6 text-right">60%</div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "60%" }}
                  aria-valuenow={60}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <div className="row mt-4 mb-1">
                <div className="col-6">Hiring Details</div>
                <div className="col-6 text-right">80%</div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <div className="row mt-4 mb-1">
                <div className="col-6">Account Setup</div>
                <div className="col-6 text-right">Complete!</div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          </div>
          <div className="row">
            
           
           
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <h5 className="card-header">Walkthorugh of the App</h5>
            <div className="card-body">
              <img
                src="assets/images/undraw_responsive_6c8s.svg"
                className="img-fluid p-5"
              />
              <p className="mb-4">
                Learn how to use this database management web tool effeciently to manage your HR data and get the best results for your company.
              </p>
            </div>
          </div>
          <div className="card">
            <h5 className="card-header">Development Approach</h5>
            <div className="card-body">
              <p className="mb-3 mt-4">
                KotakAdmin makes extensive use of Django based backend models and APIs in
                order to reduce redundant workload and poor page performance. Custom React
                classes are used to create custom components and custom utility
                classes.
              </p>
              <p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer */}
  <div className="footer transition">
    <hr />
    <p>
      © 2022 All Right Reserved by{" "}
      <a href="#" target="_blank">
        KotakAdmin
      </a>
    </p>
  </div>
  {/* Loader */}
  {/* Library Javascipt*/}
</>

    </>  );
}

export default Topbar;