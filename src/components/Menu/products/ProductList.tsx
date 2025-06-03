export default function ProductList() {
    type Product = {
        id: number;
        name: string;
        description?: string;
        price: string;
        label?: string;
    }

    type Section = {
        title: string;
        note?: string;
        items: Product[];
    };

    const sections : Section[] = [
        {
            title: "❤️ Die beliebtesten Produkte",
            items: [
                {
                    id: 1,
                    name: "Pizza Margherita",
                    description: "mit Tomaten, Käse",
                    price: "6,00 €",
                    label: "Beliebt"
                },
                {id: 4, name: "Pizza Salami", description: "mit Tomaten, Käse, Salami", price: "7,00 €"},
                {
                    id: 9,
                    name: "Pizza Tonno",
                    description: "mit Tomaten, Käse, Thunfisch, Zwiebeln",
                    price: "8,00 €"
                },
                {
                    id: 13,
                    name: "Pizza Pollo",
                    description: "mit Hähnchenbruststreifen, Paprika, Zwiebeln, Sauce Hollandaise",
                    price: "8,00 €"
                },
                {
                    id: 14,
                    name: "Pizza Rucola",
                    description: "mit Tomaten, Rucola, Parmesan, Balsamico-Creme",
                    price: "8,50 €"
                },
                {id: 15, name: "Pizza Hawaii", description: "mit Tomaten, Käse, Schinken, Ananas", price: "8,00 €"},
            ],
        },
        {
            title: "Salate",
            note: "Alle Salate werden mit einem Dressing Ihrer Wahl zubereitet. Zudem gibt es zu allen Salaten Pizzabrötchen",
            items: [
                {
                    id: 50,
                    name: "Salat Italia",
                    description: "Grüner Salat, Tomaten, Gurken, Zwiebeln, Oliven, Thunfisch, Ei, Schinken, Gouda",
                    price: "10,00 €"
                },
                {
                    id: 51,
                    name: "Salat Pollo",
                    description: "Grüner Salat, Tomaten, Gurken, Zwiebeln, Oliven, Mais, Hähnchenbruststreifen",
                    price: "12,00 €"
                },
                {
                    id: 52,
                    name: "Salat Capri",
                    description: "Grüner Salat, Tomaten, Gurken, Zwiebeln",
                    price: "8,00 €"
                },
                {
                    id: 53,
                    name: "Salat Contadina",
                    description: "Grüner Salat, Tomaten, Gurken, Zwiebeln, Thunfisch, Oliven, Peperoni, Fetakäse",
                    price: "10,00 €"
                },
                {
                    id: 54,
                    name: "Salat Thunfisch",
                    description: "Grüner Salat mit Tomaten, Gurken, Zwiebeln, Thunfisch",
                    price: "10,00 €"
                },
                {
                    id: 55,
                    name: "Döner Salat",
                    description: "Eisbergsalat, Tomaten, Gurken, Dönerfleisch, Zwiebeln, Mais, Dönersauce",
                    price: "12,00 €"
                },
            ],
        },
        {
            title: "Pizza",
            note: "Alle Pizzen werden aus Pizzateig mit Tomatensauce und Käse zubereitet.",
            items: [
                {
                    id: 1,
                    name: "Pizza Margherita",
                    description: "mit Tomaten, Käse",
                    price: "6,00 €",
                    label: "Beliebt"
                },
                {id: 2, name: "Pizza Cipolla", description: "mit Tomaten, Käse, Zwiebeln", price: "7,00 €"},
                {id: 3, name: "Pizza Paprika", description: "mit Tomaten, Käse, Paprika", price: "7,00 €"},
                {
                    id: 4,
                    name: "Pizza Salami",
                    description: "mit Tomaten, Käse, Salami",
                    price: "7,00 €",
                    label: "Beliebt"
                },
                {id: 5, name: "Pizza Funghi", description: "mit Tomaten, Käse, Champignons", price: "7,00 €"},
                {
                    id: 6,
                    name: "Pizza Napoli",
                    description: "mit Tomaten, Käse, Sardellen, Oliven, Kapern",
                    price: "8,00 €"
                },
                {
                    id: 7,
                    name: "Pizza Speciale",
                    description: "mit Tomaten, Käse, Schinken, Champignons",
                    price: "7,50 €"
                },
                {id: 8, name: "Pizza Prosciutto", description: "mit Tomaten, Käse, Schinken", price: "7,00 €"},
                {
                    id: 9,
                    name: "Pizza Tonno",
                    description: "mit Tomaten, Käse, Thunfisch, Zwiebeln",
                    price: "8,00 €",
                    label: "Beliebt"
                },
                {
                    id: 10,
                    name: "Pizza Vegetale",
                    description: "mit Tomaten, Käse, Schinken, Champignons, Peperoni, Paprika, Artischocken",
                    price: "8,00 €"
                },
                {
                    id: 11,
                    name: "Pizza Schinken Thunfisch",
                    description: "mit Tomaten, Käse, Schinken, Zwiebeln, Thunfisch",
                    price: "8,00 €"
                },
                {
                    id: 12,
                    name: "Pizza Brokkoli",
                    description: "mit Tomaten, Käse, Hähnchenbruststreifen, Brokkoli, Sauce Hollandaise",
                    price: "8,00 €"
                },
                {
                    id: 13,
                    name: "Pizza Pollo",
                    description: "mit Hähnchenbruststreifen, Paprika, Zwiebeln, Sauce Hollandaise",
                    price: "8,00 €",
                    label: "Beliebt"
                },
                {
                    id: 14,
                    name: "Pizza Rucola",
                    description: "mit Tomaten, Rucola, Parmesan, Balsamico-Creme",
                    price: "8,50 €",
                    label: "Beliebt"
                },
                {
                    id: 15,
                    name: "Pizza Hawaii",
                    description: "mit Tomaten, Käse, Schinken, Ananas",
                    price: "7,50 €",
                    label: "Beliebt"
                },
                {
                    id: 16,
                    name: "Pizza Mix",
                    description: "mit Tomaten, Käse, Schinken, Champignons, Salami",
                    price: "8,00 €",
                    label: "Beliebt"
                },
                {
                    id: 17,
                    name: "Pizza Gemüse",
                    description: "mit Tomaten, Käse, Schinken, Champignons, Paprika, Peperoni (scharf)",
                    price: "8,00 €"
                },
                {
                    id: 18,
                    name: "Pizza Gigante",
                    description: "mit Tomaten, Käse, Schinken, Salami, Champignons",
                    price: "12,00 €"
                },
                {id: 19, name: "Pizza Shrimps", description: "mit Shrimps, Knoblauch", price: "8,00 €"},
                {
                    id: 20,
                    name: "Pizza Tonno Mozzarella",
                    description: "mit Tomaten, Käse, Thunfisch, frischen Tomaten, Mozzarella",
                    price: "8,00 €"
                },
                {
                    id: 21,
                    name: "Pizza Frisch",
                    description: "mit frischen ungebacken Tomaten, Mozzarella, gemischtem Salat, Zwiebeln, Olio extra Vergine aus Apulien",
                    price: "8,00 €"
                },
                {
                    id: 22,
                    name: "Pizza Gorgonzola",
                    description: "mit Tomaten, Käse, Thunfisch, Peperoni, Zwiebeln, Gorgonzola",
                    price: "8,50 €"
                },
                {
                    id: 23,
                    name: "Pizza Spaghetti",
                    description: "mit Spaghetti, Bolognesesauce, Käse",
                    price: "8,00 €",
                    label: "Beliebt"
                },
                {
                    id: 24,
                    name: "Pizza Quattro Formaggi",
                    description: "mit Tomaten und vier Käsesorten",
                    price: "8,00 €"
                },
                {
                    id: 25,
                    name: "Pizza Spinat",
                    description: "mit Spinat, weißer Käse, Oliven und Knoblauch",
                    price: "8,00 €"
                },
                {
                    id: 26,
                    name: "Pizza Hollandaise",
                    description: "mit Schinken, Thunfisch, Peperoni, Zwiebeln, Sauce Hollandaise",
                    price: "8,00 €"
                },
                {
                    id: 27,
                    name: "Pizza Döner",
                    description: "mit Dönerfleisch, Zwiebeln, Dönersauce",
                    price: "8,00 €",
                    label: "Beliebt"
                },
                {
                    id: 28,
                    name: "Pizza Döner Spezial",
                    description: "mit Dönerfleisch, grünen Salat, Tomaten, Zwiebeln, Peperoni, Dönersauce",
                    price: "8,50 €",
                    label: "Beliebt"
                },
                {id: 29, name: "Pizza Spinaci", description: "mit Spinat, Knoblauch, Ei, Oliven", price: "8,00 €"},
                {
                    id: 30,
                    name: "Pizza Vegetaria",
                    description: "mit weißem Käse, Oliven, Tomaten, Peperoni, Zwiebeln",
                    price: "8,00 €"
                },
                {
                    id: 31,
                    name: "Pizza Mista",
                    description: "mit Schinken, Peperoni, Mais, Paprika, Champignons",
                    price: "8,00 €"
                },
                {
                    id: 32,
                    name: "Pizza Spicy",
                    description: "mit scharfer Salami, Paprika, Zwiebeln",
                    price: "8,00 €"
                },
                {
                    id: 33,
                    name: "Pizza Hollandaise Mix",
                    description: "mit Schinken, Salami, Champignons, Sauce Hollandaise",
                    price: "8,00 €"
                },
                {
                    id: 34,
                    name: "Pizza Artischocken",
                    description: "mit Paprika, Zwiebeln, Champignons, Artischocken",
                    price: "7,50 €",
                    label: "Vegetarian"
                },
                {
                    id: 35,
                    name: "Pizza Deluxe",
                    description: "mit Käse, Schinken, Zwiebeln, Mozzarella, Knoblauch",
                    price: "8,00 €"
                },
                {
                    id: 36,
                    name: "Pizza Mozzarella",
                    description: "mit Käse, Schinken, Zwiebeln, Mozzarella, Knoblauch",
                    price: "12,00 €"
                },
                {
                    id: 37,
                    name: "Pizza Primavera",
                    description: "mit Brokkoli, Mais, Champignons, Zwiebeln",
                    price: "8,00 €"
                },
            ]
        },
        {
            title: "Pasta",
            items: [
                {id: 100, name: "Pasta Bolognese", description: "mit Bolognesesauce, Parmesan", price: "9,50 €"},
                {
                    id: 101,
                    name: "Pasta Schinken Sahne",
                    description: "mit Sahnesauce, Schinken und Parmesan",
                    price: "9,50 €"
                },
                {id: 102, name: "Pasta Sahne", description: "Sahnesauce und Parmesan", price: "10,00 €"},
                {
                    id: 103,
                    name: "Pasta Bolognese II",
                    description: "mit Bolognesesauce und Parmesan",
                    price: "10,00 €"
                },
                {
                    id: 104,
                    name: "Pasta Überbacken",
                    description: "mit Bolognesesauce, Parmesan, Sahne, überbacken",
                    price: "11,00 €"
                },
                {
                    id: 105,
                    name: "Pasta Spezial",
                    description: "mit Bolognesesauce, Sahne, Schinken, Erbsen, Parmesan",
                    price: "10,00 €"
                },
                {
                    id: 106,
                    name: "Pasta Döner",
                    description: "Sauce Hollandaise, frische Champignons, Gouda, Dönerfleisch",
                    price: "12,00 €"
                },
            ]
        },
        {
            title: "Beilagen",
            items: [
                {
                    id: 200,
                    name: "Pizzabrötchen mit Kräuterbutter",
                    description: "dazu Kräuterbutter",
                    price: "5,00 €"
                },
                {
                    id: 201,
                    name: "Pizzabrötchen mit Käse & Knoblauch",
                    description: "mit Käse und Knoblauch",
                    price: "6,00 €"
                },
            ]
        },
        {
            title: "Alkoholfreie Getränke",
            items: [
                {id: 300, name: "Getränk 1", price: "2,50 €"},
                {id: 301, name: "Getränk 2", price: "2,50 €"},
                {id: 302, name: "Getränk 3", price: "2,50 €"},
                {id: 303, name: "Getränk 4", price: "2,50 €"},
                {id: 304, name: "Getränk 5", price: "3,50 €"},
                {id: 305, name: "Getränk 6", price: "3,50 €"},
                {id: 306, name: "Getränk 7", price: "3,50 €"},
                {id: 307, name: "Getränk 8", price: "3,50 €"},
                {id: 308, name: "Getränk 9", price: "2,00 €"},
                {id: 309, name: "Getränk 10", price: "2,00 €"},
            ]
        }
    ];

    return (
        <main className="w-full max-w-3xl px-4 scroll-smooth will-change-scroll overscroll-auto">
            {sections.map(section => (
                <div key={section.title} id={section.title.replace(/\s+/g, "-").toLowerCase()} className="mb-10">
                <h2 className="text-green-700 font-semibold text-xl mb-1">{section.title}</h2>
                    {section.note && <p className="text-sm text-gray-500 mb-4">{section.note}</p>}
                    {section.items.map(product => (
                        <div key={product.id}
                             className="border border-gray-200 rounded-md p-4 mb-3 hover:shadow-sm transition">
                            <div className="flex justify-between items-center">
                                <div className="flex items-start gap-2">
                                    <span className="text-gray-400 font-semibold min-w-[24px]">{product.id}</span>
                                    <div>
                                        <p className="text-green-800 font-semibold">{product.name}</p>
                                        {product.description && (
                                            <p className="text-gray-500 text-xs">{product.description}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="text-right">
                                    {product.label && (
                                        <span
                                            className="bg-yellow-100 text-yellow-700 text-xs font-medium px-2 py-0.5 rounded-full mr-2">
                                            {product.label}
                                        </span>
                                    )}
                                    <p className="text-red-700 font-bold">{product.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </main>
    );
}
