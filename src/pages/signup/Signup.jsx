import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import BgImage from "../../assets/images/home/banner-2.jpg";

function Register() {
    return (
        <div className="w-full min-h-screen flex bg-[var(--blueLight)]">

            {/* LEFT — FORM */}
            <div className="flex flex-col justify-center w-full lg:w-1/2 px-6 sm:px-12 lg:px-20 py-10">

                {/* TITLE */}
                <h2
                    className="text-3xl sm:text-4xl font-bold mb-3"
                    style={{ color: "var(--blueDark)" }}
                >
                    Create Your Account 🚀
                </h2>

                <p className="text-gray-600 text-sm mb-8">
                    Join Wings Academy and start your learning journey today.
                </p>

                {/* GOOGLE LOGIN */}
                <button
                    type="button"
                    className="
                        w-full flex items-center justify-center gap-3
                        bg-white border border-gray-300 
                        py-3 rounded-xl shadow-sm
                        hover:bg-gray-100 transition
                    "
                >
                    <FaGoogle size={22} />
                    <span className="text-gray-700 font-medium">Sign Up with Google</span>
                </button>

                {/* OR SEPARATOR */}
                <div className="flex items-center my-6">
                    <span className="flex-1 h-px bg-gray-300"></span>
                    <span className="px-3 text-gray-500 text-sm">OR</span>
                    <span className="flex-1 h-px bg-gray-300"></span>
                </div>

                {/* FORM */}
                <form className="space-y-6">

                    {/* FULL NAME */}
                    <div>
                        <label className="text-gray-700 font-medium">Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="
                                w-full mt-2 p-3 rounded-xl border border-gray-300 
                                focus:ring-2 focus:ring-[var(--accent)] outline-none
                            "
                        />
                    </div>

                    {/* PHONE NUMBER */}
                    <div>
                        <label className="text-gray-700 font-medium">Phone Number</label>
                        <input
                            type="tel"
                            placeholder="Enter your phone number"
                            className="
                                w-full mt-2 p-3 rounded-xl border border-gray-300 
                                focus:ring-2 focus:ring-[var(--accent)] outline-none
                            "
                        />
                    </div>

                    {/* EMAIL */}
                    <div>
                        <label className="text-gray-700 font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="
                                w-full mt-2 p-3 rounded-xl border border-gray-300 
                                focus:ring-2 focus:ring-[var(--accent)] outline-none
                            "
                        />
                    </div>

                    {/* PASSWORD */}
                    <div>
                        <label className="text-gray-700 font-medium">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="
                                w-full mt-2 p-3 rounded-xl border border-gray-300 
                                focus:ring-2 focus:ring-[var(--accent)] outline-none
                            "
                        />
                    </div>

                    {/* CONFIRM PASSWORD */}
                    <div>
                        <label className="text-gray-700 font-medium">Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Re-enter your password"
                            className="
                                w-full mt-2 p-3 rounded-xl border border-gray-300 
                                focus:ring-2 focus:ring-[var(--accent)] outline-none
                            "
                        />
                    </div>

                    {/* REGISTER BUTTON */}
                    <button
                        type="submit"
                        className="
                            w-full bg-[var(--accent)] text-white font-semibold
                            py-3 rounded-xl mt-4 transition-all duration-300
                            hover:bg-opacity-90 active:scale-95
                        "
                    >
                        Create Account
                    </button>

                    {/* REDIRECT */}
                    <p className="text-gray-600 text-sm text-center mt-4">
                        Already have an account?{" "}
                        <Link
                            to="/auth/login"
                            className="text-[var(--accent)] font-medium hover:underline"
                        >
                            Login
                        </Link>
                    </p>

                </form>
            </div>

            {/* RIGHT — IMAGE BANNER */}
            <div className="hidden lg:block w-1/2 relative">
                <img
                    src={BgImage}
                    alt="Register Visual"
                    className="w-full h-full object-cover"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* TEXT OVERLAY */}
                <div className="absolute inset-0 flex flex-col justify-center px-16">
                    <h2 className="text-white text-4xl font-bold mb-4 leading-tight">
                        Start Learning Today
                    </h2>
                    <p className="text-gray-200 text-lg">
                        Create your free account and access premium learning content at Wings Academy.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Register;
