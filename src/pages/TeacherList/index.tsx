import React from "react";

import "./styles.css";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";

// import { Container } from './styles';

function TeacherList() {
  return (
    <div className="container" id="page-teacher-list">
      <PageHeader title="Estes sao os proffys disponiveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Materia</label>
            <input type="text" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="weekday">Dia da semana</label>
            <input type="text" id="weekday" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>
      <main>
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;
