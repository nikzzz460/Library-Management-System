import React from 'react';


const ProfileSettings = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* My Profile */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-danger">My Profile</h5>
              <div className="text-center">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Profile"
                  className="rounded-circle mb-3"
                />
              </div>
              <p className="text-center">User Name</p>
              <p className="text-center">user@example.com</p>
              <p className="text-center">Library Member since: Jan 2023</p>
            </div>
          </div>
        </div>

        {/* Change Password */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Change Password</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="currentPassword" className="form-label">
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="currentPassword"
                    placeholder="Current Password"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="newPassword" className="form-label">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="newPassword"
                    placeholder="New Password"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Change Password
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Library Settings */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Library Settings</h5>
              {/* Add library settings options here */}
              <p>Manage your library account settings here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;