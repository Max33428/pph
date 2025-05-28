export default function Contact() {
    return(
        <main className="max-w-6xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-semibold text-green-800 mb-10">Pizza Pasta House</h1>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Öffnungszeiten */}
                <div>
                    <h2 className="text-lg font-semibold text-green-800 mb-4">Öffnungszeiten</h2>
                    <div className="grid grid-cols-3 gap-2 text-sm text-green-900 font-medium">
                        <div className="col-span-1 font-semibold">Montag</div>
                        <div>17:00 - 21:00</div>
                        <div>17:00 - 21:00</div>

                        <div className="col-span-1 font-semibold">Dienstag</div>
                        <div className="italic text-gray-500">Geschlossen</div>
                        <div className="italic text-gray-500">Geschlossen</div>

                        <div className="col-span-1 font-semibold">Mittwoch</div>
                        <div className="font-bold">17:00 - 21:00</div>
                        <div className="font-bold">17:00 - 21:00</div>

                        <div className="col-span-1 font-semibold">Donnerstag</div>
                        <div>17:00 - 21:00</div>
                        <div>17:00 - 21:00</div>

                        <div className="col-span-1 font-semibold">Freitag</div>
                        <div>
                            11:30 - 14:00<br />
                            17:00 - 21:00
                        </div>
                        <div>
                            11:30 - 14:00<br />
                            17:00 - 21:00
                        </div>

                        <div className="col-span-1 font-semibold">Samstag</div>
                        <div>17:00 - 21:00</div>
                        <div>17:00 - 21:00</div>

                        <div className="col-span-1 font-semibold">Sonntag</div>
                        <div>17:00 - 21:00</div>
                        <div>17:00 - 21:00</div>
                    </div>
                </div>

                {/* Adresse & Kontakt */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-lg font-semibold text-green-800 mb-2">Adresse</h2>
                        <div className="flex items-center space-x-4 bg-green-50 rounded-md px-3 py-2 w-fit">
                            <span className="text-green-700">📍</span>
                            <span>Wedekindring 6, 33428 Harsewinkel</span>
                            <span className="text-green-600">{'>'}</span>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold text-green-800 mb-2">Hast du Fragen?</h2>
                        <div className="flex items-center space-x-4 bg-green-50 rounded-md px-3 py-2 w-fit">
                            <span className="text-green-700">📞</span>
                            <span>05247 / 4054705</span>
                            <span className="text-green-600">{'>'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
