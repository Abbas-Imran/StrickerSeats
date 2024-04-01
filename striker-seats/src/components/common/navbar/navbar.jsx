import "../../../style/common/navbar.css";

function Navbar() {
  return (
    <nav id="navbarBelow">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="navbar navbar-expand-lg py-1">
              <a className="navbar-brand" href="./">
                <img
                  src="/assets/logo.png"
                  className="img-fluid"
                  width={80}
                  height={80}
                  alt="mobile hamburger Menu"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <img
                  src="/assets/toggle.png"
                  className="img-fluid"
                  width={30}
                  height={25}
                  alt="mobile hamburger Menu"
                />
              </button>
              <div
                className="collapse navbar-collapse  justify-content-end"
                id="navbarNavDropdown"
              >
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a className="nav-link" href="/fixture" role="button">
                      Fixtures
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link" href="/dashboard" role="button">
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link" href="/login" role="button">
                      Login/Signup
                    </a>
                  </li>
                  {/* <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      type="button"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Services
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <li>
                        <a
                          className="dropdown-item"
                          href="/amazon-fba-automation"
                        >
                          Amazon FBA Automation
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/youtube-automation">
                          YouTube Automation
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/tiktok-shop-automation"
                        >
                          TikTok Shop Automation
                        </a>
                      </li>
                      <li>
                        <div className="dropdown shopify dropend">
                          <a
                            className="dropdown-item"
                            type="button"
                            id="dropdownMenuButton"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Shopify Automation
                          </a>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <li>
                              <a
                                className="dropdown-item"
                                href="/shopify-turnkey-service"
                              >
                                Shopify Turnkey Service
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="/shopify-automation-agency"
                              >
                                Shopify Automation
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
