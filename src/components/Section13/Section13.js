import React from 'react'
import style from "../Section13/Section13.module.css"
import 'animate.css';
import { useEffect } from 'react';
import Aos from "aos"
import "aos/dist/aos.css"
function Section13() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
      }, []);    
    return (
        <div className="animate__animated animate__fadeInLeft">
            <div className={style.container}>
                <div className={style.securitybg} >
                    <div data-aos="fade-right" className={style.text}>
                        <h1 className={style.title}>TƏHLÜKƏSİZLİK SİSTEMLƏRİ</h1>
                       <p>axtardığınız xidmət və keyfiyyətin tək ünvanı</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section13