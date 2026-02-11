import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import PageTransition from "@/components/PageTransition";
import { Calendar, Clock, ArrowLeft, BookOpen, Share2, Download, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import cognitiveModel from "@/assets/Human Congnutive Self-Modularity.png";
import imgModel from "@/assets/Img-123456789.png";

const MultiplePersonalityStates = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <PageTransition>
            <SmoothScroll>
                <div className="min-h-screen bg-background">
                    <Navbar />

                    {/* Paper Header */}
                    <section className="relative pt-32 pb-16 overflow-hidden">
                        <div className="section-glow top-0 left-1/2 -translate-x-1/2 opacity-30" />
                        <div className="container mx-auto px-6 relative z-10">
                            <Link
                                to="/research-lab"
                                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
                            >
                                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                                Back to Research Lab
                            </Link>

                            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 items-center">
                                <div className="lg:col-span-8">
                                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 inline-block">
                                        Theoretical Research Paper
                                    </span>
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-8 leading-tight">
                                        Multiple <span className="gradient-text">Active Personality</span> or, Adaptive Self-States
                                    </h1>

                                    <div className="flex flex-wrap gap-6 items-center text-muted-foreground border-b border-border/30 pb-8">
                                        <div className="flex items-center gap-2">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                                AR
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-foreground">V. Aryan Kabir</p>
                                                <p className="text-xs">Lead Researcher</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Calendar size={16} />
                                            <span className="text-sm">February 12, 2026</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock size={16} />
                                            <span className="text-sm">10 min read</span>
                                        </div>
                                        <div className="flex items-center gap-2 ml-auto">
                                            <button className="p-2 rounded-full hover:bg-card border border-border/50 text-muted-foreground hover:text-primary transition-all">
                                                <Share2 size={18} />
                                            </button>
                                            <a
                                                href="/papers/Multiple%20Active%20Personality.pdf"
                                                download
                                                className="p-2 rounded-full hover:bg-card border border-border/50 text-muted-foreground hover:text-primary transition-all"
                                            >
                                                <Download size={18} />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:col-span-4 w-full animate-fade-in delay-300">
                                    <div className="relative group">
                                        {/* Subtle Persistent Glow */}
                                        <div className="absolute -inset-1 bg-primary/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow" />

                                        <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card/30 backdrop-blur-sm shadow-2xl p-4">
                                            <img
                                                src={cognitiveModel}
                                                alt="Human Cognitive Self-Modularity Visualization"
                                                className="w-full h-auto max-h-[400px] object-contain transition-all duration-500"
                                                onError={(e) => {
                                                    e.currentTarget.src = "https://images.unsplash.com/photo-1620712943543-bcc4628c71d0?q=80&w=1000&auto=format&fit=crop";
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Main Content */}
                    <section className="pb-24">
                        <div className="container mx-auto px-6">
                            <div className="flex flex-col lg:flex-row gap-12">
                                {/* Side Navigation / Metadata */}
                                <aside className="lg:w-1/4 order-2 lg:order-1">
                                    <div className="sticky top-32 space-y-8">
                                        <div className="p-6 rounded-2xl bg-card/30 border border-border/50 backdrop-blur-sm">
                                            <h3 className="font-bold mb-4 flex items-center gap-2">
                                                <BookOpen size={18} className="text-primary" />
                                                Contents
                                            </h3>
                                            <nav className="space-y-3">
                                                <a href="#abstract" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Abstract</a>
                                                <a href="#introduction" className="block text-sm text-muted-foreground hover:text-primary transition-colors">I. Introduction</a>
                                                <a href="#the-multiple-self-concept" className="block text-sm text-muted-foreground hover:text-primary transition-colors">II. The Multiple Self-Concept</a>
                                                <a href="#did-vs-multiple-personality-disorder" className="block text-sm text-muted-foreground hover:text-primary transition-colors">III. DID vs. Multiple Personality Disorder</a>
                                                <a href="#an-observed-model" className="block text-sm text-muted-foreground hover:text-primary transition-colors">IV. An Observed Model</a>
                                                <a href="#psychological-and-neurobiological-explanation" className="block text-sm text-muted-foreground hover:text-primary transition-colors">V. Psychological and Neurobiological Explanation</a>
                                                <a href="#implications-for-ai-assisted-self-monitoring" className="block text-sm text-muted-foreground hover:text-primary transition-colors">VI. Implications for AI-assisted self-monitoring</a>
                                                <a href="#ethical-and-philosophical-considerations" className="block text-sm text-muted-foreground hover:text-primary transition-colors">VII. Ethical and Philosophical Considerations</a>
                                                <a href="#conclusion" className="block text-sm text-muted-foreground hover:text-primary transition-colors">VIII. Conclusion</a>
                                            </nav>
                                        </div>

                                        <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                                            <h4 className="font-semibold text-sm mb-3">Key Topics</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {["Psychology", "Philosophy", "Cognitive Science", "Self-States", "Modularity"].map(tag => (
                                                    <span key={tag} className="text-[10px] uppercase tracking-wider font-bold bg-background/50 text-muted-foreground px-2 py-1 rounded">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                                            <h4 className="font-semibold text-sm mb-3">Keywords</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {["Self-States", "Cognitive Modularity", "Tri-Modular Active Personality Model", "Dissociative Identity Disorder", "Personality Architecture"].map(tag => (
                                                    <span key={tag} className="text-[10px] uppercase tracking-wider font-bold bg-background/50 text-muted-foreground px-2 py-1 rounded">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </aside>

                                {/* Article Body */}
                                <article className="lg:w-3/4 order-1 lg:order-2 prose prose-invert prose-lg max-w-none">
                                    <div id="abstract" className="scroll-mt-32 mb-12 p-8 rounded-3xl bg-secondary/30 border border-border/50 italic text-lg leading-relaxed shadow-xl">
                                        <h2 className="text-2xl font-bold mb-4 not-italic font-display border-b border-primary/20 pb-2">Abstract</h2>
                                        Human personality is often perceived as a single unified identity. However, modern psychological and
                                        neuro-scientific research suggests that the human mind operates through multiple self-states or identity
                                        modules that dynamically activate depending on context. This article explores the concept of <b>Multiple
                                            Active Personality States without Pathological Dissociation</b>, distinguishing it from Dissociative Identity
                                        Disorder (DID). A theoretical model is proposed where specialized cognitive identity states coexist within a
                                        unified executive consciousness.
                                    </div>

                                    <h2 id="introduction" className="scroll-mt-32 text-3xl font-bold mb-6 font-display group flex items-center gap-4">
                                        <span className="text-primary/30 group-hover:text-primary transition-colors underline decoration-primary/20 decoration-4">I.</span> INTRODUCTION
                                    </h2>
                                    <p className="text-muted-foreground mb-8 leading-relaxed">
                                        Traditional personality psychology assumes a stable core personality with trait variations. However, emerging theories suggest that the self is not a single monolithic entity but a <b>dynamic system of interacting sub-selves or self-states</b>.
                                        This multiplicity is adaptive and necessary for survival, decision-making, social roles, and emotional regulation.
                                    </p>
                                    <p className="text-muted-foreground mb-12">
                                        Unlike DID, where identity fragmentation leads to memory gaps and impaired functioning, non-pathological multiple self-states represent a normal cognitive architecture of the human mind.
                                    </p>

                                    <h2 id="the-multiple-self-concept" className="scroll-mt-32 text-3xl font-bold mb-6 font-display group flex items-center gap-4">
                                        <span className="text-primary/30 group-hover:text-primary transition-colors underline decoration-primary/20 decoration-4">II.</span> THE MULTIPLE SELF CONCEPT: SCIENTIFIC BACKGROUND
                                    </h2>
                                    <h3 className="text-xl font-bold mb-4 text-foreground/90">A. Ego-State Theory and Self-States</h3>
                                    <p className="text-muted-foreground mb-6">
                                        Psychoanalyst Philip Bromberg proposed that humans naturally exist as multiple self-states that feel unified
                                        but can shift depending on context. He described healthy individuals as <i>“one self while being many”</i>, and
                                        pathology occurs only when these states become rigid and disconnected.
                                    </p>
                                    <p className="text-muted-foreground mb-12">
                                        Ego-state theory suggests that the mind contains semi-independent identity modules responsible for
                                        cognition, emotion, social behavior, and survival responses.
                                    </p>

                                    <h3 className="text-xl font-bold mb-4 text-foreground/90">B. Social Identity and Contextual Selves</h3>
                                    <p className="text-muted-foreground mb-6">
                                        Social psychology supports the idea of multiple contextual selves. Social identity theory states that
                                        individuals possess multiple identities depending on group membership, roles, and context (e.g., student, leader, friend). These identities coexist and activate dynamically
                                    </p>
                                    <h3 className="text-xl font-bold mb-4 text-foreground/90">C. Cognitive Self-Modularity</h3>
                                    <p className="text-muted-foreground mb-6">
                                        Neuroscience research suggests that the self is composed of multiple representations (sensorimotor, social, temporal, and conceptual self). The integration of these components forms the subjective sense of identity.
                                    </p>

                                    <h2 id="did-vs-multiple-personality-disorder" className="scroll-mt-32 text-3xl font-bold mb-6 font-display group flex items-center gap-4">
                                        <span className="text-primary/30 group-hover:text-primary transition-colors underline decoration-primary/20 decoration-4">III.</span> DID VS. FUNCTIONAL MULTIPLE SELF-STATES
                                    </h2>
                                    <h3 className="text-xl font-bold mb-4 text-foreground/90">A. Dissociative Identity Disorder (DID)</h3>
                                    <p className="text-muted-foreground mb-6">
                                        DID is a clinical disorder characterized by two or more distinct identities, often with amnesia and impaired
                                        functioning, typically resulting from severe childhood trauma.
                                    </p>
                                    <p className="text-muted-foreground mb-6">
                                        <b>Key Features of DID:</b>
                                        <br />
                                        1. Memory gaps
                                        <br />
                                        2. Loss of control over identity switching
                                        <br />
                                        3. Functional impairment
                                        <br />
                                        4. Trauma-based origin
                                    </p>
                                    <h3 className="text-xl font-bold mb-4 text-foreground/90">B. Functional Multiple Self-States (Non-Pathological)</h3>
                                    <p className="text-muted-foreground mb-6">
                                        In contrast, healthy individuals may experience multiple identity modes (e.g., logical self, emotional self, aggressive self) without memory loss or impairment. These are adaptive and integrated under executive
                                        control.
                                    </p>
                                    <p className="text-muted-foreground mb-6">
                                        <b>Characteristics:</b>
                                        <br />
                                        1. Conscious awareness of identity modes
                                        <br />
                                        2. No amnesia
                                        <br />
                                        3. Unified memory and agency
                                        <br />
                                        4. Enhanced performance specialization
                                    </p>
                                    <p className="text-muted-foreground mb-6">
                                        Changing personality in a controlled manner according to the situation and using them effectively is
                                        considered an advanced mental skill, referred to as <b><i>Adaptive Self-States</i></b>.
                                    </p>

                                    <h2 id="an-observed-model" className="scroll-mt-32 text-3xl font-bold mb-6 font-display group flex items-center gap-4">
                                        <span className="text-primary/30 group-hover:text-primary transition-colors underline decoration-primary/20 decoration-4">IV.</span> AN OBSERVED MODEL: ACTIVE PERSONALITY MODULES
                                    </h2>
                                    <p className="text-muted-foreground mb-6">
                                        This article proposes a Tri-Modular Active Personality Model (Tri-MAP).
                                    </p>
                                    <h3 className="text-xl font-bold mb-4 text-foreground/90">A. Executive Intelligence Module</h3>
                                    <p className="text-muted-foreground mb-6">
                                        <br />- Intelligence, scientific and analytical cognition
                                        <br />- Logical reasoning and strategic planning
                                    </p>
                                    <h3 className="text-xl font-bold mb-4 text-foreground/90">B. Survival and Action Module</h3>
                                    <p className="text-muted-foreground mb-6">
                                        <br />- Confidence, courage, justice-oriented behavior, aggression and threat response
                                    </p>
                                    <h3 className="text-xl font-bold mb-4 text-foreground/90">C. Freedom and Pleasure Module</h3>
                                    <p className="text-muted-foreground mb-6">
                                        <br />- Love, empathy, freedom and pleasure-seeking behavior
                                    </p>
                                    <h3 className="text-xl font-bold mb-4 text-foreground/90 flex items-center gap-2">
                                        <Sparkles className="text-primary" size={20} />
                                        Integrated Adaptive Self-State
                                    </h3>
                                    <p className="text-muted-foreground mb-6">
                                        A fourth integrative state dynamically blends all modules, representing emotional recovery, cognitive
                                        balancing, and identity integration.
                                    </p>

                                    {/* Mid-article Visualization */}
                                    <div className="my-16 flex justify-center animate-fade-in">
                                        <div className="relative group max-w-2xl w-full">
                                            {/* Subtle Persistent Glow */}
                                            <div className="absolute -inset-1 bg-primary/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow" />

                                            <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card/30 backdrop-blur-sm shadow-2xl p-6">
                                                <img
                                                    src={imgModel}
                                                    alt="Tri-Modular Active Personality Visualization"
                                                    className="w-full h-auto max-h-[500px] object-contain transition-all duration-500"
                                                    onError={(e) => {
                                                        e.currentTarget.src = "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=1000&auto=format&fit=crop";
                                                    }}
                                                />
                                                <div className="mt-4 text-center">
                                                    <p className="text-xs text-muted-foreground italic">Figure 2: Architectural overlay of the Human Cognitive Self-Modularity.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h2 id="psychological-and-neurobiological-explanation" className="scroll-mt-32 text-3xl font-bold mb-6 font-display group flex items-center gap-4">
                                        <span className="text-primary/30 group-hover:text-primary transition-colors underline decoration-primary/20 decoration-4">V.</span> PSYCHOLOGICAL AND NEUROBIOLOGICAL EXPLANATION
                                    </h2>
                                    <h3 className="text-xl font-bold mb-4 text-foreground/90">A. Neural Network Specialization</h3>
                                    <p className="text-muted-foreground mb-6">
                                        Different brain networks (default mode, executive control, salience network) activate during different mental
                                        states. Switching between personality-like modes may reflect network dominance shifts rather than separate
                                        personalities.
                                    </p>
                                    <h3 className="text-xl font-bold mb-4 text-foreground/90">B. Hormonal and Neurochemical Influences</h3>
                                    <p className="text-muted-foreground mb-6">
                                        Hormones like testosterone, cortisol, and oxytocin fluctuate naturally and can significantly alter mood,
                                        risk-taking, and social behavior, creating temporary personality-like states.
                                    </p>
                                    <h3 className="text-xl font-bold mb-4 text-foreground/90">C. Self-Management Theory</h3>
                                    <p className="text-muted-foreground mb-6">
                                        Behavioral economics and psychology describe internal conflict between present self and future self, supporting the concept of multiple internal agents within one mind.
                                    </p>

                                    <h2 id="implications-for-ai-assisted-self-monitoring" className="scroll-mt-32 text-3xl font-bold mb-6 font-display group flex items-center gap-4">
                                        <span className="text-primary/30 group-hover:text-primary transition-colors underline decoration-primary/20 decoration-4">VI.</span> IMPLICATIONS FOR AI-ASSISTED SELF MONITORING
                                    </h2>
                                    <p className="text-muted-foreground mb-6">
                                        Future AI systems could track conversational patterns, emotional states, decision styles, and behavioral
                                        metrics to quantify dominant self-states. Such systems could provide real-time personality dominance
                                        indices, emotional overload warnings, and cognitive recovery suggestions.
                                        <br />
                                        This model opens a pathway for <b>Human–AI cognitive symbiosis</b>, where AI functions as a meta-conscious
                                        observer of human self-state dynamics.
                                    </p>

                                    <h2 id="ethical-and-philosophical-considerations" className="scroll-mt-32 text-3xl font-bold mb-6 font-display group flex items-center gap-4">
                                        <span className="text-primary/30 group-hover:text-primary transition-colors underline decoration-primary/20 decoration-4">VII.</span> ETHICAL AND PHILOSOPHICAL CONSIDERATIONS
                                    </h2>
                                    <p className="text-muted-foreground mb-6">
                                        If the self is modular, questions arise about identity continuity, free will, and responsibility. A modular self
                                        challenges the classical philosophical concept of a singular unified identity.
                                    </p>



                                    <h2 id="conclusion" className="scroll-mt-32 text-3xl font-bold mb-6 font-display group flex items-center gap-4">
                                        <span className="text-primary/30 group-hover:text-primary transition-colors underline decoration-primary/20 decoration-4">VIII.</span> CONCLUSION
                                    </h2>
                                    <p className="text-muted-foreground mb-8">
                                        Multiple active personality states without dissociation represent a natural cognitive architecture rather than a
                                        disorder. These states function as specialized cognitive agents within a unified system and it is considered as an advanced mental architecture. Understanding and
                                        quantifying these states may revolutionize psychology, psychiatry, and mental augmentation technologies.
                                    </p>

                                    <h2 id="references" className="text-3xl font-bold mb-6 font-display group flex items-center gap-4">
                                        <span className="text-primary/30 group-hover:text-primary transition-colors underline decoration-primary/20 decoration-4">REFERENCES</span>
                                    </h2>
                                    <p className="text-muted-foreground mb-8">
                                        [1] P. M. Bromberg, Trauma, Dissociation, and Conflict in Relational Psychoanalysis, 2003.
                                        <br />
                                        [2] H. Tajfel and J. C. Turner, “Social Identity Theory,” 1979.
                                        <br />
                                        [3] American Psychiatric Association, DSM-5 Diagnostic Criteria for Dissociative Identity Disorder, 2013.
                                        <br />
                                        [4] M. Hoffmann et al., “The Role of Self-Touch Experience in the Formation of the Self,” 2017.
                                        <br />
                                        [5] T. Schelling, Egonomics: The Art of Self-Management, 1984.
                                    </p>
                                </article>
                            </div>
                        </div>
                    </section>

                    <Footer />
                </div>
            </SmoothScroll>
        </PageTransition>
    );
};

export default MultiplePersonalityStates;
