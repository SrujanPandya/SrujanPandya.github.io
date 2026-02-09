import React, { useState, useEffect } from 'react';
import {
    User,
    BookOpen,
    Briefcase,
    Cpu,
    FileText,
    Mail,
    Linkedin,
    ExternalLink,
    ChevronRight,
    MapPin,
    GraduationCap,
    Microscope,
    Sun,
    Moon
} from 'lucide-react';

const App = () => {
    const [activeTab, setActiveTab] = useState('About');
    const [isDark, setIsDark] = useState(true);

    // Synchronize theme with local preference if needed, 
    // though we default to light for the first load.
    const toggleTheme = () => setIsDark(!isDark);

    const tabs = [
        { name: 'About', icon: <User size={18} /> },
        { name: 'Research', icon: <Microscope size={18} /> },
        { name: 'Experience', icon: <Briefcase size={18} /> },
        { name: 'Projects', icon: <Cpu size={18} /> },
        { name: 'Writings', icon: <FileText size={18} /> },
    ];

    const education = [
        {
            institution: "University at Buffalo (UB)",
            degree: "PhD in Mechanical Engineering",
            focus: "Multiscale Modeling, Electrospray Deposition, Soft Microrobotics",
            period: "Jan 2026 - Present",
            details: "Advisor: Dr. Xin Yong | Lab: SalL",
            color: "border-indigo-500"
        },
        {
            institution: "University of Illinois at Urbana-Champaign (UIUC)",
            degree: "MEng in Mechanical Engineering",
            focus: "Robotics and Robust Adaptive Control",
            period: "Aug 2023 - Dec 2024",
            details: "GPA: 3.80/4.00",
            color: "border-slate-400"
        },
        {
            institution: "IIT Gandhinagar",
            degree: "BTech (Honors) in Mechanical Engineering",
            focus: "Minor in Physics",
            period: "Jul 2018 - Jul 2022",
            details: "GPA: 8.24/10.00",
            color: "border-slate-300"
        }
    ];

    const experience = [
        {
            role: "Mechanical Engineer",
            company: "OneCommunity Global Inc",
            period: "Feb 2025 - Jan 2026",
            desc: "Simulated traditional geodesic domes in Autodesk Inventor; conducted structural FEA aligned with ASCE 7-22 and IBC 2021 standards."
        },
        {
            role: "Mechanical Design Intern",
            company: "Sulzer Inc",
            period: "Jul 2024 - Aug 2024",
            desc: "Developed and deployed customized CAD features (transferable to any pump model) on Onshape using FeatureScript, reducing time coming down the product pipeline to ~30-60 seconds (previously taking ~10-15 minutes on Siemens NX pipeline)."
        },
        {
            role: "CAE Intern",
            company: "L&T Technology Services Ltd",
            period: "Apr 2023 - Jul 2023",
            desc: "Structural, modal, and thermal analyses on electronic and automotive components (busbars, BDUs, etc.), snapfits, and radiators using ANSYS Mechanical + Python workflow."
        }
    ];

    const projects = [
        {
            title: "ML Feature Compression",
            org: "Schlumberger (SLB)",
            tags: ["Python", "Autoencoders", "Signal Processing"],
            desc: "Developed lightweight CNN-Autoencoder models for LWD sensors to optimize real-time data transmission.",
            link: "https://drive.google.com/file/d/17Jk5EkDvK5k5azNoBadxWGcp781tPLn9/view?usp=sharing"
        },
        {
            title: "UR3 Card Matching Bot",
            org: "UIUC",
            tags: ["ROS", "OpenCV", "Python"],
            desc: "Automated a memory card-matching game using UR3 arm and computer vision template matching.",
            link: "https://youtube.com/watch?v=rH_-TJP46nA&feature=shared"
        },
        {
            title: "Joint Impedance Control",
            org: "IIT / Timetooth Technologies",
            tags: ["Dynamics", "Control Logic", "Robotics"],
            desc: "Integrated 2-DOF robot dynamics to simulate assisted lower-limb motion for medical rehabilitation.",
            link: "https://drive.google.com/file/d/1He_MOijPhOJEuEBwzhit12JaBKl9a3q4/view?usp=sharing"
        }
    ];

    const writings = [
        {
            title: "The Future of Soft Microrobotics",
            date: "Feb 2026",
            snippet: "An exploration into how multiscale modeling is bridging the gap between theoretical physics and robotic actuation...",
            readTime: "6 min read"
        },
        {
            title: "Robust Control in Unstructured Environments",
            date: "Dec 2024",
            snippet: "Reflecting on the challenges of adaptive control systems when deployed in real-world, high-noise scenarios...",
            readTime: "8 min read"
        }
    ];

    const socialLinks = [
    { name: 'Email', url: 'mailto:srujanma@buffalo.edu' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/srujanpandya' },
    { name: 'Substack', url: 'https://srujanpandya.substack.com' }, 
    { name: 'GitHub', url: 'https://github.com/SrujanPandya' },   
    
    ];    

    return (
        <div className={`${isDark ? 'dark' : ''}`}>
            <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300 selection:bg-indigo-100 dark:selection:bg-indigo-900">

                {/* Header / Navigation */}
                <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
                    <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="font-semibold text-lg tracking-tight text-slate-900 dark:text-white">Srujan Pandya</span>
                            <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-bold tracking-[0.2em] uppercase">PhD Researcher</span>
                        </div>

                        <div className="hidden md:flex gap-8">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.name}
                                    onClick={() => setActiveTab(tab.name)}
                                    className={`text-sm font-medium transition-colors ${activeTab === tab.name
                                        ? 'text-indigo-600 dark:text-indigo-400'
                                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                                        }`}
                                >
                                    {tab.name}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-6">
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors"
                                aria-label="Toggle Theme"
                            >
                                {isDark ? <Sun size={18} /> : <Moon size={18} />}
                            </button>
                            <div className="h-4 w-[1px] bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>
                            <div className="flex items-center gap-4 text-slate-400">
                                <a href="mailto:srujanma@buffalo.edu" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"><Mail size={18} /></a>
                                <a href="https://www.linkedin.com/in/srujanpandya" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"><Linkedin size={18} /></a>
                            </div>
                        </div>
                    </div>
                </nav>

                <main className="max-w-5xl mx-auto px-6 py-12 lg:py-20">
                    {/* About Section */}
                    {activeTab === 'About' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <section className="mb-24">
                                <div className="max-w-3xl">
                                    <h1 className="text-4xl md:text-6xl font-serif text-slate-900 dark:text-white mb-8 leading-[1.15]">
                                        Engineering at the intersection of <span className="italic text-indigo-700 dark:text-indigo-400 underline decoration-indigo-200 dark:decoration-indigo-900 underline-offset-8">multiscale modeling</span> and robotics.
                                    </h1>
                                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
                                        I'm a PhD student at the <span className="font-semibold text-slate-800 dark:text-slate-200">University at Buffalo</span> within the <a href="https://sail-yong.github.io/">SaIL</a> Lab.
                                        My work investigates the computational foundations of electrospray deposition and soft microrobotics,
                                        aiming to bridge the gap between microscopic physics and macroscopic mechanical utility.
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-2 rounded-full text-slate-600 dark:text-slate-400">
                                            <MapPin size={14} className="text-indigo-500" /> Buffalo, NY
                                        </div>
                                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-2 rounded-full text-slate-600 dark:text-slate-400">
                                            <GraduationCap size={14} className="text-indigo-500" /> SalL Lab Researcher
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="grid grid-cols-1 md:grid-cols-2 gap-16">
                                <div>
                                    <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500 mb-8">Education History</h3>
                                    <div className="space-y-10">
                                        {education.map((edu, idx) => (
                                            <div key={idx} className={`pl-6 border-l-2 ${edu.color}`}>
                                                <h4 className="font-bold text-slate-900 dark:text-white text-lg">{edu.institution}</h4>
                                                <p className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold">{edu.degree}</p>
                                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">{edu.focus}</p>
                                                <div className="flex justify-between items-center mt-4">
                                                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{edu.period}</span>
                                                    <span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-600 dark:text-slate-300 font-bold uppercase">{edu.details}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500 mb-8">Technical Proficiency</h3>
                                    <div className="grid grid-cols-1 gap-8">
                                        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                                            <h5 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
                                                <Cpu size={16} className="text-indigo-500" /> Computation & Simulation
                                            </h5>
                                            <div className="flex flex-wrap gap-2">
                                                {["Python", "PyTorch", "MATLAB", "ROS", "Git", "Simulink", "C++"].map(skill => (
                                                    <span key={skill} className="text-[10px] font-bold bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2.5 py-1.5 rounded uppercase tracking-tighter">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                                            <h5 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
                                                <FileText size={16} className="text-indigo-500" /> Design & Analysis
                                            </h5>
                                            <div className="flex flex-wrap gap-2">
                                                {["ANSYS", "Abaqus", "SolidWorks", "Inventor", "OnShape", "FEA", "GD&T"].map(skill => (
                                                    <span key={skill} className="text-[10px] font-bold bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2.5 py-1.5 rounded uppercase tracking-tighter">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}

                    {/* Research Section */}
                    {activeTab === 'Research' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="mb-16">
                                <h2 className="text-3xl font-serif text-slate-900 dark:text-white mb-6">Active Research Focus</h2>
                                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl shadow-sm overflow-hidden relative">
                                    <div className="absolute top-0 right-0 p-8 opacity-5">
                                        <Microscope size={120} />
                                    </div>
                                    <div className="flex items-center gap-4 mb-6 relative">
                                        <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                                            <Microscope size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl text-slate-900 dark:text-white">SalL Lab: Multiscale Modeling</h3>
                                            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">University at Buffalo | Dr. Xin Yong</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl text-lg">
                                        My current investigations focus on the computational mechanics of <strong>Electrospray Deposition</strong> and the development of 
                                        <strong>Soft Microrobotics</strong>. We leverage HPC to simulate complex fluid-structure interactions, aiming for predictive control over micro-scale manufacturing processes.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {['Electrohydrodynamics', 'Microswimmers', 'Nanoparticle Aggregates'].map((theme, i) => (
                                            <div key={i} className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-transparent hover:border-indigo-500/20 transition-colors">
                                                <span className="block text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">Theme 0{i + 1}</span>
                                                <span className="font-bold text-slate-800 dark:text-slate-200">{theme}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500 mb-8">Scholarly Outputs</h3>
                                <div className="border border-dashed border-slate-300 dark:border-slate-800 rounded-2xl p-16 text-center bg-white/50 dark:bg-slate-900/50">
                                    <p className="text-slate-400 dark:text-slate-500 italic text-sm">Papers and conference proceedings will be indexed as they are published.</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Experience Section */}
                    {activeTab === 'Experience' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl">
                            <h2 className="text-3xl font-serif text-slate-900 dark:text-white mb-12">Professional Trajectory</h2>
                            <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 space-y-16 pb-12">
                                {experience.map((exp, idx) => (
                                    <div key={idx} className="relative pl-10">
                                        <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-white dark:ring-slate-950" />
                                        <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{exp.period}</span>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{exp.role}</h3>
                                        <p className="text-indigo-600 dark:text-indigo-400 font-bold mb-4">{exp.company}</p>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">{exp.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Projects Section */}
                    {activeTab === 'Projects' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h2 className="text-3xl font-serif text-slate-900 dark:text-white mb-12">Technical Projects</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {projects.map((proj, idx) => (
                                    <div key={idx} className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl hover:border-indigo-500 transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10">
                                        <div className="flex justify-between items-start mb-6">
                                            <div>
                                                <h3 className="font-bold text-xl text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{proj.title}</h3>
                                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.15em] mt-1">{proj.org}</p>
                                            </div>
                                            <a 
                                                href={proj.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-50 dark:bg-slate-800 text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-900/30 dark:hover:text-indigo-400 transition-all"
                                                aria-label={`View ${proj.title} source`}
                                            >
                                                <ExternalLink size={18} />
                                            </a>
                                        </div>
                                        <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                                            {proj.desc}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {proj.tags.map(tag => (
                                                <span key={tag} className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded font-bold uppercase tracking-tight">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Writings Section */}
                    {activeTab === 'Writings' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl">
                            <h2 className="text-3xl font-serif text-slate-900 dark:text-white mb-4">Research Log</h2>
                            <p className="text-slate-500 dark:text-slate-400 mb-12 italic text-lg leading-relaxed">Reflections on computational mechanics, adaptive controls, and the philosophy of fabrication.</p>

                            <div className="space-y-16">
                                {writings.map((post, idx) => (
                                    <article key={idx} className="group cursor-pointer">
                                        <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 dark:text-slate-500 mb-4 uppercase tracking-[0.2em]">
                                            <span>{post.date}</span>
                                            <span className="w-1 h-1 rounded-full bg-indigo-500/30" />
                                            <span>{post.readTime}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-4">
                                            {post.title}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 text-lg">
                                            {post.snippet}
                                        </p>
                                        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-sm font-bold group-hover:gap-4 transition-all">
                                            Read Full Essay <ChevronRight size={18} />
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    )}
                </main>

                {/* Footer */}
                <footer className="max-w-5xl mx-auto px-6 py-16 mt-20 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="text-center md:text-left">
                            <p className="text-sm font-bold text-slate-900 dark:text-white">Srujan Pandya</p>
                            <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">PhD Student, Mechanical Engineering</p>
                            <p className="text-[10px] text-slate-400 mt-4 italic">Built for precision and performance.</p>
                        </div>
                        <div className="flex gap-8">
                            {socialLinks.map((link) => (
                            <a 
                            key={link.name} 
                            href={link.url} 
                            target={link.name !== 'Email' ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                            >
                            {link.name}
                            </a>
                            ))}
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default App;
