import React from 'react'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import TopCategories from '../../components/section/home/TopCategories'
import FeaturedCourses from '../../components/section/home/FeatureCourse'
import FeaturesSection from '../../components/section/home/FeatureSection'
import StudentFeedbackSection from '../../components/section/home/StudentFeedback'
import CTASection from '../../components/section/home/CTASection'
import HomeBanner from '../../components/section/home/Banner'

function Home() {
    return (
        <div>
            <Navbar />
            <HomeBanner />
            <TopCategories />
            <FeaturedCourses />
            <FeaturesSection />
            <CTASection />
            <StudentFeedbackSection />
            <Footer />
        </div>
    )
}

export default Home