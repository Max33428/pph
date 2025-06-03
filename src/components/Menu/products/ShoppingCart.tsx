import Link from "next/link";

export default function ShoppingCart() {
    return (
        <aside className="w-1/4 bg-gray-50 p-4 rounded shadow-sm sticky top-4 h-fit">
            <div className="text-sm text-gray-600 mb-2">Deine Bestellung</div>
            <div className="text-gray-400 mb-4">Dein Warenkorb ist leer</div>

            <button className="bg-red-700 text-white py-2 px-4 rounded-md w-full hover:bg-red-800">
                Artikel hinzufügen
            </button>
        </aside>
    );
}