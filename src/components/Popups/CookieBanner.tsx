"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useCookieStore } from "@/stores/useCookieStore";

export default function CookieBanner() {
    const [initialCheckDone, setInitialCheckDone] = useState(false);
    const { showBanner, setShowBanner } = useCookieStore();

    useEffect(() => {
        const consent = Cookies.get("cookie_consent");
        if (!consent) {
            setShowBanner(true);
        }
        setInitialCheckDone(true);
    }, []);

    const acceptCookies = () => {
        Cookies.set("cookie_consent", "true", { expires: 365 });
        setShowBanner(false);
    };

    if (!showBanner || !initialCheckDone) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t p-4 shadow-lg z-50">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm">
                <div className="text-gray-800">
                    <strong>Diese Website verwendet Cookies</strong>
                    <p>
                        OrderYOYO möchte unsere eigenen und Drittanbieter-Cookies verwenden, um unsere Inhalte und Anzeigen gezielter zu gestalten...
                        Mehr darüber in unserer{" "}
                        <a href="/datenschutz" className="underline">
                            Datenschutzerklärung
                        </a>.
                    </p>
                </div>
                <div className="flex gap-2 mt-2 md:mt-0">
                    <button
                        onClick={() => alert("Einstellungen öffnen")}
                        className="border px-4 py-2 rounded text-sm"
                    >
                        Einstellungen verwalten
                    </button>
                    <button
                        onClick={acceptCookies}
                        className="bg-black text-white px-4 py-2 rounded text-sm"
                    >
                        Zustimmen
                    </button>
                </div>
            </div>
        </div>
    );
}
