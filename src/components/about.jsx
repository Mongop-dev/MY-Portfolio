import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import eaziProfilePhoto from '../assets/images/eazi-profile-photo.png';
// Brand Colors: Dark Blue (#003F9E)

const About = () => {
    const darkBlue = '#003F9E';
    const primaryBlue = '#0056E3';
    
    // Enhanced skills data with icons
    const designSkills = [
        { name: 'Figma', icon: '🎨' },
        { name: 'Adobe Photoshop', icon: '🖼️' },
        { name: 'Adobe Illustrator', icon: '✏️' },
        { name: 'Sketch', icon: '📐' },
        { name: 'Branding & Identity', icon: '🏢' },
        { name: 'UI/UX Design', icon: '💡' }
    ];
    
    const devSkills = [
        { name: 'React.js', icon: '⚛️' },
        { name: 'JavaScript (ES6+)', icon: '🚀' },
        { name: 'Bootstrap/CSS', icon: '🎯' },
        { name: 'HTML5', icon: '📝' },
        { name: 'Git & GitHub', icon: '📚' },
        { name: 'Node.js/Express', icon: '⚡' }
    ];

    // Skill card component
    const SkillCard = ({ skill, index }) => (
        <div 
            className="d-flex align-items-center p-3 mb-3 rounded-4"
            style={{
                background: 'linear-gradient(135deg, rgba(0, 86, 227, 0.05) 0%, rgba(135, 206, 235, 0.05) 100%)',
                border: '1px solid rgba(0, 86, 227, 0.1)',
                transition: 'all 0.3s ease',
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
            }}
            onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-5px)';
                e.target.style.background = 'linear-gradient(135deg, rgba(0, 86, 227, 0.1) 0%, rgba(135, 206, 235, 0.1) 100%)';
                e.target.style.boxShadow = '0 10px 30px rgba(0, 86, 227, 0.15)';
            }}
            onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.background = 'linear-gradient(135deg, rgba(0, 86, 227, 0.05) 0%, rgba(135, 206, 235, 0.05) 100%)';
                e.target.style.boxShadow = 'none';
            }}
        >
            <span className="me-3" style={{ fontSize: '1.5rem' }}>{skill.icon}</span>
            <span style={{ fontWeight: '600', color: '#2d3748' }}>{skill.name}</span>
        </div>
    );

    return (
        <section id="about" style={{
            background: 'linear-gradient(180deg, #ffffff 0%, #f8faff 100%)',
            padding: '120px 0',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background decorative elements */}
            <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, zIndex: 0 }}>
                <div 
                    className="position-absolute rounded-circle"
                    style={{
                        width: '300px',
                        height: '300px',
                        background: 'radial-gradient(circle, rgba(0, 86, 227, 0.05) 0%, transparent 70%)',
                        top: '10%',
                        right: '-5%',
                    }}
                />
                <div 
                    className="position-absolute rounded-circle"
                    style={{
                        width: '400px',
                        height: '400px',
                        background: 'radial-gradient(circle, rgba(135, 206, 235, 0.05) 0%, transparent 70%)',
                        bottom: '10%',
                        left: '-10%',
                    }}
                />
            </div>
            
            <Container className="position-relative" style={{ zIndex: 1 }}>
                
                {/* Enhanced Section Header */}
                <div className="text-center mb-5">
                    <div 
                        className="d-inline-flex align-items-center mb-3 px-4 py-2 rounded-pill"
                        style={{
                            background: 'linear-gradient(135deg, rgba(0, 86, 227, 0.1) 0%, rgba(135, 206, 235, 0.1) 100%)',
                            border: '1px solid rgba(0, 86, 227, 0.2)',
                            animation: 'fadeInUp 0.8s ease-out',
                        }}
                    >
                        <span className="me-2" style={{ fontSize: '14px' }}>👋</span>
                        <span style={{ 
                            color: darkBlue,
                            fontWeight: '600',
                            fontSize: '0.9rem',
                            letterSpacing: '1px',
                            textTransform: 'uppercase'
                        }}>
                            Get to know me
                        </span>
                    </div>
                    
                    <h2 
                        className="fw-bold mb-4"
                        style={{ 
                            color: darkBlue,
                            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                            letterSpacing: '-1px',
                            animation: 'fadeInUp 1s ease-out 0.2s both',
                        }}
                    >
                        About Me
                    </h2>
                    
                    <div 
                        style={{
                            width: '80px',
                            height: '4px',
                            background: `linear-gradient(90deg, ${primaryBlue} 0%, #87CEEB 100%)`,
                            margin: '0 auto',
                            borderRadius: '2px',
                            animation: 'fadeInUp 1s ease-out 0.4s both',
                        }}
                    />
                </div>

                {/* SECTION 1: Image and Bio Content */}
                <Row className="g-5 align-items-center mb-5">
                    
                    {/* Enhanced Professional Image */}
                    <Col lg={5} className="d-flex justify-content-center">
                        <div 
                            className="position-relative"
                            style={{ animation: 'fadeInUp 1s ease-out 0.6s both' }}
                        >
                            <div 
                                className="rounded-4 shadow-lg d-flex align-items-center justify-content-center position-relative overflow-hidden"
                                style={{ 
                                    width: '100%', 
                                    maxWidth: '400px', 
                                    height: '450px',
                                    background: 'linear-gradient(145deg, #ffffff 0%, #f8faff 100%)',
                                    border: '1px solid rgba(0, 86, 227, 0.1)',
                                    transition: 'all 0.4s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'translateY(-10px)';
                                    e.target.style.boxShadow = '0 25px 50px rgba(0, 86, 227, 0.2)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = '0 10px 30px rgba(0, 86, 227, 0.1)';
                                }}
                            >
                                {/* Background pattern */}
                                <div 
                                    className="position-absolute w-100 h-100"
                                    style={{
                                        background: `
                                            radial-gradient(circle at 30% 70%, rgba(0, 86, 227, 0.05) 0%, transparent 50%),
                                            radial-gradient(circle at 70% 30%, rgba(135, 206, 235, 0.05) 0%, transparent 50%)
                                        `,
                                        top: 0,
                                        left: 0,
                                    }}
                                />
                                
                                {/* Actual Image */}
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
                        </div>
                    </Col>

                    {/* Enhanced Bio Section */}   
                    <Col lg={7}>
                        <div style={{ animation: 'fadeInUp 1s ease-out 0.8s both' }}>
                            <h3 
                                className="fw-bold mb-4"
                                style={{ 
                                    color: darkBlue,
                                    fontSize: 'clamp(1.8rem, 3vw, 2.2rem)',
                                    lineHeight: '1.3',
                                }}
                            >
                                Software Developer,<br/> Creative Designer.
                                {/* <br />
                                <span style={{ color: '#87CEEB' }}>Problem Solver.</span> */}
                            </h3>
                            
                            <div 
                                className="p-4 mb-4 rounded-4"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(248, 250, 255, 0.8) 100%)',
                                    border: '1px solid rgba(0, 86, 227, 0.1)',
                                    backdropFilter: 'blur(10px)',
                                }}
                            >
                                <p className="mb-3" style={{ 
                                    fontSize: '1.1rem',
                                    color: '#4a5568',
                                    lineHeight: '1.7',
                                    fontWeight: '500',
                                }}>
                                    Hello! I'm <strong style={{ color: darkBlue }}>Igwe Ezekiel</strong>, the mind behind EOI Designs. I combine graphic design creativity with React development to build digital experiences that look great and work even better. For me, design isn’t just about visuals—it’s about making technology feel simple, human, and enjoyable.
                                </p>
                                
                                <p className="mb-3" style={{ 
                                    fontSize: '1rem',
                                    color: '#718096',
                                    lineHeight: '1.6',
                                }}>
                                    With a strong foundation in <strong style={{ color: primaryBlue }}>Graphic Design</strong> and expertise as a <strong style={{ color: primaryBlue }}>Frontend React development</strong>, I craft digital experiences that are not only visually stunning but also highly performant and user-friendly.
                                </p>
                                
                                <p style={{ 
                                    fontSize: '1rem',
                                    color: '#718096',
                                    lineHeight: '1.6',
                                    margin: 0,
                                }}>
                                    Every project I take on is an opportunity to push creative boundaries while delivering solutions that exceed expectations. I believe great design is not just about aesthetics—it's about creating meaningful connections between users and technology.
                                </p>
                            </div>
                            
                            <div className="d-flex flex-wrap gap-3">
                                {['🎨 Creative', '⚡ Fast', '🔧 Reliable', '🚀 Innovative'].map((tag, index) => (
                                    <span 
                                        key={index}
                                        className="px-3 py-2 rounded-pill"
                                        style={{
                                            background: `linear-gradient(135deg, ${index % 2 === 0 ? primaryBlue : '#87CEEB'} 0%, ${index % 2 === 0 ? darkBlue : '#4A90E2'} 100%)`,
                                            color: 'white',
                                            fontSize: '0.85rem',
                                            fontWeight: '600',
                                            boxShadow: '0 4px 15px rgba(0, 86, 227, 0.2)',
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
                
                {/* SECTION 2: My Core Skills */}
                <div className="mb-5 pb-4">
                    <div className="text-center mb-5" style={{ animation: 'fadeInUp 1s ease-out 1s both' }}>
                        <h3 
                            className="fw-bold mb-3"
                            style={{ 
                                color: darkBlue,
                                fontSize: 'clamp(1.8rem, 3vw, 2.2rem)',
                            }}
                        >
                            My Core Skills
                        </h3>
                        <p style={{
                            color: '#718096',
                            fontSize: '1.1rem',
                            maxWidth: '600px',
                            margin: '0 auto',
                        }}>
                            A comprehensive toolkit combining creative design expertise with cutting-edge development technologies
                        </p>
                    </div>
                    
                    <Row className="g-5" style={{ animation: 'fadeInUp 1s ease-out 1.2s both' }}>
                        {/* Design Skills */}
                        <Col lg={6}>
                            <div 
                                className="p-4 rounded-4 h-100"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(0, 86, 227, 0.05) 0%, rgba(135, 206, 235, 0.05) 100%)',
                                    border: '1px solid rgba(0, 86, 227, 0.1)',
                                }}
                            >
                                <h5 
                                    className="fw-bold mb-4 d-flex align-items-center"
                                    style={{ color: primaryBlue, fontSize: '1.3rem' }}
                                >
                                    <span className="me-3" style={{ fontSize: '1.8rem' }}>🎨</span>
                                    Design Tools
                                </h5>
                                
                                {designSkills.map((skill, index) => (
                                    <SkillCard key={`design-${index}`} skill={skill} index={index} />
                                ))}
                            </div>
                        </Col>

                        {/* Development Skills */}
                        <Col lg={6}>
                            <div 
                                className="p-4 rounded-4 h-100"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(135, 206, 235, 0.05) 0%, rgba(74, 144, 226, 0.05) 100%)',
                                    border: '1px solid rgba(135, 206, 235, 0.1)',
                                }}
                            >
                                <h5 
                                    className="fw-bold mb-4 d-flex align-items-center"
                                    style={{ color: '#4A90E2', fontSize: '1.3rem' }}
                                >
                                    <span className="me-3" style={{ fontSize: '1.8rem' }}>💻</span>
                                    Development Stack
                                </h5>
                                
                                {devSkills.map((skill, index) => (
                                    <SkillCard key={`dev-${index}`} skill={skill} index={index + designSkills.length} />
                                ))}
                            </div>
                        </Col>
                    </Row>
                </div>
                
                {/* SECTION 3: Enhanced Stats Section */}
                <div style={{ animation: 'fadeInUp 1s ease-out 1.4s both' }}>
                    <div className="text-center mb-4">
                        <h3 
                            className="fw-bold mb-3"
                            style={{ 
                                color: darkBlue,
                                fontSize: 'clamp(1.6rem, 2.5vw, 2rem)',
                            }}
                        >
                            My Track Record
                        </h3>
                    </div>
                    
                    <div 
                        className="p-5 rounded-4"
                        style={{
                            background: 'linear-gradient(135deg, rgba(0, 86, 227, 0.05) 0%, rgba(135, 206, 235, 0.05) 100%)',
                            border: '1px solid rgba(0, 86, 227, 0.1)',
                        }}
                    >
                        <Row className="g-4">
                            {[
                                { number: '3+', label: 'Years Experience', icon: '🎯' },
                                { number: '10+', label: 'Projects Completed', icon: '🚀' },
                                { number: '100%', label: 'Client Satisfaction', icon: '⭐' },
                                { number: '24/7', label: 'Support Available', icon: '💬' }
                            ].map((stat, index) => (
                                <Col lg={3} md={6} key={index}>
                                    <div className="text-center">
                                        <div 
                                            className="mb-3 d-inline-flex align-items-center justify-content-center rounded-circle"
                                            style={{
                                                width: '70px',
                                                height: '70px',
                                                background: `linear-gradient(135deg, ${index % 2 === 0 ? primaryBlue : '#87CEEB'} 0%, ${index % 2 === 0 ? darkBlue : '#4A90E2'} 100%)`,
                                                fontSize: '1.8rem',
                                                boxShadow: '0 8px 25px rgba(0, 86, 227, 0.2)',
                                            }}
                                        >
                                            {stat.icon}
                                        </div>
                                        <h4 
                                            className="fw-bold mb-2"
                                            style={{ 
                                                color: darkBlue,
                                                fontSize: '2.2rem',
                                            }}
                                        >
                                            {stat.number}
                                        </h4>
                                        <p style={{ 
                                            color: '#718096',
                                            fontWeight: '600',
                                            margin: 0,
                                        }}>
                                            {stat.label}
                                        </p>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </Container>
            
            {/* Enhanced CSS animations */}
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }
                
                /* Smooth transitions for all elements */
                * {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
            `}</style>
        </section>
    );
};

export default About;