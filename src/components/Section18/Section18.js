import React from 'react'
import style from "../Section18/Section18.module.css"
import 'animate.css';
import { useEffect } from 'react';
import Aos from "aos"
import "aos/dist/aos.css"
function Section18() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);  
  return (
    <div className="animate__animated animate__fadeInLeft">
      <div className={style.container}>
        <div className={style.portfoliobg}>
          <div data-aos="fade-right" className={style.text}>
            <h1 className={style.title}>Portfolio</h1>
            <p>axtardığınız xidmət və keyfiyyətin tək ünvanı</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section18