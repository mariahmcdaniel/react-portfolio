import React from 'react';

const project1 = {
  name: 'Ya-Heard',
  link: 'https://fathomless-woodland-16696.herokuapp.com/',
  img: '../../public/images/heard',
  gitHub:'https://github.com/Simplerer/ya-heard',
};

const project2 = {
  name: 'Simmer-Down Secretary',
  link: 'https://mariahmcdaniel.github.io/simmer-down-secretary/',
  img: '../../public/images/simmer',
  gitHub:'https://github.com/mariahmcdaniel/simmer-down-secretary',
};

const project3 = {
  name: 'Weather Dashboard',
  link: 'https://mariahmcdaniel.github.io/five-day-forecast-dashboard/',
  img: '../../public/images/weather',
  gitHub:'https://github.com/mariahmcdaniel/five-day-forecast-dashboard',
};

const project4 = {
  name: 'Hourly Day Planner',
  link: 'https://mariahmcdaniel.github.io/hourly-day-planner/',
  img: '../../public/images/planner',
  gitHub:'https://github.com/mariahmcdaniel/hourly-day-planner',
};

const project5 = {
  name: 'Password Generator',
  link: 'https://mariahmcdaniel.github.io/random-password-generator/',
  img: '../../public/images/password',
  gitHub:'https://github.com/mariahmcdaniel/random-password-generator',
};
const project6 = {
  name: 'Timed Code Quiz',
  link: 'https://mariahmcdaniel.github.io/timed-code-quiz/',
  img: '../../public/images/quiz',
  gitHub:'https://github.com/mariahmcdaniel/timed-code-quiz',
};

export default function Portfolio() {
  return (
    <div>
      <ProjectCard name={project1.name} link={project1.link} img={project1.img} gitHub={project1.gitHub} />
      <ProjectCard name={project2.name} link={project2.link} img={project2.img} gitHub={project2.gitHub} />
      <ProjectCard name={project3.name} link={project3.link} img={project3.img} gitHub={project3.gitHub} />
      <ProjectCard name={project4.name} link={project4.link} img={project4.img} gitHub={project4.gitHub} />
      <ProjectCard name={project5.name} link={project5.link} img={project5.img} gitHub={project5.gitHub} />
      <ProjectCard name={project6.name} link={project6.link} img={project6.img} gitHub={project6.gitHub} />
    </div>
  )
}