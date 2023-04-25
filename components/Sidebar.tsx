import React, { useState } from 'react';
import { FaTwitter } from 'react-icons/fa';
import {
  AiOutlineHome,
  AiOutlineBell,
  AiOutlineMail,
  AiOutlineProfile,
  AiOutlineMore,
} from 'react-icons/ai';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Navbar icon */}
      <div onClick={handleToggle}>
        {/* Insert icon here */}
      </div>

      {/* Sidebar */}
      {isOpen && (
        <><div className="fixed top-0 left-0 bottom-0 right-0 bg-gray-500 opacity-50" onClick={handleClose}></div><div className="fixed top-0 left-0 bottom-0 w-72 bg-white border-r">
          {/* Logo */}
          <div className="flex items-center justify-center h-14 border-b">
            <FaTwitter className="w-8 h-8 text-blue-500" />
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto">
            <a href="#" className="...">
              <AiOutlineHome className="..." />
              Home
            </a>
            <a href="#" className="...">
              <AiOutlineBell className="..." />
              Notifications
            </a>
            <a href="#" className="...">
              <AiOutlineMail className="..." />
              Messages
            </a>
            <a href="#" className="...">
              <AiOutlineProfile className="..." />
              Profile
            </a>
            <a href="#" className="...">
              <AiOutlineMore className="..." />
              More
            </a>
          </nav>
          {/* Tweet button */}
          <button className="...">Tweet</button>
        </div></>
      )}
    </>
  );
};

export default Sidebar;
