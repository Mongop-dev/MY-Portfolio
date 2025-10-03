import React, { useState } from 'react';
import { Eye, Github, ExternalLink, Palette, Code, Sparkles, ArrowUpRight } from 'lucide-react';
import PROJECTS_DATA from '../data/projectt'; // Import your project data

const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState(null);
    const [activeTab, setActiveTab] = useState('software');

    // Brand Colors
    const darkBlue = '#003F9E';
    const primaryBlue = '#0056E3';

    const ProjectCard = ({ project, type, index }) => (
        <div 
            className="col-md-6 col-lg-6 mb-4"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
        >
            <div 
                className={`card h-100 shadow-lg border-0 project-card ${hoveredProject === project.id ? 'hovered' : ''}`}
                style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e9ecef 100%)',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: hoveredProject === project.id ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                    boxShadow: hoveredProject === project.id 
                        ? '0 20px 40px rgba(0, 63, 158, 0.2), 0 10px 20px rgba(0, 0, 0, 0.1)' 
                        : '0 10px 25px rgba(0, 0, 0, 0.08)'
                }}
            >
                {/* Gradient Overlay */}
                <div 
                    className="position-absolute w-100 h-100"
                    style={{
                        background: 'linear-gradient(135deg, rgba(0, 86, 227, 0.05) 0%, rgba(0, 63, 158, 0.05) 100%)',
                        opacity: hoveredProject === project.id ? 1 : 0,
                        transition: 'opacity 0.5s ease',
                        borderRadius: '0.375rem',
                        pointerEvents: 'none'
                    }}
                />
                
                {/* Floating Elements */}
                <div 
                    className="position-absolute"
                    style={{
                        top: '1rem',
                        right: '1rem',
                        opacity: hoveredProject === project.id ? 1 : 0,
                        transform: hoveredProject === project.id ? 'translateX(0)' : 'translateX(1rem)',
                        transition: 'all 0.3s ease'
                    }}
                >
                    <div 
                        className="rounded-circle"
                        style={{
                            width: '2rem',
                            height: '2rem',
                            background: 'linear-gradient(45deg, #3b82f6, #1d4ed8)',
                            filter: 'blur(4px)',
                            animation: hoveredProject === project.id ? 'pulse 2s infinite' : 'none'
                        }}
                    />
                </div>
                
                <div 
                    className="position-absolute"
                    style={{
                        bottom: '1.5rem',
                        left: '1rem',
                        opacity: hoveredProject === project.id ? 1 : 0,
                        transform: hoveredProject === project.id ? 'translateX(0)' : 'translateX(-1rem)',
                        transition: 'all 0.5s ease 0.1s'
                    }}
                >
                    <div 
                        className="rounded-circle"
                        style={{
                            width: '1.5rem',
                            height: '1.5rem',
                            background: 'linear-gradient(45deg, #60a5fa, #3b82f6)',
                            filter: 'blur(3px)',
                            animation: hoveredProject === project.id ? 'pulse 2.5s infinite' : 'none'
                        }}
                    />
                </div>

                {/* Image Section */}
                <div 
                    className="position-relative overflow-hidden"
                    style={{ height: '200px' }}
                >
                    <div 
                        className="position-absolute w-100 h-100"
                        style={{
                            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #000000 100%)',
                        }}
                    >
                        <div 
                            className="position-absolute w-100 h-100"
                            style={{
                                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(29, 78, 216, 0.2) 100%)'
                            }}
                        />
                        
                        {/* Animated Grid Pattern */}
                        <div 
                            className="position-absolute w-100 h-100"
                            style={{
                                opacity: 0.2,
                                backgroundImage: `
                                    radial-gradient(circle at 25px 25px, white 2px, transparent 2px),
                                    radial-gradient(circle at 75px 75px, white 1px, transparent 1px)
                                `,
                                backgroundSize: '100px 100px',
                                animation: 'drift 20s linear infinite'
                            }}
                        />

                        {/* Project Icon */}
                        <div className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                            <div 
                                className="p-4 rounded-3 border d-flex align-items-center justify-content-center"
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    backdropFilter: 'blur(10px)',
                                    borderColor: 'rgba(255, 255, 255, 0.2)',
                                    width: '80px',
                                    height: '80px',
                                    transform: hoveredProject === project.id ? 'scale(1.1) rotate(6deg)' : 'scale(1) rotate(0deg)',
                                    transition: 'transform 0.5s ease'
                                }}
                            >
                                {type === 'software' ? (
                                    <Code size={32} color="white" />
                                ) : (
                                    <Palette size={32} color="white" />
                                )}
                            </div>
                        </div>

                        {/* Hover Overlay */}
                        <div 
                            className="position-absolute w-100 h-100"
                            style={{
                                background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)',
                                opacity: hoveredProject === project.id ? 1 : 0,
                                transition: 'opacity 0.3s ease'
                            }}
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="card-body p-4">
                    <div className="mb-3">
                        <h5 
                            className="card-title fw-bold mb-2"
                            style={{
                                color: hoveredProject === project.id ? primaryBlue : darkBlue,
                                transition: 'color 0.3s ease',
                                fontSize: '1.25rem'
                            }}
                        >
                            {project.title}
                        </h5>
                        <p className="card-text text-muted small" style={{ lineHeight: 1.6 }}>
                            {project.description}
                        </p>
                    </div>

                    {/* Tags */}
                    <div className="d-flex flex-wrap gap-2 mb-4">
                        {project.tags?.map((tag, idx) => (
                            <span
                                key={idx}
                                className="badge rounded-pill px-3 py-1"
                                style={{
                                    backgroundColor: '#e3f2fd',
                                    color: darkBlue,
                                    border: '1px solid #bbdefb',
                                    fontSize: '0.75rem',
                                    fontWeight: '500'
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="d-flex gap-2">
                        {type === 'software' && (
                            <>
                                <a
                                    href={project.live}
                                    className="btn flex-fill d-flex align-items-center justify-content-center gap-2 fw-semibold"
                                    style={{
                                        background: `linear-gradient(45deg, ${primaryBlue}, ${darkBlue})`,
                                        color: 'white',
                                        border: 'none',
                                        fontSize: '0.875rem',
                                        padding: '0.75rem 1rem',
                                        transition: 'all 0.3s ease',
                                        boxShadow: `0 8px 20px rgba(0, 86, 227, 0.3)`
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'translateY(-2px) scale(1.02)';
                                        e.target.style.boxShadow = `0 12px 25px rgba(0, 86, 227, 0.4)`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'translateY(0) scale(1)';
                                        e.target.style.boxShadow = `0 8px 20px rgba(0, 86, 227, 0.3)`;
                                    }}
                                >
                                    <Eye size={16} />
                                    <span>Live Demo</span>
                                    <ArrowUpRight size={14} />
                                </a>
                                <a
                                    href={project.github}
                                    className="btn d-flex align-items-center justify-content-center gap-2 fw-semibold"
                                    style={{
                                        backgroundColor: '#1e293b',
                                        color: 'white',
                                        border: 'none',
                                        fontSize: '0.875rem',
                                        padding: '0.75rem 1rem',
                                        transition: 'all 0.3s ease',
                                        minWidth: '120px'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = '#0f172a';
                                        e.target.style.transform = 'translateY(-2px) scale(1.02)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = '#1e293b';
                                        e.target.style.transform = 'translateY(0) scale(1)';
                                    }}
                                >
                                    <Github size={16} />
                                    <span>Code</span>
                                </a>
                            </>
                        )}
                        {type === 'design' && (
                            <a
                                href={project.behance}
                                className="btn w-100 d-flex align-items-center justify-content-center gap-2 fw-semibold"
                                style={{
                                    background: `linear-gradient(45deg, ${darkBlue}, ${primaryBlue})`,
                                    color: 'white',
                                    border: 'none',
                                    fontSize: '0.875rem',
                                    padding: '0.75rem 1rem',
                                    transition: 'all 0.3s ease',
                                    boxShadow: `0 8px 20px rgba(0, 63, 158, 0.3)`
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'translateY(-2px) scale(1.02)';
                                    e.target.style.boxShadow = `0 12px 25px rgba(0, 63, 158, 0.4)`;
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'translateY(0) scale(1)';
                                    e.target.style.boxShadow = `0 8px 20px rgba(0, 63, 158, 0.3)`;
                                }}
                            >
                                <ExternalLink size={16} />
                                <span>View on Behance</span>
                                <ArrowUpRight size={14} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <>
            {/* Add Custom CSS */}
            <style>
                {`
                    @keyframes drift {
                        0% { transform: translate(0, 0); }
                        100% { transform: translate(100px, 100px); }
                    }
                    
                    @keyframes pulse {
                        0%, 100% { opacity: 0.8; }
                        50% { opacity: 1; }
                    }
                    
                    .project-card {
                        overflow: hidden;
                        border-radius: 1rem !important;
                    }
                    
                    .project-card:hover .card-img-top {
                        transform: scale(1.05);
                    }
                    
                    .floating-bg {
                        animation: float 6s ease-in-out infinite;
                    }
                    
                    @keyframes float {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-10px); }
                    }
                    
                    .bg-pattern {
                        background-image: 
                            radial-gradient(circle at 50% 50%, rgba(0, 86, 227, 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(0, 63, 158, 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 20% 80%, rgba(0, 86, 227, 0.08) 0%, transparent 50%);
                    }
                `}
            </style>

            <section className="py-5 bg-pattern" style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
                {/* Background Elements */}
                <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, zIndex: -1 }}>
                    <div 
                        className="position-absolute floating-bg"
                        style={{
                            top: '10%',
                            left: '10%',
                            width: '300px',
                            height: '300px',
                            background: 'radial-gradient(circle, rgba(0, 86, 227, 0.15) 0%, transparent 70%)',
                            borderRadius: '50%',
                            filter: 'blur(40px)'
                        }}
                    />
                    <div 
                        className="position-absolute floating-bg"
                        style={{
                            bottom: '10%',
                            right: '10%',
                            width: '400px',
                            height: '400px',
                            background: 'radial-gradient(circle, rgba(0, 63, 158, 0.12) 0%, transparent 70%)',
                            borderRadius: '50%',
                            filter: 'blur(60px)',
                            animationDelay: '2s'
                        }}
                    />
                    <div 
                        className="position-absolute floating-bg"
                        style={{
                            top: '50%',
                            left: '30%',
                            width: '250px',
                            height: '250px',
                            background: 'radial-gradient(circle, rgba(0, 86, 227, 0.1) 0%, transparent 70%)',
                            borderRadius: '50%',
                            filter: 'blur(50px)',
                            animationDelay: '4s'
                        }}
                    />
                </div>

                <div className="container">
                    {/* Header */}
                    <div className="text-center mb-5">
                        <div 
                            className="d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill mb-4"
                            style={{
                                backgroundColor: '#e3f2fd',
                                color: darkBlue,
                                fontWeight: '500',
                                fontSize: '0.875rem',
                                backdropFilter: 'blur(10px)'
                            }}
                        >
                            <Sparkles size={16} />
                            <span>Featured Work</span>
                        </div>
                        <h2 
                            className="display-4 fw-bold mb-4"
                            style={{
                                background: 'linear-gradient(135deg, #1e293b 0%, #475569 50%, #1e293b 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}
                        >
                            My Portfolio Projects
                        </h2>
                        <p className="lead text-muted mx-auto" style={{ maxWidth: '600px', lineHeight: 1.6 }}>
                            A curated collection showcasing the intersection of technical expertise and creative vision, 
                            where innovation meets elegant design.
                        </p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="d-flex justify-content-center mb-5">
                        <div 
                            className="d-inline-flex p-1 rounded-3 shadow-lg border"
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                backdropFilter: 'blur(10px)',
                                borderColor: 'rgba(226, 232, 240, 0.6)'
                            }}
                        >
                            {[
                                { id: 'software', label: 'Software Development', icon: Code },
                                { id: 'design', label: 'Graphic Design', icon: Palette }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`btn d-flex align-items-center gap-2 fw-semibold ${
                                        activeTab === tab.id ? 'text-white' : 'text-muted'
                                    }`}
                                    style={{
                                        background: activeTab === tab.id 
                                            ? `linear-gradient(45deg, ${primaryBlue}, ${darkBlue})`
                                            : 'transparent',
                                        border: 'none',
                                        fontSize: '0.875rem',
                                        padding: '0.75rem 1.5rem',
                                        borderRadius: '0.5rem',
                                        transition: 'all 0.3s ease',
                                        transform: activeTab === tab.id ? 'scale(1.02)' : 'scale(1)',
                                        boxShadow: activeTab === tab.id 
                                            ? `0 8px 20px rgba(0, 86, 227, 0.25)` 
                                            : 'none'
                                    }}
                                >
                                    <tab.icon size={18} />
                                    <span>{tab.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="row g-4">
                        {PROJECTS_DATA[activeTab].map((project, index) => (
                            <ProjectCard 
                                key={project.id} 
                                project={project} 
                                type={activeTab} 
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;