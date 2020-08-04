import React from "react";
import "./styles.css";

import logoLanding from "../../assets/images/logo.svg";
import landingImage from "../../assets/images/landing.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <div id="page-landing">
      <div className="container" id="page-landing-content">
        <div className="logo-container">
          <img src={logoLanding} alt="Logo " />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img src={landingImage} alt="Landing" className="hero-image" />
        <div className="buttons-container">
          <Link to="/list" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>
          <Link to="/form" className="give-classes">
            <img src={giveClassesIcon} alt="Dar Aulas" />
            Dar Aulas
          </Link>
        </div>
        <span className="total-connections">
          Total de 200 conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração Roxo" />
        </span>
      </div>
    </div>
  );
}

export default Landing;
