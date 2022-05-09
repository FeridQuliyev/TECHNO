import React from 'react'
import style from "../Section10/Section10.module.css"
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import Aos from "aos"
import "aos/dist/aos.css"
function Section10() {
    useEffect(()=>{
        Aos.init({duration:3000});
    },[]);      
    return (
        <div>
            <div className={style.background}>
                <div data-aos="zoom-in"  className={style.system}>
                    <div className={style.container}>
                        <div className={style.card}>
                            <div className={style.box}>
                                <div className={style.content}>
                                    <h3>Sistem Həlləri</h3>
                                    <p>Server infrastrukturunun qurulması və tənzimlənməsi.Məlumatların və sistem proqram təminatının ehtiyat surətlərinin çıxarılması.</p>
                                    <div className={style.links1}>
                                        <NavLink to={"/contact"} >Müraciət edin</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.card}>
                            <div className={style.box}>
                                <div className={style.content}>
                                    <h3>Sistem Həlləri</h3>
                                    <p>Server avadanlıqlarının işindəki nasazlıqların aradan qaldırıması üçün təkliflərin hazırlanması.Server nasazlıqlarının diaqnostikası.</p>
                                    <NavLink to={"/contact"} >Müraciət edin</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className={style.card}>
                            <div className={style.box}>
                                <div className={style.content}>
                                    <h3>Sistem Həlləri</h3>
                                    <p>1C və Billsoft proqram təminatınn quraşdırılması və texniki dəstəyi.Virtual IT infrastrukturunun qurulması və idarə olunması.</p>
                                    <div className={style.links2}>
                                        <NavLink to={"/contact"} >Müraciət edin</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.card}>
                            <div className={style.box}>
                                <div className={style.content}>
                                    <h3>Sistem Həlləri</h3>
                                    <p>Server avadanlıqlarına müntəzəm texniki xidmətin göstərilməsi. </p>
                                    <NavLink to={"/contact"} >Müraciət edin</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className={style.card}>
                            <div className={style.box}>
                                <div className={style.content}>
                                    <h3>Sistem Həlləri</h3>
                                    <p>ERP/CRM proqram təminatınn quraşdırılması və texniki dəstəyi.</p>
                                    <NavLink to={"/contact"} >Müraciət edin</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section10