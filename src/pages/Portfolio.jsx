import React, { useState } from 'react';
import { Search, ArrowUpRight, Linkedin, Github, Mail, Download, FileText, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// --- WARM LIGHT THEME — WELL-BALANCED CONTRAST ---
// Background: warm oat #F4F1EA
// Primary text: near-black warm #1E1C1A  (stronger than before)
// Secondary text: warm slate #5C5753    (was too light at #484441 / #5A5A5A)
// Borders: warm taupe #9E9690           (clearly visible, not harsh)
// Accent sage: #3B5C3B                  (forest green, slightly richer)
// Accent clay: #8E5342                  (unchanged)
const COLORS = {
    bg: 'bg-[#F4F1EA]',
    text: 'text-[#1E1C1A]',
    subtleText: 'text-[#5C5753]',
    accent1: 'text-[#3B5C3B]',
    accent2: 'text-[#8E5342]',
    border: 'border-[#9E9690]',
};

// --- RESEARCH / ONGOING WORK ---
const RESEARCH = [
    {
        id: 1,
        year: '2026',
        title: 'multiscale modeling & electrospray deposition in soft microrobotics',
        journal: 'phd research · university at buffalo'
    },
    {
        id: 2,
        year: '2024',
        title: 'CNN-autoencoder models for lossless LWD sensor data compression',
        journal: 'capstone · schlumberger (slb)'
    },
    {
        id: 3,
        year: '2021',
        title: 'patient-integrated joint impedance control for lower-limb assistance',
        journal: 'timetooth technologies · iit gandhinagar'
    },
];

// --- PROJECTS ---
const PROJECTS = [
    {
        id: 1,
        title: 'UR3 arm + vision: card matching bot',
        description: 'automated a memory card-matching game using ur3 arm and opencv-based template matching in python. enhanced reliability through detailed camera calibration and pixel-to-world transformation on ros.',
        link: '#'
    },
    {
        id: 2,
        title: 'aerial delivery with dual quadcopter',
        description: 'implemented cable-suspended payload control for dual quadcopters using simulink and simscape multibody toolbox. used leader-follower control with pid tuning to minimize payload swing during flight.',
        link: '#'
    },
    {
        id: 3,
        title: 'patient-integrated joint impedance control',
        description: 'integrated 2-dof robot dynamics with joint-level impedance control to simulate assisted lower-limb motion. modeled interaction torques between actuator and human limb for natural motion.',
        link: '#'
    },
];

// --- WRITING ---
const WRITING = [
    { id: 1, title: 'why scientists should read more poetry', platform: 'substack', date: 'oct 24', link: 'https://srujanpandya.substack.com' },
    { id: 2, title: 'the crisis of reproducibility', platform: 'internal', date: 'sep 24', link: '#' },
];

// PDF path — served from /public by Vite
const CV_PDF = './Srujan_Pandya_Resume.pdf';

export default function Portfolio() {
    const [tab, setTab] = useState('home');
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const filteredResearch = RESEARCH.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.journal.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className={`min-h-screen ${COLORS.bg} ${COLORS.text} font-serif selection:bg-[#E2DDD0]`}>
            <div className="max-w-2xl mx-auto px-6 py-16 flex flex-col items-center">

                {/* Navigation */}
                <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-24 text-[13px] font-sans lowercase tracking-widest">
                    {['home', 'research', 'projects', 'writing', 'cv'].map((t) => (
                        <button
                            key={t}
                            onClick={() => setTab(t)}
                            className={`transition-all pb-1 border-b-2 ${tab === t
                                ? `border-[#8E5342] ${COLORS.accent2} font-bold`
                                : `border-transparent ${COLORS.subtleText} hover:text-[#3B5C3B]`
                                }`}
                        >
                            {t}
                        </button>
                    ))}
                </nav>

                {/* Identity Section */}
                <div className="text-center mb-20 animate-in fade-in zoom-in duration-1000">
                    <h1 className="text-4xl font-serif lowercase mb-3 tracking-tighter italic">Srujan Pandya</h1>
                    <p className={`text-[12px] font-sans lowercase tracking-[0.25em] ${COLORS.subtleText} font-medium`}>
                        phd student • mechanical engineering • soft-matter physics
                    </p>
                </div>

                {/* Main Content Area */}
                <main className="w-full min-h-[50vh]">

                    {/* HOME */}
                    {tab === 'home' && (
                        <div className="animate-in slide-in-from-bottom-2 duration-700 space-y-20">
                            <section className="text-center space-y-8">
                                <p className="text-xl leading-relaxed lowercase opacity-90 italic max-w-lg mx-auto">
                                    designing systems at the boundary of <span className={COLORS.accent1}>control theory</span> and soft robotics. exploring multiscale modeling and electrospray deposition at the university at buffalo.
                                </p>
                                <div className="h-px w-16 bg-[#9E9690] mx-auto" />
                            </section>

                            <section className="space-y-10 max-w-md mx-auto">
                                <div className={`flex items-center justify-between ${COLORS.subtleText} text-[10px] uppercase tracking-[0.3em] font-sans font-black`}>
                                    <span>Updates</span>
                                    <div className="h-px flex-1 mx-4 bg-[#9E9690] opacity-70" />
                                    <span>2026</span>
                                </div>
                                <ul className={`space-y-6 text-sm lowercase ${COLORS.subtleText}`}>
                                    <li className="flex gap-4 group">
                                        <span className={`${COLORS.accent1} font-bold group-hover:translate-x-1 transition-transform`}>→</span>
                                        <span>phd research in soft microrobotics & multiscale modeling, university at buffalo</span>
                                    </li>
                                    <li className="flex gap-4 group">
                                        <span className={`${COLORS.accent1} font-bold group-hover:translate-x-1 transition-transform`}>→</span>
                                        <span>investigating electrospray deposition processes with lab: sail, advisor: dr. xin yong</span>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    )}

                    {/* RESEARCH */}
                    {tab === 'research' && (
                        <div className="animate-in slide-in-from-bottom-2 duration-500 space-y-16">
                            <div className="flex justify-center mb-12">
                                <div className="relative w-full max-w-xs">
                                    <Search size={14} className={`absolute left-0 top-1/2 -translate-y-1/2 ${COLORS.subtleText}`} />
                                    <input
                                        type="text"
                                        placeholder="filter research..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className={`w-full bg-transparent border-b ${COLORS.border} pl-8 py-2 text-xs lowercase focus:outline-none focus:border-[#8E5342] transition-all font-sans placeholder:text-[#9E9690]`}
                                    />
                                </div>
                            </div>

                            <div className="space-y-14">
                                {filteredResearch.length > 0 ? (
                                    filteredResearch.map((item) => (
                                        <div key={item.id} className="group cursor-pointer">
                                            <div className="flex items-baseline gap-4 mb-2">
                                                <span className={`text-[10px] font-sans font-bold ${COLORS.subtleText}`}>{item.year}</span>
                                                <h3 className="text-lg lowercase group-hover:text-[#8E5342] transition-colors leading-tight">
                                                    {item.title}
                                                </h3>
                                            </div>
                                            <div className="pl-14 flex items-center gap-3">
                                                <span className={`text-[10px] uppercase tracking-widest ${COLORS.subtleText} font-sans font-bold italic`}>{item.journal}</span>
                                                <ExternalLink size={12} className="opacity-0 group-hover:opacity-60 transition-opacity text-[#8E5342]" />
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className={`text-center text-sm lowercase ${COLORS.subtleText}`}>
                                        no results for "{searchQuery}"
                                    </p>
                                )}
                            </div>
                        </div>
                    )}

                    {/* PROJECTS */}
                    {tab === 'projects' && (
                        <div className="animate-in slide-in-from-bottom-2 duration-500 space-y-16">
                            <div className="space-y-12">
                                {PROJECTS.map((item) => (
                                    <div key={item.id} className="group border-l-2 border-[#D5D0C8] hover:border-[#8E5342] pl-8 transition-all">
                                        <h3 className="text-xl font-serif lowercase mb-2 group-hover:italic">
                                            {item.title}
                                        </h3>
                                        <p className={`text-sm lowercase ${COLORS.subtleText} leading-relaxed mb-4 max-w-lg`}>
                                            {item.description}
                                        </p>
                                        <button
                                            onClick={() => navigate(`/projects/${item.id}`)}
                                            className={`text-[10px] font-sans font-bold uppercase tracking-widest ${COLORS.accent2} flex items-center gap-2 hover:gap-3 transition-all`}
                                        >
                                            explore project <ArrowUpRight size={12} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* WRITING */}
                    {tab === 'writing' && (
                        <div className="animate-in slide-in-from-bottom-2 duration-500 space-y-12">

                            {/* Newsletter — Barely An Opinion */}
                            <div className="relative pl-7 mb-14">
                                {/* Clay left-rule accent */}
                                <div className="absolute left-0 top-0 bottom-0 w-px bg-[#8E5342] opacity-30" />

                                <div className="mb-1 flex items-baseline gap-3">
                                    <h4 className="font-serif italic text-lg lowercase text-[#1E1C1A]">barely an opinion</h4>
                                    <span className="text-[9px] uppercase tracking-[0.25em] font-sans opacity-30">substack</span>
                                </div>
                                <p className={`text-[12px] font-sans lowercase leading-relaxed mb-6 max-w-sm ${COLORS.subtleText}`}>
                                    i cannot give everyone the story they want. but i am trying hard to give everyone the story they need.
                                </p>

                                {/* Elegant subscribe row */}
                                <div className="flex items-stretch max-w-sm bg-[#EAE6DB] border border-[#D0C9BA] rounded-sm overflow-hidden">
                                    <input
                                        type="email"
                                        placeholder="your email"
                                        className="flex-1 bg-transparent px-4 py-3 text-[12px] font-sans lowercase text-[#1E1C1A] placeholder:text-[#9E9690] focus:outline-none"
                                    />
                                    <button className="px-5 py-3 text-[10px] font-sans lowercase tracking-widest text-[#F4F1EA] bg-[#8E5342] hover:bg-[#7A4538] transition-colors whitespace-nowrap">
                                        subscribe
                                    </button>
                                </div>
                            </div>

                            {WRITING.map((item) => (
                                <article key={item.id} className={`group border-b ${COLORS.border} pb-8`}>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                                        <div className="flex justify-between items-baseline mb-3">
                                            <h3 className="text-xl lowercase group-hover:italic group-hover:text-[#8E5342] transition-all cursor-pointer">
                                                {item.title}
                                            </h3>
                                            <span className={`text-[10px] font-sans font-bold ${COLORS.subtleText} ml-4 shrink-0`}>{item.date}</span>
                                        </div>
                                        <div className="flex gap-4 items-center">
                                            <span className={`text-[10px] ${COLORS.accent2} font-sans uppercase tracking-widest font-black`}>{item.platform}</span>
                                            <ArrowUpRight size={14} className={`${COLORS.subtleText} group-hover:translate-x-1 transition-transform`} />
                                        </div>
                                    </a>
                                </article>
                            ))}
                        </div>
                    )}

                    {/* CV */}
                    {tab === 'cv' && (
                        <div className="animate-in slide-in-from-bottom-2 duration-500 space-y-6">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-serif lowercase italic">curriculum vitae</h2>
                                <a
                                    href={CV_PDF}
                                    download="Srujan_Pandya_Resume.pdf"
                                    className={`flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest ${COLORS.accent2} border border-[#8E5342] px-4 py-2 hover:bg-[#8E5342] hover:text-white transition-all`}
                                >
                                    <Download size={14} /> download pdf
                                </a>
                            </div>

                            {/* Embedded PDF via iframe */}
                            <div className="w-full border border-[#9E9690] shadow-sm overflow-hidden rounded-sm">
                                <iframe
                                    src={CV_PDF}
                                    title="Srujan Pandya – Curriculum Vitae"
                                    className="w-full"
                                    style={{ height: '80vh', minHeight: '600px' }}
                                />
                            </div>

                            {/* Fallback for browsers that block iframe PDFs */}
                            <p className={`text-center text-[11px] font-sans lowercase ${COLORS.subtleText}`}>
                                if the pdf doesn't display,{' '}
                                <a href={CV_PDF} target="_blank" rel="noopener noreferrer" className="underline hover:text-[#8E5342] transition-colors">
                                    open it directly
                                </a>
                                .
                            </p>
                        </div>
                    )}
                </main>

                {/* Footer */}
                <footer className="mt-40 pt-12 border-t border-[#9E9690] w-full flex flex-col items-center gap-10">
                    <div className="flex gap-10">
                        <a href="mailto:srujanma@buffalo.edu" aria-label="Email" title="Email">
                            <Mail size={18} strokeWidth={1.5} className={`${COLORS.subtleText} cursor-pointer hover:text-[#8E5342] transition-colors`} />
                        </a>
                        <a href="https://www.linkedin.com/in/srujanpandya" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                            <Linkedin size={18} strokeWidth={1.5} className={`${COLORS.subtleText} cursor-pointer hover:text-[#8E5342] transition-colors`} />
                        </a>
                        <a href="https://github.com/SrujanPandya" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                            <Github size={18} strokeWidth={1.5} className={`${COLORS.subtleText} cursor-pointer hover:text-[#8E5342] transition-colors`} />
                        </a>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <p className={`text-[10px] lowercase tracking-[0.5em] font-sans font-bold ${COLORS.subtleText}`}>
                            srujan pandya • buffalo, ny
                        </p>
                        <p className={`text-[9px] lowercase tracking-[0.2em] font-sans ${COLORS.subtleText} opacity-80`}>
                            what you see here is all mine • © 2026
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
}
