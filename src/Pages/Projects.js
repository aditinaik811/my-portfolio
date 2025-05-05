import React from 'react';
import './Styling_Pages.css'
const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "Aditi's Cloud Kitchen",
      description: "Designed and developed a front-end website for a home-based cloud kitchen to showcase menu offerings and enable online ordering. Features include food item display, add-to-cart functionality, and total price calculation. Tech Stack: HTML, CSS, JavaScript.",
      link: "#" 
    },
    {
      id: 2,
      title: "Weather Webpage",
      description: "Built a dynamic webpage that fetches and displays real-time weather data for any city using a public weather API. Tech Stack: HTML, CSS, JavaScript, Weather API.",
      link: "#" 
    },
    {
      id: 3,
      title: "Student Information Management System",
      description: "Developed a web-based application to perform CRUD operations on student records. Built using PHP, HTML, CSS, and MySQL with real-time backend interaction. Tech Stack: PHP, MySQL, HTML, CSS, XAMPP.",
      link: "#" // For inserting link
    },
    {
      id: 4,
      title: "Portfolio Webpage",
      description: "Built a responsive portfolio using React to showcase skills, projects, and contact information with reusable components. Tech Stack: React, CSS.",
      link: "#" 
    },
    {
      id: 5,
      title: "Snake and the Fruit Game",
      description: "A classic Snake game where the snake grows after eating fruit. Programming Language: Java.",
      link: "#"
    },
    {
      id: 6,
      title: "Country Capital Finder",
      description: "A React app that displays the capital of a selected country. Tech Stack: React.",
      link: "#" 
    },
    {
      id: 7,
      title: "Botany Information Page",
      description: "A webpage that displays detailed information about various plants. Tech Stack: HTML, CSS, JavaScript.",
      link: "#" 
    }
  ];

  return (
    <div id = "project_lists">
      <h2 id = "project_page_heading">My Projects</h2>
      <ol id = "lists">
        {projectList.map(project => (
          <li key={project.id} id="list_of_projects">
            <h3 id="project_title"> {project.title}</h3>
            <p id="project_description">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" id="project_link">View Project</a>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Projects;