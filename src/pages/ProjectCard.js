import React from 'react';

export default function ProjectCard(props) {
  const cardStyle = {
    width: '18rem',
  };



  return (
    <div className="container">
      <div className="card" style={cardStyle}>
        <a href={props.link}>
        <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
          
          <img
          className="card-img"
          src={props.img}
          alt="code quiz"/>
        </div>
          </a>
      </div>
    </div>
  );
}
