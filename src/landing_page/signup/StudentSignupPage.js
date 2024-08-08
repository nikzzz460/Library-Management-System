import React from 'react';

function StudentSignupPage() {
   
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center">SIGN UP</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" className="form-control" id="name" placeholder="  " required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" className="form-control" id="email" placeholder=" " required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" className="form-control" id="password" placeholder=" " required />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm password:</label>
              <input type="password" className="form-control" id="confirm-password" placeholder=" " required />
            </div>
            <div className="form-group">
              <label>Add Recent Photo:</label>
             <input type="file" className="form-control-file mt-1" id="photo" accept=".jpg, .jpeg" />
            </div>
            
            <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="terms" required />
              <label className="form-check-label" htmlFor="terms">
                
                I agree to the <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>
              
              </label>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Sign up</button>
            <a href="#" className="d-block mt-3">Learn more</a>
          </form>
          <hr />
          <div className="text-center">OR</div>
          <div className="text-center mt-3">
            <button className="btn btn-outline-primary btn-block mb-2">
              <i className="fab fa-facebook-f mr-2"></i> Sign in with Google
            </button>
            <button className="btn btn-outline-danger btn-block">
              <i className="fab fa-google mr-2"></i> Sign in with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentSignupPage;
