"use client";
export default function Navbar() {
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-zinc-950 ">
        <div className="container px-4 mx-auto flex lg:flex-wrap items-start justify-between">
          <div className="w-full relative sm:flex justify-between lg:w-auto lg:static lg:block lg:justify-start hidden md:hidden">
            <a className="font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white text-xl">
              Mateus Amaral
            </a>
          </div>
          <div>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-white hover:opacity-75 cursor-pointer"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-white hover:opacity-75 cursor-pointer">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
