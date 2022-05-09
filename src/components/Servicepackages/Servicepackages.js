import React from 'react'
import style from "../Servicepackages/Servicepackages.module.css"
import { NavLink } from 'react-router-dom';
import { GiShakingHands } from 'react-icons/gi';
import { FaCheck } from 'react-icons/fa';
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
function Servicepackages() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div data-aos="fade-down-right">
            <div className={style.packages}>
                <div className={style.title}>
                    <h1>Xidmət Paketləri</h1>
                </div>
                <div className={style.container}>
                    <div className={style.card}>
                        <div className={style.face} id={style.face1} >
                            <div className={style.content}>
                                <h1>300 AZN</h1>
                                <div className={style.text}>
                                    <div className={style.icons}>
                                        <div className={style.icon}>
                                            <span><FaCheck /></span>
                                        </div>
                                        <p>HELPDESK DƏSTƏYİ </p>
                                        <div>
                                        </div>
                                    </div>
                                    <div className={style.icons}>
                                        <div className={style.icon}>
                                            <span><FaCheck /></span>
                                        </div>
                                        <p>MƏSAFƏDƏN DƏSTƏK</p>
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
                                <h1>450 AZN</h1>
                                <div className={style.text}>
                                    <div className={style.icons}>
                                        <div className={style.icon}>
                                            <span><FaCheck /></span>
                                        </div>
                                        <p>HELPDESK DƏSTƏYİ </p>
                                        <div>
                                        </div>
                                    </div>
                                    <div className={style.icons}>
                                        <div className={style.icon}>
                                            <span><FaCheck /></span>
                                        </div>
                                        <p>MƏSAFƏDƏN DƏSTƏK</p>
                                        <div>
                                        </div>
                                    </div>
                                    <div className={style.icons}>
                                        <div className={style.icon}>
                                            <span><FaCheck /></span>
                                        </div>
                                        <p>Şəbəkə Dəstəyi</p>
                                        <div>
                                        </div>
                                    </div>
                                </div>
                                <NavLink to={"/contact"}>Müraciət edin</NavLink>
                            </div>
                        </div>
                        <div style={{ background: "#ebc700" }} className={style.face} id={style.face2}>
                            <h2>Gold</h2>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.face} id={style.face1} >
                            <div className={style.content}>
                                <h1>600 AZN</h1>
                                <div className={style.text}>
                                    <div className={style.icons}>
                                        <div className={style.icon}>
                                            <span><FaCheck /></span>
                                        </div>
                                        <p>HELPDESK DƏSTƏYİ </p>
                                        <div>
                                        </div>
                                    </div>
                                    <div className={style.icons}>
                                        <div className={style.icon}>
                                            <span><FaCheck /></span>
                                        </div>
                                        <p>MƏSAFƏDƏN DƏSTƏK</p>
                                        <div>
                                        </div>
                                    </div>
                                    <div className={style.icons}>
                                        <div className={style.icon}>
                                            <span><FaCheck /></span>
                                        </div>
                                        <p>SİSTEM DƏSTƏYİ </p>
                                        <div>
                                        </div>
                                    </div>
                                    <div className={style.icons}>
                                        <div className={style.icon}>
                                            <span><FaCheck /></span>
                                        </div>
                                        <p>ŞƏBƏKƏ DƏSTƏYİ</p>
                                        <div>
                                        </div>
                                    </div>
                                </div>
                                <NavLink to={"/contact"}>Müraciət edin</NavLink>
                            </div>
                        </div>
                        <div style={{ background: "#191970" }} className={style.face} id={style.face2}>
                            <h2>Premium</h2>
                        </div>
                    </div>
                    <div className={style.platinum}>
                    <div className={style.card}>
                        <div className={style.face} id={style.face1} >
                            <div className={style.content}>
                                <h1>750 AZN</h1>
                                <div className={style.text}>
                                    <div className={style.icons}>
                                        <div className={style.icon}>
                                            <span><FaCheck /></span>
                                        </div>
                                        <p>HELPDESK DƏSTƏYİ </p>
                                        <div>
                                        </div>
                                    </div>
                                    <div className={style.icons}>
                                        <div className={style.icon}>
                                            <span><FaCheck /></span>
                                        </div>
                                        <p>ŞƏBƏKƏ DƏSTƏYI</p>
                                        <div>
                                        </div>
                                    </div>
                                    <div className={style.icons}>
                                        <div className={style.icon}>
                                            <span><FaCheck /></span>
                                        </div>
                                        <p>SİSTEM DƏSTƏYI</p>
                                        <div>
                                        </div>
                                    </div>
                                    <div className={style.icons}>
                                        <div className={style.icon}>
                                            <span><FaCheck /></span>
                                        </div>
                                        <p>MƏSAFƏDƏN DƏSTƏK</p>
                                        <div>
                                        </div>
                                    </div>
                                    <div className={style.icons}>
                                        <div className={style.icon}>
                                            <span><FaCheck /></span>
                                        </div>
                                        <p>Monitorinq</p>
                                        <div>
                                        </div>
                                    </div>
                                </div>
                                <NavLink to={"/contact"}>Müraciət edin</NavLink>
                            </div>
                        </div>
                        <div style={{ background: "#BCC0BF" }} className={style.face} id={style.face2}>
                            <h2>Platinum</h2>
                        </div>
                    </div>
                    <div id={style.out} className={style.card}>
                        <div className={style.face} id={style.face1} >
                            <div className={style.content}>
                                <h1 className={style.king}><GiShakingHands /></h1>
                                <div className={style.text}>
                                    <div className={style.icons}>
                                        <div className={style.icon}>
                                            <span><FaCheck /></span>
                                        </div>
                                        <div className={style.titletext}>
                                            <p>Yalnız korparativ </p>
                                            <p>müştərilər üçün</p>
                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                </div>
                                <NavLink to={"/contact"}>Müraciət edin</NavLink>
                            </div>
                        </div>
                        <div style={{ background: "#800000" }} className={style.face} id={style.face2}>
                            <h2>Enterprise</h2>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Servicepackages
