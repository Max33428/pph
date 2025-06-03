export default function CookiePolicy() {
    return (
        <main className="min-h-screen bg-white px-4 py-10 text-sm text-green-900">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-xl font-semibold mb-6">Cookie Richtlinie</h1>
                <table className="w-full border border-green-300 text-left text-sm">
                    <thead className="bg-green-50 text-green-800 font-semibold">
                    <tr>
                        <th className="border border-green-300 p-2">Anbieter</th>
                        <th className="border border-green-300 p-2">Cookie Kategorie</th>
                        <th className="border border-green-300 p-2">Cookie Name</th>
                        <th className="border border-green-300 p-2">Standard Verfalls Zeit</th>
                        <th className="border border-green-300 p-2">Beschreibung</th>
                    </tr>
                    </thead>
                    <tbody>
                    {[
                        {
                            provider: "Google Analytics",
                            category: "Statistik",
                            name: "_ga",
                            duration: "2 Jahre",
                            description: "Dient zur Unterscheidung von Benutzern.",
                        },
                        {
                            provider: "Google Analytics",
                            category: "Statistik",
                            name: "_gid",
                            duration: "24 Stunden",
                            description: "Dient zur Unterscheidung von Benutzern.",
                        },
                        {
                            provider: "Google Analytics",
                            category: "Statistik",
                            name: "_ga_",
                            duration: "2 Jahre",
                            description: "Wird verwendet, um den Sitzungsstatus zu erhalten.",
                        },
                        {
                            provider: "Google Analytics",
                            category: "Statistik",
                            name: "_gac_gb_",
                            duration: "90 Tage",
                            description:
                                "Enthält kampagnenbezogene Informationen. Wenn Sie Ihre Google Analytics- und Google Ads-Konten miteinander verknüpft haben, wird dieses Cookie von den Google Ads-Website-Conversion-Tags gelesen.",
                        },
                        {
                            provider: "Facebook",
                            category: "Marketing",
                            name: "_fbp",
                            duration: "3 Monate",
                            description:
                                "Wird für Marketingzwecke von Facebook verwendet. Wenn das Pixel installiert ist, wird eine eindeutige Kennung gespeichert.",
                        },
                        {
                            provider: "Bing",
                            category: "Marketing",
                            name: "MUID",
                            duration: "1 Jahr",
                            description:
                                "Identifiziert einzelne Webbrowser, um Werbung und Website-Analysen zu ermöglichen.",
                        },
                    ].map((row, index) => (
                        <tr key={index}>
                            <td className="border border-green-300 p-2 font-semibold">{row.provider}</td>
                            <td className="border border-green-300 p-2">{row.category}</td>
                            <td className="border border-green-300 p-2">{row.name}</td>
                            <td className="border border-green-300 p-2">{row.duration}</td>
                            <td className="border border-green-300 p-2">{row.description}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
}
