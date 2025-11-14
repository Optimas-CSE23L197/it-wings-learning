import React from "react";
import SwiperWrapper from "../../common/SwiperWrapper";
import BtnOrange from "../../common/BtnDarkBlue";

// import your current banner image
import Banner from "../../../assets/images/home/banner-2.jpg";

function HomeBanner() {
    const banners = [
        {
            image: Banner,
            title: "Build Skills With Wings Academy",
            subtitle:
                "Learn industry-ready skills with structured courses and real-world projects.",
            button: "Get Started",
        },
        {
            image: Banner,
            title: "Explore Our Popular Courses",
            subtitle:
                "Choose from our most trending and career-boosting programs.",
            button: "Browse Courses",
        },
        {
            image: Banner,
            title: "Master Design & Creativity",
            subtitle:
                "Start your creative journey with professionals and practical learning.",
            button: "Start Learning",
        },
        {
            image: Banner,
            title: "Become a Full Stack Developer",
            subtitle:
                "Hands-on coding, real projects, mentor support, everything in one place.",
            button: "View Courses",
        },
        {
            image: Banner,
            title: "We Provide Core IT Services",
            subtitle:
                "Web development, app development, UI/UX, branding & digital marketing.",
            button: "Explore Services",
        },
        {
            image: Banner,
            title: "Learn Anytime, Anywhere",
            subtitle:
                "Access our courses with flexible schedules from any device.",
            button: "Join Now",
        },
    ];

    const bannerSwiperConfig = {
        spaceBetween: 0,
        slidesPerView: 1,
        breakpoints: {
            640: { slidesPerView: 1 }, // Mobile
            768: { slidesPerView: 1 }, // Tablet
            1024: { slidesPerView: 1 }, // Desktop
        },
    };

    return (
        <section className="w-full">

            <SwiperWrapper
                items={banners}
                config={bannerSwiperConfig}
                renderItem={(item) => (
                    <div
                        className="
              relative
              flex
              items-center
              justify-start
              px-6 sm:px-12 lg:px-20
              w-full
              h-[100vh]
            "
                        style={{
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/30"></div>

                        {/* Content */}
                        <div className="relative z-10 max-w-xl">
                            <h1
                                className="text-3xl sm:text-5xl font-bold mb-4"
                                style={{ color: "var(--blueDark)" }}
                            >
                                {item.title}
                            </h1>

                            <p className="text-gray-200 text-sm sm:text-lg mb-6 max-w-lg">
                                {item.subtitle}
                            </p>

                            <BtnOrange
                                btnName={item.button}
                                btnFunction={() => console.log(item.button)}
                            />
                        </div>
                    </div>
                )}
            />

        </section>
    );
}

export default HomeBanner;
