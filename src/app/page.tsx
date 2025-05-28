import Image from "next/image";
import Link from "next/link";
import PopopModal from "@/components/Popups/InfoPopupModal";

export default function Home() {
    return (
        <>
            <PopopModal/>
        <section className="relative rounded-xl overflow-hidden max-w-7xl mx-auto my-4 shadow-lg">
            {/* Hintergrundbild */}
            <Image
                src="/pizza-background.png"
                alt="Pizza Pasta House"
                width={1200}
                height={400}
                className="w-full h-103 object-cover"
            />

            {/* Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-green-700/90 to-transparent text-white  px-6 pb-6">
                <h1 className="text-xl font-bold absolute bottom-20">Pizza Pasta House</h1>
                <p className="text-sm absolute bottom-15">Wedekindring 6, 33428 Harsewinkel</p>

                {/* Öffnungszeiten und Lieferzeit */}
                <div className="absolute bottom-5 flex items-center space-x-6 mt-2 text-sm">
                    <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-base">schedule</span>
                        <span>Offen für Lieferung 17:00 - 21:00</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-base">pedal_bike</span>
                        <span>Lieferzeit 40 min</span>
                    </div>
                </div>

                {/* Button */}
                <div className=" absolute bottom-5 right-5 mt-4 text-right">
                    <Link
                        href="/"
                        className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 text-sm font-semibold"
                    >
                        Speisekarte anzeigen
                    </Link>
                </div>
            </div>
        </section>
        </>
    );
}
