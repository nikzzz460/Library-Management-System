import React from 'react';

function Footer() {
    const footerStyle = {
        backgroundColor: '#00695c',
        padding: '0.5rem 0',
        width: '100%',
        position: 'fixed', // Keeps the footer at the bottom
        left: '0',
        bottom: '0',
        marginTop: 'auto',
        zIndex: '1000',
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
                    <a href="/guideline" style={linkStyle}>Guidelines</a>
                    <a href="/terms-of-service" style={linkStyle}>Terms of Service</a>
                    <a href="/privacy-policy" style={linkStyle}>Privacy Policy</a>
                    <a href="/contact" style={linkStyle}>Contact</a>
                    <a href="/support" style={linkStyle}>Support</a>
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
