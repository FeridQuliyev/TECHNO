import React from 'react'
import style from "../Section9/Section9.module.css"
import 'animate.css';
import { useEffect } from 'react';
import Aos from "aos"
import "aos/dist/aos.css"
function Section9() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div className="animate__animated animate__fadeInLeft">
            <div className={style.container}>
                <div data-aos="fade-right" className={style.text}>
                    <h1 className={style.title}>SİSTEM HƏLLƏRİ</h1>
                    <p>axtardığınız xidmət və keyfiyyətin tək ünvanı</p>
                </div>
            </div>
        </div>
    )
}

export default Section9