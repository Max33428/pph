"use client";

import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";

import {useState} from "react";
import LoginModal from "@/components/Popups/LoginModal";

export default function Header() {

    const pathname = usePathname();
    const isContact = pathname === "/contact";
    const [showLogin, setShowLogin] = useState(false);

    //rgb(52, 120, 42)

    return(
        <>
      <header className="bg-white border-b border-gray-300 px-6 py-3.5">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
              <Link href="/src/components/static">
                  <Image src={"/web-logo.png"}
                         alt={"Pizza-Pasta-House"}
                         width={65}
                         height={65}
                         className="hover:opacity-75"
                  />
              </Link>

              <nav className="group flex items-center space-x-3 font-semibold text-sm">
                  <Link href={"/src/components/static"} className={`${pathname === "/" ? "underline" : ""} group-hover:text-gray-400 hover:text-red-800`}>
                      Speisekarte anzeigen
                  </Link>
                  <Link href={"/contact"} className={`${isContact ? "underline" : ""} group-hover:text-gray-400 hover:text-red-800 `}>
                      Restaurant Info
                  </Link>

                  <button onClick={() => setShowLogin(true)} className="bg-gray-200 rounded-md px-4 py-2 hover:bg-gray-300">
                      Anmeldung
                  </button>

                  {/*<Link href="/login" className="bg-gray-200 rounded-md px-4 py-2 hover:bg-gray-300">*/}
                  {/*    Anmeldung*/}
                  {/*</Link>*/}
              </nav>
          </div>
      </header>
    {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
        </>
    );
}