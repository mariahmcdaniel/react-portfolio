import React from 'react';
import './style.css';
import me from './me.png'

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <p id="intro">
       Hi, I'm Mariah! I am a student web developer. I believe in commitment to continuous growth in the ever-evolving world of programming. Please check out the projects that I have highlighted here in my portfolio and dont hesitate to reach out if you'd like to connect. 
      </p>
      <img
          id='myphoto'
          src={me}
          alt='my photo' />
    </div>
  );
}
