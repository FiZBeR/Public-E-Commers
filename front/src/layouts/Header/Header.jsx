import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e6ebe8] bg-background-light/95 backdrop-blur-sm dark:bg-background-dark/95 dark:border-gray-800">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/*<!-- Logo -->*/}
        <div className="flex items-center gap-2">
          <span
            className="material-symbols-outlined text-primary"
            style={{fontSize: "32px"}}
          >
            yard
          </span>
          <h1 className="text-xl font-bold tracking-tight text-text-main dark:text-white">
            Wildflower Garden
          </h1>
        </div>
        {/*<!-- Desktop Nav -->*/}
        <nav className="hidden md:flex items-center gap-6">
          <a
            className="text-sm font-medium text-text-main hover:text-primary transition-colors dark:text-gray-200"
            href="#"
          >
            New Arrivals
          </a>
          {/*<!-- Leaf Separator -->*/}
          <span className="text-primary/60 dark:text-primary/40">
            <svg
              fill="currentColor"
              height="12"
              viewBox="0 0 24 24"
              width="12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l.66-.51c.48-.37 3.63-2.81 7.23-5.22C17.75 13.5 21.5 8.5 21.5 8.5L22 8l-.5-.5C21.5 7.5 17 8 17 8zM3.5 4.5l.5.5c.5.5 4.5 5 9.5 5C9.69 7.84 6.54 3.73 6.06 3.36L5.4 2.85 3.5 4.5z"></path>
            </svg>
          </span>
          <a
            className="text-sm font-medium text-text-main hover:text-primary transition-colors dark:text-gray-200"
            href="#"
          >
            Dresses
          </a>
          {/*<!-- Leaf Separator -->*/}
          <span className="text-primary/60 dark:text-primary/40">
            <svg
              fill="currentColor"
              height="12"
              viewBox="0 0 24 24"
              width="12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l.66-.51c.48-.37 3.63-2.81 7.23-5.22C17.75 13.5 21.5 8.5 21.5 8.5L22 8l-.5-.5C21.5 7.5 17 8 17 8zM3.5 4.5l.5.5c.5.5 4.5 5 9.5 5C9.69 7.84 6.54 3.73 6.06 3.36L5.4 2.85 3.5 4.5z"></path>
            </svg>
          </span>
          <a
            className="text-sm font-medium text-text-main hover:text-primary transition-colors dark:text-gray-200"
            href="#"
          >
            Accessories
          </a>
          {/*<!-- Leaf Separator -->*/}
          <span className="text-primary/60 dark:text-primary/40">
            <svg
              fill="currentColor"
              height="12"
              viewBox="0 0 24 24"
              width="12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l.66-.51c.48-.37 3.63-2.81 7.23-5.22C17.75 13.5 21.5 8.5 21.5 8.5L22 8l-.5-.5C21.5 7.5 17 8 17 8zM3.5 4.5l.5.5c.5.5 4.5 5 9.5 5C9.69 7.84 6.54 3.73 6.06 3.36L5.4 2.85 3.5 4.5z"></path>
            </svg>
          </span>
          <a
            className="text-sm font-medium text-text-main hover:text-primary transition-colors dark:text-gray-200"
            href="#"
          >
            Journal
          </a>
        </nav>
        {/*<!-- Icons -->*/}
        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center rounded-full p-2 text-text-main hover:bg-primary/20 dark:text-white dark:hover:bg-primary/20 transition-colors">
            <span className="material-symbols-outlined text-[24px]">search</span>
          </button>
          <button className="flex items-center justify-center rounded-full p-2 text-text-main hover:bg-primary/20 dark:text-white dark:hover:bg-primary/20 transition-colors">
            <span className="material-symbols-outlined text-[24px]">
              shopping_bag
            </span>
          </button>
          <button className="flex items-center justify-center rounded-full p-2 text-text-main hover:bg-primary/20 dark:text-white dark:hover:bg-primary/20 transition-colors">
            <span className="material-symbols-outlined text-[24px]">
              account_circle
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
