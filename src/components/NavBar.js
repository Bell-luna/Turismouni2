import React from "react";
import Imagen from "./img/logo.png";
import Video from "./img/video.mp4";

const NavBar = () => {
  return (
    <div>
      <nav className="nav">
        <img className="img1" src={Imagen} />
        <ul>
          <li>
            <a href="Accomodations">Alojamientos</a>
          </li>
          <li>
            <a href="Contac">Contacto</a>
          </li>
          <li>
            <a href="Blog">Blog</a>
          </li>
        </ul>
      </nav>
      <video className="video" autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  );
};

export default NavBar;
