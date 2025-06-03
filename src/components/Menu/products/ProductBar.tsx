export default function ProductBar() {
    return (
        <aside className="w-1/5 sticky top-4 h-fit">
            <ul className="text-sm space-y-2 font-semibold">
                <li><a href="#❤️-die-beliebtesten-produkte" className="text-red-700 hover:underline">❤️ Die beliebtesten Produkte</a></li>
                <li><a href="#salate" className="text-green-900 hover:underline">Salate</a></li>
                <li><a href="#pizza" className="text-green-900 hover:underline">Pizza</a></li>
                <li><a href="#pasta" className="text-green-900 hover:underline">Pasta</a></li>
                <li><a href="#beilagen" className="text-green-900 hover:underline">Beilagen</a></li>
                <li><a href="#alkoholfreie-getränke" className="text-green-900 hover:underline">Alkoholfreie Getränke</a></li>
            </ul>
        </aside>
    );
}
