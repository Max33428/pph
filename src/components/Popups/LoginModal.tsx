export default function LoginModal({ onClose }: { onClose: () => void }) {
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500">
                    ✕
                </button>
                <h2 className="text-lg font-semibold text-green-700 mb-4">Anmeldung</h2>

                <form className="space-y-4">
                    <input type="email" placeholder="deine@email.de" className="w-full border rounded px-3 py-2" required />
                    <input type="password" placeholder="Dein Passwort" className="w-full border rounded px-3 py-2" required />

                    <div className="flex items-center justify-between text-sm">
                        <label><input type="checkbox" /> Eingeloggt bleiben</label>
                        <a href="#" className="text-green-700 underline">Passwort vergessen?</a>
                    </div>

                    <button type="submit" className="w-full bg-red-700 text-white py-2 rounded">
                        Anmeldung
                    </button>
                </form>

                <div className="text-center mt-4 text-sm">
                    Du hast kein Konto? <a href="#" className="text-green-700 underline">Benutzerkonto erstellen</a>
                </div>

                <div className="mt-6 flex justify-between gap-2">
                    <button className="bg-black text-white w-1/2 py-2 rounded"> Weiter mit Apple</button>
                    <button className="border w-1/2 py-2 rounded">G Weiter mit Google</button>
                </div>
            </div>
        </div>
    );
}