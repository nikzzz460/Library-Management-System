
import React from 'react';

function Footer() {
    const footerStyle = {
        backgroundColor: '#306b6b',
        padding: '0.5rem 0',
        width: '100%',
        position: 'absolute',
        bottom: '0',
    };

    const containerStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '1rem',
    };

    const linkStyle = {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '1rem',
    };

    const socialLinkStyle = {
        color: '#fff',
        fontSize: '1.5rem',
        textDecoration: 'none',
    };

    return (
        <footer style={footerStyle}>
            <div className="container d-flex justify-content-between align-items-center" style={containerStyle}>
                <div className="footer-links d-flex gap-3">
                    <a href="#" style={linkStyle}>Guidelines</a>
                    <a href="#" style={linkStyle}>About Us</a>
                    <a href="#" style={linkStyle}>FAQs</a>
                    <a href="#" style={linkStyle}>Terms of Service</a>
                    <a href="#" style={linkStyle}>Privacy Policy</a>
                    <a href="#" style={linkStyle}>Contact</a>
                    <a href="#" style={linkStyle}>Support</a>
                </div>

                <div className="footer-social d-flex gap-3">
                    <a href="#" style={socialLinkStyle}><i className="fab fa-instagram"></i></a>
                    <a href="#" style={socialLinkStyle}><i className="fab fa-facebook-f"></i></a>
                    <a href="#" style={socialLinkStyle}><i className="fas fa-envelope"></i></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;