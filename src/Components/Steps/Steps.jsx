import React from "react";
import "./Steps.css";

function Steps() {
  const stepsContents = [
    {
      stepNumber: "01",
      stepTitle: "Choose Plant",
      stepDescription: " We have several varieties plants you can choose from.",
    },
    {
      stepNumber: "02",
      stepTitle: "Place an order",
      stepDescription:
        " Once your order is set, we move to the next step which is the shipping.",
    },
    {
      stepNumber: "03",
      stepTitle: "Get plants delivered",
      stepDescription:
        "   Our delivery process is easy, you receive the plant direct to your door.",
    },
  ];
  return (
    <section className="steps section container">
      <div className="steps__bg">
        <h2 className="section__title-center steps__title">
          Steps to start your <br />
          plants off right
        </h2>
        <div className="steps__container grid">
          {stepsContents.map((step, index) => (
            <div key={index} className="steps__card">
              <div className="steps__card-number">{step.stepNumber}</div>
              <h3 className="steps__card-title">{step.stepTitle}</h3>
              <p className="steps__card-description">{step.stepDescription}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Steps;
