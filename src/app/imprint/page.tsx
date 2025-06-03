import Head from "next/head";
import React from "react";

const Imprint: React.FC = () => {
    return (
        <>
            <Head>
                <title>Impressum | Pizza Pasta House</title>
            </Head>

            <main style={styles.wrapper}>
                <h1 style={styles.title}>Impressum</h1>

                <div style={styles.grid}>
                    <div>
                        <SectionItem label="Inhaber" value="Bünyamin Yüksel" />
                        <SectionItem
                            label="Email"
                            value="gohuopbo@test.de"
                            link="mailto:gohuopbo@test.de"
                        />
                        <SectionItem label="Steuernummer" value="35152661670" />
                    </div>

                    <div>
                        <SectionItem label="Restaurant information" value="Pizza Pasta House" />
                        <SectionItem
                            label=""
                            value="Wedekindring 6, 33428 Harsewinkel"
                            icon="📍"
                        />
                        <SectionItem label="" value="05247 / 4054705" icon="📞" link="tel:052474054705" />
                    </div>
                </div>

                <div style={styles.disclaimer}>
                    <strong>Verbraucherinformationen gemäß Verordnung (EU) Nr. 524/2013:</strong>
                    <p>
                        Im Rahmen der Verordnung über Online-Streitbeilegung in Verbraucherangelegenheiten
                        steht unter{" "}
                        <a
                            href="https://ec.europa.eu/consumers/odr/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.link}
                        >
                            diesem Link
                        </a>{" "}
                        eine Online-Streitbeilegungsplattform der EU-Kommission zur Verfügung.
                    </p>
                </div>

            </main>
        </>
    );
};

export default Imprint;

const SectionItem: React.FC<{
    label: string;
    value: string;
    link?: string;
    icon?: string;
}> = ({ label, value, link, icon }) => (
    <div style={{ marginBottom: "1.2rem" }}>
        {label && <div style={styles.label}>{label}</div>}
        {link ? (
            <a href={link} style={styles.link}>
                {icon && <span style={styles.icon}>{icon}</span>}
                {value}
            </a>
        ) : (
            <div>
                {icon && <span style={styles.icon}>{icon}</span>}
                {value}
            </div>
        )}
    </div>
);

const styles: { [key: string]: React.CSSProperties } = {
    wrapper: {
        maxWidth: 960,
        margin: "0 auto",
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
        color: "#2b2b2b",

    },
    title: {
        fontSize: "2rem",
        color: "#2f7e32",
        marginBottom: "2rem",
    },
    grid: {
        display: "flex",
        gap: "4rem",
        flexWrap: "wrap",
        marginBottom: "2rem",
    },
    label: {
        fontWeight: "bold",
        color: "#2f7e32",
        marginBottom: "0.3rem",
    },
    link: {
        color: "#2f7e32",
        textDecoration: "none",
    },
    icon: {
        marginRight: "0.5rem",
    },
    disclaimer: {
        fontSize: "0.95rem",
        lineHeight: 1.6,
        color: "#2b2b2b",
        marginTop: "2rem",
    },
    footer: {
        marginTop: "3rem",
        fontSize: "0.8rem",
        color: "#888",
        textAlign: "center",
    },
};