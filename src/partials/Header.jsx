import React, { useState } from "react";

import SearchModal from "../components/ModalSearch";
import Notifications from "../components/DropdownNotifications";
import Help from "../components/DropdownHelp";
import UserMenu from "../components/DropdownProfile";
import ThemeToggle from "../components/ThemeToggle";

function Header({ sidebarOpen, setSidebarOpen }) {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white dark:bg-[#182235] border-b border-slate-200 dark:border-slate-700 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          {/* Header: Left side */}
          <div className="w-1/4 flex items-center">
            {/* button */}
            <button
              className="text-slate-500 hover:text-slate-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={(e) => {
                e.stopPropagation();
                setSidebarOpen(!sidebarOpen);
              }}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
            <p className="text-md text-gray-800 font-thin">Payments </p>
            &nbsp; &nbsp; &nbsp;
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              className="w-3 h-3"
              viewBox="0 0 64 64"
              enable-background="new 0 0 64 64"
              xml:space="preserve"
            >
              <path
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-miterlimit="10"
                d="M53.92,10.081c12.107,12.105,12.107,31.732,0,43.838
	c-12.106,12.108-31.734,12.108-43.84,0c-12.107-12.105-12.107-31.732,0-43.838C22.186-2.027,41.813-2.027,53.92,10.081z"
              />
              <line
                stroke="#000000"
                stroke-width="2"
                stroke-miterlimit="10"
                x1="30"
                y1="43"
                x2="30"
                y2="47"
              />
              <path
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-miterlimit="10"
                d="M24,21c0-3,2-5,8-5c5,0,8,3,8,7s-6,7-6,7s-4,2-4,8v1
	"
              />
            </svg>
            &nbsp;
            <p className="text-xs text-gray-600 font-thin"> How it works</p>
          </div>

          {/* Header: mid side */}
          <div className="w-1/2 flex justify-center items-center">
            <div className="relative p-2 box-border w-3/4">
              <label htmlFor="table-search" className="sr-only">
                Search
              </label>
              <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="table-search-users"
                className="block p-2 pl-10 text-sm text-gray-500 border-none placeholder-gray-400 rounded-md w-full bg-gray-100 focus:ring-gray-500 focus:border-gray-500 box-border"
                placeholder="Search features, tutorials, etc."
              />
            </div>
          </div>

          {/* Header: Right side */}
          <div className="w-1/4 flex justify-end items-end space-x-3justify-end">
            <UserMenu align="right" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
