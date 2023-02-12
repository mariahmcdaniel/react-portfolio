import './style.css'
import uncw from './../images/uncw';
import uncc from './../images/UNCCboot';
import sorbonne from './../images/sorbonne';
import css from './../images/css3';
import html from './../images/html';
import js from './../images/js';
import node from './../images/node';
import wp from './../images/wp';
import mysql from './../images/mysql';
import ps from './../images/ps';
import apollo from './../images/apollo';
import react from './../images/react';
import mongo from './../images/mongodb';

const Resume = () => {
  return (
    <div id="resumeCont">
      <div id= "btnBorder">
      <button
        id="resumeBtn"
        type='button'
        onClick={(e) => {
          e.preventDefault();
          window.location.href = 'https://drive.google.com/file/d/15hKAaih5YSS3W4DC3xoZRBBGSyNLta_j/view?usp=sharing';
        }}>
        Download My Resume
      </button>
      </div>
      <div className="education">
        <h3 id="edu">Education</h3>
        <img
          src={uncw}
          alt='UNCW' />
         <img
          src={uncc}
          alt='bootcamp' />
           <img
          src={sorbonne}
          alt='sorbonne' />
      </div>
      <div className="proficiencies">
        <h3>Proficiencies</h3>
        <img
          src={css}
          alt='css' />
          <img
          src={html}
          alt='html' />
          <img
          src={js}
          alt='javascript' />
          <img
          src={node}
          alt='nodejs' />
          <img
          src={wp}
          alt='wordpress' />
          <img
          src={mysql}
          alt='mysql' />
          <img
          src={ps}
          alt='photoshop' />
          <img
          src={apollo}
          alt='apollo' />
          <img
          src={react}
          alt='react' />
          <img
          src={mongo}
          alt='mongodb' />
      </div>
    </div>
  );
};


export default Resume;