import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { nav } from "../../data";
import Auth from "./Auth/Auth";
import { Blog } from "../../Context/Context";
import { useNavigate } from "react-router-dom";

const DemoHeader = () => {
  const [isActive, setIsActive] = useState(false);
  const { authModel, setAuthModel } = Blog();
  const navigate = useNavigate();

  useEffect(() => {
    const scrollMe = () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    };
    window.addEventListener("scroll", scrollMe);
  }, []);

  const handleAboutUsButtonClick = () => {
    navigate("/about");
  };

  // Function to open a new page for Events in a new tab
  const handleEventsButtonClick = () => {
    navigate('/events')
  };

  return (
    <header
      className={`border-b border-black sticky top-0 z-50 
    ${isActive ? "bg-white" : "bg-banner"}
    transition-all duration-500`}>
      <div className="size h-[70px] flex items-center justify-between">
        <Link to={"/"}>
          <img
            className="h-[2.5rem]"
            src="WEBSITE FRATERNITY OF LEADERS.png"
            alt="logo"
          />
        </Link>
        <div className="flex items-center gap-5">
          <div className="hidden text-sm sm:flex items-center gap-5">
            {nav.map((link, i) => (
              <Link key={i} to={link.path}>
                {link.title}
              </Link>
            ))}
          </div>
          <div className="relative">
            <button
              onClick={handleAboutUsButtonClick}
              className="hidden text-sm sm:flex items-center gap-5">
              About Us
            </button>
          </div>
          <div className="relative">
            <button
              onClick={() => setAuthModel(true)}
              className="hidden text-sm sm:flex items-center gap-5">
              Sign In
            </button>
            <Auth modal={authModel} setModal={setAuthModel} />
          </div>

          {/* New "Events" button */}
          <div className="relative">
            <button
              onClick={handleEventsButtonClick}
              className="hidden text-sm sm:flex items-center gap-5">
              Events
            </button>
          </div>

          <button
            onClick={() => setAuthModel(true)}
            className={`text-white rounded-full px-3 p-2 text-sm font-medium
            ${isActive ? "bg-green-700" : "bg-black"}`}>
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default DemoHeader;
