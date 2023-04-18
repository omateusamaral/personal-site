"use client";
export default function Navbar() {
  return (
    <>
      <nav
        className="relative flex flex-wrap items-center justify-between px-2 py-3"
        style={{
          background:
            "linear-gradient(254deg, rgba(2,0,36,1) 0%, rgba(27,27,50,1) 30%, rgba(13,13,14,1) 100%)",
        }}
      >
        <div className="container px-4 mx-auto flex lg:flex-wrap items-start justify-between">
          <div className="w-full relative sm:flex justify-between lg:w-auto lg:static lg:block lg:justify-start hidden md:hidden">
            <a className="font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white text-xl">
              Mateus Amaral
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
