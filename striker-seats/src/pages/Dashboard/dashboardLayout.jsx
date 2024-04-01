import { useState } from "react";
import "../../style/dashboard/dashboardLayout.css";
import { useLocation, useNavigate } from "react-router-dom";
import { LogoutFirebase } from "../../Services/Authentication";

// eslint-disable-next-line react/prop-types
function SidebarItem({ icon, label, url }) {
  const location = useLocation();
  const isActive = location.pathname === url;
  const navigate = useNavigate();

  const handleLogoutHandler = async() => {
    console.log("Logout Handler");
    const logoutHandler = await LogoutFirebase();
    if(logoutHandler.success) {
        navigate('/login');
    }
  }

  return (
    <li className={isActive ? "sidebarItem active" : "sidebarItem"}>
      {label === "Logout" ? (
        <button onClick={handleLogoutHandler}>
          {icon && (
            <img
              src={icon}
              width={30}
              height={30}
              alt={`${label} Icon`}
              style={{ filter: isActive ? "invert(1)" : "" }}
            />
          )}
          {label}
        </button>
      ) : (
        <a href={url} className="d-flex align-items-center px-3">
          {icon && (
            <img
              src={icon}
              width={30}
              height={30}
              alt={`${label} Icon`}
              style={{ filter: isActive ? "invert(1)" : "" }}
            />
          )}
          {label}
        </a>
      )}
    </li>
  );
}

// eslint-disable-next-line react/prop-types
function DashboardLayout({ children }) {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };
  const sidebarItems = [
    { label: "Home", url: "/dashboard", icon: "/homeIcon.png" },
    { label: "Tickets", url: "/dashboard/ticket", icon: "/ticketsIcon.png" },
    { label: "Logout", url: "/logout", icon: "/logout.png" },
  ];

  return (
    <div id="wrapper" className={isActive ? "toggled" : ""}>
      <aside id="sidebar-wrapper">
        <div className="sidebar-brand">
          <img
            src="/assets/logo.png"
            className="img-fluid"
            width={80}
            height={80}
            alt="mobile hamburger Menu"
          />
        </div>
        <ul className="sidebar-nav">
          {sidebarItems.map((item, index) => (
            <SidebarItem
              key={index}
              label={item.label}
              url={item.url}
              icon={item.icon}
            />
          ))}
        </ul>
      </aside>

      <div id="navbar-wrapper">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a
                type="button"
                onClick={toggleSidebar}
                className="navbar-brands"
                id="sidebar-toggle"
              >
                <img
                  src="/assets/toggle.png"
                  className="img-fluid"
                  width={40}
                  height={40}
                  alt="mobile hamburger Menu"
                />
              </a>
            </div>
          </div>
        </nav>
      </div>
      {children}
    </div>
  );
}

export default DashboardLayout;
