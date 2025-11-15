import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import BgImage from "../../assets/images/home/banner-2.jpg";

import {
    isEmail,
    isValidName,
    isValidPassword,
    isValidPhoneNumber,
    validateFields
} from "../../utils/validators";

import Toast from "../../utils/toast";
import usePost from "../../hooks/usePost";
import useAuth from "../../hooks/useAuth";
import { ToastContainer } from "react-toastify";

function Register() {
    const [signupDetails, setSignupDetails] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const { loading, postNow } = usePost("/auth/sign-up");
    const { login: saveUser } = useAuth();

    const handleSignupInput = (e) => {
        const { name, value } = e.target;
        setSignupDetails((prev) => ({ ...prev, [name]: value }));
    };

    const handleSignup = async (e) => {
        e.preventDefault();

        // REQUIRED FIELDS
        const requiredError = validateFields(signupDetails, [
            "name",
            "phoneNumber",
            "email",
            "password",
            "confirmPassword",
        ]);
        if (requiredError) return Toast.error(requiredError);

        // VALIDATIONS
        if (!isValidName(signupDetails.name))
            return Toast.error("Name must be at least 3 characters long");

        if (!isValidPhoneNumber(signupDetails.phoneNumber))
            return Toast.error("Phone number must be 10 digits");

        if (!isEmail(signupDetails.email))
            return Toast.error("Invalid email address");

        if (!isValidPassword(signupDetails.password))
            return Toast.error("Password must be at least 6 characters");

        if (signupDetails.password !== signupDetails.confirmPassword)
            return Toast.error("Passwords do not match");

        // API CALL
        const response = await postNow(signupDetails); // FIXED

        if (!response.success) {
            return Toast.error(response.error || "Signup failed");
        }

        // SAVE USER IN AUTH CONTEXT
        saveUser(response.data);

        Toast.success("Registration successful!");
    };

    return (
        <div className="w-full min-h-screen flex bg-[var(--blueLight)]">
            <ToastContainer />

            {/* LEFT SIDE — FORM */}
            <div className="flex flex-col justify-center w-full lg:w-1/2 px-6 sm:px-12 lg:px-20 py-10">

                <h2
                    className="text-3xl sm:text-4xl font-bold mb-3"
                    style={{ color: "var(--blueDark)" }}
                >
                    Create Your Account 🚀
                </h2>

                <p className="text-gray-600 text-sm mb-8">
                    Join Wings Academy and start your learning journey today.
                </p>

                {/* GOOGLE BUTTON */}
                <button
                    type="button"
                    className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 py-3 rounded-xl shadow-sm hover:bg-gray-100 transition"
                >
                    <FaGoogle size={22} />
                    <span className="text-gray-700 font-medium">Sign Up with Google</span>
                </button>

                {/* OR */}
                <div className="flex items-center my-6">
                    <span className="flex-1 h-px bg-gray-300"></span>
                    <span className="px-3 text-gray-500 text-sm">OR</span>
                    <span className="flex-1 h-px bg-gray-300"></span>
                </div>

                {/* SIGNUP FORM */}
                <form className="space-y-6" onSubmit={handleSignup}>

                    {/* NAME */}
                    <div>
                        <label className="text-gray-700 font-medium">Full Name</label>
                        <input
                            name="name"
                            type="text"
                            value={signupDetails.name}
                            onChange={handleSignupInput}
                            placeholder="Enter your name"
                            className="w-full mt-2 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[var(--accent)] outline-none"
                            autoComplete="off"
                        />
                    </div>

                    {/* PHONE */}
                    <div>
                        <label className="text-gray-700 font-medium">Phone Number</label>
                        <input
                            name="phoneNumber"
                            type="tel"
                            maxLength="10"
                            value={signupDetails.phoneNumber}
                            onChange={handleSignupInput}
                            placeholder="10-digit phone number"
                            className="w-full mt-2 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[var(--accent)] outline-none"
                            autoComplete="off"
                        />
                    </div>

                    {/* EMAIL */}
                    <div>
                        <label className="text-gray-700 font-medium">Email</label>
                        <input
                            name="email"
                            type="email"
                            value={signupDetails.email}
                            onChange={handleSignupInput}
                            placeholder="Enter your email"
                            className="w-full mt-2 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[var(--accent)] outline-none"
                            autoComplete="off"
                        />
                    </div>

                    {/* PASSWORD */}
                    <div>
                        <label className="text-gray-700 font-medium">Password</label>
                        <input
                            name="password"
                            type="password"
                            value={signupDetails.password}
                            onChange={handleSignupInput}
                            placeholder="Enter your password"
                            className="w-full mt-2 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[var(--accent)] outline-none"
                            autoComplete="new-password"
                        />
                    </div>

                    {/* CONFIRM PASSWORD */}
                    <div>
                        <label className="text-gray-700 font-medium">Confirm Password</label>
                        <input
                            name="confirmPassword"
                            type="password"
                            value={signupDetails.confirmPassword}
                            onChange={handleSignupInput}
                            placeholder="Re-enter your password"
                            className="w-full mt-2 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[var(--accent)] outline-none"
                            autoComplete="new-password"
                        />
                    </div>

                    {/* REGISTER BUTTON */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[var(--accent)] text-white font-semibold py-3 rounded-xl mt-4 transition-all duration-300 hover:bg-opacity-90 active:scale-95 disabled:opacity-50"
                    >
                        {loading ? "Creating Account..." : "Create Account"}
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

            {/* RIGHT SIDE — IMAGE */}
            <div className="hidden lg:block w-1/2 relative">
                <img
                    src={BgImage}
                    alt="Register Visual"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40"></div>

                <div className="absolute inset-0 flex flex-col justify-center px-16">
                    <h2 className="text-white text-4xl font-bold mb-4 leading-tight">
                        Start Learning Today
                    </h2>
                    <p className="text-gray-200 text-lg">
                        Create your free account and gain access to high-quality learning at Wings Academy.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Register;
