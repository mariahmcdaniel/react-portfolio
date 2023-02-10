import React from 'react';

function ProjectDisplay(){
const data = [
{  
  name: 'Ya-Heard',
  link: 'https://fathomless-woodland-16696.herokuapp.com/',
  img: '../../public/images/yaheard',
  gitHub:'https://github.com/Simplerer/ya-heard',
},

{
  name: 'Simmer-Down Secretary',
  link: 'https://mariahmcdaniel.github.io/simmer-down-secretary/',
  img: '../../public/images/simmer',
  gitHub:'https://github.com/mariahmcdaniel/simmer-down-secretary',
},

{
  name: 'Weather Dashboard',
  link: 'https://mariahmcdaniel.github.io/five-day-forecast-dashboard/',
  img: '../../public/images/weather',
  gitHub:'https://github.com/mariahmcdaniel/five-day-forecast-dashboard',
},

{
  name: 'Hourly Day Planner',
  link: 'https://mariahmcdaniel.github.io/hourly-day-planner/',
  img: '../../public/images/planner',
  gitHub:'https://github.com/mariahmcdaniel/hourly-day-planner',
},

{
  name: 'Password Generator',
  link: 'https://mariahmcdaniel.github.io/random-password-generator/',
  img: '../../public/images/pw',
  gitHub:'https://github.com/mariahmcdaniel/random-password-generator',
},
{
  name: 'Note Taker App',
  link: 'https://hidden-fjord-54822.herokuapp.com/',
  img: '../../public/images/note',
  gitHub:'https://github.com/mariahmcdaniel/take-note',
}
]
const projects = data.map(
  (project) => {
      return (
        <div className="card" style={cardStyle}>
          <div className="card-body">
          <a href={project.link}>
          <h5 className="card-title">{project.name}</h5>
          </a>
            <img
            className="card-img-bottom"
            src={project.img}
            alt={project.name}/>
          </div>
        </div>
      )
  }
)

return { projects }


}
export default function Portfolio() {
  return (
    <div>
      <ProjectDisplay />
    </div>
  )
}