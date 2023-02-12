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
          src={window.location.origin + `/images/uncw.png`}
          alt='UNCW' />
         <img
          src={window.location.origin + `/images/UNCCboot.png`}
          alt='bootcamp' />
           <img
          src={window.location.origin + `/images/sorbonne.png`}
          alt='sorbonne' />
      </div>
      <div className="proficiencies">
        <h3>Proficiencies</h3>
        <img
          src={window.location.origin + `/images/css3.png`}
          alt='css' />
          <img
          src={window.location.origin + `/images/html.png`}
          alt='html' />
          <img
          src={window.location.origin + `/images/js.png`}
          alt='javascript' />
          <img
          src={window.location.origin + `/images/node.png`}
          alt='nodejs' />
          <img
          src={window.location.origin + `/images/wp.png`}
          alt='wordpress' />
          <img
          src={window.location.origin + `/images/mysql.png`}
          alt='mysql' />
          <img
          src={window.location.origin + `/images/ps.png`}
          alt='photoshop' />
          <img
          src={window.location.origin + `/images/apollo.png`}
          alt='apollo' />
          <img
          src={window.location.origin + `/images/react.png`}
          alt='react' />
          <img
          src={window.location.origin + `/images/mongo.png`}
          alt='mongodb' />
      </div>
    </div>
  );
};


export default Resume;