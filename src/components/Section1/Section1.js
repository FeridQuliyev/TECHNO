import React from 'react'
import { useEffect } from 'react';
import Aos from "aos"
import "aos/dist/aos.css"
import style from "../Section1/Section1.module.css"
import 'animate.css';
function Section1() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="animate__animated animate__fadeInLeft">
      <div className={style.container}>
        <div className={style.homeintro}>
          <div data-aos="fade-right" className={style.text}>
            <h1 className={style.title}>Technogenə xoş gəldiniz !</h1>
            <p>axtardığınız xidmət və keyfiyyətin tək ünvanı</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Section1