import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import eaziProfilePhoto from '../assets/images/eazi-profile-photo.png';

const Hero = () => {
    const heroRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
    // Brand colors
    const primaryBlue = '#0056E3';
    const darkBlue = '#003F9E';
    
    // CV Download function
    const handleDownloadCV = () => {
        const cvFileName = 'resume_ezekiel_igwe.pdf';
        const cvPath = `/assets/documents/${cvFileName}`;
        
        const link = document.createElement('a');
        link.href = cvPath;
        link.download = cvFileName;
        link.style.display = 'none';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    
    // Full screen gradient style - covers entire viewport
    const gradientStyle = {
        minHeight: '100vh',
        width: '100vw',
        margin: '0',
        padding: '0',
        paddingTop: '100px',
        marginLeft: 'calc(-50vw + 50%)',
        background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(255, 255, 255, 0.1) 0%, 
                transparent 50%),
            linear-gradient(135deg, 
                ${darkBlue} 0%, 
                ${primaryBlue} 25%, 
                #4A90E2 50%, 
                #87CEEB 75%, 
                #ffffff 100%)
        `,
        position: 'relative',
        overflow: 'hidden',
    };

    // Enhanced mouse tracking
    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            
            setMousePosition({
                x: (clientX / innerWidth) * 100,
                y: (clientY / innerHeight) * 100
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Enhanced button styles
    const primaryButtonStyle = {
        background: `linear-gradient(135deg, ${darkBlue} 0%, ${primaryBlue} 100%)`,
        color: 'white',
        border: 'none',
        borderRadius: '50px',
        padding: '16px 40px',
        fontSize: '1.1rem',
        fontWeight: '600',
        letterSpacing: '0.5px',
        boxShadow: '0 8px 32px rgba(0, 59, 158, 0.3)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden',
    };

    const secondaryButtonStyle = {
        color: 'white',
        borderColor: 'rgba(255, 255, 255, 0.5)',
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(20px)',
        borderRadius: '50px',
        padding: '14px 36px',
        fontSize: '1.1rem',
        fontWeight: '600',
        letterSpacing: '0.5px',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        border: '2px solid rgba(255, 255, 255, 0.5)',
    };

    return (
        <section id="hero" style={gradientStyle} ref={heroRef}>
            {/* Animated background elements */}
            <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, zIndex: 0 }}>
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="position-absolute rounded-circle"
                        style={{
                            width: `${80 + i * 40}px`,
                            height: `${80 + i * 40}px`,
                            background: `rgba(255, 255, 255, ${0.05 + i * 0.02})`,
                            top: `${20 + i * 15}%`,
                            left: `${10 + i * 15}%`,
                            animation: `float ${6 + i * 2}s ease-in-out infinite`,
                            animationDelay: `${i * 0.5}s`,
                        }}
                    />
                ))}
            </div>
            
            {/* Main content */}
            <div style={{ 
                maxWidth: '1200px', 
                margin: '0 auto', 
                padding: '0 20px',
                height: '100%',
                position: 'relative',
                zIndex: 1,
            }}>
                <div style={{ paddingTop: '80px', paddingBottom: '80px' }}>
                    <Row className="align-items-center justify-content-center g-5" style={{ minHeight: '70vh' }}>
                        
                        {/* Left Column - Enhanced Text Content */}
                        <Col lg={6} md={7} className="order-2 order-md-1 text-center text-md-start">
                            
                            {/* Enhanced Brand Badge */}
                            <div 
                                className="d-inline-flex align-items-center mb-4 px-4 py-3 rounded-pill" 
                                style={{
                                    background: 'rgba(255, 255, 255, 0.2)',
                                    backdropFilter: 'blur(20px)',
                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                                    animation: 'slideInUp 0.8s ease-out',
                                }}
                            >
                                <span className="me-3" style={{ fontSize: '16px' }}>✨</span>
                                <span className="text-white fw-bold text-uppercase" 
                                      style={{ fontSize: '0.9rem', letterSpacing: '1.5px' }}>
                                    EOI Solutions Portfolio
                                </span>
                            </div>
                            
                            {/* Enhanced Main Headline */}
                            <h1 
                                className="mb-4" 
                                style={{
                                    fontSize: 'clamp(2.8rem, 5.5vw, 4rem)',
                                    fontWeight: '800',
                                    lineHeight: '1.1',
                                    color: 'white',
                                    letterSpacing: '-1px',
                                    textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                                    animation: 'slideInUp 1s ease-out 0.2s both',
                                }}
                            >
                                Igwe Ezekiel
                                <br />
                                <span style={{ 
                                    background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}>
                                    Onyenaturuchi
                                </span>
                            </h1>
                            
                            {/* Enhanced Tagline */}
                            <p 
                                className="mb-5" 
                                style={{
                                    fontSize: 'clamp(1.2rem, 2.5vw, 1.4rem)',
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    lineHeight: '1.6',
                                    maxWidth: '500px',
                                    margin: '0 auto 2rem auto',
                                    fontWeight: '500',
                                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                                    animation: 'slideInUp 1s ease-out 0.4s both',
                                }}
                            >
                                Creative <span style={{ color: '#87CEEB', fontWeight: '700' }}>Designer</span> & 
                                Innovative <span style={{ color: '#87CEEB', fontWeight: '700' }}>Developer</span>
                                <br />
                                <span style={{ fontSize: '1rem', opacity: 0.8 }}>
                                    Crafting digital experiences that inspire
                                </span>
                            </p>
                            
                            {/* Enhanced CTA Buttons */}
                            <div 
                                className="d-flex flex-column flex-sm-row gap-4 justify-content-center justify-content-md-start"
                                style={{ animation: 'slideInUp 1s ease-out 0.6s both' }}
                            >
                                <Button 
                                    href="#project"
                                    size="lg"
                                    style={primaryButtonStyle}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'translateY(-3px) scale(1.02)';
                                        e.target.style.boxShadow = '0 12px 40px rgba(0, 59, 158, 0.4)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'translateY(0) scale(1)';
                                        e.target.style.boxShadow = '0 8px 32px rgba(0, 59, 158, 0.3)';
                                    }}
                                >
                                    <span className="me-2">🚀</span>
                                    View My Work
                                    <span className="ms-2">→</span>
                                </Button>
                                
                                <Button 
                                    onClick={handleDownloadCV}
                                    size="lg"
                                    variant="outline"
                                    style={secondaryButtonStyle}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = 'rgba(255, 255, 255, 0.25)';
                                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.8)';
                                        e.target.style.transform = 'translateY(-3px) scale(1.02)';
                                        e.target.style.boxShadow = '0 12px 40px rgba(255, 255, 255, 0.2)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                                        e.target.style.transform = 'translateY(0) scale(1)';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                >
                                    <span className="me-2">📄</span>
                                    Download CV
                                </Button>
                            </div>
                        </Col>
                        
                        {/* Right Column - Enhanced Image placeholder */}
                        <Col lg={5} md={5} className="order-1 order-md-2 d-flex justify-content-center">
                            <div 
                                className="position-relative"
                                style={{ animation: 'slideInUp 1s ease-out 0.8s both' }}
                            >
                                {/* Main image container */}
                                <div 
                                    className="d-flex align-items-center justify-content-center p-4 position-relative"
                                    style={{
                                        width: '380px',
                                        height: '380px',
                                        background: 'linear-gradient(145deg, #ffffff 0%, #f8faff 100%)',
                                        borderRadius: '24px',
                                        boxShadow: `
                                            0 25px 60px rgba(0, 86, 227, 0.25),
                                            inset 0 1px 0 rgba(255, 255, 255, 0.6)
                                        `,
                                        border: '1px solid rgba(255, 255, 255, 0.4)',
                                        backdropFilter: 'blur(20px)',
                                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                        overflow: 'hidden',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'translateY(-12px) rotate(2deg)';
                                        e.target.style.boxShadow = `
                                            0 35px 80px rgba(0, 86, 227, 0.3),
                                            inset 0 1px 0 rgba(255, 255, 255, 0.6)
                                        `;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'translateY(0) rotate(0deg)';
                                        e.target.style.boxShadow = `
                                            0 25px 60px rgba(0, 86, 227, 0.25),
                                            inset 0 1px 0 rgba(255, 255, 255, 0.6)
                                        `;
                                    }}
                                >
                                    {/* Background pattern */}
                                    <div 
                                        className="position-absolute w-100 h-100"
                                        style={{
                                            background: `
                                                radial-gradient(circle at 20% 80%, rgba(0, 86, 227, 0.1) 0%, transparent 50%),
                                                radial-gradient(circle at 80% 20%, rgba(74, 144, 226, 0.1) 0%, transparent 50%),
                                                radial-gradient(circle at 40% 40%, rgba(135, 206, 235, 0.1) 0%, transparent 50%)
                                            `,
                                            borderRadius: '24px',
                                        }}
                                    />
                                    
                                    {/* Profile placeholder content */}
                                    {/* <div className="text-center position-relative z-1">
                                        <div 
                                            className="mb-4 d-inline-flex align-items-center justify-content-center rounded-circle"
                                            style={{
                                                width: '90px',
                                                height: '90px',
                                                background: `linear-gradient(135deg, ${primaryBlue}, ${darkBlue})`,
                                                color: 'white',
                                                fontSize: '2.2rem',
                                                boxShadow: '0 10px 30px rgba(0, 59, 158, 0.3)',
                                            }}
                                        >
                                            👨‍💻
                                        </div>
                                        <h4 style={{ 
                                            color: '#2d3748',
                                            fontSize: '1.3rem',
                                            fontWeight: '700',
                                            margin: '0 0 8px 0',
                                        }}>
                                            Your Professional Photo
                                        </h4>
                                        <p style={{ 
                                            color: '#718096',
                                            fontSize: '0.95rem',
                                            margin: 0,
                                            fontWeight: '500',
                                        }}>
                                            Upload your best portrait here
                                        </p>
                                    </div> */}
                                    <img 
                                        src= {eaziProfilePhoto}
                                        alt="Igwe Ezekiel - Professional Headshot"
                                        className="position-relative"
                                            style={{
                                                width: '90%',
                                                height: '90%',
                                                objectFit: 'cover',
                                                objectPosition: 'center',
                                                filter: 'drop-shadow(0 10px 30px rgba(0, 86, 227, 0.1))',
                                            }}
                                    />
                                </div>
                                
                                {/* Decorative elements */}
                                <div 
                                    className="position-absolute rounded-circle"
                                    style={{
                                        width: '100px',
                                        height: '100px',
                                        background: 'rgba(255, 255, 255, 0.2)',
                                        top: '-20px',
                                        right: '-20px',
                                        zIndex: -1,
                                        backdropFilter: 'blur(10px)',
                                    }}
                                />
                                <div 
                                    className="position-absolute rounded-circle"
                                    style={{
                                        width: '60px',
                                        height: '60px',
                                        background: 'rgba(135, 206, 235, 0.3)',
                                        bottom: '-10px',
                                        left: '-10px',
                                        zIndex: -1,
                                        backdropFilter: 'blur(10px)',
                                    }}
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

            {/* Enhanced CSS animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }
                
                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(60px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                /* Ensure full screen coverage and no horizontal overflow */
                body {
                    overflow-x: hidden;
                    margin: 0;
                    padding: 0;
                }
                
                #hero {
                    box-sizing: border-box;
                }
                
                /* Smooth scrolling */
                html {
                    scroll-behavior: smooth;
                }
            `}</style>
        </section>
    );
};

export default Hero;