import React from 'react'
import style from "../Section8/Section8.module.css"
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import Aos from "aos"
import "aos/dist/aos.css"
function Section8() {
    useEffect(()=>{
        Aos.init({duration:3000});
    },[]);      
    return (
        <div>
            <div className={style.background}>
                <div  data-aos="zoom-in" className={style.network}>
                    <div className={style.container}>
                        <div className={style.card}>
                            <div className={style.box}>
                                <div className={style.content}>
                                    <h3>Şəbəkə Həlləri</h3>
                                    <p>İnternetdən səmərli istifadə və lazımsız saytların blok edilməsi. Şirkətlərə fiber optik internetin verilməsi.</p>
                                    <div className={style.links1}>
                                        <NavLink to={"/contact"} >Müraciət edin</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.card}>
                            <div className={style.box}>
                                <div className={style.content}>
                                    <h3>Şəbəkə Həlləri</h3>
                                    <p>Router, Switch, Modem, Access Point və digər qurğuların sazlanması. Printeri ofisdəki bütün işçilər üçün əlçatan etmək.</p>
                                    <NavLink to={"/contact"} >Müraciət edin</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className={style.card}>
                            <div className={style.box}>
                                <div className={style.content}>
                                    <h3>Şəbəkə Həlləri</h3>
                                    <p>Kabel və simsiz üsul ilə lokal şəbəkənin qurulması və ya yaranmış problemin həlli. IP telefon sistemlərinin qurulması.</p>
                                    <div className={style.links2}>
                                        <NavLink to={"/contact"} >Müraciət edin</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.card}>
                            <div className={style.box}>
                                <div className={style.content}>
                                    <h3>Şəbəkə Həlləri</h3>
                                    <p>Firewall cihazlarının quraşdırılması və konfiqurasiya edilərək şəbəkə təhlükəsizliyinin təmin edilməsi.</p>
                                    <div className={style.links3}>
                                        <NavLink to={"/contact"} >Müraciət edin</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.card}>
                            <div className={style.box}>
                                <div className={style.content}>
                                    <h3>Şəbəkə Həlləri</h3>
                                    <p>Kompüter və avadanlıqların xarab olmaması üçün vaxtında profilaktik tədbirlərin görülməsi.Proqram təminatının köklənməsi və yenilənməsi və s .</p>
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

export default Section8