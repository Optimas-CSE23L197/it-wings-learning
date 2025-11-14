import React from "react";

export default function CommentsSection() {
    return (
        <section className="w-full max-w-7xl mx-auto mt-12 px-4">

            {/* TITLE */}
            <h2
                className="text-2xl font-semibold mb-2"
                style={{ color: "var(--blueDark)" }}
            >
                Leave A Comment
            </h2>

            <p className="text-gray-600 text-sm mb-6">
                Your email address will not be published. Required fields are marked *
            </p>

            {/* FORM */}
            <form className="space-y-6">

                {/* NAME + EMAIL */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Name*"
                        className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-[var(--accent)]"
                    />

                    <input
                        type="email"
                        placeholder="Email*"
                        className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-[var(--accent)]"
                    />
                </div>

                {/* COMMENT */}
                <textarea
                    placeholder="Comment"
                    rows="5"
                    className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-[var(--accent)]"
                ></textarea>

                {/* CHECKBOX */}
                <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input type="checkbox" className="w-4 h-4" />
                    Save my name, email in this browser for the next time I comment
                </label>

                {/* SUBMIT BUTTON */}
                <button
                    type="submit"
                    className="
                    px-6 py-3 rounded-2xl font-medium text-white 
                    transition-all duration-300 hover:bg-opacity-80 
                    active:scale-95
                "
                    style={{ backgroundColor: "var(--accent)" }}
                >
                    Post Comment
                </button>

            </form>
        </section>
    );
}
