import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import { Link, BrowserRouter as Router } from "react-router-dom";
import portfolio from "../assets/portfolio.svg";
import resume from "../assets/resume.svg";
import "../assets/global.css"
import './App.css' // // Icons made by Freepik from www.flaticon.com

// Icons: https://worldvectorlogo.com/

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 5 + 35}px,${y / 6 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${x / 3 - 250}px,${y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`
const trans5 = (x, y) => `translate3d(${x / 2 + 100}px,${y / 3 + 50}px,0)`
const trans6 = (x, y) => `translate3d(${x / 4 - 200}px,${y / 6 - 20}px,0)`

 export default function Card() {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  return (
    <>
    <Router>
    <div class="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>


    <div id='page-landing'>
        <div id='page-landing-content' className='container'>
          <div className='buttons-container'>
            <Link to='/study' className='study'>
              <img src={resume} alt='Resumé' />
              Resumé
            </Link>
            <Link to='/give-classes' className='give-classes'>
              <img src={portfolio} alt='Portfolio' />
              Portfolio
            </Link>
          </div>
        </div>
      </div>
<animated.div class="card1" style={{ transform: props.xy.interpolate(trans1) }} />
<animated.div class="card2" style={{ transform: props.xy.interpolate(trans2) }} />
<animated.div class="card3" style={{ transform: props.xy.interpolate(trans3) }} />
<animated.div class="card4" style={{ transform: props.xy.interpolate(trans4) }} />
<animated.div class="card5" style={{ transform: props.xy.interpolate(trans5) }} />
<animated.div class="card6" style={{ transform: props.xy.interpolate(trans6) }} />
    </div>
      </Router>
    </>
  )

}

ReactDOM.render(<Card />, document.getElementById('root'))
