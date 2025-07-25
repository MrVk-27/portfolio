import { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import image from './img/1.jpg';


function Portfolio() {
  const [projects] = useState([
    {
      title: 'Personal Portfolio',
      description: 'This is my first portfolio'
    },
    {
      title: 'Fullstack Developer',
      description: 'I’m learning to build complete web applications using modern front-end and back-end technologies. From responsive UI in React to REST APIs and databases, I enjoy making things that work from end to end.'
    },
  ]);

  return (
    <div>
      <header>
        <img src={image} alt="Form Illustration"></img>
        <h1>Vignesh</h1>
        <p>Aspiring Fullstack Developer | Fresher</p>
      </header>

      <main>
        <section>
          <h2>About Me</h2>
          <p>
            I'm Vignesh, a passionate and curious learner currently exploring full-stack web development. On the front end, I use HTML, CSS, JavaScript, and React to create interactive user interfaces.
            On the back end, I'm learning how to build RESTful APIs using Node.js and Express, and work with databases like MongoDB and MySQL.
            I'm also comfortable with Git, GitHub, and basic deployment workflows. My goal is to become a skilled developer who can build secure, scalable, and user-friendly web applications from scratch. Alongside development, I’m also diving into cybersecurity to better understand how to build safer applications.
          </p>
        </section>

        <section>
          <h2>Skills</h2>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React Basics </li>
            <li>C Programming, Data Structures</li>
            <li>Basic Linux, Git & GitHub</li>
          </ul>
        </section>

        <section>
          <h2>Projects</h2>
          <div>
            {projects.map((project, idx) => (
              <div key={idx}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Contact</h2>
          <div>
            <a href="mailto:mrvk272007@gmail.com">
              <Mail size={18} /> Email
            </a>
            <a href="https://github.com/MrVk-27" target="_blank">
              <Github size={18} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/vignesh-krishnamoorthy-a1354b32a/" target="_blank">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer>
        {new Date().getFullYear()} Vignesh. All rights reserved.
      </footer>
    </div>
  );
}
export default Portfolio;