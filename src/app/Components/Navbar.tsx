"use client";

import { Trans, useTranslation } from "react-i18next";
import i18next from "i18next";
import Image from "next/image";
export default function Navbar() {
  const { t } = useTranslation();
  const changeLanguage = (language: string) => {
    i18next.changeLanguage(language);
  };
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-zinc-950 ">
      <div className="container px-4 mx-auto flex lg:flex-wrap items-start justify-between">
        <div className="w-full relative sm:flex justify-between lg:w-auto lg:static lg:block lg:justify-start hidden md:hidden">
          <a className="font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white text-xl">
            Mateus Amaral
          </a>
        </div>
        <div>
          <ul className="flex flex-row list-none">
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-white hover:opacity-75 cursor-pointer"
                href="/"
              >
                <Trans t={t}>Página inicial</Trans>
              </a>
            </li>
            <li className="nav-item px-1 justify-center flex">
              <button name="change-to-pt" onClick={() => changeLanguage("pt")}>
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/7826/7826359.png"
                  alt="flag-image"
                  width={20}
                  height={20}
                />
              </button>
            </li>
            <li className="nav-item px-1 justify-center flex">
              <button name="change-to-en" onClick={() => changeLanguage("en")}>
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/3909/3909383.png"
                  alt="flag-image"
                  width={20}
                  height={20}
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
