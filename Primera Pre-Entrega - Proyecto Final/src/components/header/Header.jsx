import React from "react";
import CartWidget from "./CartWidget";

import "./header.css";

function Header() {
  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav__logo">
          <a href="../../index.html">
            <svg
              class="home__yang"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-40 -40 80 80"
            >
              <circle r="39" />
              <path
                fill="#fff"
                d="M0,38a38,38 0 0 1 0,-76a19,19 0 0 1 0,38a19,19 0 0 0 0,38"
              />
              <circle r="5" cy="19" fill="#fff" />
              <circle r="5" cy="-19" />
            </svg>
          </a>
        </div>

        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="" className="nav__link">
                All
              </a>
            </li>

            <li className="nav__item">
              <a href="" className="nav__link">
                Caps
              </a>
            </li>

            <li className="nav__item">
              <a href="" className="nav__link">
                T-Shirts
              </a>
            </li>

            <li className="nav__item">
              <a href="" className="nav__link">
                Shoes
              </a>
            </li>

            <li className="nav__item">
              <a href="" className="nav__link">
                Collections
              </a>
            </li>
          </ul>
        </div>

        <CartWidget />
      </nav>
    </header>
  );
}

export default Header;
