import React from "react";
import { Link } from "react-router-dom";
import BgImage from "../../assets/images/home/banner-2.jpg"; // add any beautiful image here

function Login() {
    return (
        <div className="w-full min-h-screen flex bg-[var(--blueLight)]">

            {/* LEFT — FORM SECTION */}
            <div className="flex flex-col justify-center w-full lg:w-1/2 px-6 sm:px-12 lg:px-20 py-10">

                {/* Branding */}
                <h2
                    className="text-3xl sm:text-4xl font-bold mb-6"
                    style={{ color: "var(--blueDark)" }}
                >
                    Welcome Back 👋
                </h2>

                <p className="text-gray-600 text-sm sm:text-base mb-10">
                    Login to access your courses, dashboard and more.
                </p>

                {/* LOGIN FORM */}
                <form className="space-y-6">

                    {/* USER ID */}
                    <div>
                        <label className="text-gray-700 font-medium">User ID</label>
                        <input
                            type="text"
                            placeholder="Enter your user ID"
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

                        <Link
                            to="/forgot-password"
                            className="block text-sm text-[var(--accent)] mt-2 hover:underline"
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    {/* LOGIN BUTTON */}
                    <button
                        type="submit"
                        className="
                            w-full bg-[var(--accent)] text-white font-semibold
                            py-3 rounded-xl mt-4 transition-all duration-300
                            hover:bg-opacity-90 active:scale-95
                        "
                    >
                        Login
                    </button>

                    {/* FOOTER LINKS */}
                    <p className="text-gray-600 text-sm text-center mt-4">
                        Don’t have an account?{" "}
                        <Link
                            to="/auth/sign-up"
                            className="text-[var(--accent)] font-medium hover:underline"
                        >
                            Register
                        </Link>
                    </p>

                </form>
            </div>

            {/* RIGHT — IMAGE BANNER */}
            <div className="hidden lg:block w-1/2 relative">
                <img
                    src={BgImage}
                    alt="Login Visual"
                    className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Overlay text */}
                <div className="absolute inset-0 flex flex-col justify-center px-16">
                    <h2 className="text-white text-4xl font-bold mb-4 leading-tight">
                        Learn Without Limits
                    </h2>
                    <p className="text-gray-200 text-lg">
                        Join Wings Academy and take your knowledge to the next level with our expert-driven courses.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Login;
