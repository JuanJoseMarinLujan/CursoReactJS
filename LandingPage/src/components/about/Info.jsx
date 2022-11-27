import React from "react";

function Info() {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>
        <h3 className="about__tittle">Experiencia</h3>
        <span className="about__subtittle">1 Año Practicando</span>
      </div>

      <div className="about__box">
        <i class="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__tittle">Completado</h3>
        <span className="about__subtittle">5+ Proyectos</span>
      </div>

      {/* <div className="about__box">
        <i class="bx bx-support about__icon"></i>
        <h3 className="about__tittle">Soperte</h3>
        <span className="about__subtittle">Online 24/7</span>
      </div> */}
    </div>
  );
}

export default Info;
