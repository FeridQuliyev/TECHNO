import React from 'react'
import style from "../Section12/Section12.module.css"
import { NavLink } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { useEffect } from 'react';
import Aos from "aos"
import "aos/dist/aos.css"
function Section12() {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
    return (
        <div>
            <div className={style.background}>
                <div  data-aos="zoom-in" className={style.packages}>
                    <div className={style.title}>
                        <h1>MAIL HOSTING PAKETLƏRİ</h1>
                    </div>
                    <div className={style.container}>
                        <div className={style.card}>
                            <div className={style.face} id={style.face1} >
                                <div className={style.content}>
                                    <h1>6.99 AZN</h1>
                                    <div className={style.text}>
                                        <div className={style.icons}>
                                            <div className={style.icon}>
                                                <span><FaCheck /></span>
                                            </div>
                                            <p>LİMİTSİZ SSD SAHƏSİ</p>
                                            <div>
                                            </div>
                                        </div>
                                        <div className={style.icons}>
                                            <div className={style.icon}>
                                                <span><FaCheck /></span>
                                            </div>
                                            <p>LİMİTSİZ TRAFİK</p>
                                            <div>
                                            </div>
                                        </div>
                                        <div className={style.icons}>
                                            <div className={style.icon}>
                                                <span><FaCheck /></span>
                                            </div>
                                            <p>1 DOMEN</p>
                                            <div>
                                            </div>
                                        </div>
                                        <div className={style.icons}>
                                            <div className={style.icon}>
                                                <span><FaCheck /></span>
                                            </div>
                                            <p>LİMİTSİZ SAB-DOMEN</p>
                                            <div>
                                            </div>
                                        </div>
                                        <div className={style.icons}>
                                            <div className={style.icon}>
                                                <span><FaCheck /></span>
                                            </div>
                                            <p>LİMİTSİZ MƏLUMAT BAZASI</p>
                                            <div>
                                            </div>
                                        </div>
                                        <div className={style.icons}>
                                            <div className={style.icon}>
                                                <span><FaCheck /></span>
                                            </div>
                                            <p>LİMİTSİZ E-POÇT HESABI</p>
                                            <div>
                                            </div>
                                        </div>
                                        <div className={style.icons}>
                                            <div className={style.icon}>
                                                <span><FaCheck /></span>
                                            </div>
                                            <p>VEBSAYT KONSTRUKTORU</p>
                                            <div>
                                            </div>
                                        </div>
                                        <div className={style.icons}>
                                            <div className={style.icon}>
                                                <span><FaCheck /></span>
                                            </div>
                                            <p>SİTELOCK MÜHAFİZƏ XİDMƏTİ</p>
                                            <div>
                                            </div>
                                        </div>
                                        <div className={style.icons}>
                                            <div className={style.icon}>
                                                <span><FaCheck /></span>
                                            </div>
                                            <p>1 GB/ps KANAL XƏTTİ</p>
                                            <div>
                                            </div>
                                        </div>
                                    </div>
                                    <NavLink to={"/contact"}>Müraciət edin</NavLink>
                                </div>
                            </div>
                            <div style={{ background: "#228B22" }} className={style.face} id={style.face2}>
                                <h2>Standart</h2>
                            </div>
                        </div>
                        <div className={style.card}>
                            <div className={style.face} id={style.face1} >
                                <div className={style.content}>
                                    <h1>12.00 AZN</h1>
                                    <div className={style.text}>
                                        <div className={style.icons}>
                                            <div className={style.icon}>
                                                <span><FaCheck /></span>
                                            </div>
                                            <p>LİMİTSİZ SSD SAHƏSİ</p>
                                            <div>
                                            </div>
                                        </div>
                                        <div className={style.icons}>
                                            <div className={style.icon}>
                                                <span><FaCheck /></span>
                                            </div>
                                            <p>LİMİTSİZ TRAFİK</p>
                                            <div>
                                            </div>
                                        </div>
                                        <div className={style.icons}>
                                            <div className={style.icon}>
                                                <span><FaCheck /></span>
                                            </div>
                                            <p>3 DOMEN</p>
                                            <div>
                                            </div>
                                        </div>
                                        <div className={style.icons}>
                                            <div className={style.icon}>
                                                <span><FaCheck /></span>
                                            </div>
                                            <p>LİMİTSİZ SAB-DOMEN</p>
                                            <div>
                                            </div>
                                        </div>
                                        <div className={style.icons}>
                                            <div className={style.icon}>
                                                <span><FaCheck /></span>
                                            </div>
                                            <p>LİMİTSİZ MƏLUMAT BAZASI</p>
                                            <div>
                                            </div>
                                        </div>
                                        <div className={style.icons}>
                                            <div className={style.icon}>
                                                <span><FaCheck /></span>
                                            </div>
                                            <p>LİMİTSİZ E-POÇT HESABI</p>
                                            <div>
                                            </div>
                                        </div>
                                        <div className={style.icons}>
                                            <div className={style.icon}>
                                                <span><FaCheck /></span>
                                            </div>
                                            <p>VEBSAYT KONSTRUKTORU</p>
                                            <div>
                                            </div>
                                        </div>
                                        <div className={style.icons}>
                                            <div className={style.icon}>
                                                <span><FaCheck /></span>
                                            </div>
                                            <p>SİTELOCK MÜHAFİZƏ XİDMƏTİ</p>
                                            <div>
                                            </div>
                                        </div>
                                        <div className={style.icons}>
                                            <div className={style.icon}>
                                                <span><FaCheck /></span>
                                            </div>
                                            <p>1 GB/ps KANAL XƏTTİ</p>
                                            <div>
                                            </div>
                                        </div>
                                    </div>
                                    <NavLink to={"/contact"}>Müraciət edin</NavLink>
                                </div>
                            </div>
                            <div style={{ background: "#ffb900" }} className={style.face} id={style.face2}>
                                <h2>Gold</h2>
                            </div>
                        </div>
                        <div className={style.card}>
                            <div className={style.face} id={style.face1} >
                                <div className={style.content}>
                                    <h1>23.99 AZN</h1>
                                    <div className={style.text}>
                                        <div className={style.icons}>
                                            <div className={style.icon}>
                                                <span><FaCheck /></span>
                                            </div>
                                            <p>LİMİTSİZ SSD SAHƏSİ</p>
                                            <div>
                                            </div>
                                        </div>
                                        <div className={style.icons}>
                                            <div className={style.icon}>
                                                <span><FaCheck /></span>
                                            </div>
                                            <p>LİMİTSİZ TRAFİK</p>
                                            <div>
                                            </div>
                                        </div>
                                        <div className={style.icons}>
                                            <div className={style.icon}>
                                                <span><FaCheck /></span>
                                            </div>
                                            <p>LİMİTSİZ DOMEN</p>
                                            <div>
                                            </div>
                                        </div>
                                        <div className={style.icons}>
                                            <div className={style.icon}>
                                                <span><FaCheck /></span>
                                            </div>
                                            <p>LİMİTSİZ SAB-DOMEN</p>
                                            <div>
                                            </div>
                                        </div>
                                        <div className={style.icons}>
                                            <div className={style.icon}>
                                                <span><FaCheck /></span>
                                            </div>
                                            <p>LİMİTSİZ MƏLUMAT BAZASI</p>
                                            <div>
                                            </div>
                                        </div>
                                        <div className={style.icons}>
                                            <div className={style.icon}>
                                                <span><FaCheck /></span>
                                            </div>
                                            <p>LİMİTSİZ E-POÇT HESABI</p>
                                            <div>
                                            </div>
                                        </div>
                                        <div className={style.icons}>
                                            <div className={style.icon}>
                                                <span><FaCheck /></span>
                                            </div>
                                            <p>VEBSAYT KONSTRUKTORU</p>
                                            <div>
                                            </div>
                                        </div>
                                        <div className={style.icons}>
                                            <div className={style.icon}>
                                                <span><FaCheck /></span>
                                            </div>
                                            <p>SİTELOCK MÜHAFİZƏ XİDMƏTİ</p>
                                            <div>
                                            </div>
                                        </div>
                                        <div className={style.icons}>
                                            <div className={style.icon}>
                                                <span><FaCheck /></span>
                                            </div>
                                            <p>1 GB/ps KANAL XƏTTİ</p>
                                            <div>
                                            </div>
                                        </div>
                                    </div>
                                    <NavLink to={"/contact"}>Müraciət edin</NavLink>
                                </div>
                            </div>
                            <div style={{ background: "#001A81" }} className={style.face} id={style.face2}>
                                <h2>Premium</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section12