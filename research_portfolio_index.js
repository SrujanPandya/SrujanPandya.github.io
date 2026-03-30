import React, { useState } from 'react';
import { Search, ArrowUpRight, Github, Twitter, Mail, Download, FileText, Layout, BookOpen, PenTool, ExternalLink } from 'lucide-react';

// --- KINDLE-INSPIRED REFINED PALETTE (HIGHER CONTRAST) ---
const COLORS = {
    bg: 'bg-[#F4F1EA]', // Warm Oat
    text: 'text-[#2D2D2D]', // Stronger Ink for better readability
    subtleText: 'text-[#5A5A5A]', // Darker gray for secondary info
    accent1: 'text-[#4A5D4A]', // Deepened Sage
    accent2: 'text-[#8E5342]', // Deepened Clay
    border: 'border-[#CDC7B9]', // Slightly darker border for structure
};

// --- MOCK DATA ---
const RESEARCH = [
    { id: 1, year: '2024', title: 'charge transport in dielectric porous media', journal: 'synthese' },
    { id: 2, year: '2024', title: 'quantum landscapes and particle mapping', journal: 'nature physics' },
    { id: 3, year: '2023', title: 'the ethics of observation in lab practices', journal: 'erq' },
];

const PROJECTS = [
    {
        id: 1,
        title: 'visualizing uncertainty',
        description: 'an interactive tool for mapping epistemic gaps in climate modeling.',
        link: '#'
    },
    {
        id: 2,
        title: 'the history of the lab',
        description: 'a digital archive of 19th-century experimental setups.',
        link: '#'
    }
];

const WRITING = [
    { id: 1, title: 'why scientists should read more poetry', platform: 'substack', date: 'oct 24' },
    { id: 2, title: 'the crisis of reproducibility', platform: 'internal', date: 'sep 24' },
];

export default function App() {
    const [tab, setTab] = useState('home');

    return (
        <div className={`min-h-screen ${COLORS.bg} ${COLORS.text} font-serif selection:bg-[#E2DDD0]`}>
            <div className="max-w-2xl mx-auto px-6 py-16 flex flex-col items-center">

                {/* Navigation - Lowercase & Balanced */}
                <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-24 text-[13px] font-sans lowercase tracking-widest opacity-80 hover:opacity-100 transition-opacity">
                    {['home', 'research', 'projects', 'writing', 'cv'].map((t) => (
                        <button
                            key={t}
                            onClick={() => setTab(t)}
                            className={`transition-all pb-1 border-b-2 ${tab === t ? `border-[#8E5342] ${COLORS.accent2} font-bold` : 'border-transparent hover:text-[#4A5D4A]'
                                }`}
                        >
                            {t}
                        </button>
                    ))}
                </nav>

                {/* Identity Section */}
                <div className="text-center mb-20 animate-in fade-in zoom-in duration-1000">
                    <h1 className="text-4xl font-serif lowercase mb-3 tracking-tighter italic">alex rivers</h1>
                    <p className={`text-[12px] font-sans lowercase tracking-[0.25em] ${COLORS.subtleText} font-medium`}>
                        phd student • philosophy of science
                    </p>
                </div>

                {/* Main Content Area */}
                <main className="w-full min-h-[50vh]">

                    {/* HOME */}
                    {tab === 'home' && (
                        <div className="animate-in slide-in-from-bottom-2 duration-700 space-y-20">
                            <section className="text-center space-y-8">
                                <p className="text-xl leading-relaxed lowercase opacity-90 italic max-w-lg mx-auto">
                                    investigating the <span className={COLORS.accent1}>fragility of facts</span> and the frameworks we build to hold them. currently based at the intersection of physics and history.
                                </p>
                                <div className="h-px w-16 bg-[#CDC7B9] mx-auto opacity-50" />
                            </section>

                            <section className="space-y-10 max-w-md mx-auto">
                                <div className={`flex items-center justify-between ${COLORS.subtleText} text-[10px] uppercase tracking-[0.3em] font-sans font-black`}>
                                    <span>status</span>
                                    <div className="h-px flex-1 mx-4 bg-[#CDC7B9] opacity-40" />
                                    <span>2024</span>
                                </div>
                                <ul className={`space-y-6 text-sm lowercase ${COLORS.subtleText}`}>
                                    <li className="flex gap-4 group">
                                        <span className={`${COLORS.accent1} font-bold group-hover:translate-x-1 transition-transform`}>→</span>
                                        <span>presenting at the psa conference, new orleans</span>
                                    </li>
                                    <li className="flex gap-4 group">
                                        <span className={`${COLORS.accent1} font-bold group-hover:translate-x-1 transition-transform`}>→</span>
                                        <span>finalizing dissertation chapter on statistical realism</span>
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
                                    <Search size={14} className="absolute left-0 top-1/2 -translate-y-1/2 opacity-40" />
                                    <input
                                        type="text"
                                        placeholder="filter research..."
                                        className={`w-full bg-transparent border-b ${COLORS.border} pl-8 py-2 text-xs lowercase focus:outline-none focus:border-[#8E5342] transition-all font-sans`}
                                    />
                                </div>
                            </div>

                            <div className="space-y-14">
                                {RESEARCH.map((item) => (
                                    <div key={item.id} className="group cursor-pointer">
                                        <div className="flex items-baseline gap-4 mb-2">
                                            <span className="text-[10px] font-sans font-bold opacity-40">{item.year}</span>
                                            <h3 className="text-lg lowercase group-hover:text-[#8E5342] transition-colors leading-tight">
                                                {item.title}
                                            </h3>
                                        </div>
                                        <div className="pl-14 flex items-center gap-3">
                                            <span className={`text-[10px] uppercase tracking-widest ${COLORS.subtleText} font-sans font-bold italic`}>{item.journal}</span>
                                            <ExternalLink size={12} className="opacity-0 group-hover:opacity-40 transition-opacity" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* PROJECTS */}
                    {tab === 'projects' && (
                        <div className="animate-in slide-in-from-bottom-2 duration-500 space-y-16">
                            <div className="space-y-12">
                                {PROJECTS.map((item) => (
                                    <div key={item.id} className="group border-l-2 border-transparent hover:border-[#8E5342] pl-8 transition-all">
                                        <h3 className="text-xl font-serif lowercase mb-2 group-hover:italic">
                                            {item.title}
                                        </h3>
                                        <p className={`text-sm lowercase ${COLORS.subtleText} leading-relaxed mb-4 max-w-lg`}>
                                            {item.description}
                                        </p>
                                        <a href={item.link} className={`text-[10px] font-sans font-bold uppercase tracking-widest ${COLORS.accent2} flex items-center gap-2`}>
                                            explore project <ArrowUpRight size={12} />
                                        </a>
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
                                    <h4 className="font-serif italic text-lg lowercase text-[#2D2D2D]">barely an opinion</h4>
                                    <span className="text-[9px] uppercase tracking-[0.25em] font-sans opacity-30">substack</span>
                                </div>
                                <p className="text-[12px] font-sans lowercase leading-relaxed opacity-55 mb-6 max-w-sm">
                                    i cannot give everyone the story they want. but i am trying hard to give everyone the story they need.
                                </p>

                                {/* Elegant subscribe row */}
                                <div className="flex items-stretch gap-0 max-w-sm bg-[#EAE6DB] border border-[#D0C9BA] rounded-sm overflow-hidden">
                                    <input
                                        type="email"
                                        placeholder="your email"
                                        className="flex-1 bg-transparent px-4 py-3 text-[12px] font-sans lowercase text-[#2D2D2D] placeholder-[#2D2D2D]/30 focus:outline-none"
                                    />
                                    <button className="px-5 py-3 text-[10px] font-sans lowercase tracking-widest text-[#F4F1EA] bg-[#8E5342] hover:bg-[#7A4538] transition-colors whitespace-nowrap">
                                        subscribe
                                    </button>
                                </div>
                            </div>

                            {WRITING.map((item) => (
                                <article key={item.id} className={`group border-b ${COLORS.border} pb-8 opacity-90 hover:opacity-100 transition-opacity`}>
                                    <div className="flex justify-between items-baseline mb-3">
                                        <h3 className="text-xl lowercase group-hover:italic transition-all cursor-pointer">
                                            {item.title}
                                        </h3>
                                        <span className="text-[10px] font-sans font-bold opacity-40">{item.date}</span>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <span className={`text-[10px] ${COLORS.accent2} font-sans uppercase tracking-widest font-black`}>{item.platform}</span>
                                        <ArrowUpRight size={14} className="opacity-40 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}

                    {/* CV */}
                    {tab === 'cv' && (
                        <div className="animate-in slide-in-from-bottom-2 duration-500 space-y-8">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-serif lowercase italic">curriculum vitae</h2>
                                <button className={`flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest ${COLORS.accent2} border border-[#8E5342] px-4 py-2 hover:bg-[#8E5342] hover:text-white transition-all`}>
                                    <Download size={14} /> download pdf
                                </button>
                            </div>

                            {/* Simulated PDF Viewer */}
                            <div className="aspect-[3/4] w-full bg-[#EAE6DB] border border-[#CDC7B9] shadow-inner flex flex-col items-center justify-center text-center p-12">
                                <FileText size={48} className="opacity-10 mb-6" />
                                <p className="text-xs lowercase opacity-40 max-w-xs font-sans">
                                    cv viewer placeholder. <br /> you can embed your direct pdf link here using an iframe or google docs viewer.
                                </p>
                            </div>
                        </div>
                    )}
                </main>

                {/* Minimalist Footer */}
                <footer className="mt-40 pt-12 border-t border-[#CDC7B9] w-full flex flex-col items-center gap-10 opacity-60 hover:opacity-100 transition-opacity">
                    <div className="flex gap-10">
                        <Mail size={18} strokeWidth={1.5} className="cursor-pointer hover:text-[#8E5342] transition-colors" />
                        <Twitter size={18} strokeWidth={1.5} className="cursor-pointer hover:text-[#8E5342] transition-colors" />
                        <Github size={18} strokeWidth={1.5} className="cursor-pointer hover:text-[#8E5342] transition-colors" />
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-[10px] lowercase tracking-[0.5em] font-sans font-bold opacity-40">
                            alex rivers • cambridge, uk
                        </p>
                        <p className="text-[9px] lowercase tracking-[0.2em] font-sans opacity-30">
                            thoughts are mine • © 2024
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
}