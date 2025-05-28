import Link from "next/link";

export default function Footer() {
    return(
      <footer className="bg-gray-100 text-center py-4">
          <div className="text-green-900 flex justify-center">
              <Link href={"/privacy-promise"} className="">
                Datenschutzerklärung
              </Link>
              <p> | </p>
              <Link href={"/terms-of-use"} className="">
                  Nutzungsbedingungen
              </Link>
              <p> | </p>
              <Link href={"/imprint"} className="">
                  Impressum
              </Link>
              <p> | </p>
              <Link href={"/cookie-policy"} className="">
                  Über cookies
              </Link>
              <p> | </p>

              {/*
                Popup!
              */}
              <Link href={"/src/components/static"} className="">
                  cookie Einstellungen
              </Link>
          </div>
      </footer>
    );
}