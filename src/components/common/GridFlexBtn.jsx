import { LayoutGrid, List } from "lucide-react";
import React, { useState } from "react";

const LAYOUT = {
    GRID: "grid",
    FLEX: "flex",
};

function GridFlexBtn({ value, onChange }) {
    const [internalLayout, setInternalLayout] = useState(LAYOUT.GRID);

    const layout = value ?? internalLayout;

    const handleChange = (type) => {
        if (!value) setInternalLayout(type); // only update local state if uncontrolled
        onChange?.(type);
    };

    const baseBtn =
        "flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300";
    const active = "bg-[var(--accent)] text-white scale-105 shadow";
    const inactive = "text-gray-500 hover:bg-gray-200";

    return (
        <div className="flex items-center gap-3 bg-gray-100 rounded-full p-2 shadow-sm border border-gray-200">
            <button
                aria-label="Grid layout"
                aria-pressed={layout === LAYOUT.GRID}
                onClick={() => handleChange(LAYOUT.GRID)}
                className={`${baseBtn} ${layout === LAYOUT.GRID ? active : inactive}`}
            >
                <LayoutGrid size={20} />
            </button>

            <button
                aria-label="List layout"
                aria-pressed={layout === LAYOUT.FLEX}
                onClick={() => handleChange(LAYOUT.FLEX)}
                className={`${baseBtn} ${layout === LAYOUT.FLEX ? active : inactive}`}
            >
                <List size={20} />
            </button>
        </div>
    );
}

export default GridFlexBtn;
