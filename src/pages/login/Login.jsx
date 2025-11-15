import React, { useState } from "react";
import { Link } from "react-router-dom";
import BgImage from "../../assets/images/home/banner-2.jpg";

import { isEmail, isValidPassword, validateFields } from "../../utils/validators";

import Toast from "../../utils/toast";
import usePost from "../../hooks/usePost";
import useAuth from "../../hooks/useAuth"; // FIXED
import { ToastContainer } from "react-toastify";

function Login() {
    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: "",
    });

    const { loading, postNow } = usePost("/auth/login");
    const { login: saveUser } = useAuth();

    const handleLoginInput = (e) => {
        const { name, value } = e.target;
        setLoginDetails((prev) => ({ ...prev, [name]: value }));
    };

    const handleLogin = async (e) => {
        e.preventDefault(); // FIX: prevent page reload

        // VALIDATION
        const requiredError = validateFields(loginDetails, ["email", "password"]);
        if (requiredError) return Toast.error(requiredError);

        if (!isEmail(loginDetails.email)) return Toast.error("Invalid email");
        if (!isValidPassword(loginDetails.password))
            return Toast.error("Password must be at least 6 chars");

        // API CALL
        const response = await postNow(loginDetails);

        if (!response.success) {
            return Toast.error(response.error || "Login failed");
        }

        // SAVE USER IN CONTEXT
        saveUser(response.data); // data = { token, user }

        Toast.success("Login successful!");
    };

    return (
        <div className="w-full min-h-screen flex bg-[var(--blueLight)]">
            {/* LEFT — FORM SECTION */}
            <div className="flex flex-col justify-center w-full lg:w-1/2 px-6 sm:px-12 lg:px-20 py-10">
                <h2
                    className="text-3xl sm:text-4xl font-bold mb-6"
                    style={{ color: "var(--blueDark)" }}
                >
                    Welcome Back 👋
                </h2>

                <p className="text-gray-600 text-sm sm:text-base mb-10">
                    Login to access your courses, dashboard and more.
                </p>

                <form className="space-y-6" onSubmit={handleLogin}>
                    {/* EMAIL */}
                    <div>
                        <label className="text-gray-700 font-medium">Email</label>
                        <input
                            type="text"
                            name="email"
                            value={loginDetails.email}
                            onChange={handleLoginInput}
                            placeholder="Enter your email"
                            className="w-full mt-2 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[var(--accent)] outline-none"
                        />
                    </div>

                    {/* PASSWORD */}
                    <div>
                        <label className="text-gray-700 font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={loginDetails.password}
                            onChange={handleLoginInput}
                            placeholder="Enter your password"
                            className="w-full mt-2 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[var(--accent)] outline-none"
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
                        disabled={loading}
                        className={`
              w-full bg-[var(--accent)] text-white font-semibold py-3 rounded-xl mt-4 transition-all duration-300
              hover:bg-opacity-90 active:scale-95
              ${loading ? "opacity-50 cursor-not-allowed" : ""}
            `}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>

                    {/* FOOTER */}
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

                <div className="absolute inset-0 bg-black/40"></div>

                <div className="absolute inset-0 flex flex-col justify-center px-16">
                    <h2 className="text-white text-4xl font-bold mb-4 leading-tight">
                        Learn Without Limits
                    </h2>
                    <p className="text-gray-200 text-lg">
                        Join Wings Academy and take your knowledge to the next level with our expert-driven courses.
                    </p>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
}

export default Login;
