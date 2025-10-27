import React, { useEffect, useRef, useState } from 'react';
import eaziProfilePhotoo from '../assets/images/eazi-profile-photo.png';

const Hero = () => {
    const heroRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
    const [scrollY, setScrollY] = useState(0);
    
    // Brand colors
    const primaryBlue = '#0056E3';
    const darkBlue = '#003F9E';
    
    // Placeholder image - replace with your actual image
    const eaziProfilePhoto = eaziProfilePhotoo;
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

    // Mouse tracking with parallax
    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            
            setMousePosition({
                x: (clientX / innerWidth) * 100,
                y: (clientY / innerHeight) * 100
            });
        };

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <section 
                id="hero" 
                ref={heroRef}
                style={{
                    minHeight: '100vh',
                    width: '100%',
                    margin: 0,
                    padding: 0,
                    position: 'relative',
                    overflow: 'hidden',
                    background: `
                        radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                            rgba(255, 255, 255, 0.15) 0%, 
                            transparent 60%),
                        linear-gradient(135deg, 
                            ${darkBlue} 0%, 
                            ${primaryBlue} 30%, 
                            #4A90E2 60%, 
                            #87CEEB 85%, 
                            #ffffff 100%)
                    `,
                }}
            >
                {/* Animated mesh gradient overlay */}
                <div 
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `
                            radial-gradient(circle at 30% 20%, rgba(135, 206, 235, 0.2) 0%, transparent 50%),
                            radial-gradient(circle at 70% 80%, rgba(0, 86, 227, 0.2) 0%, transparent 50%),
                            radial-gradient(circle at 50% 50%, rgba(74, 144, 226, 0.15) 0%, transparent 60%)
                        `,
                        animation: 'meshMove 20s ease-in-out infinite',
                        pointerEvents: 'none',
                    }}
                />

                {/* Floating orbs */}
                <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            style={{
                                position: 'absolute',
                                width: `${100 + i * 50}px`,
                                height: `${100 + i * 50}px`,
                                borderRadius: '50%',
                                background: `radial-gradient(circle, rgba(255, 255, 255, ${0.08 - i * 0.01}) 0%, transparent 70%)`,
                                top: `${10 + i * 12}%`,
                                left: `${5 + i * 11}%`,
                                animation: `float ${8 + i * 2}s ease-in-out infinite`,
                                animationDelay: `${i * 0.7}s`,
                                filter: 'blur(40px)',
                            }}
                        />
                    ))}
                </div>

                {/* Main content container */}
                <div 
                    style={{
                        position: 'relative',
                        maxWidth: '1400px',
                        margin: '0 auto',
                        padding: '0 5%',
                        minHeight: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        zIndex: 1,
                    }}
                >
                    <div 
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '4rem',
                            alignItems: 'center',
                            width: '100%',
                            padding: '120px 0 80px',
                        }}
                    >
                        {/* Text Content */}
                        <div style={{ 
                            animation: 'fadeInUp 1s ease-out',
                            zIndex: 2,
                        }}>
                            {/* Badge */}
                            <div 
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    padding: '12px 28px',
                                    borderRadius: '100px',
                                    background: 'rgba(255, 255, 255, 0.15)',
                                    backdropFilter: 'blur(30px)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    marginBottom: '32px',
                                    animation: 'fadeInUp 1s ease-out 0.2s both',
                                }}
                            >
                                <span style={{ fontSize: '18px' }}>✨</span>
                                <span style={{ 
                                    color: 'white', 
                                    fontWeight: '700',
                                    fontSize: '0.85rem',
                                    letterSpacing: '2px',
                                    textTransform: 'uppercase',
                                }}>
                                    EOI Solutions
                                </span>
                            </div>

                            {/* Headline */}
                            <h1 style={{
                                fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                                fontWeight: '900',
                                lineHeight: '1.05',
                                color: 'white',
                                marginBottom: '24px',
                                letterSpacing: '-2px',
                                animation: 'fadeInUp 1s ease-out 0.4s both',
                            }}>
                                Igwe Ezekiel
                                <br />
                                <span style={{
                                    background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(135,206,235,0.8) 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    display: 'inline-block',
                                }}>
                                    Onyenaturuchi
                                </span>
                            </h1>

                            {/* Subtitle */}
                            <p style={{
                                fontSize: 'clamp(1.15rem, 2.5vw, 1.5rem)',
                                color: 'rgba(255, 255, 255, 0.95)',
                                lineHeight: '1.6',
                                marginBottom: '16px',
                                fontWeight: '500',
                                animation: 'fadeInUp 1s ease-out 0.6s both',
                            }}>
                                Creative <span style={{ 
                                    color: '#87CEEB', 
                                    fontWeight: '800',
                                    textShadow: '0 0 30px rgba(135,206,235,0.5)',
                                }}>Designer</span> & 
                                Innovative <span style={{ 
                                    color: '#87CEEB', 
                                    fontWeight: '800',
                                    textShadow: '0 0 30px rgba(135,206,235,0.5)',
                                }}>Developer</span>
                            </p>

                            <p style={{
                                fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
                                color: 'rgba(255, 255, 255, 0.75)',
                                marginBottom: '48px',
                                animation: 'fadeInUp 1s ease-out 0.8s both',
                            }}>
                                Crafting digital experiences that inspire and captivate
                            </p>

                            {/* Buttons */}
                            <div style={{
                                display: 'flex',
                                gap: '20px',
                                flexWrap: 'wrap',
                                animation: 'fadeInUp 1s ease-out 1s both',
                            }}>
                                <a
                                    href="#project"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        padding: '18px 42px',
                                        fontSize: '1.05rem',
                                        fontWeight: '700',
                                        color: 'white',
                                        background: `linear-gradient(135deg, ${darkBlue} 0%, ${primaryBlue} 100%)`,
                                        border: 'none',
                                        borderRadius: '100px',
                                        textDecoration: 'none',
                                        boxShadow: '0 10px 40px rgba(0, 59, 158, 0.4)',
                                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                        cursor: 'pointer',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'translateY(-4px) scale(1.03)';
                                        e.target.style.boxShadow = '0 15px 50px rgba(0, 59, 158, 0.5)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'translateY(0) scale(1)';
                                        e.target.style.boxShadow = '0 10px 40px rgba(0, 59, 158, 0.4)';
                                    }}
                                >
                                    <span>🚀</span>
                                    View My Work
                                    <span>→</span>
                                </a>

                                <button
                                    onClick={handleDownloadCV}
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        padding: '18px 42px',
                                        fontSize: '1.05rem',
                                        fontWeight: '700',
                                        color: 'white',
                                        background: 'rgba(255, 255, 255, 0.12)',
                                        border: '2px solid rgba(255, 255, 255, 0.4)',
                                        borderRadius: '100px',
                                        backdropFilter: 'blur(20px)',
                                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                        cursor: 'pointer',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = 'rgba(255, 255, 255, 0.25)';
                                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.7)';
                                        e.target.style.transform = 'translateY(-4px) scale(1.03)';
                                        e.target.style.boxShadow = '0 15px 50px rgba(255, 255, 255, 0.2)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = 'rgba(255, 255, 255, 0.12)';
                                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                                        e.target.style.transform = 'translateY(0) scale(1)';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                >
                                    <span>📄</span>
                                    Download CV
                                </button>
                            </div>
                        </div>

                        {/* Image Section - Revolutionary Design */}
                        <div style={{
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            animation: 'fadeInScale 1.2s ease-out 0.6s both',
                        }}>
                            {/* Rotating gradient ring */}
                            <div style={{
                                position: 'absolute',
                                width: '110%',
                                height: '110%',
                                borderRadius: '50%',
                                background: `conic-gradient(
                                    from 0deg,
                                    transparent 0%,
                                    rgba(135, 206, 235, 0.6) 25%,
                                    transparent 50%,
                                    rgba(0, 86, 227, 0.6) 75%,
                                    transparent 100%
                                )`,
                                animation: 'rotate 8s linear infinite',
                                filter: 'blur(30px)',
                                zIndex: 0,
                            }} />

                            {/* Inner glow */}
                            <div style={{
                                position: 'absolute',
                                width: '90%',
                                height: '90%',
                                borderRadius: '50%',
                                background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
                                animation: 'pulse 3s ease-in-out infinite',
                                zIndex: 0,
                            }} />

                            {/* Main image container */}
                            <div 
                                style={{
                                    position: 'relative',
                                    width: '100%',
                                    maxWidth: '500px',
                                    aspectRatio: '1/1',
                                    transform: `translate(${(mousePosition.x - 50) * 0.02}px, ${(mousePosition.y - 50) * 0.02}px)`,
                                    transition: 'transform 0.3s ease-out',
                                    zIndex: 1,
                                }}
                            >
                                <img 
                                    src={eaziProfilePhoto}
                                    alt="Igwe Ezekiel - Professional Headshot"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center',
                                        borderRadius: '50%',
                                        maskImage: 'radial-gradient(circle, black 35%, transparent 70%)',
                                        WebkitMaskImage: 'radial-gradient(circle, black 35%, transparent 70%)',
                                        filter: 'drop-shadow(0 30px 80px rgba(0, 86, 227, 0.4))',
                                        transition: 'all 0.6s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'scale(1.05)';
                                        e.target.style.filter = 'drop-shadow(0 40px 100px rgba(0, 86, 227, 0.5))';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'scale(1)';
                                        e.target.style.filter = 'drop-shadow(0 30px 80px rgba(0, 86, 227, 0.4))';
                                    }}
                                />
                            </div>

                            {/* Floating particles */}
                            {[...Array(12)].map((_, i) => (
                                <div
                                    key={i}
                                    style={{
                                        position: 'absolute',
                                        width: `${4 + Math.random() * 8}px`,
                                        height: `${4 + Math.random() * 8}px`,
                                        borderRadius: '50%',
                                        background: `rgba(255, 255, 255, ${0.3 + Math.random() * 0.4})`,
                                        top: `${Math.random() * 100}%`,
                                        left: `${Math.random() * 100}%`,
                                        animation: `particleFloat ${5 + Math.random() * 5}s ease-in-out infinite`,
                                        animationDelay: `${Math.random() * 3}s`,
                                        filter: 'blur(1px)',
                                        zIndex: 2,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    animation: 'bounce 2s ease-in-out infinite',
                    zIndex: 10,
                }}>
                    <div style={{
                        width: '30px',
                        height: '50px',
                        border: '2px solid rgba(255, 255, 255, 0.5)',
                        borderRadius: '20px',
                        position: 'relative',
                    }}>
                        <div style={{
                            width: '6px',
                            height: '10px',
                            background: 'white',
                            borderRadius: '3px',
                            position: 'absolute',
                            top: '8px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            animation: 'scrollDot 2s ease-in-out infinite',
                        }} />
                    </div>
                </div>
            </section>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    33% { transform: translate(30px, -30px) rotate(5deg); }
                    66% { transform: translate(-20px, 20px) rotate(-5deg); }
                }
                
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(80px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes fadeInScale {
                    from {
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                
                @keyframes pulse {
                    0%, 100% { 
                        opacity: 0.3;
                        transform: scale(1);
                    }
                    50% { 
                        opacity: 0.6;
                        transform: scale(1.15);
                    }
                }
                
                @keyframes rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                
                @keyframes meshMove {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(30px, -30px); }
                }
                
                @keyframes particleFloat {
                    0%, 100% { 
                        transform: translate(0, 0);
                        opacity: 0;
                    }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    50% { 
                        transform: translate(var(--tx, 50px), var(--ty, -100px));
                    }
                }
                
                @keyframes bounce {
                    0%, 100% { transform: translateX(-50%) translateY(0); }
                    50% { transform: translateX(-50%) translateY(-15px); }
                }
                
                @keyframes scrollDot {
                    0% { 
                        top: 8px;
                        opacity: 1;
                    }
                    50% {
                        top: 28px;
                        opacity: 0.5;
                    }
                    100% {
                        top: 8px;
                        opacity: 1;
                    }
                }
                
                * {
                    box-sizing: border-box;
                }
                
                body {
                    margin: 0;
                    padding: 0;
                    overflow-x: hidden;
                }
                
                @media (max-width: 768px) {
                    #hero > div > div {
                        grid-template-columns: 1fr !important;
                        gap: 3rem !important;
                        text-align: center;
                    }
                    
                    #hero h1 {
                        font-size: clamp(2.5rem, 10vw, 4rem) !important;
                    }
                }
            `}</style>
        </>
    );
};

export default Hero;