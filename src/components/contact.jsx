import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// Brand Colors: Dark Blue (#003F9E), Primary Blue (#0056E3)
// EmailJS Integration for sending emails directly from frontend
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
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

    // EmailJS Configuration - Replace with your actual values
    const EMAILJS_CONFIG = {
        SERVICE_ID: 'service_t25i83w',     // Replace with your EmailJS service ID
        TEMPLATE_ID: 'template_httfd58',   // Replace with your EmailJS template ID
        PUBLIC_KEY: 'AHUyfQi97LSPROvZ3'      // Replace with your EmailJS public key
    };

    // Handler for form submission with EmailJS
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Initialize EmailJS with your public key (do this once)
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
            
            // Auto-hide success message after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);
            
        } catch (error) {
            console.error('EmailJS Error Details:', error);
            console.error('Error Text:', error.text);
            console.error('Error Status:', error.status);
            
            setSubmitStatus('error');
            
            // Show specific error in console for debugging
            if (error.status === 400) {
                console.error('Bad Request - Check your template variables and service configuration');
            } else if (error.status === 401) {
                console.error('Unauthorized - Check your Public Key');
            } else if (error.status === 404) {
                console.error('Not Found - Check your Service ID or Template ID');
            }
            
            // Auto-hide error message after 5 seconds
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
        padding: '0 20px'
    };

    const inputStyle = {
        width: '100%',
        padding: '16px 20px',
        border: `2px solid #e9ecef`,
        borderRadius: '12px',
        fontSize: '1rem',
        backgroundColor: '#f8f9fa',
        transition: 'all 0.3s ease',
        outline: 'none'
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
                padding: '80px 0'
            }}
        >
            {/* Background decorative elements */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '-100px',
                width: '250px',
                height: '250px',
                background: `linear-gradient(45deg, ${primaryBlue}15, ${darkBlue}15)`,
                borderRadius: '50%',
                filter: 'blur(100px)',
                opacity: '0.6',
                zIndex: 1
            }} />
            
            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '-150px',
                width: '300px',
                height: '300px',
                background: `linear-gradient(45deg, ${darkBlue}15, ${primaryBlue}15)`,
                borderRadius: '50%',
                filter: 'blur(120px)',
                opacity: '0.6',
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
                        LET'S CONNECT
                    </span>
                    
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 'bold',
                        color: darkBlue,
                        margin: '0 0 20px 0',
                        lineHeight: '1.2'
                    }}>
                        Get In Touch
                    </h2>
                    
                    <p style={{
                        fontSize: '1.2rem',
                        color: '#6c757d',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: '1.6'
                    }}>
                        Have a project in mind or just want to connect? I'd love to hear from you 
                        and discuss how we can bring your ideas to life.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 400px',
                    gap: '60px',
                    alignItems: 'start'
                }}>
                    {/* Contact Form */}
                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '24px',
                        padding: '50px',
                        boxShadow: '0 25px 80px rgba(0, 86, 227, 0.08)',
                        border: '1px solid #f0f0f0',
                        position: 'relative',
                        overflow: 'hidden'
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
                            fontSize: '1.8rem',
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
                                padding: '16px 20px',
                                borderRadius: '12px',
                                marginBottom: '24px',
                                backgroundColor: submitStatus === 'success' ? '#d4edda' : '#f8d7da',
                                border: `1px solid ${submitStatus === 'success' ? '#c3e6cb' : '#f5c6cb'}`,
                                color: submitStatus === 'success' ? '#155724' : '#721c24'
                            }}>
                                {submitStatus === 'success' ? (
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <span style={{ marginRight: '8px', fontSize: '1.2rem' }}>✅</span>
                                        <div>
                                            <strong>Message sent successfully!</strong>
                                            <div style={{ fontSize: '0.9rem', marginTop: '4px' }}>
                                                Thank you for reaching out. I'll get back to you within 24 hours.
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <span style={{ marginRight: '8px', fontSize: '1.2rem' }}>❌</span>
                                        <div>
                                            <strong>Failed to send message</strong>
                                            <div style={{ fontSize: '0.9rem', marginTop: '4px' }}>
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
                                gridTemplateColumns: '1fr 1fr',
                                gap: '20px',
                                marginBottom: '24px'
                            }}>
                                <div>
                                    <label style={{
                                        display: 'block',
                                        marginBottom: '8px',
                                        fontWeight: '600',
                                        color: '#333',
                                        fontSize: '0.95rem'
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
                                        fontSize: '0.95rem'
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
                                    fontSize: '0.95rem'
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
                                    fontSize: '0.95rem'
                                }}>
                                    Message *
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Tell me about your project, timeline, budget, or anything else you'd like to discuss..."
                                    required
                                    rows={5}
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
                                    padding: '18px 40px',
                                    borderRadius: '12px',
                                    fontSize: '1.1rem',
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
                                    if (!isSubmitting) {
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

                    {/* Contact Info & Social Links */}
                    <div>
                        {/* Quick Contact Info */}
                        <div style={{
                            backgroundColor: 'white',
                            borderRadius: '20px',
                            padding: '40px',
                            marginBottom: '30px',
                            boxShadow: '0 15px 50px rgba(0, 86, 227, 0.05)',
                            border: '1px solid #f0f0f0'
                        }}>
                            <h4 style={{
                                fontSize: '1.4rem',
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
                                        marginRight: '15px'
                                    }}>
                                        📧
                                    </div>
                                    <div>
                                        <h6 style={{ margin: '0', fontWeight: '600', color: '#333' }}>Email</h6>
                                        <a 
                                            href="mailto:youremail@example.com" 
                                            style={{ 
                                                color: primaryBlue, 
                                                textDecoration: 'none',
                                                fontSize: '0.9rem'
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
                                        marginRight: '15px'
                                    }}>
                                        📱
                                    </div>
                                    <div>
                                        <h6 style={{ margin: '0', fontWeight: '600', color: '#333' }}>Phone</h6>
                                        <span style={{ color: '#6c757d', fontSize: '0.9rem' }}>
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
                                        marginRight: '15px'
                                    }}>
                                        ⚡
                                    </div>
                                    <div>
                                        <h6 style={{ margin: '0', fontWeight: '600', color: '#333' }}>Response Time</h6>
                                        <span style={{ color: '#6c757d', fontSize: '0.9rem' }}>
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
                            padding: '40px',
                            boxShadow: '0 15px 50px rgba(0, 86, 227, 0.05)',
                            border: '1px solid #f0f0f0'
                        }}>
                            <h4 style={{
                                fontSize: '1.4rem',
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
                                            padding: '16px',
                                            borderRadius: '12px',
                                            textDecoration: 'none',
                                            color: 'inherit',
                                            border: '2px solid #f0f0f0',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = primaryBlue;
                                            e.currentTarget.style.backgroundColor = `${primaryBlue}05`;
                                            e.currentTarget.style.transform = 'translateX(8px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = '#f0f0f0';
                                            e.currentTarget.style.backgroundColor = 'transparent';
                                            e.currentTarget.style.transform = 'translateX(0)';
                                        }}
                                    >
                                        <div style={{
                                            fontSize: '1.5rem',
                                            marginRight: '16px'
                                        }}>
                                            {social.icon}
                                        </div>
                                        <div>
                                            <div style={{
                                                fontWeight: '600',
                                                color: darkBlue,
                                                marginBottom: '2px'
                                            }}>
                                                {social.label}
                                            </div>
                                            <div style={{
                                                fontSize: '0.85rem',
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
                </div>
            </div>

            {/* Mobile Responsive Styles */}
            <style jsx>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                
                @media (max-width: 1024px) {
                    .contact-grid {
                        grid-template-columns: 1fr !important;
                        gap: 40px !important;
                    }
                    
                    .contact-form {
                        padding: 40px 30px !important;
                    }
                    
                    .contact-sidebar {
                        order: -1;
                    }
                }
                
                @media (max-width: 768px) {
                    section {
                        padding: 60px 0 !important;
                    }
                    
                    .form-row {
                        grid-template-columns: 1fr !important;
                    }
                    
                    .contact-form {
                        padding: 30px 20px !important;
                        margin: 0 10px;
                    }
                    
                    .contact-info, .social-links {
                        padding: 30px 20px !important;
                        margin: 0 10px;
                    }
                    
                    h2 {
                        font-size: 2.5rem !important;
                    }
                }
                
                @media (max-width: 480px) {
                    h2 {
                        font-size: 2rem !important;
                    }
                    
                    .contact-form {
                        padding: 24px 16px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Contact;