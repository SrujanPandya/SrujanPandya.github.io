import React, { useState } from 'react';
import { Search, ArrowUpRight, Linkedin, Github, Mail, Download, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';

// --- RESEARCH / ONGOING WORK ---
const RESEARCH = [
    {
        id: 1,
        year: '2026',
        title: 'charge relaxation in porous dielectric deposit in electrospray',
        journal: 'phd research · university at buffalo'
    },
    {
        id: 2,
        year: '2024',
        title: 'CNN-autoencoder models for lossless LWD sensor data compression',
        journal: 'capstone · schlumberger (slb)'
    },
    // {
    //     id: 3,
    //     year: '2021',
    //     title: '',
    //     journal: 'timetooth technologies · iit gandhinagar'
    // },
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

// Inline style helpers reading CSS custom properties
const s = {
    bg:        { backgroundColor: 'var(--theme-bg)' },
    text:      { color: 'var(--theme-text)' },
    subtle:    { color: 'var(--theme-subtle)' },
    accent1:   { color: 'var(--theme-accent1)' },
    accent2:   { color: 'var(--theme-accent2)' },
    border:    { borderColor: 'var(--theme-border)' },
    card:      { backgroundColor: 'var(--theme-card)', borderColor: 'var(--theme-card-border)' },
    inputBg:   { backgroundColor: 'var(--theme-input-bg)' },
    btnBg:     { backgroundColor: 'var(--theme-btn-bg)', color: 'var(--theme-btn-text)' },
    subscribeBg: { backgroundColor: 'var(--theme-subscribe-bg)', borderColor: 'var(--theme-subscribe-border)' },
    divider:   { backgroundColor: 'var(--theme-divider)' },
};

export default function Portfolio() {
    const [tab, setTab] = useState('home');
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const filteredResearch = RESEARCH.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.journal.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen font-serif" style={s.bg}>
            <div className="max-w-2xl mx-auto px-6 py-16 flex flex-col items-center">

                {/* Navigation */}
                <nav className="w-full flex flex-col items-center gap-5 mb-24">
                    {/* Tab links — centered */}
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[13px] font-sans lowercase tracking-widest">
                        {['home', 'research', 'projects', 'writing', 'cv'].map((t) => (
                            <button
                                key={t}
                                onClick={() => setTab(t)}
                                className="transition-all pb-1 border-b-2"
                                style={{
                                    borderColor: tab === t ? 'var(--theme-accent2)' : 'transparent',
                                    color: tab === t ? 'var(--theme-accent2)' : 'var(--theme-subtle)',
                                    fontWeight: tab === t ? 700 : 400,
                                }}
                            >
                                {t}
                            </button>
                        ))}
                    </div>

                    {/* 3-way theme toggle — centered below tabs */}
                    <ThemeToggle />
                </nav>

                {/* Identity Section */}
                <div className="text-center mb-20 animate-in fade-in zoom-in duration-1000">
                    <h1 className="text-4xl font-serif lowercase mb-3 tracking-tighter italic" style={s.text}>Srujan Pandya</h1>
                    <p className="text-[12px] font-sans lowercase tracking-[0.25em] font-medium" style={s.subtle}>
                        phd student • mechanical engineering • soft-matter physics
                    </p>
                </div>

                {/* Main Content Area */}
                <main className="w-full min-h-[50vh]">

                    {/* HOME */}
                    {tab === 'home' && (
                        <div className="animate-in slide-in-from-bottom-2 duration-700 space-y-20">
                            <section className="text-center space-y-8">
                                <p className="text-xl leading-relaxed lowercase opacity-90 italic max-w-lg mx-auto" style={s.text}>
                                    designing systems at the boundary of{' '}
                                    <span style={s.accent1}>control theory</span>
                                    {' '}and soft robotics. exploring multiscale modeling and electrospray deposition at the university at buffalo.
                                </p>
                                <div className="h-px w-16 mx-auto" style={s.divider} />
                            </section>

                            <section className="space-y-10 max-w-md mx-auto">
                                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] font-sans font-black" style={s.subtle}>
                                    <span>Updates</span>
                                    <div className="h-px flex-1 mx-4 opacity-70" style={s.divider} />
                                    <span>2026</span>
                                </div>
                                <ul className="space-y-6 text-sm lowercase" style={s.subtle}>
                                    <li className="flex gap-4 group">
                                        <span className="font-bold group-hover:translate-x-1 transition-transform" style={s.accent1}>→</span>
                                        <span>phd research in soft microrobotics & multiscale modeling, university at buffalo</span>
                                    </li>
                                    <li className="flex gap-4 group">
                                        <span className="font-bold group-hover:translate-x-1 transition-transform" style={s.accent1}>→</span>
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
                                    <Search size={14} className="absolute left-0 top-1/2 -translate-y-1/2" style={s.subtle} />
                                    <input
                                        type="text"
                                        placeholder="filter research..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full bg-transparent border-b pl-8 py-2 text-xs lowercase focus:outline-none transition-all font-sans"
                                        style={{
                                            ...s.border,
                                            color: 'var(--theme-text)',
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="space-y-14">
                                {filteredResearch.length > 0 ? (
                                    filteredResearch.map((item) => (
                                        <div key={item.id} className="group cursor-pointer">
                                            <div className="flex items-baseline gap-4 mb-2">
                                                <span className="text-[10px] font-sans font-bold" style={s.subtle}>{item.year}</span>
                                                <h3 className="text-lg lowercase leading-tight transition-colors" style={s.text}
                                                    onMouseEnter={e => e.currentTarget.style.color = 'var(--theme-accent2)'}
                                                    onMouseLeave={e => e.currentTarget.style.color = 'var(--theme-text)'}
                                                >
                                                    {item.title}
                                                </h3>
                                            </div>
                                            <div className="pl-14 flex items-center gap-3">
                                                <span className="text-[10px] uppercase tracking-widest font-sans font-bold italic" style={s.subtle}>{item.journal}</span>
                                                <ExternalLink size={12} className="opacity-0 group-hover:opacity-60 transition-opacity" style={s.accent2} />
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-center text-sm lowercase" style={s.subtle}>
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
                                    <div
                                        key={item.id}
                                        className="group border-l-2 pl-8 transition-all"
                                        style={{ borderColor: 'var(--theme-border)' }}
                                        onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--theme-accent2)'}
                                        onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--theme-border)'}
                                    >
                                        <h3 className="text-xl font-serif lowercase mb-2 group-hover:italic" style={s.text}>
                                            {item.title}
                                        </h3>
                                        <p className="text-sm lowercase leading-relaxed mb-4 max-w-lg" style={s.subtle}>
                                            {item.description}
                                        </p>
                                        <button
                                            onClick={() => navigate(`/projects/${item.id}`)}
                                            className="text-[10px] font-sans font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all"
                                            style={s.accent2}
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
                                {/* Accent left-rule */}
                                <div className="absolute left-0 top-0 bottom-0 w-px opacity-30" style={{ backgroundColor: 'var(--theme-accent2)' }} />

                                <div className="mb-1 flex items-baseline gap-3">
                                    <h4 className="font-serif italic text-lg lowercase" style={s.text}>barely an opinion</h4>
                                    <span className="text-[9px] uppercase tracking-[0.25em] font-sans opacity-30" style={s.subtle}>substack</span>
                                </div>
                                <p className="text-[12px] font-sans lowercase leading-relaxed mb-6 max-w-sm" style={s.subtle}>
                                    i cannot give everyone the story they want. but i am trying hard to give everyone the story they need.
                                </p>

                                {/* Subscribe row */}
                                <div
                                    className="flex items-stretch max-w-sm border rounded-sm overflow-hidden"
                                    style={s.subscribeBg}
                                >
                                    <input
                                        type="email"
                                        placeholder="your email"
                                        className="flex-1 bg-transparent px-4 py-3 text-[12px] font-sans lowercase focus:outline-none"
                                        style={{ color: 'var(--theme-text)' }}
                                    />
                                    <button
                                        className="px-5 py-3 text-[10px] font-sans lowercase tracking-widest transition-colors whitespace-nowrap"
                                        style={s.btnBg}
                                    >
                                        subscribe
                                    </button>
                                </div>
                            </div>

                            {WRITING.map((item) => (
                                <article key={item.id} className="group border-b pb-8" style={s.border}>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                                        <div className="flex justify-between items-baseline mb-3">
                                            <h3
                                                className="text-xl lowercase transition-all cursor-pointer"
                                                style={s.text}
                                                onMouseEnter={e => { e.currentTarget.style.color = 'var(--theme-accent2)'; e.currentTarget.style.fontStyle = 'italic'; }}
                                                onMouseLeave={e => { e.currentTarget.style.color = 'var(--theme-text)'; e.currentTarget.style.fontStyle = 'normal'; }}
                                            >
                                                {item.title}
                                            </h3>
                                            <span className="text-[10px] font-sans font-bold ml-4 shrink-0" style={s.subtle}>{item.date}</span>
                                        </div>
                                        <div className="flex gap-4 items-center">
                                            <span className="text-[10px] font-sans uppercase tracking-widest font-black" style={s.accent2}>{item.platform}</span>
                                            <ArrowUpRight size={14} className="group-hover:translate-x-1 transition-transform" style={s.subtle} />
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
                                <h2 className="text-xl font-serif lowercase italic" style={s.text}>curriculum vitae</h2>
                                <a
                                    href={CV_PDF}
                                    download="Srujan_Pandya_Resume.pdf"
                                    className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest border px-4 py-2 transition-all"
                                    style={{ ...s.accent2, borderColor: 'var(--theme-accent2)' }}
                                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--theme-accent2)'; e.currentTarget.style.color = 'var(--theme-bg)'; }}
                                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--theme-accent2)'; }}
                                >
                                    <Download size={14} /> download pdf
                                </a>
                            </div>

                            {/* Embedded PDF via iframe */}
                            <div className="w-full border shadow-sm overflow-hidden rounded-sm" style={s.border}>
                                <iframe
                                    src={CV_PDF}
                                    title="Srujan Pandya – Curriculum Vitae"
                                    className="w-full"
                                    style={{ height: '80vh', minHeight: '600px' }}
                                />
                            </div>

                            {/* Fallback */}
                            <p className="text-center text-[11px] font-sans lowercase" style={s.subtle}>
                                if the pdf doesn't display,{' '}
                                <a
                                    href={CV_PDF}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline transition-colors"
                                    style={s.accent2}
                                >
                                    open it directly
                                </a>
                                .
                            </p>
                        </div>
                    )}
                </main>

                {/* Footer */}
                <footer className="mt-40 pt-12 border-t w-full flex flex-col items-center gap-10" style={s.border}>
                    <div className="flex gap-10">
                        <a href="mailto:srujanma@buffalo.edu" aria-label="Email" title="Email">
                            <Mail size={18} strokeWidth={1.5} className="cursor-pointer transition-colors"
                                style={s.subtle}
                                onMouseEnter={e => e.currentTarget.style.color = 'var(--theme-accent2)'}
                                onMouseLeave={e => e.currentTarget.style.color = 'var(--theme-subtle)'}
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/srujanpandya" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                            <Linkedin size={18} strokeWidth={1.5} className="cursor-pointer transition-colors"
                                style={s.subtle}
                                onMouseEnter={e => e.currentTarget.style.color = 'var(--theme-accent2)'}
                                onMouseLeave={e => e.currentTarget.style.color = 'var(--theme-subtle)'}
                            />
                        </a>
                        <a href="https://github.com/SrujanPandya" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                            <Github size={18} strokeWidth={1.5} className="cursor-pointer transition-colors"
                                style={s.subtle}
                                onMouseEnter={e => e.currentTarget.style.color = 'var(--theme-accent2)'}
                                onMouseLeave={e => e.currentTarget.style.color = 'var(--theme-subtle)'}
                            />
                        </a>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-[10px] lowercase tracking-[0.5em] font-sans font-bold" style={s.subtle}>
                            srujan pandya • buffalo, ny
                        </p>
                        <p className="text-[9px] lowercase tracking-[0.2em] font-sans opacity-80" style={s.subtle}>
                            what you see here is all mine • © 2026
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
}
