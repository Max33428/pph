import Link from "next/link";

export default function PizzeriaInfo() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-700">
            <div>
                <h3 className="font-semibold text-green-700 mb-2">Menü Pizza Pasta House</h3>
                <p>
                    Original italienische Pizza und Pasta in Harsewinkel schnell und einfach nach Hause liefern lassen.
                    Alle unsere Gerichte bei Pizza Pasta House werden aus hochwertigen Zutaten mit viel Liebe zubereitet,
                    damit du dir ein Stück Italien nach Hause holen kannst. Überzeuge dich selbst von den Nummer 1 Pizza
                    Pasta House, dem echte Pizza-Liebhaber vertrauen: Pizza Pasta House in Harsewinkel. Bestelle einfach
                    online über den Webshop oder mit unserer kostenlosen App und genieße italienische Spezialitäten der
                    Extraklasse ganz bequem in deinen eigenen vier Wänden.
                </p>
            </div>
            <div>
                <h3 className="font-semibold text-green-700 mb-2">Über Pizza Pasta House</h3>
                <p>
                    Bei Pizza Pasta House lieben wir Pizza und geben stets unser Bestes, um dir dein Lieblingsessen schnell
                    und lecker zuzubereiten. Dafür arbeiten wir mit frischen und hochwertigen Zutaten, um dich und unsere
                    anderen Kunden mit einem außergewöhnlichen kulinarischen Erlebnis zu verwöhnen. Wir bemühen uns immer
                    um eine schnelle Zubereitung, sodass du nicht lange auf dein Essen warten musst. Du kannst aber auch
                    gerne jederzeit für eine bestimmte Uhrzeit vorbestellen.
                </p>
            </div>
            <div>
                <h3 className="font-semibold text-green-700 mb-2">Restaurant Standort Pizza Pasta House</h3>
                <p>
                    Wenn du dich entschieden hast, was du essen möchtest, findest du uns unter der Adresse
                    Wedekindring 6 Harsewinkel, 33428. Wir freuen uns immer darauf, dich im Restaurant zu sehen,
                    wenn du dein Essen abholst! Solltest du einmal Zweifel an unserer Adresse oder unseren Öffnungszeiten
                    haben, denke daran, dass alle Informationen in unserer App zu finden sind.
                </p>
            </div>
        </section>
    );
}
