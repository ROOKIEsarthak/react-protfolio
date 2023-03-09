import React ,{useState,useEffect} from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
 } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

  const effect=()=>{
    setTimeout(()=>{
    setLetterClass("text-animate-hover")
    },3000
    )
    }

  useEffect(() => {
    return (effect())
  },[])

  const handleClick = (e) => {
    e.preventDefault()
    window.open("https://drive.google.com/file/d/1COAXugtreesnlGqN3-xBtgwktpdbWJtk/view?usp=share_link")
  }

  return (
    <>
      <div className='container about-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray = {['A','b','o','u','t',' ','M','e']}
              idx={15}
            />
          </h1>
            <p>
              I'm a very ambitious front-end developer looking for a role in an
              established IT company with the opportunity to work with the latest
              technologies on challenging and diverse projects.
            </p>
            <p align="LEFT">
              I'm quiet confident, naturally curious, and perpetually working on
              improving my chops one design problem at a time.
            </p>
            <p>
              If I need to define myself in one sentence that would be a family
              person, Budding Engineer, a Sports Fanatic,
              Competitive PC Gamer, and Tech-Obsessed!!!
            </p>
            <p>
              Just an expression of my CSS, JavaScript, and React.js skills. 
              Please take a look at it and recommend me any changes or suggestions.
            </p>
        </div>

        <div >
          <button className='resume-btn-container' onClick={handleClick}> Check out my Resume !! </button>

        </div>


        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faHtml5} color="#FO6529"/>
            </div>
            <div className='face3'>
              <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
            </div>
            <div className='face6'>
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
            </div>

          </div>

        </div>

      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About