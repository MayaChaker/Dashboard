import "./Sidebar.css";
import { personsImgs } from "../../utils/images.js";
import { navigationLinks } from "../../data/data";
import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../Context/SidebarContext";

const Sidebar = () => {
  const [activeLinkIdx] = useState(1);
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);

  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarClass("sidebar-change");
    } else {
      setSidebarClass("");
    }
  }, [isSidebarOpen]);

  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className="user-info">
        <img src={personsImgs.person_two} alt="Profile image" />
      </div>
      <span className="info-name">alive-doe</span>
      <nav className="navigation">
        <ul className="nav-list">
          {navigationLinks.map((navigationLink) => (
            <li className="nav-item" key={""}>
              <a
                href="#"
                className={`nav-link ${
                  navigationLink.id === activeLinkIdx ? "active" : null
                }`}
              >
                <img
                  src={navigationLink.image}
                  className="nav-link-icon"
                  alt={navigationLink.tite}
                />
                <span className="nav-link-text">{navigationLink.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
