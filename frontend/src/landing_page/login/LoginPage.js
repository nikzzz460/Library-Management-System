import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginPage() {
    const [userType, setUserType] = useState('Student');

    const navyBlue = '#002D62';

    return (
        <div className="container d-flex justify-content-center align-items-start min-vh-100" style={{ paddingTop: '5vh' }}>
            <div className="text-center">
                <h1 className="mb-4">LOGIN</h1>
                <div className="d-flex justify-content-center mb-3">
                    <div className="btn-group" role="group">
                        <button
                            type="button"
                            className={`btn ${userType === 'Student' ? 'btn-primary' : 'btn-light'}`}
                            onClick={() => setUserType('Student')}
                            style={{ backgroundColor: userType === 'Student' ? navyBlue : '' }}
                        >
                            Student
                        </button>
                        <button
                            type="button"
                            className={`btn ${userType === 'Staff' ? 'btn-primary' : 'btn-light'}`}
                            onClick={() => setUserType('Staff')}
                            style={{ backgroundColor: userType === 'Staff' ? navyBlue : '' }}
                        >
                            Staff
                        </button>
                    </div>
                </div>
                <div className="card mx-auto" style={{ maxWidth: '400px' }}>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email ID</label>
                                <input type="email" className="form-control" id="email" placeholder="Email ID" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Password" />
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                                    <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
                                </div>
                            </div>
                            <div className="mb-3 text-start">
                                <a href="#forgot-password" className="text-decoration-none">Forgot Password?</a>
                            </div>
                            <button type="submit" className="btn w-100" style={{ backgroundColor: navyBlue, color: 'white' }}>LOGIN</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
