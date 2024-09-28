import './App.css';
import myImage from './iamges/banner-img.jpg';
import project1 from './iamges/projects-1.png';
import project2 from './iamges/projects-2.png';
import project3 from './iamges/projects-3.png';

function App() {
  return (
    <div className="App">
      <div className='Header'>
        <div className='Container'>
          <a href='index.html' className='LinkName'>Daniil</a>
        </div>
      </div>

      <div className='Banner'>
        <div className='BannerText'>
          <h1>
            I'm a frontend developer from Kazahstan, Almaty.
          </h1>
        </div>
        <div className='BannerImg'>
          <h3>Daniil Trofimov</h3>
          <img
            src={myImage}
            alt='banner' />
        </div>
      </div>

      <div className='resume'>
        <div className='Container'>
          <div className='row'>
            <div className='resume-text-header'>
              <h2>I am a student who studies a variety of technologies to create interesting applications  </h2>
            </div>

            <div className='resume-text'>
              <p>I study various technologies, create various and interesting web applications .  
              I have good experience with both basic WEB technologies 
              such as HTML CSS and more advanced skills such as SCSS, React and NodeJS. 
              I can work with Git version controls</p>
            </div>
          </div>

        </div>

      </div>

      <div className='project'>
        <div className='Container'>
          <h2 className='project-p'><span className='Span-pr'>projects</span><br></br>Check out a few of my recent project.</h2>
          <div className='Img-project'>
            <section>
              <img alt='project' src={project1}></img>
              <div className='text-pr'>
                <h2>Roambi</h2>
                <p>Mobile app for news feed.</p>
              </div>
            </section>
            <section>
              <img alt='project' src={project2}></img>
              <div className='text-pr'>
                <h2>3d ricks</h2>
                <p>Mobile gaming app for kids.</p>
              </div>
            </section>
            <section>
              <img alt='project' src={project3}></img>
              <div className='text-pr'>
                <h2>Bubbles</h2>
                <p>Dark UI Elements</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className='contact'>
        <div className='Container'>
          <h2>Contact Me</h2>
          <p>If you would like to get in touch, feel free to reach out via the following methods:</p>
          <ul>
            <li>Email: <a href="mailto:daniil@example.com">daniil@example.com</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/daniil-trofimov" target="_blank" rel="noopener noreferrer">Daniil Trofimov</a></li>
            <li>GitHub: <a href="https://github.com/daniil-trofimov" target="_blank" rel="noopener noreferrer">github.com/daniil-trofimov</a></li>
          </ul>
        </div>
      </div>

      <div className='footer'>
          <p>2023  Daniil Trofimov. Written using REACT.</p>
          <div className='social'>
            <a href="https://www.facebook.com/daniil.trofimov.10" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
              
            </a>
            <a href="https://www.instagram.com/daniil_trofimov/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
              
            </a>
            <a href="https://www.linkedin.com/in/daniil-trofimov" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
             
            </a>
            <a href="https://github.com/daniil-trofimov" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
              
            </a>
          </div>
      </div>
      
    </div>
  );
} 

export default App;
