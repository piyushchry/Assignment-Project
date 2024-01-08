import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../images/logo.jpg";
import home from "../images/home.png";
import ord from "../images/ord.png";
import Appear from "../images/appear.png";
import prod from "../images/prod.png";
import del from "../images/del.png";
import mar from "../images/mar.png";
import analy from "../images/analy.png";
import pay from "../images/pay.png";
import tool from "../images/tool.png";
import dis from "../images/dis.png";
import audi from "../images/audi.png";
import Plugs from "../images/plugs.png";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-50 lg:w-10 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-5 pr-3 sm:px-2 ">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>

          <NavLink end to="/dashboard" className="block">
            <div className="flex">
              {/* Logo */}
              <div className="flex justify-center items-center">
                <img
                  src={Logo}
                  alt="logo"
                  width="40"
                  height="40"
                  className="rounded"
                />
              </div>
              {sidebarExpanded ? (
                <div className="p-2 flex flex-col">
                  <p className="text-md text-white">Nishyan</p>
                  <p className="text-sm text-gray-300 underline font-thin">
                    Visit store
                  </p>
                </div>
              ) : null}
            </div>
          </NavLink>

          <div className="flex justify-center items-center">
            <svg
              class="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 8"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
              />
            </svg>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <ul className="">
              {/* Dashboard*/}

              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("society") && "bg-slate-900"
                }`}
              >
                <NavLink
                  end
                  to="/datatable11"
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes("society")
                      ? "hover:text-slate-200"
                      : "hover:text-white"
                  }`}
                >
                  <div className="flex items-center">
                    <img src={home} alt="logo" className="w-6 h-6 rounded" />
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Home
                    </span>
                  </div>
                </NavLink>
              </li>

              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("society") && "bg-slate-900"
                }`}
              >
                <NavLink
                  end
                  to="/datatable12"
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes("society")
                      ? "hover:text-slate-200"
                      : "hover:text-white"
                  }`}
                >
                  <div className="flex items-center">
                    <img src={ord} alt="logo" className="w-6 h-6 rounded" />
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Orders
                    </span>
                  </div>
                </NavLink>
              </li>

              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("society") && "bg-slate-900"
                }`}
              >
                <NavLink
                  end
                  to="/datatable13"
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes("society")
                      ? "hover:text-slate-200"
                      : "hover:text-white"
                  }`}
                >
                  <div className="flex items-center">
                    <img src={prod} alt="logo" className="w-6 h-6 rounded" />
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Products
                    </span>
                  </div>
                </NavLink>
              </li>

              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("society") && "bg-slate-900"
                }`}
              >
                <NavLink
                  end
                  to="/datatable11"
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes("society")
                      ? "hover:text-slate-200"
                      : "hover:text-white"
                  }`}
                >
                  <div className="flex items-center">
                    <img src={del} alt="logo" className="w-6 h-6 rounded" />
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Delivery
                    </span>
                  </div>
                </NavLink>
              </li>

              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("society") && "bg-slate-900"
                }`}
              >
                <NavLink
                  end
                  to="/datatable11"
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes("society")
                      ? "hover:text-slate-200"
                      : "hover:text-white"
                  }`}
                >
                  <div className="flex items-center">
                    <img src={mar} alt="logo" className="w-6 h-6 rounded" />
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Marketing
                    </span>
                  </div>
                </NavLink>
              </li>

              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("society") && "bg-slate-900"
                }`}
              >
                <NavLink
                  end
                  to="/datatable11"
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes("society")
                      ? "hover:text-slate-200"
                      : "hover:text-white"
                  }`}
                >
                  <div className="flex items-center">
                    <img src={analy} alt="logo" className="w-6 h-6 rounded" />
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Analytics
                    </span>
                  </div>
                </NavLink>
              </li>

              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 bg-gray-700
                }`}
              >
                <NavLink
                  end
                  to="/"
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes("/")
                      ? "hover:text-slate-200"
                      : "hover:text-white"
                  }`}
                >
                  <div className="flex items-center">
                    <img src={pay} alt="logo" className="w-6 h-6 rounded" />
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Payments
                    </span>
                  </div>
                </NavLink>
              </li>

              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("society") && "bg-slate-900"
                }`}
              >
                <NavLink
                  end
                  to="/datatable22"
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes("society")
                      ? "hover:text-slate-200"
                      : "hover:text-white"
                  }`}
                >
                  <div className="flex items-center">
                    <img src={tool} alt="logo" className="w-6 h-6 rounded" />
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Tools
                    </span>
                  </div>
                </NavLink>
              </li>

              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("society") && "bg-slate-900"
                }`}
              >
                <NavLink
                  end
                  to="/datatable"
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes("society")
                      ? "hover:text-slate-200"
                      : "hover:text-white"
                  }`}
                >
                  <div className="flex items-center">
                    <img src={dis} alt="logo" className="w-6 h-6 rounded" />
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Discounts
                    </span>
                  </div>
                </NavLink>
              </li>

              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("society") && "bg-slate-900"
                }`}
              >
                <NavLink
                  end
                  to="/datatable"
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes("society")
                      ? "hover:text-slate-200"
                      : "hover:text-white"
                  }`}
                >
                  <div className="flex items-center">
                    <img src={audi} alt="logo" className="w-6 h-6 rounded" />
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Audience
                    </span>
                  </div>
                </NavLink>
              </li>

              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("society") && "bg-slate-900"
                }`}
              >
                <NavLink
                  end
                  to="/datatable11"
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes("society")
                      ? "hover:text-slate-200"
                      : "hover:text-white"
                  }`}
                >
                  <div className="flex items-center">
                    <img src={Appear} alt="logo" className="w-6 h-6 rounded" />
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Appearance
                    </span>
                  </div>
                </NavLink>
              </li>

              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("society") && "bg-slate-900"
                }`}
              >
                <NavLink
                  end
                  to="/datatable11"
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes("society")
                      ? "hover:text-slate-200"
                      : "hover:text-white"
                  }`}
                >
                  <div className="flex items-center">
                    <img src={Plugs} alt="logo" className="w-6 h-6 rounded" />
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Plugins
                    </span>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-3 justify-end mt-auto">
          {/* Pages group */}
          <div>
            <ul className="">
              {/* Dashboard*/}
              <li
                className={`px-3 py-2 rounded-md mb-0.5 last:mb-0 ${
                  pathname.includes("/") && "bg-gray-700"
                }`}
              >
                <NavLink
                  end
                  to="/datatable"
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes("/")
                      ? "hover:text-slate-200"
                      : "hover:text-white"
                  }`}
                >
                  <div className="flex items-center">
                    <div className=" bg-gray-600 rounded p-2">
                      <svg
                        fill="#FFFFFF"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Wallet">
                          <g>
                            <path d="M19.435,4.065H4.565a2.5,2.5,0,0,0-2.5,2.5v10.87a2.5,2.5,0,0,0,2.5,2.5h14.87a2.5,2.5,0,0,0,2.5-2.5V6.565A2.5,2.5,0,0,0,19.435,4.065Zm1.5,9.93h-6.42a2,2,0,0,1,0-4h6.42Zm-6.42-5a3,3,0,0,0,0,6h6.42v2.44a1.5,1.5,0,0,1-1.5,1.5H4.565a1.5,1.5,0,0,1-1.5-1.5V6.565a1.5,1.5,0,0,1,1.5-1.5h14.87a1.5,1.5,0,0,1,1.5,1.5v2.43Z" />
                            <circle cx="14.519" cy="11.996" r="1" />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-medium ml-3 text-gray-300">
                        Available credits
                      </span>
                      <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                        222.10
                      </span>
                    </div>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
