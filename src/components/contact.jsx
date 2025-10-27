import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const darkBlue = '#003F9E';
    const primaryBlue = '#0056E3';
    const form = useRef();
    
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const EMAILJS_CONFIG = {
        SERVICE_ID: 'service_t25i83w',
        TEMPLATE_ID: 'template_httfd58',
        PUBLIC_KEY: 'AHUyfQi97LSPROvZ3'
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
            
            const result = await emailjs.sendForm(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                form.current,
                EMAILJS_CONFIG.PUBLIC_KEY
            );

            console.log('EmailJS Success:', result.text);
            setSubmitStatus('success');
            setFormData({ user_name: '', user_email: '', subject: '', message: '' });
            setTimeout(() => setSubmitStatus(null), 5000);
            
        } catch (error) {
            console.error('EmailJS Error:', error);
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus(null), 5000);
        }
        
        setIsSubmitting(false);
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const containerStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isMobile ? '0 16px' : '0 20px'
    };

    const inputStyle = {
        width: '100%',
        padding: isMobile ? '14px 16px' : '16px 20px',
        border: '2px solid #e9ecef',
        borderRadius: '12px',
        fontSize: isMobile ? '0.95rem' : '1rem',
        backgroundColor: '#f8f9fa',
        transition: 'all 0.3s ease',
        outline: 'none',
        boxSizing: 'border-box'
    };

    const inputFocusStyle = {
        borderColor: primaryBlue,
        backgroundColor: 'white',
        boxShadow: `0 0 0 3px ${primaryBlue}20`
    };

    return (
        <section 
            id="contact" 
            style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                minHeight: '100vh',
                position: 'relative',
                overflow: 'hidden',
                padding: isMobile ? '60px 0' : '80px 0'
            }}
        >
            {/* Background decorative elements */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: isMobile ? '-150px' : '-100px',
                width: isMobile ? '200px' : '250px',
                height: isMobile ? '200px' : '250px',
                background: `linear-gradient(45deg, ${primaryBlue}15, ${darkBlue}15)`,
                borderRadius: '50%',
                filter: 'blur(100px)',
                opacity: '0.6',
                zIndex: 1
            }} />
            
            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: isMobile ? '-180px' : '-150px',
                width: isMobile ? '250px' : '300px',
                height: isMobile ? '250px' : '300px',
                background: `linear-gradient(45deg, ${darkBlue}15, ${primaryBlue}15)`,
                borderRadius: '50%',
                filter: 'blur(120px)',
                opacity: '0.6',
                zIndex: 1
            }} />

            <div style={{ ...containerStyle, position: 'relative', zIndex: 2 }}>
                {/* Section Header */}
                <div style={{ 
                    textAlign: 'center', 
                    marginBottom: isMobile ? '50px' : '80px',
                    padding: isMobile ? '0 10px' : '0'
                }}>
                    <span style={{
                        backgroundColor: primaryBlue,
                        color: 'white',
                        padding: isMobile ? '6px 20px' : '8px 24px',
                        borderRadius: '50px',
                        fontSize: isMobile ? '0.8rem' : '0.9rem',
                        fontWeight: '500',
                        letterSpacing: '0.5px',
                        display: 'inline-block',
                        marginBottom: '20px'
                    }}>
                        LET'S CONNECT
                    </span>
                    
                    <h2 style={{
                        fontSize: isMobile ? '2rem' : 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 'bold',
                        color: darkBlue,
                        margin: '0 0 20px 0',
                        lineHeight: '1.2'
                    }}>
                        Get In Touch
                    </h2>
                    
                    <p style={{
                        fontSize: isMobile ? '1rem' : '1.2rem',
                        color: '#6c757d',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: '1.6',
                        padding: isMobile ? '0 10px' : '0'
                    }}>
                        Have a project in mind or just want to connect? I'd love to hear from you 
                        and discuss how we can bring your ideas to life.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 400px',
                    gap: isMobile ? '30px' : '60px',
                    alignItems: 'start'
                }}>
                    {/* Contact Info & Social Links - Shows first on mobile */}
                    <div style={{ order: isMobile ? -1 : 2 }}>
                        {/* Quick Contact Info */}
                        <div style={{
                            backgroundColor: 'white',
                            borderRadius: '20px',
                            padding: isMobile ? '30px 20px' : '40px',
                            marginBottom: '30px',
                            boxShadow: '0 15px 50px rgba(0, 86, 227, 0.05)',
                            border: '1px solid #f0f0f0'
                        }}>
                            <h4 style={{
                                fontSize: isMobile ? '1.2rem' : '1.4rem',
                                fontWeight: 'bold',
                                color: darkBlue,
                                marginBottom: '24px'
                            }}>
                                Quick Contact
                            </h4>

                            <div style={{ marginBottom: '24px' }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginBottom: '12px'
                                }}>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '10px',
                                        background: `linear-gradient(45deg, ${primaryBlue}20, ${darkBlue}20)`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: '15px',
                                        flexShrink: 0
                                    }}>
                                        📧
                                    </div>
                                    <div style={{ minWidth: 0, flex: 1 }}>
                                        <h6 style={{ margin: '0', fontWeight: '600', color: '#333', fontSize: isMobile ? '0.9rem' : '1rem' }}>Email</h6>
                                        <a 
                                            href="mailto:igweezekiel2021@gmail.com" 
                                            style={{ 
                                                color: primaryBlue, 
                                                textDecoration: 'none',
                                                fontSize: isMobile ? '0.8rem' : '0.9rem',
                                                wordBreak: 'break-word'
                                            }}
                                        >
                                            igweezekiel2021@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginBottom: '24px' }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginBottom: '12px'
                                }}>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '10px',
                                        background: `linear-gradient(45deg, ${primaryBlue}20, ${darkBlue}20)`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: '15px',
                                        flexShrink: 0
                                    }}>
                                        📱
                                    </div>
                                    <div>
                                        <h6 style={{ margin: '0', fontWeight: '600', color: '#333', fontSize: isMobile ? '0.9rem' : '1rem' }}>Phone</h6>
                                        <span style={{ color: '#6c757d', fontSize: isMobile ? '0.8rem' : '0.9rem' }}>
                                            +(234) 915-842-3002
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '10px',
                                        background: `linear-gradient(45deg, ${primaryBlue}20, ${darkBlue}20)`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: '15px',
                                        flexShrink: 0
                                    }}>
                                        ⚡
                                    </div>
                                    <div>
                                        <h6 style={{ margin: '0', fontWeight: '600', color: '#333', fontSize: isMobile ? '0.9rem' : '1rem' }}>Response Time</h6>
                                        <span style={{ color: '#6c757d', fontSize: isMobile ? '0.8rem' : '0.9rem' }}>
                                            Usually within 24 hours
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div style={{
                            backgroundColor: 'white',
                            borderRadius: '20px',
                            padding: isMobile ? '30px 20px' : '40px',
                            boxShadow: '0 15px 50px rgba(0, 86, 227, 0.05)',
                            border: '1px solid #f0f0f0'
                        }}>
                            <h4 style={{
                                fontSize: isMobile ? '1.2rem' : '1.4rem',
                                fontWeight: 'bold',
                                color: darkBlue,
                                marginBottom: '24px'
                            }}>
                                Find Me Online
                            </h4>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {[
                                    { icon: '💼', label: 'LinkedIn', url: 'https://www.linkedin.com/in/ezekiel-igwe-71b706285/', description: 'Professional network' },
                                    { icon: '💻', label: 'GitHub', url: 'https://github.com/Mongop-dev', description: 'Code repositories' },
                                    { icon: '🎨', label: 'Behance', url: 'https://www.behance.net/ezekieligwe', description: 'Design portfolio' },
                                    { icon: '🐦', label: 'Twitter', url: 'https://x.com/kiwe_unlimlited?t=SfkAtzpVc9vA8K3g6kURWQ&s=09', description: 'Latest updates' }
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: isMobile ? '12px' : '16px',
                                            borderRadius: '12px',
                                            textDecoration: 'none',
                                            color: 'inherit',
                                            border: '2px solid #f0f0f0',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = primaryBlue;
                                            e.currentTarget.style.backgroundColor = `${primaryBlue}05`;
                                            if (!isMobile) {
                                                e.currentTarget.style.transform = 'translateX(8px)';
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = '#f0f0f0';
                                            e.currentTarget.style.backgroundColor = 'transparent';
                                            e.currentTarget.style.transform = 'translateX(0)';
                                        }}
                                    >
                                        <div style={{
                                            fontSize: isMobile ? '1.3rem' : '1.5rem',
                                            marginRight: isMobile ? '12px' : '16px'
                                        }}>
                                            {social.icon}
                                        </div>
                                        <div>
                                            <div style={{
                                                fontWeight: '600',
                                                color: darkBlue,
                                                marginBottom: '2px',
                                                fontSize: isMobile ? '0.9rem' : '1rem'
                                            }}>
                                                {social.label}
                                            </div>
                                            <div style={{
                                                fontSize: isMobile ? '0.75rem' : '0.85rem',
                                                color: '#6c757d'
                                            }}>
                                                {social.description}
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '24px',
                        padding: isMobile ? '30px 20px' : '50px',
                        boxShadow: '0 25px 80px rgba(0, 86, 227, 0.08)',
                        border: '1px solid #f0f0f0',
                        position: 'relative',
                        overflow: 'hidden',
                        order: isMobile ? 2 : 1
                    }}>
                        {/* Card accent */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '4px',
                            background: `linear-gradient(90deg, ${primaryBlue}, ${darkBlue})`
                        }} />

                        <h3 style={{
                            fontSize: isMobile ? '1.4rem' : '1.8rem',
                            fontWeight: 'bold',
                            color: darkBlue,
                            marginBottom: '30px',
                            textAlign: 'center'
                        }}>
                            Send a Direct Message
                        </h3>

                        {/* Success/Error Messages */}
                        {submitStatus && (
                            <div style={{
                                padding: isMobile ? '12px 16px' : '16px 20px',
                                borderRadius: '12px',
                                marginBottom: '24px',
                                backgroundColor: submitStatus === 'success' ? '#d4edda' : '#f8d7da',
                                border: `1px solid ${submitStatus === 'success' ? '#c3e6cb' : '#f5c6cb'}`,
                                color: submitStatus === 'success' ? '#155724' : '#721c24'
                            }}>
                                {submitStatus === 'success' ? (
                                    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                                        <span style={{ marginRight: '8px', fontSize: '1.2rem', flexShrink: 0 }}>✅</span>
                                        <div>
                                            <strong style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>Message sent successfully!</strong>
                                            <div style={{ fontSize: isMobile ? '0.8rem' : '0.9rem', marginTop: '4px' }}>
                                                Thank you for reaching out. I'll get back to you within 24 hours.
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                                        <span style={{ marginRight: '8px', fontSize: '1.2rem', flexShrink: 0 }}>❌</span>
                                        <div>
                                            <strong style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>Failed to send message</strong>
                                            <div style={{ fontSize: isMobile ? '0.8rem' : '0.9rem', marginTop: '4px' }}>
                                                Please try again or contact me directly via email.
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        <div ref={form} onSubmit={handleSubmit}>
                            {/* Name and Email Row */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                                gap: '20px',
                                marginBottom: '24px'
                            }}>
                                <div>
                                    <label style={{
                                        display: 'block',
                                        marginBottom: '8px',
                                        fontWeight: '600',
                                        color: '#333',
                                        fontSize: isMobile ? '0.9rem' : '0.95rem'
                                    }}>
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        value={formData.user_name}
                                        onChange={handleInputChange}
                                        placeholder="John Doe"
                                        required
                                        style={inputStyle}
                                        onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                                        onBlur={(e) => {
                                            e.target.style.borderColor = '#e9ecef';
                                            e.target.style.backgroundColor = '#f8f9fa';
                                            e.target.style.boxShadow = 'none';
                                        }}
                                    />
                                </div>
                                <div>
                                    <label style={{
                                        display: 'block',
                                        marginBottom: '8px',
                                        fontWeight: '600',
                                        color: '#333',
                                        fontSize: isMobile ? '0.9rem' : '0.95rem'
                                    }}>
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        value={formData.user_email}
                                        onChange={handleInputChange}
                                        placeholder="john@example.com"
                                        required
                                        style={inputStyle}
                                        onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                                        onBlur={(e) => {
                                            e.target.style.borderColor = '#e9ecef';
                                            e.target.style.backgroundColor = '#f8f9fa';
                                            e.target.style.boxShadow = 'none';
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Subject */}
                            <div style={{ marginBottom: '24px' }}>
                                <label style={{
                                    display: 'block',
                                    marginBottom: '8px',
                                    fontWeight: '600',
                                    color: '#333',
                                    fontSize: isMobile ? '0.9rem' : '0.95rem'
                                }}>
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    placeholder="Project Inquiry, Collaboration, or Just Hello!"
                                    required
                                    style={inputStyle}
                                    onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = '#e9ecef';
                                        e.target.style.backgroundColor = '#f8f9fa';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                />
                            </div>

                            {/* Message */}
                            <div style={{ marginBottom: '32px' }}>
                                <label style={{
                                    display: 'block',
                                    marginBottom: '8px',
                                    fontWeight: '600',
                                    color: '#333',
                                    fontSize: isMobile ? '0.9rem' : '0.95rem'
                                }}>
                                    Message *
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Tell me about your project, timeline, budget, or anything else you'd like to discuss..."
                                    required
                                    rows={isMobile ? 4 : 5}
                                    style={{
                                        ...inputStyle,
                                        resize: 'vertical',
                                        minHeight: '120px'
                                    }}
                                    onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = '#e9ecef';
                                        e.target.style.backgroundColor = '#f8f9fa';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                onClick={handleSubmit}
                                style={{
                                    width: '100%',
                                    background: isSubmitting 
                                        ? '#6c757d' 
                                        : submitStatus === 'success'
                                        ? '#28a745'
                                        : `linear-gradient(45deg, ${primaryBlue}, ${darkBlue})`,
                                    color: 'white',
                                    border: 'none',
                                    padding: isMobile ? '16px 30px' : '18px 40px',
                                    borderRadius: '12px',
                                    fontSize: isMobile ? '1rem' : '1.1rem',
                                    fontWeight: '600',
                                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 10px 30px rgba(0, 86, 227, 0.3)',
                                    opacity: isSubmitting ? 0.7 : 1,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                onMouseEnter={(e) => {
                                    if (!isSubmitting && !isMobile) {
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 86, 227, 0.4)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!isSubmitting) {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 86, 227, 0.3)';
                                    }
                                }}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div style={{
                                            width: '20px',
                                            height: '20px',
                                            border: '2px solid #ffffff40',
                                            borderTop: '2px solid white',
                                            borderRadius: '50%',
                                            animation: 'spin 1s linear infinite',
                                            marginRight: '8px'
                                        }}></div>
                                        Sending...
                                    </>
                                ) : submitStatus === 'success' ? (
                                    <>
                                        ✅ Message Sent!
                                    </>
                                ) : (
                                    'Send Message'
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Keyframe animation */}
            <style>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </section>
    );
};

export default Contact;