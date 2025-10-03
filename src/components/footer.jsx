import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
    Facebook, 
    Instagram, 
    Linkedin, 
    Github, 
    Palette, 
    Mail,
    Phone,
    MapPin,
    ArrowUp,
    ExternalLink,
    Send
} from 'lucide-react';

const Footer = () => {
    const darkBlue = '#003F9E';
    const primaryBlue = '#0056E3';
    
    // Quick links for the navigation column
    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    // Services list
    const services = [
        'UI/UX Design',
        'React Development',
        'Brand Identity',
        'Web Applications',
        'Mobile Design'
    ];

    // Social media links with proper icons
    const socialLinks = [
        { 
            name: 'LinkedIn', 
            href: 'https://www.linkedin.com/in/ezekiel-igwe-71b706285/', 
            icon: Linkedin, 
            hoverColor: '#0077B5' 
        },
        { 
            name: 'GitHub', 
            href: 'https://github.com/Mongop-dev/', 
            icon: Github, 
            hoverColor: '#333' 
        },
        { 
            name: 'Behance', 
            href: 'https://www.behance.net/ezekieligwe', 
            icon: Palette, 
            hoverColor: '#1769FF' 
        },
        { 
            name: 'Facebook', 
            href: 'https://web.facebook.com/ezekiel.igwe.982719/', 
            icon: Facebook, 
            hoverColor: '#1877F2' 
        },
        { 
            name: 'Instagram', 
            href: 'https://www.instagram.com/eoi_designs/', 
            icon: Instagram, 
            hoverColor: '#E4405F' 
        },
        { 
            name: 'Pinterest', 
            href: 'https://www.pinterest.com/EOIDesigns/', 
            icon: ExternalLink, 
            hoverColor: '#BD081C' 
        }
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const footerStyles = {
        background: `linear-gradient(135deg, ${darkBlue} 0%, #001a5c 50%, ${darkBlue} 100%)`,
        position: 'relative',
        overflow: 'hidden',
        width: '100vw',
        // width: '100%',
        marginLeft: 'calc(-50vw + 50%)',
        color: 'white'
    };

    const decorativeStyles = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(ellipse at top right, ${primaryBlue}15 0%, transparent 50%), 
                     radial-gradient(ellipse at bottom left, ${primaryBlue}10 0%, transparent 50%)`,
        pointerEvents: 'none'
    };

    return (
        <footer style={footerStyles} className="text-white">
            {/* Decorative Background */}
            <div style={decorativeStyles}></div>
            
            {/* Main Footer Content */}
            <div style={{ position: 'relative', zIndex: 1}}>
                <Container fluid className="py-5">
                    <Container>
                        <Row className="g-5">
                            
                            {/* Column 1: Brand and Contact */}
                            <Col lg={4} md={6}>
                                <div className="mb-4">
                                    <h2 className="fw-bold mb-3" style={{ 
                                        color: primaryBlue, 
                                        fontSize: '2.2rem',
                                        textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                                    }}>
                                        EOI Designs
                                    </h2>
                                    <div style={{ 
                                        width: '60px', 
                                        height: '3px', 
                                        background: `linear-gradient(90deg, ${primaryBlue}, #00c4ff)`,
                                        borderRadius: '2px',
                                        marginBottom: '1.5rem'
                                    }}></div>
                                </div>
                                
                                <p className="mb-4" style={{ 
                                    color: '#b8c5d6', 
                                    fontSize: '1.1rem', 
                                    lineHeight: '1.7' 
                                }}>
                                    Blending design flair with robust React development to create exceptional digital experiences that drive results.
                                </p>

                                {/* Contact Information */}
                                <div className="mb-4">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-3 d-flex align-items-center justify-content-center" style={{
                                            width: '40px',
                                            height: '40px',
                                            backgroundColor: `${primaryBlue}20`,
                                            borderRadius: '8px'
                                        }}>
                                            <Mail size={20} color={primaryBlue} />
                                        </div>
                                        <span style={{ color: '#e2e8f0' }}>hello@eoiDesigns.com</span>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-3 d-flex align-items-center justify-content-center" style={{
                                            width: '40px',
                                            height: '40px',
                                            backgroundColor: `${primaryBlue}20`,
                                            borderRadius: '8px'
                                        }}>
                                            <Phone size={20} color={primaryBlue} />
                                        </div>
                                        <span style={{ color: '#e2e8f0' }}>+234 (0) 123 456 7890</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="me-3 d-flex align-items-center justify-content-center" style={{
                                            width: '40px',
                                            height: '40px',
                                            backgroundColor: `${primaryBlue}20`,
                                            borderRadius: '8px'
                                        }}>
                                            <MapPin size={20} color={primaryBlue} />
                                        </div>
                                        <span style={{ color: '#e2e8f0' }}>Lagos, Nigeria</span>
                                    </div>
                                </div>
                            </Col>

                            {/* Column 2: Quick Links */}
                            <Col lg={2} md={6}>
                                <h4 className="fw-bold mb-4" style={{ color: 'white', fontSize: '1.3rem' }}>
                                    Quick Links
                                </h4>
                                <ul className="list-unstyled">
                                    {navLinks.map((link, index) => (
                                        <li key={index} className="mb-3">
                                            <a 
                                                href={link.href} 
                                                className="text-decoration-none d-flex align-items-center"
                                                style={{ 
                                                    color: '#b8c5d6',
                                                    transition: 'all 0.3s ease',
                                                    fontSize: '1rem'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = primaryBlue;
                                                    e.target.style.paddingLeft = '10px';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#b8c5d6';
                                                    e.target.style.paddingLeft = '0px';
                                                }}
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </Col>

                            {/* Column 3: Services */}
                            <Col lg={3} md={6}>
                                <h4 className="fw-bold mb-4" style={{ color: 'white', fontSize: '1.3rem' }}>
                                    Our Services
                                </h4>
                                <ul className="list-unstyled">
                                    {services.map((service, index) => (
                                        <li key={index} className="mb-3">
                                            <span 
                                                style={{ 
                                                    color: '#b8c5d6',
                                                    fontSize: '1rem',
                                                    transition: 'color 0.3s ease',
                                                    cursor: 'pointer'
                                                }}
                                                onMouseEnter={(e) => e.target.style.color = '#e2e8f0'}
                                                onMouseLeave={(e) => e.target.style.color = '#b8c5d6'}
                                            >
                                                • {service}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </Col>

                            {/* Column 4: Newsletter & Social */}
                            <Col lg={3} md={6}>
                                <h4 className="fw-bold mb-4" style={{ color: 'white', fontSize: '1.3rem' }}>
                                    Stay Connected
                                </h4>
                                
                                {/* Newsletter Signup */}
                                <div className="mb-4">
                                    <p style={{ color: '#b8c5d6', fontSize: '0.95rem', marginBottom: '1rem' }}>
                                        Subscribe to get updates on our latest projects and insights.
                                    </p>
                                    <div className="d-flex">
                                        <input 
                                            type="email" 
                                            className="form-control me-2" 
                                            placeholder="Enter your email"
                                            style={{
                                                backgroundColor: 'rgba(255,255,255,0.1)',
                                                border: `1px solid ${primaryBlue}40`,
                                                color: 'white',
                                                borderRadius: '8px'
                                            }}
                                        />
                                        <button 
                                            className="btn d-flex align-items-center justify-content-center"
                                            style={{
                                                backgroundColor: primaryBlue,
                                                border: 'none',
                                                borderRadius: '8px',
                                                width: '45px',
                                                height: '45px'
                                            }}
                                        >
                                            <Send size={18} />
                                        </button>
                                    </div>
                                </div>

                                {/* Social Media Links */}
                                <div>
                                    <h5 className="fw-bold mb-3" style={{ color: 'white', fontSize: '1.1rem' }}>
                                        Follow Us
                                    </h5>
                                    <div className="d-flex flex-wrap gap-2">
                                        {socialLinks.map((social, index) => {
                                            const Icon = social.icon;
                                            return (
                                                <a
                                                    key={index}
                                                    href={social.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="d-flex align-items-center justify-content-center text-decoration-none"
                                                    style={{
                                                        width: '45px',
                                                        height: '45px',
                                                        backgroundColor: 'rgba(255,255,255,0.1)',
                                                        borderRadius: '10px',
                                                        transition: 'all 0.3s ease',
                                                        border: `1px solid ${primaryBlue}30`
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.target.style.backgroundColor = social.hoverColor;
                                                        e.target.style.transform = 'translateY(-3px)';
                                                        e.target.style.boxShadow = `0 8px 25px ${social.hoverColor}40`;
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                                                        e.target.style.transform = 'translateY(0)';
                                                        e.target.style.boxShadow = 'none';
                                                    }}
                                                    title={social.name}
                                                >
                                                    <Icon size={20} color="white" />
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>

                {/* Bottom Bar */}
                <div style={{ 
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    backgroundColor: 'rgba(0,0,0,0.2)'
                }}>
                    <Container className="py-4">
                        <Row className="align-items-center">
                            <Col md={8}>
                                <p className="mb-md-0 mb-3" style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
                                    &copy; {new Date().getFullYear()} Igwe Ezekiel • EOI Designs. All Rights Reserved.
                                </p>
                            </Col>
                            <Col md={4} className="text-md-end">
                                <div className="d-flex flex-wrap justify-content-md-end justify-content-center gap-3">
                                    <a 
                                        href="#privacy" 
                                        className="text-decoration-none"
                                        style={{ 
                                            color: '#94a3b8',
                                            fontSize: '0.9rem',
                                            transition: 'color 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => e.target.style.color = primaryBlue}
                                        onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                                    >
                                        Privacy
                                    </a>
                                    <a 
                                        href="#terms" 
                                        className="text-decoration-none"
                                        style={{ 
                                            color: '#94a3b8',
                                            fontSize: '0.9rem',
                                            transition: 'color 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => e.target.style.color = primaryBlue}
                                        onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                                    >
                                        Terms
                                    </a>
                                    <button
                                        onClick={scrollToTop}
                                        className="btn btn-sm d-flex align-items-center gap-2"
                                        style={{
                                            backgroundColor: `${primaryBlue}20`,
                                            border: `1px solid ${primaryBlue}`,
                                            color: primaryBlue,
                                            borderRadius: '20px',
                                            fontSize: '0.85rem',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = primaryBlue;
                                            e.target.style.color = 'white';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = `${primaryBlue}20`;
                                            e.target.style.color = primaryBlue;
                                        }}
                                    >
                                        <ArrowUp size={14} />
                                        Top
                                    </button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </footer>
    );
};

export default Footer;