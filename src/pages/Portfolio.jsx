import React from 'react';
import './style.css'

function ProjectDisplay(){
const data = [
{  
  id: 1,
  name: 'Ya-Heard',
  link: 'https://fathomless-woodland-16696.herokuapp.com/',
  img: '/yaheard.png',
  gitHub:'https://github.com/Simplerer/ya-heard',
},

{
  id: 2,
  name: 'Simmer-Down Secretary',
  link: 'https://mariahmcdaniel.github.io/simmer-down-secretary/',
  img: '/simmer.png',
  gitHub:'https://github.com/mariahmcdaniel/simmer-down-secretary',
},

{
  id: 3,
  name: 'Weather Dashboard',
  link: 'https://mariahmcdaniel.github.io/five-day-forecast-dashboard/',
  img: '/weather.png',
  gitHub:'https://github.com/mariahmcdaniel/five-day-forecast-dashboard',
},

{
  id: 4,
  name: 'Hourly Day Planner',
  link: 'https://mariahmcdaniel.github.io/hourly-day-planner/',
  img: '/planner.png',
  gitHub:'https://github.com/mariahmcdaniel/hourly-day-planner',
},

{
  id: 5,
  name: 'Password Generator',
  link: 'https://mariahmcdaniel.github.io/random-password-generator/',
  img: '/pw.png',
  gitHub:'https://github.com/mariahmcdaniel/random-password-generator',
},
{
  id: 6,
  name: 'Note Taker App',
  link: 'https://hidden-fjord-54822.herokuapp.com/',
  img: '/note.png',
  gitHub:'https://github.com/mariahmcdaniel/take-note',
}
]
// const cardStyle = {
//   width: '18rem',
// };

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
            src={window.location.origin + `/images${project.img}`}
            alt={project.name}/>
            <a href={project.gitHub}><img
            className="gitHubLink"
            src={window.location.origin + `/images/git.png`}
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