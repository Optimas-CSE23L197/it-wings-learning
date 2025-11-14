import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import {
    companyLinks,
    programLinks,
    supportLinks,
    learningPaths,
    toolsResources,
    interviewPrep,
} from "../../data/footerLinks";

function Footer() {
    return (
        <footer
            className="w-full mt-20 pt-16 pb-10"
            style={{ backgroundColor: "var(--blueTeal)" }}
        >
            <div className="max-w-7xl mx-auto px-4">

                {/* TOP GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-white">

                    {/* BRAND + SOCIAL */}
                    <div>
                        <h2 className="text-2xl font-bold mb-2">
                            Wings<span style={{ color: "var(--accent)" }}>Academy</span>
                        </h2>

                        <p className="text-[var(--blueLight)] text-sm leading-relaxed mb-6">
                            Transforming education with modern learning tools and
                            innovative knowledge pathways.
                        </p>

                        {/* SOCIALS */}
                        <div className="flex items-center gap-4 mt-3">
                            {[Facebook, Instagram, Linkedin, Twitter, Youtube].map(
                                (Icon, i) => (
                                    <button
                                        key={i}
                                        className="
                                            p-2 rounded-full border border-[var(--blueLight)]
                                            hover:bg-[var(--accent)]
                                            hover:border-[var(--accent)]
                                            hover:text-white transition cursor-pointer
                                        "
                                    >
                                        <Icon size={18} />
                                    </button>
                                )
                            )}
                        </div>
                    </div>

                    {/* COMPANY */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            {companyLinks.map((item, i) => (
                                <li key={i}>
                                    <a className="text-[var(--blueLight)] hover:text-[var(--accent)] text-sm transition cursor-pointer">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* PROGRAMS */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Programs</h3>
                        <ul className="space-y-2">
                            {programLinks.map((item, i) => (
                                <li key={i}>
                                    <a className="text-[var(--blueLight)] hover:text-[var(--accent)] text-sm transition cursor-pointer">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* SUPPORT */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                        <ul className="space-y-2">
                            {supportLinks.map((item, i) => (
                                <li key={i}>
                                    <a className="text-[var(--blueLight)] hover:text-[var(--accent)] text-sm transition cursor-pointer">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* DIVIDER */}
                <div className="my-10 border-t border-[var(--blueLight)]/40"></div>

                {/* MIDDLE SECTION GROUPED LINKS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-[var(--blueLight)] text-sm">

                    {/* Learning Paths */}
                    <div>
                        <h4 className="text-white font-semibold mb-3">Learning Paths</h4>
                        <ul className="flex flex-wrap gap-3">
                            {learningPaths.map((item, i) => (
                                <li key={i} className="border-r border-[var(--blueLight)] pr-3">
                                    <a className="hover:text-[var(--accent)] cursor-pointer">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tools */}
                    <div>
                        <h4 className="text-white font-semibold mb-3">Tools & Utilities</h4>
                        <ul className="flex flex-wrap gap-3">
                            {toolsResources.map((item, i) => (
                                <li key={i} className="border-r border-[var(--blueLight)] pr-3">
                                    <a className="hover:text-[var(--accent)] cursor-pointer">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Interview Prep */}
                    <div>
                        <h4 className="text-white font-semibold mb-3">Interview Prep</h4>
                        <ul className="flex flex-wrap gap-3">
                            {interviewPrep.map((item, i) => (
                                <li key={i} className="border-r border-[var(--blueLight)] pr-3">
                                    <a className="hover:text-[var(--accent)] cursor-pointer">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* BOTTOM COPYRIGHT */}
                <div className="border-t border-[var(--blueLight)]/40 mt-12 pt-6 flex justify-between text-[var(--blueLight)] text-sm">
                    <p>© {new Date().getFullYear()} LearnSphere — Crafted with care</p>
                    <p>Version 1.0</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
