import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

function ForgotPassword() {
    const [step, setStep] = useState(1); // Step to track the flow (1: email, 2: OTP verification, 3: new password)
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState(['', '', '', '', '', '']); // OTP state with 6 fields
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPasswordUpdated, setIsPasswordUpdated] = useState(false); // Track password update status

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        // Logic to send OTP to the email
        setStep(2); // Go to OTP verification
    };

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        // Logic to verify OTP
        setStep(3); // Go to new password step
    };

    const handlePasswordUpdate = (e) => {
        e.preventDefault();
        // Logic to update password
        setIsPasswordUpdated(true); // Set to true when password update is successful
    };

    const handleOtpChange = (e, index) => {
        const newOtp = [...otp];
        newOtp[index] = e.target.value;
        setOtp(newOtp);

        // Move to the next input after entering a digit
        if (e.target.value && index < otp.length - 1) {
            const nextInput = document.getElementById(`otp-${index + 1}`);
            if (nextInput) {
                nextInput.focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {
        // Move to the previous input if backspace is pressed
        if (e.key === 'Backspace' && index > 0) {
            const prevInput = document.getElementById(`otp-${index - 1}`);
            if (prevInput) {
                prevInput.focus();
            }
        }
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{
                minHeight: '80vh',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                paddingTop: '3vh',
            }}
        >
            <div className="card" style={{ maxWidth: '600px', width: '100%' }}>
                <div className="card-body">
                    {!isPasswordUpdated && (
                        <>
                            <h2 className="text-center mb-4">Forgot Password?</h2>
                            <p className="text-center mb-4">Let us help you!</p>
                        </>
                    )}

                    {isPasswordUpdated ? (
                        <div className="text-center">
                            <div
                                style={{
                                    backgroundColor: 'green',
                                    color: 'white',
                                    borderRadius: '70%',
                                    width: '70px',
                                    height: '70px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto',
                                }}
                            >
                                <FaCheckCircle size={40} className="text-white" />
                            </div>
                            <p className="mt-3 text-success">Congratulations! Your password has been updated successfully.</p>
                        </div>
                    ) : (
                        <>
                            {step === 1 && (
                                <form onSubmit={handleEmailSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Enter your email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100">
                                        Send OTP
                                    </button>
                                </form>
                            )}

                            {step === 2 && (
                                <form onSubmit={handleOtpSubmit}>
                                    <div className="mb-3 d-flex justify-content-center">
                                        {/* OTP input with 6 fields */}
                                        {otp.map((digit, index) => (
                                            <input
                                                key={index}
                                                id={`otp-${index}`}
                                                type="text"
                                                maxLength="1"
                                                className="form-control text-center"
                                                style={{
                                                    width: '50px',
                                                    margin: '0 10px',
                                                    fontSize: '24px',
                                                    borderBottom: '2px solid #000',
                                                }}
                                                value={digit}
                                                onChange={(e) => handleOtpChange(e, index)}
                                                onKeyDown={(e) => handleKeyDown(e, index)}
                                                required
                                            />
                                        ))}
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100">
                                        Verify OTP
                                    </button>
                                </form>
                            )}

                            {step === 3 && (
                                <form onSubmit={handlePasswordUpdate}>
                                    <div className="mb-3">
                                        <label htmlFor="newPassword" className="form-label">New Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="newPassword"
                                            placeholder="New Password"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="confirmPassword"
                                            placeholder="Confirm New Password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    {newPassword !== confirmPassword && (
                                        <div className="text-danger mb-3">
                                            Passwords do not match!
                                        </div>
                                    )}
                                    <button type="submit" className="btn btn-primary w-100" disabled={newPassword !== confirmPassword}>
                                        Update Password
                                    </button>
                                </form>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
