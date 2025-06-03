"use client";
import { useCookieStore } from "@/stores/useCookieStore";

export default function Footer() {
    const { setShowBanner } = useCookieStore();

    return (
        <footer className="bg-green-50 text-green-800 text-sm py-6 px-4 mt-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Linkleiste */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="flex gap-1 text-sm text-green-900">
                        {[
                            { href: "/contact", label: "Datenschutzerklärung" },
                            { href: "/terms-of-use", label: "Nutzungsbedingungen" },
                            { href: "/imprint", label: "Impressum" },
                            { href: "/cookie-policy", label: "Über Cookies" },
                        ].map((link, idx, arr) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`text-green-900 hover:text-red-800 ${idx < arr.length ? "after:content-['|'] after:ml-1" : ""}`}
                            >
                                {link.label}
                            </a>
                        ))}

                        {/* Spezieller Button für Cookie-Einstellungen */}
                        <button
                            onClick={() => setShowBanner(true)}
                            className="text-green-900 hover:text-red-800"
                        >
                            Cookie Einstellungen
                        </button>
                    </div>
                </div>

                {/* Copyright & Icons */}
                <div className="text-center text-green-700">
                    <div className="mb-2">© 2025 Pizza Pasta House</div>
                    <div className="flex justify-center space-x-2 text-xs text-green-700">
                        <span className="bg-green-200 rounded px-1 py-0.5">💳</span>
                        <span className="bg-green-200 rounded px-1 py-0.5">GPay</span>
                        <span className="bg-green-200 rounded px-1 py-0.5">PayPal</span>
                        <span className="bg-green-200 rounded px-1 py-0.5">EC</span>
                    </div>
                    <div className="mt-1 text-xs">Alle Preise inklusive MwSt</div>
                </div>
            </div>
        </footer>
    );
}
