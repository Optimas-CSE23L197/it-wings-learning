import React, { useState } from "react";
import { Search, Menu, X, BookOpen } from "lucide-react";

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

                {/* LOGO */}
                <div className="flex items-center gap-2">
                    <BookOpen size={30} style={{ color: "var(--accent)" }} />
                    <span
                        className="text-xl font-bold"
                        style={{ color: "var(--blueDark)" }}
                    >
                        Wings Academy
                    </span>
                </div>

                {/* DESKTOP MENU */}
                <div className="hidden lg:flex items-center gap-8 text-[var(--grayDark)] font-medium">

                    {/* ACTIVE LINK */}
                    <a
                        href="#"
                        className="text-[var(--accent)] border-b-2 border-[var(--accent)] pb-1"
                    >
                        Home
                    </a>

                    <a href="#">Courses</a>
                    <a href="#">Blog</a>

                    {/* PAGE DROPDOWN */}
                    <div className="relative group cursor-pointer">
                        <div className="flex items-center gap-1">
                            <span>Page</span>
                            <span>▾</span>
                        </div>

                        <div className="absolute top-7 left-0 bg-white shadow-md rounded-xl p-3 hidden group-hover:block z-20">
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">
                                About
                            </a>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">
                                Contact
                            </a>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">
                                FAQ
                            </a>
                        </div>
                    </div>

                    <a href="#">LearnPress Add-On</a>
                    <a href="#">Premium Theme</a>

                    <a href="#" className="ml-2">Login / Register</a>

                    {/* SEARCH BUTTON */}
                    <button
                        className="
              border border-[var(--accent)] 
              text-[var(--accent)] p-2 rounded-full 
              hover:bg-[var(--accent)] hover:text-white 
              transition
            "
                    >
                        <Search size={18} />
                    </button>
                </div>

                {/* MOBILE HAMBURGER */}
                <button
                    className="lg:hidden text-[var(--blueDark)]"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* MOBILE DROPDOWN MENU */}
            {open && (
                <div className="lg:hidden bg-white shadow-md px-4 pb-6 space-y-4 text-[var(--grayDark)] font-medium">

                    <a
                        href="#"
                        className="block text-[var(--accent)] border-b-2 border-[var(--accent)] pb-1"
                    >
                        Home
                    </a>

                    <a href="#" className="block">Courses</a>
                    <a href="#" className="block">Blog</a>

                    {/* PAGE MENU */}
                    <div className="space-y-2">
                        <span className="font-semibold block">Page</span>
                        <a href="#" className="block pl-3 text-sm">About</a>
                        <a href="#" className="block pl-3 text-sm">Contact</a>
                        <a href="#" className="block pl-3 text-sm">FAQ</a>
                    </div>

                    <a href="#" className="block">LearnPress Add-On</a>
                    <a href="#" className="block">Premium Theme</a>

                    <a href="#" className="block">Login / Register</a>

                    {/* SEARCH ICON */}
                    <button
                        className="
              border border-[var(--accent)] 
              text-[var(--accent)] p-2 rounded-full 
              hover:bg-[var(--accent)] hover:text-white 
              transition
            "
                    >
                        <Search size={18} />
                    </button>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
