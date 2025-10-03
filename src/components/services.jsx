import React from 'react';

// Brand Colors: Primary Blue (#0056E3), Dark Blue (#003F9E)
const Services = () => {
    const darkBlue = '#003F9E';
    const primaryBlue = '#0056E3';
    
    const servicesData = [
        {
            title: "React & Frontend Development",
            icon: "💻",
            description: "Crafting exceptional web experiences with cutting-edge React development. I specialize in building lightning-fast, scalable applications with modern JavaScript, ensuring seamless user interactions and optimal performance across all devices.",
            skills: ["React.js & Hooks", "TypeScript", "Next.js", "State Management", "HTML5/CSS3", "Responsive Design", "Performance Optimization", "Testing & Debugging"],
            features: [
                "Component-based architecture",
                "Modern ES6+ JavaScript",
                "Cross-browser compatibility",
                "Mobile-first responsive design"
            ]
        },
        {
            title: "Graphic Design & UI/UX",
            icon: "🎨",
            description: "Transforming ideas into visually compelling digital experiences. From brand identity to user interface design, I create cohesive visual systems that not only look stunning but also drive engagement and conversions.",
            skills: ["UI/UX Design", "Figma & Sketch", "Adobe Creative Suite", "Branding & Identity", "Wireframing", "Prototyping", "User Research", "Design Systems"],
            features: [
                "User-centered design approach",
                "Brand consistency across platforms",
                "High-fidelity mockups & prototypes",
                "Accessibility-focused design"
            ]
        }
    ];

    const containerStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
    };

    const cardStyle = {
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '40px',
        height: '100%',
        boxShadow: '0 20px 60px rgba(0, 86, 227, 0.1)',
        border: 'none',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
    };

    const skillBadgeStyle = {
        backgroundColor: darkBlue,
        color: 'white',
        padding: '8px 16px',
        borderRadius: '20px',
        fontSize: '0.8rem',
        fontWeight: '500',
        margin: '4px',
        display: 'inline-block',
        transition: 'all 0.2s ease',
        border: 'none',
        cursor: 'pointer'
    };

    return (
        <section 
            id="services" 
            style={{
                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                minHeight: '100vh',
                position: 'relative',
                overflow: 'hidden',
                padding: '80px 0'
            }}
        >
            {/* Background decorative elements */}
            <div style={{
                position: 'absolute',
                top: '10%',
                right: '-150px',
                width: '300px',
                height: '300px',
                background: `linear-gradient(45deg, ${primaryBlue}20, ${darkBlue}20)`,
                borderRadius: '50%',
                filter: 'blur(80px)',
                opacity: '0.5',
                zIndex: 1
            }} />
            
            <div style={{
                position: 'absolute',
                bottom: '20%',
                left: '-100px',
                width: '200px',
                height: '200px',
                background: `linear-gradient(45deg, ${darkBlue}20, ${primaryBlue}20)`,
                borderRadius: '50%',
                filter: 'blur(60px)',
                opacity: '0.5',
                zIndex: 1
            }} />

            <div style={{ ...containerStyle, position: 'relative', zIndex: 2 }}>
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <span style={{
                        backgroundColor: primaryBlue,
                        color: 'white',
                        padding: '8px 24px',
                        borderRadius: '50px',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        letterSpacing: '0.5px',
                        display: 'inline-block',
                        marginBottom: '20px'
                    }}>
                        WHAT I DO
                    </span>
                    
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 'bold',
                        color: darkBlue,
                        margin: '0 0 20px 0',
                        lineHeight: '1.2'
                    }}>
                        My Core Services
                    </h2>
                    
                    <p style={{
                        fontSize: '1.2rem',
                        color: '#6c757d',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: '1.6'
                    }}>
                        Bridging the gap between creative design and technical execution with 
                        modern solutions that drive results.
                    </p>
                </div>

                {/* Services Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
                    gap: '40px',
                    marginBottom: '80px'
                }}>
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            style={cardStyle}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = '0 30px 80px rgba(0, 86, 227, 0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 86, 227, 0.1)';
                            }}
                        >
                            {/* Card accent line */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '4px',
                                background: `linear-gradient(90deg, ${primaryBlue}, ${darkBlue})`
                            }} />

                            {/* Icon Container */}
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '80px',
                                height: '80px',
                                background: `linear-gradient(135deg, ${primaryBlue}15, ${darkBlue}15)`,
                                borderRadius: '50%',
                                fontSize: '2.5rem',
                                marginBottom: '24px'
                            }}>
                                {service.icon}
                            </div>
                            
                            {/* Service Title */}
                            <h3 style={{
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                color: darkBlue,
                                margin: '0 0 20px 0'
                            }}>
                                {service.title}
                            </h3>
                            
                            {/* Description */}
                            <p style={{
                                color: '#6c757d',
                                lineHeight: '1.7',
                                marginBottom: '32px',
                                fontSize: '1rem'
                            }}>
                                {service.description}
                            </p>

                            {/* Key Features */}
                            <div style={{ marginBottom: '32px' }}>
                                <h5 style={{
                                    fontSize: '0.8rem',
                                    fontWeight: 'bold',
                                    color: primaryBlue,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                    marginBottom: '16px'
                                }}>
                                    Key Features
                                </h5>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                    gap: '8px'
                                }}>
                                    {service.features.map((feature, fIndex) => (
                                        <div key={fIndex} style={{
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}>
                                            <div style={{
                                                width: '8px',
                                                height: '8px',
                                                backgroundColor: primaryBlue,
                                                borderRadius: '50%',
                                                marginRight: '10px',
                                                flexShrink: 0
                                            }} />
                                            <span style={{
                                                fontSize: '0.9rem',
                                                fontWeight: '500',
                                                color: '#333'
                                            }}>
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Skills Tags */}
                            <div>
                                <h5 style={{
                                    fontSize: '0.8rem',
                                    fontWeight: 'bold',
                                    color: primaryBlue,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                    marginBottom: '16px'
                                }}>
                                    Technologies & Skills
                                </h5>
                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '8px'
                                }}>
                                    {service.skills.map((skill, sIndex) => (
                                        <span
                                            key={sIndex}
                                            style={skillBadgeStyle}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.backgroundColor = primaryBlue;
                                                e.currentTarget.style.transform = 'translateY(-2px)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.backgroundColor = darkBlue;
                                                e.currentTarget.style.transform = 'translateY(0)';
                                            }}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div style={{ textAlign: 'center' }}>
                    <p style={{
                        color: '#6c757d',
                        marginBottom: '20px',
                        fontSize: '1.1rem'
                    }}>
                        Ready to bring your project to life?
                    </p>
                    <button
                        style={{
                            background: `linear-gradient(45deg, ${primaryBlue}, ${darkBlue})`,
                            color: 'white',
                            border: 'none',
                            padding: '16px 40px',
                            borderRadius: '50px',
                            fontSize: '1rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 10px 30px rgba(0, 86, 227, 0.3)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-3px)';
                            e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 86, 227, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 86, 227, 0.3)';
                        }}
                    >
                        Let's Work Together
                    </button>
                </div>
            </div>

            {/* Mobile Responsive Styles */}
            <style jsx>{`
                @media (max-width: 768px) {
                    section {
                        padding: 60px 0 !important;
                    }
                    
                    .services-grid {
                        grid-template-columns: 1fr !important;
                        gap: 30px !important;
                    }
                    
                    .card {
                        padding: 30px !important;
                        margin: 0 10px;
                    }
                    
                    .features-grid {
                        grid-template-columns: 1fr !important;
                    }
                    
                    h2 {
                        font-size: 2.5rem !important;
                    }
                }
                
                @media (max-width: 480px) {
                    .card {
                        padding: 24px !important;
                    }
                    
                    h2 {
                        font-size: 2rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Services;