
import React, { useEffect, useRef } from "react";
import "./circle.css";


const skills = [
  { name: "JavaScript", percent: 90 },
  { name: "React", percent: 85 },
  { name: "CSS", percent: 80 },
  { name: "Node.js", percent: 75 },
];

const SkillsCircles = () => {


  return (
    <section className="skills-circles-section">
      <div className="circles-container">
        {skills.map((skill, index) => (
          <div className="skill-circle" key={index}>
          <svg viewBox="0 0 36 36" className="circular-chart">
  <g className="chart-rotate">
    <circle
      className="circle-bg"
      cx="18"
      cy="18"
      r="16"
      strokeWidth={skill.percent / 10}
    />

    <circle
      className="circle"
      cx="18"
      cy="18"
      r="16"
      strokeDasharray={`${skill.percent} 100`}
      strokeWidth={skill.percent / 10}
    />
  </g>

  <text x="18" y="20" className="percentage">
    {skill.percent}%
  </text>
</svg>


            <h2>{skill.name}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsCircles;
