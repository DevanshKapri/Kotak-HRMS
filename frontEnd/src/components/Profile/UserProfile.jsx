import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
function UserProf() {
    return ( 
        <>
  {/*Topbar */}
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
          <a href="notifications.html" className="transition">
            <i className="las la-bell" />
            <span className="badge badge-danger notif">5</span>
          </a>
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
                <i className="las la-user mr-2" /> My Profile
              </a>
              <a className="dropdown-item" href="activity-log.html">
                <i className="las la-list-alt mr-2" /> Activity Log
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="signin.html">
                <i className="las la-sign-out-alt mr-2" /> Sign Out
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  {/*Sidebar*/}
        <Sidebar/>
  {/*Content Start*/}
  <div className="content transition">
    <div className="container-fluid dashboard">
      <h3>Profile</h3>
      <div className="card overflow-hidden">
        <div className="row no-gutters row-bordered row-border-light">
          <div className="col-md-3 pt-0">
            <div className="list-group list-group-flush account-settings-links">
              <a
                className="list-group-item list-group-item-action active1"
                data-toggle="list"
                href="#account-general"
              >
                General
              </a>
              <a
                className="list-group-item list-group-item-action"
                data-toggle="list"
                href="#account-change-password"
              >
                Change password
              </a>
            </div>
          </div>
          <div className="col-md-9">
            <div className="tab-content">
              <div className="tab-pane fade active show" id="account-general">
                <p className="mt-4 text-center">Information : </p>
                <div className="card-body media align-items-center">
                  <img
                    src="assets/images/avatar/avatar-1.png"
                    alt=""
                    className="d-block ui-w-80"
                  />
                  <div className="media-body ml-4">
                    <label className="btn btn-outline-primary">
                      Upload new photo
                      <input
                        type="file"
                        className="account-settings-fileinput"
                      />
                    </label>{" "}
                    &nbsp;
                  </div>
                </div>
                <hr className="border-light m-0" />
                <div className="card-body">
                  <div className="form-group">
                    <label className="form-label">Username</label>
                    <input
                      type="text"
                      className="form-control mb-1"
                      defaultValue="Administrator"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Administrator"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">E-mail</label>
                    <input
                      type="text"
                      className="form-control mb-1"
                      defaultValue="Administrator@mail.com"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone number</label>
                    <input
                      type="number"
                      className="form-control mb-1"
                      defaultValue=""
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Trainings Completed:</label>
                    <br />
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      defaultValue="Bike"
                    />
                    <label htmlFor="vehicle1"> Unnati training primary</label>
                    <br />
                    <input
                      type="checkbox"
                      id="vehicle2"
                      name="vehicle2"
                      defaultValue="Car"
                    />
                    <label htmlFor="vehicle2"> Unnati training primary</label>
                    <br />
                    <input
                      type="checkbox"
                      id="vehicle3"
                      name="vehicle3"
                      defaultValue="Boat"
                    />
                    <label htmlFor="vehicle3"> Unnati training primary</label>
                    <br />
                    <br />
                    {/* <input type="" class="form-control mb-1" value=""> */}
                    {/* <option value="" selected="selected">Unnati primary skills</option> */}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Level</label>
                    <input
                      type="text"
                      className="form-control mb-1"
                      defaultValue=""
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Date of birth</label>
                    <input
                      type="date"
                      className="form-control mb-1"
                      defaultValue=""
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Date of joining</label>
                    <input
                      type="date"
                      className="form-control mb-1"
                      defaultValue=""
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Marital Status</label>
                    <select name="topic" id="topic">
                      <option value="" selected="selected">
                        single
                      </option>
                      <option value="" selected="selected">
                        married
                      </option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Intervention</label>
                    <input
                      type="text"
                      className="form-control mb-1"
                      defaultValue=""
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">status</label>
                    <br />
                    <select name="topic" id="topic">
                      <option value="" selected="selected">
                        active
                      </option>
                      <option value="" selected="selected">
                        resigned
                      </option>
                      <option value="" selected="selected">
                        rejected
                      </option>
                      <option value="" selected="selected">
                        retired
                      </option>
                      <option value="" selected="selected">
                        unknown
                      </option>
                    </select>
                    {/* <input type="" class="form-control mb-1" value=""> */}
                    {/* <option value="" selected="selected">Unnati primary skills</option> */}
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="account-change-password">
                <p className="mt-4 text-center">Change Password : </p>
                <div className="card-body pb-2">
                  <div className="form-group">
                    <label className="form-label">Current password</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">New password</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Repeat new password</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div className="text-right mt-3">
                    <button type="button" className="btn btn-primary">
                      Save changes
                    </button>
                    &nbsp;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*End Start Profile*/}
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
</>

    );
}

export default UserProf;