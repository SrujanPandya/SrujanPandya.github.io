import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Share2, Info, Hash } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// --- WARM LIGHT THEME — WELL-BALANCED CONTRAST ---
const COLORS = {
    bg: 'bg-[#F4F1EA]',
    text: 'text-[#1E1C1A]',
    subtle: 'text-[#5C5753]',
    accent1: 'text-[#3B5C3B]',  // Forest sage
    accent2: 'text-[#8E5342]',  // Clay
    border: 'border-[#9E9690]', // Warm taupe — clearly visible
    mathBg: 'bg-[#EAE6DB]',
};

// --- TECHNICAL COMPONENTS ---

const MathBlock = ({ children, label }) => (
    <div className="my-10 relative group">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-[#8E5342] opacity-35" />
        <div className="pl-8 pr-4 py-7 bg-gradient-to-br from-[#EDE9DF] to-[#E8E3D8] border border-[#D5CFBF] rounded-sm">
            <div className="overflow-x-auto text-center font-serif text-lg py-3 tracking-wide text-[#1E1C1A]">
                {children}
            </div>
            {label && (
                <span className="block text-right text-[9px] uppercase tracking-[0.25em] opacity-25 font-sans mt-2">
                    eq. {label}
                </span>
            )}
        </div>
    </div>
);

const ImageFrame = ({ caption, alt }) => (
    <figure className="my-12 space-y-5">
        <div className="aspect-video w-full bg-gradient-to-br from-[#EDE9DF] via-[#E5E0D4] to-[#DDD8CC] border border-[#CEC8B8] relative overflow-hidden flex items-end">
            {/* Restrained grid lines */}
            <div className="absolute inset-0 opacity-[0.06]" style={{
                backgroundImage: 'linear-gradient(#1E1C1A 1px, transparent 1px), linear-gradient(90deg, #1E1C1A 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }} />
            {/* Bottom vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#DDD8CC]/60 via-transparent to-transparent" />
            <div className="relative z-10 w-full px-6 pb-5 flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-[0.35em] opacity-25 font-sans">
                    {alt}
                </span>
                <span className="text-[9px] font-sans opacity-20 tracking-widest">fig.</span>
            </div>
        </div>
        <figcaption className={`text-center text-[11px] leading-relaxed italic ${COLORS.subtle} px-10 opacity-75`}>
            {caption}
        </figcaption>
    </figure>
);

const Breadcrumbs = ({ onBack }) => (
    <nav className="flex items-center gap-4 mb-16 text-[11px] font-sans lowercase tracking-widest">
        <button onClick={onBack} className={`flex items-center gap-2 ${COLORS.subtle} hover:text-[#8E5342] transition-colors`}>
            <ArrowLeft size={14} /> projects
        </button>
        <span className={COLORS.subtle}>/</span>
        <span className="font-bold">electrospray deposition</span>
    </nav>
);

// --- MAIN PROJECT PAGE ---

export default function ProjectDetail() {
    const [isTechnical, setIsTechnical] = useState(false);
    const navigate = useNavigate();

    return (
        <div className={`min-h-screen ${COLORS.bg} ${COLORS.text} font-serif selection:bg-[#E2DDD0]`}>
            <div className="max-w-2xl mx-auto px-6 py-16">

                <Breadcrumbs onBack={() => navigate(-1)} />

                {/* Title Section */}
                <header className="mb-20 space-y-6">
                    <h1 className="text-4xl font-serif lowercase italic leading-tight tracking-tighter">
                        charge transport in electrospray deposition of nanoparticle aggregates
                    </h1>
                    <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-[10px] uppercase tracking-[0.2em] font-sans font-black opacity-40">
                        <span>date: jan 2026</span>
                        <span>tag: electrospray deposition</span>
                        <span>status: ongoing</span>
                    </div>
                </header>

                {/* Mode Toggle — soft serif underline style */}
                <div className="flex justify-center mb-16">
                    <div className="flex items-center gap-10">
                        <button
                            onClick={() => setIsTechnical(false)}
                            className={`pb-2 font-serif italic text-base tracking-wide transition-all border-b ${!isTechnical
                                    ? 'border-[#8E5342] text-[#8E5342]'
                                    : 'border-transparent opacity-30 hover:opacity-60'
                                }`}
                        >
                            abstract
                        </button>
                        <span className="opacity-20 text-xs select-none">·</span>
                        <button
                            onClick={() => setIsTechnical(true)}
                            className={`pb-2 font-serif italic text-base tracking-wide transition-all border-b ${isTechnical
                                    ? 'border-[#8E5342] text-[#8E5342]'
                                    : 'border-transparent opacity-30 hover:opacity-60'
                                }`}
                        >
                            technical
                        </button>
                    </div>
                </div>

                {/* Article Body */}
                <article className="space-y-8 text-[17px] leading-relaxed opacity-90">
                    <p className="italic text-lg border-l-2 border-[#CDC7B9] pl-8 py-2">
                        this project investigates how epistemic gaps in high-energy physics are represented visually. we argue that the way we map data fundamentally biases our understanding of the underlying topology.
                    </p>

                    <p>
                        when we look at a particle landscape, we aren't seeing the world as it is; we are seeing a filtered interpretation of sensors and statistical thresholds. the challenge is: how do we design a map that shows what we <strong>don't</strong> know as clearly as what we do?
                    </p>

                    {/* Technical Section (Conditional) */}
                    {isTechnical ? (
                        <div className="animate-in fade-in duration-500 space-y-8">
                            <h4 className={`text-xs font-sans font-black uppercase tracking-[0.3em] ${COLORS.accent2} pt-8`}>
                                mathematical framework
                            </h4>
                            <p>
                                to account for the observer-bias in the mapping process, we introduce a non-linear scaling factor to the standard wave-function representation:
                            </p>

                            <MathBlock label="2.4">
                                {"Ψ(x, t) = ∫ [ Φ(k) ⋅ e^{i(kx - ωt)} ] dk + Δ_u"}
                            </MathBlock>

                            <p>
                                here, Δ_u represents the "uncertainty coefficient," a variable that fluctuates based on the observer's instrument precision.
                            </p>

                            <ImageFrame
                                alt="probability density map"
                                caption="simulated mapping of particle density across a non-euclidean grid. the darker regions indicate higher observer bias."
                            />

                            <p>
                                our results suggest that by visualizing Δ_u as a physical dimension, researchers can better identify where their models are most likely to fail.
                            </p>
                        </div>
                    ) : (
                        <div className="animate-in fade-in duration-500 space-y-8">
                            <p>
                                in simpler terms, this research is about <strong>honesty in science.</strong> if a map of the stars only shows the stars, it's missing 99% of the universe. we are building maps that highlight the dark matter—the unknown variables.
                            </p>
                            <p>
                                this has profound implications for how we teach science. if students are taught that every diagram is a perfect "truth," they lose the curiosity required for the next breakthrough.
                            </p>
                        </div>
                    )}
                </article>

                {/* Footer Navigation */}
                <footer className="mt-32 pt-12 border-t border-[#9E9690] space-y-12">
                    <div className="flex justify-between items-center">
                        <button className={`flex items-center gap-3 text-[11px] font-sans lowercase tracking-widest ${COLORS.subtle} hover:text-[#8E5342] transition-colors`}>
                            <ArrowLeft size={16} /> previous: quantum history
                        </button>
                        <button className={`flex items-center gap-3 text-[11px] font-sans lowercase tracking-widest ${COLORS.subtle} hover:text-[#8E5342] transition-colors`}>
                            next: ethics of observation <ArrowRight size={16} />
                        </button>
                    </div>

                    <div className={`flex justify-center gap-8 pt-12 ${COLORS.subtle}`}>
                        <Share2 size={16} className="cursor-pointer hover:text-[#8E5342] transition-colors" />
                        <Info size={16} className="cursor-pointer hover:text-[#8E5342] transition-colors" />
                    </div>
                </footer>

            </div>
        </div>
    );
}
