import React from "react";
import "./styles.css";
import whatsIcon from "../../assets/images/icons/whatsapp.svg";

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/46412518?s=400&u=b0046b3f4e803496b3820f226ea2237f209d54e1&v=4"
          alt="foto perfil"
        />
        <div>
          <strong>Bruno Moraes</strong>
          <span>JavaScript</span>
        </div>
      </header>
      <p>
        Descrição <br /> <br /> lorem ispum blablablablabla
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 22,00</strong>
        </p>
        <button type="button">
          <img src={whatsIcon} alt="contato whats" />
          Entre em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
