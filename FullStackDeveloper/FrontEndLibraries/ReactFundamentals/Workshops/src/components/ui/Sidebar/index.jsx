import { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        {/* Use a hamburger icon or text */}
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className="sidebar-content">
        <h4>Workshop Projects</h4>
        <li>
          <Link to="/ProfileCard" onClick={toggleSidebar}>
            Profile Card
          </Link>
        </li>
        <li>
          <Link to="/Nav" onClick={toggleSidebar}>
            Nav
          </Link>
        </li>
        <li>
          <Link to="#" onClick={toggleSidebar}>
            Project 1
          </Link>
        </li>
        <li>
          <Link to="#" onClick={toggleSidebar}>
            Project 1
          </Link>
        </li>
      </ul>
    </aside>
  );
};
