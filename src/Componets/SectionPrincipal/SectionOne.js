import React from "react";
import Typed from "react-typed";
import "./section-one.css";
import instagram from "./Img/instagram.png";
import github from "./Img/github.png";
import linkedin from "./Img/linkedin.png";
import email from "./Img/o-email.png";

export function SectionOne() {
  return (
    <div className="container">
      <div className="information">
        <h1> Oi, eu sou </h1> <span> Athos Paulo Souza. </span>
      </div>
      <Typed
        className="info"
        strings={[
          " Universitário ",
          " Análise e Desenvolvimento de Sistema",
          " Desenvolvedor  Front-End",
        ]}
        typeSpeed={80}
        loop
      />
      <div className="paragrafo">
        <p>
          "Eu amo estudar <mark> Front-end! </mark> É incrível como podemos
          criar uma interface visualmente atraente e intuitiva para os usuários.
          A sensação de ver um design bem implementado ganhar vida é
          simplesmente fascinante para mim."
        </p>

        <figure className="logos">
          <img src={instagram} />
          <img src={github} />
          <img src={linkedin} />
          <img src={email} />
        </figure>
        
      </div>
    </div>
  );
}
