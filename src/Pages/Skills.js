import React from 'react';
import './Styling_Pages.css'
const Skills = () => {
  return (
    <div className="skills_page">
      <h3>Styling in progress... stay tuned for updates</h3>
      <h2 className="sill_page_heading">My Skills</h2>
      <div className="skill_contents">
        <div>
          <h3 className="skill_subheading">Programming Languages</h3>
          <ul className="skill_list">
            <li>C</li>
            <li>Java (Proficient, DSA)</li>
          </ul>
        </div>
        <div>
          <h3 className="skill_subheading">Web Development</h3>
          <ul className="skill_list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
        <div>
          <h3 className="skill_subheading">Databases</h3>
          <ul className="skill_list">
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div>
          <h3 className="skill_subheading">DevOps & Cloud (Learning)</h3>
          <ul className="skill_list">
            <li>AWS</li>
            <li>Docker</li>
          </ul>
        </div>
        <div>
          <h3 className="skill_subheading">UI/UX (Learning)</h3>
          <ul className="skill_list">
            <li>Figma tool</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
