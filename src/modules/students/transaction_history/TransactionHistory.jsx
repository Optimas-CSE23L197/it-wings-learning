import React from "react";

function TransactionHistory({ transactions = [] }) {
    const hasTransactions = transactions.length > 0;

    return (
        <div className="w-full">

            {/* TITLE */}
            <h2
                className="text-2xl font-bold mb-6"
                style={{ color: "var(--blueDark)" }}
            >
                Transaction History
            </h2>

            {/* IF NO TRANSACTIONS */}
            {!hasTransactions && (
                <div className="bg-white p-6 rounded-xl shadow text-center">
                    <p className="text-gray-600 text-lg">No transactions yet.</p>
                </div>
            )}

            {/* TRANSACTION TABLE */}
            {hasTransactions && (
                <div className="overflow-x-auto bg-white rounded-xl shadow">
                    <table className="min-w-full text-left">
                        <thead>
                            <tr className="bg-[var(--blueDark)] text-white">
                                <th className="py-3 px-4 text-sm font-semibold">#ID</th>
                                <th className="py-3 px-4 text-sm font-semibold">Course Name</th>
                                <th className="py-3 px-4 text-sm font-semibold">Amount</th>
                                <th className="py-3 px-4 text-sm font-semibold">Payment Method</th>
                                <th className="py-3 px-4 text-sm font-semibold">Purchase Date</th>
                                <th className="py-3 px-4 text-sm font-semibold">Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {transactions.map((t, i) => (
                                <tr
                                    key={i}
                                    className="border-b hover:bg-gray-100 transition"
                                >
                                    <td className="py-3 px-4 text-gray-700 text-sm">{t.id}</td>
                                    <td className="py-3 px-4 text-gray-700 text-sm">{t.courseName}</td>
                                    <td className="py-3 px-4 text-gray-700 text-sm">${t.amount}</td>
                                    <td className="py-3 px-4 text-gray-700 text-sm">{t.method}</td>
                                    <td className="py-3 px-4 text-gray-700 text-sm">{t.date}</td>

                                    <td className="py-3 px-4">
                                        <span
                                            className={`px-3 py-1 text-xs font-semibold rounded-full 
                                                ${t.status === "Completed"
                                                    ? "bg-green-100 text-green-700"
                                                    : t.status === "Pending"
                                                        ? "bg-yellow-100 text-yellow-700"
                                                        : "bg-red-100 text-red-700"
                                                }
                                            `}
                                        >
                                            {t.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

        </div>
    );
}

export default TransactionHistory;
