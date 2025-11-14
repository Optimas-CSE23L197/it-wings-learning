import React from 'react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import CourseHeader from '../../components/section/courseContent/CourseHeader';
import TabsContainer from '../../components/layout/TabContainer';
import CommentsSection from '../../components/section/courseContent/CommentSection';
import CourseSideCard from '../../components/section/courseContent/CourseSideCard';

import bannerImg from "../../assets/images/home/banner-2.jpg";

function CourseContent() {
    return (
        <div className="w-full overflow-x-hidden">
            <Navbar />
            <CourseHeader />

            {/* MAIN CONTENT WRAPPER */}
            <div
                className="
                flex flex-col lg:flex-row 
                gap-10 
                max-w-7xl mx-auto 
                px-4 
                py-12
            "
            >
                {/* LEFT CONTENT */}
                <div className="flex-1 w-full">
                    <TabsContainer />
                    <CommentsSection />
                </div>

                {/* RIGHT SIDEBAR */}
                <div className="w-full lg:w-[350px]">
                    <CourseSideCard
                        image={bannerImg}
                        oldPrice="59.00"
                        newPrice="49.00"
                    />
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default CourseContent;
