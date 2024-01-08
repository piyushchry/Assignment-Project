import React, { useState, useRef, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Transition from "../utils/Transition";
import { useNavigate } from "react-router-dom";
import spea from "../images/spea.png";
function DropdownProfile({ align }) {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative inline-flex">
      <div className="flex">
        <div className="bg-gray-200 p-2 m-1 rounded-full cursor-pointer">
          <img src={spea} alt="logo" className="w-5 h-5 rounded" />
        </div>

        <div className="bg-gray-200 p-2 m-1 rounded-full cursor-pointer">
          <svg
            fill="#000000"
            className="w-5 h-5"
            viewBox="-6.5 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>dropdown</title>
            <path d="M18.813 11.406l-7.906 9.906c-0.75 0.906-1.906 0.906-2.625 0l-7.906-9.906c-0.75-0.938-0.375-1.656 0.781-1.656h16.875c1.188 0 1.531 0.719 0.781 1.656z"></path>
          </svg>
          
        </div>
      </div>
    </div>
  );
}

export default DropdownProfile;
