export default function OverviewSection({ introduction }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm leading-relaxed">
            <p>
                {introduction}
            </p>
        </div>
    );
}
