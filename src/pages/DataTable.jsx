import React, { useEffect, useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import { useNavigate } from "react-router-dom";

const DataTable = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");

  const iterationArray = Array.from({ length: 9 });
  const data = Array.from({ length: 10 });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const filterhoadata = (e) => {
    setSearch(e.target.value);
    paginate(1);
  };
  const years = ["January", "February", "March", "April", "May"];

  return (
    <>
      <div className="flex h-screen overflow-hidden bg-white">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden ">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <div className="page-wrapper px-4 sm:px-6 lg:px-8 pt-5">
            <div className="page-content">
              <div className="flex justify-between">
                <h6 className="mb-0 text-uppercase font-semibold">Overview</h6>
                <div>
                  <label className="sr-only">End Year:</label>
                  <select className="block p-1 pl-3 pr-8 text-sm text-gray-500 border border-gray-300 placeholder-gray-400 rounded-sm bg-gray-50 focus:ring-gray-500 focus:border-gray-500 box-border">
                    <option value="">Last Month</option>

                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                    {/* Add more options as needed */}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2">
                <div className="col">
                  <div className="bg-white rounded-lg shadow-md p-3">
                    <div className="p-2">
                      <a className="flex items-center" href="">
                        <div>
                          <p className="text-gray-500 text-xs p-2">
                            Online orders{" "}
                          </p>
                          <h4 className="text-gray-700 text-2xl font-semibold">
                            231
                          </h4>
                        </div>
                        <div className="text-green-500 ml-auto"></div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="bg-white rounded-lg shadow-md p-3">
                    <div className="p-2">
                      <a className="flex items-center" href="">
                        <div>
                          <p className="text-gray-500 text-xs p-2">
                            Amount recieved{" "}
                          </p>
                          <h4 className="text-gray-700 text-2xl font-semibold">
                            ₹23,92,312.19
                          </h4>
                        </div>
                        <div className="text-green-500 ml-auto"></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="page-wrapper px-4 sm:px-6 lg:px-8 pt-8">
            <div className="page-content">
              <div className="flex justify-between">
                <h6 className="text-uppercase font-semibold">
                  Transactions | This month
                </h6>
              </div>
            </div>
          </div>

          <div className="relative shadow-md sm:rounded-lg p-3 pt-1 m-8">
            <div className="flex flex-wrap items-center justify-between py-4 px-4 bg-white dark:bg-gray-800 rounded-tl-lg rounded-tr-lg">
              <div className="relative p-2 box-border">
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
                  className="block p-2 pl-10 text-sm text-gray-500 border border-gray-300 placeholder-gray-400 rounded-md w-full bg-gray-50 focus:ring-gray-500 focus:border-gray-500 box-border"
                  placeholder="Search by order ID..."
                  value={search}
                  onChange={filterhoadata}
                />
              </div>
              <div className="flex">
                <div className="relative p-2">
                  <div className="block p-2 text-sm text-gray-500 border border-gray-300 placeholder-gray-400 rounded-lg w-full bg-gray-50 focus:ring-gray-500 focus:border-gray-500 box-border flex justify-center items-center">
                    Sort &nbsp;
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="#808080"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.293 4.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L8 7.414V19a1 1 0 1 1-2 0V7.414L3.707 9.707a1 1 0 0 1-1.414-1.414l4-4zM16 16.586V5a1 1 0 1 1 2 0v11.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L16 16.586z"
                        fill="#808080"
                      />
                    </svg>
                  </div>
                </div>
                <div className="relative p-2">
                  <div className="block p-2 text-sm text-gray-500 border border-gray-300 placeholder-gray-400 rounded-lg w-full bg-gray-50 focus:ring-gray-500 focus:border-gray-500 box-border flex">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 15 15"
                      fill="#808080"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.50005 1.04999C7.74858 1.04999 7.95005 1.25146 7.95005 1.49999V8.41359L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.994 6.35753 10.994 6.64245 10.8182 6.81819L7.81825 9.81819C7.64251 9.99392 7.35759 9.99392 7.18185 9.81819L4.18185 6.81819C4.00611 6.64245 4.00611 6.35753 4.18185 6.18179C4.35759 6.00605 4.64251 6.00605 4.81825 6.18179L7.05005 8.41359V1.49999C7.05005 1.25146 7.25152 1.04999 7.50005 1.04999ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z"
                        fill="#808080"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* table */}
            <div className="w-full text-sm text-left text-gray-500 dark:text-gray-400 overflow-x-auto py-4 px-4">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-lg">
                <thead className=" text-sm font-thin text-gray-600 bg-gray-100">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 flex items-center justify-start"
                    >
                      Order ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <div className="flex justify-end items-center">
                        Order date &nbsp;
                        <svg
                          fill="#000000"
                          className="w-3.5 h-3.5"
                          viewBox="-6.5 0 32 32"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>dropdown</title>
                          <path d="M18.813 11.406l-7.906 9.906c-0.75 0.906-1.906 0.906-2.625 0l-7.906-9.906c-0.75-0.938-0.375-1.656 0.781-1.656h16.875c1.188 0 1.531 0.719 0.781 1.656z"></path>
                        </svg>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <div className="flex justify-end items-center">
                        Order amount
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 flex items-center justify-end"
                    >
                      Transaction fee &nbsp;
                      <svg
                        className="w-3.5 h-3.5"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.568 1.031A6.8 6.8 0 0 1 12.76 3.05a7.06 7.06 0 0 1 .46 9.39 6.85 6.85 0 0 1-8.58 1.74 7 7 0 0 1-3.12-3.5 7.12 7.12 0 0 1-.23-4.71 7 7 0 0 1 2.77-3.79 6.8 6.8 0 0 1 4.508-1.149zM9.04 13.88a5.89 5.89 0 0 0 3.41-2.07 6.07 6.07 0 0 0-.4-8.06 5.82 5.82 0 0 0-7.43-.74 6.06 6.06 0 0 0 .5 10.29 5.81 5.81 0 0 0 3.92.58zM7.375 6h1.25V5h-1.25v1zm1.25 1v4h-1.25V7h1.25z"
                        />
                      </svg>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {data && data.length > 0
                    ? data
                        .slice(indexOfFirstPost, indexOfLastPost)
                        .map((_, index) => (
                          <tr
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            key={index}
                          >
                            <td className="px-6 py-4 uppercase text-blue-500 text-bold">
                              #281209
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex justify-end items-center">
                                7 July, 2023
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex justify-end items-center">
                                ₹1,278.23
                              </div>
                            </td>
                            <td className="px-6 py-4 flex items-center justify-end">
                              ₹22
                            </td>
                          </tr>
                        ))
                    : null}
                </tbody>
              </table>
            </div>
            {/* table */}

            {/* pagination */}
            <div
              className="flex justify-center p-2 bg-white dark:bg-gray-800 rounded-bl-lg rounded-br-lg"
              id="flextorow"
            >
              <nav aria-label="Page navigation example">
                <ul class="flex items-center -space-x-px h-8 text-sm">
                  <li>
                    <a
                      href="#"
                      class="flex items-center justify-center px-3 h-8 text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-700"
                    >
                      <span class="sr-only">Previous</span>
                      <svg
                        class="w-2.5 h-2.5 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 1 1 5l4 4"
                        />
                      </svg>
                      <p>&nbsp; Previous</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="z-10 m-1 flex items-center justify-center px-3 h-8 leading-tight text-gray-600 bg-white hover:bg-gray-100 hover:text-gray-700"
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="z-10 flex items-center justify-center px-3 h-8 leading-tight text-gray-600 bg-white hover:bg-gray-100 hover:text-gray-700"
                    >
                      ...
                    </a>
                  </li>
                  {iterationArray.map((_, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        aria-current="page"
                        className={`z-10 flex items-center justify-center px-2 h-8 leading-tight hover:bg-gray-100 hover:text-gray-700 ${
                          index === 0
                            ? "text-white bg-blue-700 rounded"
                            : "text-gray-600 bg-white "
                        }`}
                      >
                        1{index}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="#"
                      class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <p>Next &nbsp;</p>
                      <span class="sr-only">Next</span>
                      <svg
                        class="w-2.5 h-2.5 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 9 4-4-4-4"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            {/* pagination */}
          </div>
        </div>
      </div>
    </>
  );
};

export default DataTable;
