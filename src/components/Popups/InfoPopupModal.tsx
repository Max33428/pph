"use client";
import { useEffect, useState } from "react";

export default function PopupModal() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        // Öffnet das Modal direkt nach dem ersten Render
        setShow(true);
    }, []);

    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-green-900/70 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md text-center relative">
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    onClick={() => setShow(false)}
                >
                    &#x2715;
                </button>
                <h2 className="text-lg font-semibold text-green-700">Jetzt vorbestellen!</h2>
                <p className="mt-2 text-sm text-gray-700">
                    Leider hat unser Restaurant derzeit geschlossen, wir sind wieder verfügbar:
                </p>
                <div className="flex items-center justify-center gap-2 mt-2 text-green-600 font-medium">
                    <span className="material-symbols-outlined text-base">schedule</span>
                    <span>Heute um 17:00 Uhr</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                    Wir nehmen allerdings gerne deine Vorbestellung entgegen.
                </p>
                <button
                    onClick={() => setShow(false)}
                    className="mt-4 bg-red-700 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold"
                >
                    Schließen
                </button>
            </div>
        </div>
    );
}
