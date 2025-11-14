export default function ReviewsSection({ review }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Student Reviews</h3>
            <p>{review}</p>
        </div>
    );
}
