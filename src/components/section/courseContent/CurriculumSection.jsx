export default function CurriculumSection() {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-3 text-[var(--blueDark)]">
                Course Curriculum
            </h3>
            <ul className="space-y-2 text-gray-700">
                <li>▶ Introduction to the Course</li>
                <li>▶ Module 1: Basics</li>
                <li>▶ Module 2: Project Development</li>
                <li>▶ Final Assessment</li>
            </ul>
        </div>
    );
}
