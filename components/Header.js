import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 ">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Avenue-immo</span>
            <img className="h-auto w-10" src="/logo.png" alt="avenue-immo" />
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
