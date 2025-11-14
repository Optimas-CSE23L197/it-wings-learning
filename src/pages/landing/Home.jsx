import React from 'react'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import TopCategories from '../../components/section/TopCategories'
import FeaturedCourses from '../../components/section/FeatureCourse'
import FeaturesSection from '../../components/section/FeatureSection'
import StudentFeedbackSection from '../../components/section/StudentFeedback'
import CTASection from '../../components/section/CTASection'
import HomeBanner from '../../components/section/Banner'

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