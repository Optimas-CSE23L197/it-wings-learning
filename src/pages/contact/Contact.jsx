import React from "react";
import BtnOrange from "../../components/common/BtnDarkBlue";

function ContactPage() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-16">

            {/* TOP SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">

                {/* LEFT: CONTACT INFO */}
                <div>
                    <h2
                        className="text-3xl sm:text-4xl font-bold mb-4"
                        style={{ color: "var(--blueDark)" }}
                    >
                        Need A Direct Line?
                    </h2>

                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Cras massa al odio donec faucibus in. Vitae pretium massa dolor ullamcorper lectus elit quam.
                    </p>

                    <div className="space-y-6">

                        {/* PHONE */}
                        <div className="flex items-start gap-4">
                            <div className="text-orange-500 text-2xl">📞</div>
                            <div>
                                <p className="text-sm text-gray-500">Phone</p>
                                <p
                                    className="font-semibold text-[18px]"
                                    style={{ color: "var(--grayDark)" }}
                                >
                                    (123) 456 7890
                                </p>
                            </div>
                        </div>

                        {/* EMAIL */}
                        <div className="flex items-start gap-4">
                            <div className="text-orange-500 text-2xl">✉️</div>
                            <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <p
                                    className="font-semibold text-[18px]"
                                    style={{ color: "var(--grayDark)" }}
                                >
                                    contact@thimpress.com
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* RIGHT: MAP */}
                <div className="w-full h-72 sm:h-96 rounded-3xl overflow-hidden shadow">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3334.0706346017646!2d88.43318712475703!3d22.569078383100436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275abf4cadad9%3A0x617148c6351331b6!2sStesalit%20Tower%2C%20GP%20Block%2C%20Sector%20V%2C%20Bidhannagar%2C%20West%20Bengal%20700091!5e1!3m2!1sen!2sin!4v1763125516102!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

            </div>

            {/* CONTACT FORM */}
            <div className="max-w-4xl mx-auto">

                <h3
                    className="text-2xl sm:text-3xl font-semibold mb-2"
                    style={{ color: "var(--blueDark)" }}
                >
                    Contact Us
                </h3>

                <p className="text-gray-600 mb-6">
                    Your email address will not be published. Required fields are marked *
                </p>

                <form className="space-y-6">

                    {/* NAME + EMAIL */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Name*"
                            className="border p-3 rounded-xl focus:ring-2 focus:ring-[var(--accent)] outline-none"
                        />

                        <input
                            type="email"
                            placeholder="Email*"
                            className="border p-3 rounded-xl focus:ring-2 focus:ring-[var(--accent)] outline-none"
                        />
                    </div>

                    {/* COMMENT */}
                    <textarea
                        placeholder="Comment"
                        rows={5}
                        className="w-full border p-4 rounded-xl focus:ring-2 focus:ring-[var(--accent)] outline-none"
                    />

                    {/* REMEMBER CHECKBOX */}
                    <label className="flex items-center gap-2 text-sm text-gray-600">
                        <input type="checkbox" className="w-4 h-4" />
                        Save my name, email in this browser for the next time I comment
                    </label>

                    {/* SUBMIT */}
                    <BtnOrange btnName={"Send Us"} />

                </form>
            </div>
        </div>
    );
}

export default ContactPage;
