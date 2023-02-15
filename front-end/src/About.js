import './About.css'
import img from './assets/image.jpg'
import { useEffect, useState } from 'react'

const About = props => {
  const [desc, setDesc] = useState('')
  const [img, setImg] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    document.title = 'About Us'
    getAboutData()
  }, [])

  const getAboutData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_HOSTNAME}/about`
    )
    const data = await response.json()
    setDesc(data.description)
    setImg(data.imageURL)
    setName(data.name)
    setEmail(data.email)
  }

  return (
    <>
      <h1>Hello, my name is {name}</h1>
      <p className="about-text">
        {/* Description */}
        {desc}
        <br />
        <br />
        Reach out to me <a href={`mailto:${email}`}>here</a>.
      </p>
      {/* Photo */}
      <img src={img} alt="Bishnu" width="200"></img>
    </>
  )
}

export default About
