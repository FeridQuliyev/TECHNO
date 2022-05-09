import React from 'react'
import style from "../Section6/Section6.module.css"
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import Aos from "aos"
import "aos/dist/aos.css"
function Section6() {
    useEffect(()=>{
        Aos.init({duration:3000});
    },[]);    
    return (
        <div>
            <div className={style.background}>
                <div  data-aos="zoom-in" className={style.helpdesk}>
                    <div className={style.container}>
                        <div className={style.card}>
                            <div className={style.box}>
                                <div className={style.content}>
                                    <h3>Help desk</h3>
                                    <p>Kompüterlərin köklənməsi və avadanlıqların yenilənməsi. Kompüterlərin və çap alətlərinin (printer, skaner, faks və s.) operativ təmiri və dəyişdirilməsi.</p>
                                    <div className={style.links}>
                                        <NavLink to={"/contact"} >Müraciət edin</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.card}>
                            <div className={style.box}>
                                <div className={style.content}>
                                    <h3>Help desk</h3>
                                    <p>Virusa yoluxmuş kompüter və noutbukların diaqnostikası və həlli. Lokal şəbəkə istifadəçilərinin İnternet şəbəkəsinə mərkəzləşdirilmiş çıxışını təmin etmək.</p>
                                    <NavLink to={"/contact"} >Müraciət edin</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className={style.card}>
                            <div className={style.box}>
                                <div className={style.content}>
                                    <h3>Help desk</h3>
                                    <p>Kompüter və avadanlıqların xarab olmaması üçün vaxtında profilaktik tədbirlərin görülməsi. Proqram təminatının köklənməsi, yenilənməsi və s.</p>
                                    <div className={style.links1}>
                                        <NavLink to={"/contact"} >Müraciət edin</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section6