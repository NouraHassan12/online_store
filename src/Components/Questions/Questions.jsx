import React, { useState } from "react";
import "./Questions.css";

function Questions() {
  const questions = [
    {
      id: 1,
      question__title: "My flowers are falling off or dying?",
      question__description:
        " Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.",
    },

    {
      id: 2,
      question__title: "My flowers are falling off or dying?",
      question__description:
        " Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.",
    },

    {
      id: 3,
      question__title: "My flowers are falling off or dying?",
      question__description:
        " Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.",
    },
    {
      id: 4,
      question__title: "My flowers are falling off or dying?",
      question__description:
        " Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.",
    },
    {
      id: 5,
      question__title: "My flowers are falling off or dying?",
      question__description:
        " Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.",
    },
    {
      id: 6,
      question__title: "My flowers are falling off or dying?",
      question__description:
        " Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.",
    },
  ];
  return (
    <section className="questions section" id="FAQs">
      <h2 className="section__title-center questions__title container">
        Some common questions <br />
        were often asked
      </h2>

      <div className="questions__container container grid">
        <div className="questions__group">
          {questions.map((question, index) => (
            <div key={index} className="questions__item">
              <header className="questions__header">
                <i className="ri-add-line questions__icon"></i>
                <h3 className="questions__item-title">
                  {question.question__title}
                </h3>
              </header>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Questions;
