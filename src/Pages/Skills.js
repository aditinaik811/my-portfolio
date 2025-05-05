import React from 'react';
import './Styling_Pages.css'
const Skills = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">My Skills</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold">Programming Languages</h3>
          <ul className="list-disc pl-6">
            <li>C</li>
            <li>Java (Proficient, DSA)</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Web Development</h3>
          <ul className="list-disc pl-6">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Databases</h3>
          <ul className="list-disc pl-6">
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">DevOps & Cloud (Learning)</h3>
          <ul className="list-disc pl-6">
            <li>AWS</li>
            <li>Docker</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">UI/UX (Learning)</h3>
          <ul className="list-disc pl-6">
            <li>Figma tool</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
