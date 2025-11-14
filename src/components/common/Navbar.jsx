import React, { useState } from "react";
import { Search, Menu, X, BookOpen, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {
    const [open, setOpen] = useState(false);

    const activeClass =
        "text-[var(--accent)] border-b-2 border-[var(--accent)] pb-1";
    const normalClass =
        "text-[var(--grayDark)] hover:text-[var(--accent)] transition";

    // NAV ITEMS CONFIG
    const navItems = [
        { label: "Home", to: "/" },
        { label: "Courses", to: "/all-courses" },
    ];

    const pageDropdown = [
        { label: "About", to: "/about" },
        { label: "Contact", to: "/contact-us" },
    ];

    return (
        <nav className="w-full bg-white shadow-sm sticky top-0 z-30">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

                {/* LOGO */}
                <div className="flex items-center gap-2">
                    <BookOpen size={30} className="text-[var(--accent)]" />

                    <NavLink to="/">
                        <span
                            className="text-xl font-bold"
                            style={{ color: "var(--blueDark)" }}
                        >
                            Wings Academy
                        </span>
                    </NavLink>
                </div>

                {/* DESKTOP MENU */}
                <div className="hidden lg:flex items-center gap-8 font-medium">

                    {/* MAIN LINKS */}
                    {navItems.map((item, i) => (
                        <NavLink
                            key={i}
                            to={item.to}
                            className={({ isActive }) =>
                                isActive ? activeClass : normalClass
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}

                    <div className="relative group cursor-pointer">
                        <div className="flex items-center gap-1">
                            <span className="hover:text-[var(--accent)] transition">
                                Page
                            </span>
                            <ChevronDown size={16} />
                        </div>

                        {/* FIXED DROPDOWN */}
                        <div
                            className="
            absolute top-7 left-0 w-40
            bg-white shadow-md rounded-xl p-3 z-20
            
            opacity-0 translate-y-2 pointer-events-none
            transition-all duration-200

            group-hover:opacity-100 group-hover:translate-y-0 
            group-hover:pointer-events-auto
        "
                        >
                            {pageDropdown.map((item, i) => (
                                <NavLink
                                    key={i}
                                    to={item.to}
                                    className="block px-4 py-2 rounded-md hover:bg-gray-100"
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </div>
                    </div>


                    {/* LOGIN / REGISTER */}
                    <div className="
                        border-2 border-[var(--accent)] rounded-3xl 
                        px-4 py-2 flex items-center gap-1
                    ">
                        <NavLink
                            to="/auth/login"
                            className={({ isActive }) =>
                                isActive ? activeClass : normalClass
                            }
                        >
                            Login
                        </NavLink>
                        <span>/</span>
                        <NavLink
                            to="/auth/sign-up"
                            className={({ isActive }) =>
                                isActive ? activeClass : normalClass
                            }
                        >
                            Register
                        </NavLink>
                    </div>

                    {/* SEARCH ICON */}
                    <button className="
                        border border-[var(--accent)] 
                        text-[var(--accent)] p-2 rounded-full 
                        hover:bg-[var(--accent)] hover:text-white 
                        transition
                    ">
                        <Search size={18} />
                    </button>
                </div>

                {/* MOBILE HAMBURGER BUTTON */}
                <button
                    className="lg:hidden text-[var(--blueDark)]"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* MOBILE MENU */}
            <div
                className={`
                    lg:hidden bg-white shadow-md overflow-hidden 
                    px-4 transition-all duration-300 
                    ${open ? "max-h-[500px] py-4" : "max-h-0 py-0"}
                `}
            >
                {/* MAIN NAV */}
                <div className="space-y-4 font-medium">

                    {navItems.map((item, i) => (
                        <NavLink
                            key={i}
                            to={item.to}
                            className={({ isActive }) =>
                                isActive ? activeClass : normalClass
                            }
                            onClick={() => setOpen(false)}
                        >
                            {item.label}
                        </NavLink>
                    ))}

                    {/* PAGE SUBMENU */}
                    <div className="space-y-2">
                        <span className="font-semibold block">Pages</span>

                        {pageDropdown.map((item, i) => (
                            <NavLink
                                key={i}
                                to={item.to}
                                className="block pl-3 text-sm hover:text-[var(--accent)]"
                                onClick={() => setOpen(false)}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>

                    {/* LOGIN REGISTER */}
                    <NavLink
                        to="/login"
                        className={normalClass}
                        onClick={() => setOpen(false)}
                    >
                        Login / Register
                    </NavLink>

                    {/* SEARCH BUTTON */}
                    <button className="
                        border border-[var(--accent)] 
                        text-[var(--accent)] p-2 rounded-full 
                        hover:bg-[var(--accent)] hover:text-white 
                        transition
                    ">
                        <Search size={18} />
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
