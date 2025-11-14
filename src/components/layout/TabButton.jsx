import React from "react";

function TabButton({ label, active, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-md text-sm font-medium transition
                ${active
                    ? "bg-[var(--accent)] text-white"
                    : "text-gray-600 hover:text-[var(--accent)]"
                }
            `}
        >
            {label}
        </button>
    );
}

export default TabButton;
