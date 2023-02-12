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
          src={`/images/uncw.png`}
          alt='UNCW' />
         <img
          src={`/images/UNCCboot.png`}
          alt='bootcamp' />
           <img
          src={`/images/sorbonne.png`}
          alt='sorbonne' />
      </div>
      <div className="proficiencies">
        <h3>Proficiencies</h3>
        <img
          src={`/images/css3.png`}
          alt='css' />
          <img
          src={`/images/html.png`}
          alt='html' />
          <img
          src={`/images/js.png`}
          alt='javascript' />
          <img
          src={`/images/node.png`}
          alt='nodejs' />
          <img
          src={`/images/wp.png`}
          alt='wordpress' />
          <img
          src={`/images/mysql.png`}
          alt='mysql' />
          <img
          src={`/images/ps.png`}
          alt='photoshop' />
          <img
          src={`/images/apollo.png`}
          alt='apollo' />
          <img
          src={`/images/react.png`}
          alt='react' />
          <img
          src={`/images/mongo.png`}
          alt='mongodb' />
      </div>
    </div>
  );
};


export default Resume;