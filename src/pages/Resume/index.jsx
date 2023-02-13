import './style.css'
import uncw from './uncw.png';
import uncc from './UNCCboot.png';
import sorbonne from './sorbonne.png';
import css from './css3.png';
import html from './html.png';
import js from './js.png';
import node from './node.png';
import wp from './wp.png';
import mysql from './mysql.png';
import ps from './ps.png';
import apollo from './apollo.png';
import react from './react.png';
import mongo from './mongo.png';

const Resume = () => {
  return (
    <div id="resumeCont">
      <div id= "btnBorder">
      <button
        id="resumeBtn"
        type='button'
        onClick={(e) => {
          e.preventDefault();
          window.location.href = 'https://drive.google.com/file/d/15hKAaih5YSS3W4DC3xoZRBBGSyNLta_j/view?usp=sharing.png';
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