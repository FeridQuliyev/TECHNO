import React from 'react'
import style from "../Section14/Section14.module.css"
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import Aos from "aos"
import "aos/dist/aos.css"
function Section14() {
    useEffect(()=>{
        Aos.init({duration:3000});
    },[]);     
    return (
        <div>
            <div className={style.background}>
                <div data-aos="zoom-in" className={style.security}>
                    <div className={style.container}>
                        <div className={style.card}>
                            <div className={style.box}>
                                <div className={style.content}>
                                    <h3>TƏHLÜKƏSİZLİK SİSTEMLƏRİ</h3>
                                    <p>Nəzarət kameralarının qurulması və texniki dəstək Domofon sistemlərinin qurulması və texniki dəstək</p>
                                    <div>
                                        <NavLink to={"/contact"}>Müraciət edin</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.card}>
                            <div className={style.box}>
                                <div className={style.content}>
                                    <h3>TƏHLÜKƏSİZLİK SİSTEMLƏRİ</h3>
                                    <p>Turniket,şlaqbaum,tumba və təkər kəsicilərin quraşdırılması və naəzarət</p>
                                    <div className={style.links1}>
                                        <NavLink to={"/contact"}>Müraciət edin</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.card}>
                            <div className={style.box}>
                                <div className={style.content}>
                                    <h3>TƏHLÜKƏSİZLİK SİSTEMLƏRİ</h3>
                                    <p>7/24 səs ,video izləmə və həyəcan  sistemlərinin qurulması, smart idarə etmə panellərinin tənzimlənməsi</p>
                                    <div className={style.links2}>
                                        <NavLink to={"/contact"}>Müraciət edin</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.card}>
                            <div className={style.box}>
                                <div className={style.content}>
                                    <h3>TƏHLÜKƏSİZLİK SİSTEMLƏRİ</h3>
                                    <p>RFİD və biometrik oxuyucu,identifikator,interkom və.s Giriş kontrolerləri və oxuyucuların quraşdırılması</p>
                                    <NavLink to={"/contact"}>Müraciət edin</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className={style.card}>
                            <div className={style.box}>
                                <div className={style.content}>
                                    <h3>TƏHLÜKƏSİZLİK SİSTEMLƏRİ</h3>
                                    <p>İntellektual nəzarət və qeydiyyat sitemləri
                                        *CISCO Meraki
                                        *AXIS
                                        *ZIPATO</p>
                                  <div className={style.links3}>
                                  <NavLink to={"/contact"}>Müraciət edin</NavLink>     
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

export default Section14