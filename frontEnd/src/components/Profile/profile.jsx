import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
function Profile() {
    return ( <>
    <>
    <Sidebar/>
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
                    <label className="form-label">Trainings Completed</label>
                    <input
                      type=""
                      className="form-control mb-1"
                      defaultValue=""
                    />
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

    </> );
}

export default Profile;