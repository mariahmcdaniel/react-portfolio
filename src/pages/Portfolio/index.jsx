import React from 'react';
import './style.css'
import yaheard from './yaheard.png';
import simmer from './simmer.png';
import weather from './weather.png';
import planner from './planner.png';
import pw from './pw.png';
import note from './note.png';

function ProjectDisplay(){
const data = [
{  
  id: 1,
  name: 'Ya-Heard',
  link: 'https://fathomless-woodland-16696.herokuapp.com/',
  img: {yaheard},
  gitHub:'https://github.com/Simplerer/ya-heard',
},

{
  id: 2,
  name: 'Simmer-Down Secretary',
  link: 'https://mariahmcdaniel.github.io/simmer-down-secretary/',
  img: {simmer},
  gitHub:'https://github.com/mariahmcdaniel/simmer-down-secretary',
},

{
  id: 3,
  name: 'Weather Dashboard',
  link: 'https://mariahmcdaniel.github.io/five-day-forecast-dashboard/',
  img: {weather},
  gitHub:'https://github.com/mariahmcdaniel/five-day-forecast-dashboard',
},

{
  id: 4,
  name: 'Hourly Day Planner',
  link: 'https://mariahmcdaniel.github.io/hourly-day-planner/',
  img: {planner},
  gitHub:'https://github.com/mariahmcdaniel/hourly-day-planner',
},

{
  id: 5,
  name: 'Password Generator',
  link: 'https://mariahmcdaniel.github.io/random-password-generator/',
  img: {pw},
  gitHub:'https://github.com/mariahmcdaniel/random-password-generator',
},
{
  id: 6,
  name: 'Note Taker App',
  link: 'https://hidden-fjord-54822.herokuapp.com/',
  img: {note},
  gitHub:'https://github.com/mariahmcdaniel/take-note',
}
]

const projects = data.map(
  (project) => {
      return (
        <div key={project.id} className="card">
          <div className="card-body">
          <a href={project.link}>
          <h5 className="card-title">{project.name}</h5>
          </a>
            <img
            className="card-img-bottom projectImg"
            src={project.img}
            alt={project.name}/>
            <a href={project.gitHub}><img
            className="gitHubLink"
            src={'/git.png'}
            alt={project.name}/> Repository</a>
            
          </div>
        </div>
      )
  }
)


return projects


}
export default function Portfolio() {
  return (
    <div>
        <ProjectDisplay />
    </div>
  )
}