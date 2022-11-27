import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">J J M L</h1>
        <ul className="footer_list">
          <li>
            <a href="#" className="footer__link">
              Sobre
            </a>
          </li>
          <li>
            <a href="#" className="footer__link">
              Portafolio
            </a>
          </li>
          <li>
            <a href="#" className="footer__link">
              Habilidades
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <a
            href="https://www.instagram.com/juanjosemarinlujan"
            className="home__social-icon"
            target="_blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/juanjosemarinlujan"
            className="home__social-icon"
            target="_blank"
          >
            <i class="bx bxl-linkedin-alt"></i>
          </a>
          <a
            href="https://github.com/JuanJoseMarinLujan"
            className="home__social-icon"
            target="_blank"
          >
            <i class="bx bxl-github-alt"></i>
          </a>
        </div>
        <span className="footer_copy">
            &#169; Por: Juan Jose Marin Lujan
        </span>
      </div>
    </footer>
  );
}

export default Footer;
