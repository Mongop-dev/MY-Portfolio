import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const EoiNavbar = () => {
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Brand colors
    const primaryBlue = '#0056E3';
    const darkBlue = '#003F9E';

    // Navbar style with gradient background
    const navbarStyle = {
        background: `linear-gradient(135deg, ${primaryBlue} 0%, ${darkBlue} 100%)`,
        backdropFilter: 'blur(10px)',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? '0 4px 20px rgba(0, 86, 227, 0.15)' : 'none',
    };

    // Modern link hover effects
    const linkStyle = {
        color: 'rgba(255, 255, 255, 0.9)',
        fontWeight: '500',
        fontSize: '1rem',
        letterSpacing: '0.5px',
        transition: 'all 0.3s ease',
        position: 'relative',
        padding: '0.5rem 1rem',
        borderRadius: '6px',
    };

    const brandStyle = {
        color: 'white',
        fontWeight: '700',
        fontSize: '1.75rem',
        letterSpacing: '-0.5px',
        background: 'linear-gradient(45deg, #ffffff, #e8f2ff)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
    };

    const handleLinkHover = (e, isEnter) => {
        if (isEnter) {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            e.target.style.color = 'white';
            e.target.style.transform = 'translateY(-2px)';
        } else {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = 'rgba(255, 255, 255, 0.9)';
            e.target.style.transform = 'translateY(0)';
        }
    };

    return (
        <Navbar 
            expand="lg" 
            fixed="top" 
            className="py-3"
            style={navbarStyle}
        > 
            <Container>
                <Navbar.Brand 
                    href="#hero" 
                    style={brandStyle}
                    className="d-flex align-items-center"
                >
                    <span className="me-2">✦</span>
                    TheIgweEzekiel
                </Navbar.Brand>
                
                <Navbar.Toggle 
                    aria-controls="basic-navbar-nav" 
                    className="border-0 p-1"
                    style={{ 
                        background: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '8px'
                    }}
                >
                    <span 
                        className="navbar-toggler-icon" 
                        style={{ 
                            filter: 'brightness(0) invert(1)',
                            width: '20px',
                            height: '20px'
                        }}
                    ></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link 
                            href="#about" 
                            style={linkStyle}
                            onMouseEnter={(e) => handleLinkHover(e, true)}
                            onMouseLeave={(e) => handleLinkHover(e, false)}
                        >
                            About
                        </Nav.Link>
                        
                        <Nav.Link 
                            href="#projects" 
                            style={linkStyle}
                            onMouseEnter={(e) => handleLinkHover(e, true)}
                            onMouseLeave={(e) => handleLinkHover(e, false)}
                        >
                            Projects
                        </Nav.Link>
                        
                        <Nav.Link 
                            href="#services" 
                            style={linkStyle}
                            onMouseEnter={(e) => handleLinkHover(e, true)}
                            onMouseLeave={(e) => handleLinkHover(e, false)}
                        >
                            Services
                        </Nav.Link>
                        
                        <Nav.Link 
                            href="#contact" 
                            className="ms-2"
                            style={{
                                ...linkStyle,
                                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                color: 'white',
                                fontWeight: '600',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = 'white';
                                e.target.style.color = darkBlue;
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 4px 12px rgba(255, 255, 255, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                                e.target.style.color = 'white';
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = 'none';
                            }}
                        >
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default EoiNavbar;