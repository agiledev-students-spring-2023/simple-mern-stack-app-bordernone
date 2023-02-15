import './About.css'
import img from './assets/image.jpg'

const About = props => {
  return (
    <>
      <h1>Hello, my name is Bishnu</h1>
      <p className="about-text">
        I am a computer science student at New York University Abu Dhabi. I am
        interested in operating systems and software development. <br />
        <br />
        Besides computer science, I am also interested in mathematics and I
        enjoy solving problems. <br />
        <br />
        Reach out to me <a href="mailto:devbishnu2000@gmail.com">here</a>.
      </p>
      {/* Photo */}
      <img src={img} alt="Bishnu" width="200"></img>
    </>
  )
}

export default About
