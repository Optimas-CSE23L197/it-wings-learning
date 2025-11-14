import React from "react";
import { GraduationCap } from "lucide-react";
import BgImage from "../../assets/images/home/banner-3.png"

function CTASection() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-16">

            <div
                className="
          relative 
          w-full 
          rounded-3xl 
          overflow-hidden 
          flex 
          items-center 
          justify-between 
          p-6 sm:p-10 
          min-h-[220px]
        "
                style={{
                    backgroundImage: `url(${BgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}

            >

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/40"></div>

                {/* LEFT CONTENT */}
                <div className="relative z-10 flex items-center gap-5">

                    {/* Icon */}
                    <div className="p-4 bg-white rounded-full shadow-md">
                        <GraduationCap
                            size={40}
                            style={{ color: "var(--accent)" }}
                        />
                    </div>

                    <div>
                        <h2
                            className="text-xl sm:text-2xl font-bold mb-1"
                            style={{ color: "var(--blueDark)" }}
                        >
                            Let’s Start with Wings Academy
                        </h2>

                        <p className="text-gray-600 text-sm sm:text-base">
                            Your Journey of Learning Begins Here
                        </p>
                    </div>
                </div>

                {/* BUTTONS */}
                <div className="relative z-10 flex items-center gap-3">

                    {/* Student Button */}
                    <button
                        className="
              px-5 py-2 
              rounded-full 
              font-medium 
              border 
              text-[var(--accent)] 
              border-[var(--accent)]
              hover:bg-[var(--accent)] 
              hover:text-white 
              transition
              text-sm sm:text-base
            "
                    >
                        I'm A Student
                    </button>

                    {/* Instructor Button */}
                    <button
                        className="
              px-5 py-2 
              rounded-full 
              font-medium 
              text-white 
              text-sm sm:text-base
              transition
            "
                        style={{ backgroundColor: "var(--accent)" }}
                    >
                        Become An Instructor
                    </button>
                </div>

            </div>

        </section>
    );
}

export default CTASection;
