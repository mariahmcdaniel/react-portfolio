import './style.css'

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
          src={'/uncw.png'}
          alt='UNCW' />
         <img
          src={'/UNCCboot.png'}
          alt='bootcamp' />
           <img
          src={'/sorbonne.png'}
          alt='sorbonne' />
      </div>
      <div className="proficiencies">
        <h3>Proficiencies</h3>
        <img
          src={'/css3.png'}
          alt='css' />
          <img
          src={'/html.png'}
          alt='html' />
          <img
          src={'/js.png'}
          alt='javascript' />
          <img
          src={'/node.png'}
          alt='nodejs' />
          <img
          src={'/wp.png'}
          alt='wordpress' />
          <img
          src={'/mysql.png'}
          alt='mysql' />
          <img
          src={'/ps.png'}
          alt='photoshop' />
          <img
          src={'/apollo.png'}
          alt='apollo' />
          <img
          src={'/react.png'}
          alt='react' />
          <img
          src={'/mongo.png'}
          alt='mongodb' />
      </div>
    </div>
  );
};


export default Resume;