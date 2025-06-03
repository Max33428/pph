import Link from "next/link";

export default function LocationBox() {
    return (

        <section className="max-w-7xl mx-auto px-6 pb-12">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-sm text-gray-800 max-w-md">
                <h4 className="font-semibold text-green-800 mb-2">Pizza Pasta House</h4>
                <p className="flex items-center mb-1">
                    <span className="material-symbols-outlined mr-2 text-green-700">📍</span>
                    Wedekindring 6, 33428 Harsewinkel
                </p>
                <p className="flex items-center">
                    <span className="material-symbols-outlined mr-2 text-green-700">☎️</span>
                    05247/4054705
                </p>
            </div>
        </section>

    );
}