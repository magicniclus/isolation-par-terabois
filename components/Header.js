import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 ">
          <a href="/" className="">
            <span className="sr-only">Avenue-immo</span>
            <img className="w-auto h-14" src="/logo.png" alt="avenue-immo" />
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm leading-6 text-gray-700">
            Se connecter <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
