import { useState } from "react";
import { X } from "lucide-react";

export default function FeedbackModal({ onClose }: { onClose: () => void }) {
    const [rating, setRating] = useState(0);
    const [feedbackType, setFeedbackType] = useState("service");
    const [text, setText] = useState("");

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-xl w-full max-w-md p-6 shadow-lg relative">
                <button
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                    onClick={onClose}
                >
                    <X />
                </button>

                <h2 className="text-lg font-semibold mb-4">Feedback</h2>

                <label className="block mb-2 text-sm text-gray-600">Wie ist Deine Bewertung?</label>
                <div className="flex mb-4 space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <span
                            key={i}
                            className={`cursor-pointer text-2xl ${
                                i <= rating ? "text-pink-500" : "text-gray-300"
                            }`}
                            onClick={() => setRating(i)}
                        >
              ★
            </span>
                    ))}
                </div>

                <div className="flex items-center mb-4 space-x-4 text-sm">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="feedbackType"
                            value="service"
                            checked={feedbackType === "service"}
                            onChange={() => setFeedbackType("service")}
                            className="mr-2"
                        />
                        Service-Feedback
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="feedbackType"
                            value="technical"
                            checked={feedbackType === "technical"}
                            onChange={() => setFeedbackType("technical")}
                            className="mr-2"
                        />
                        Technischer Fehler
                    </label>
                </div>

                <textarea
                    placeholder="Gib uns Dein Feedback ..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full h-24 p-2 border border-gray-300 rounded mb-4 resize-none"
                />

                <button
                    onClick={() => {
                        // Hier kannst du die Feedback-Logik implementieren
                        console.log({ rating, feedbackType, text });
                        onClose();
                    }}
                    className="w-full bg-red-700 hover:bg-red-800 text-white py-2 rounded"
                >
                    Einreichen
                </button>
            </div>
        </div>
    );
}
