import React from 'react'
import style from "../Section16/Section16.module.css"
import { FaMapMarkedAlt } from 'react-icons/fa';
import { IoIosCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { SiFacebook } from 'react-icons/si';
import { GrInstagram } from 'react-icons/gr';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiWhatsapp } from 'react-icons/si';
import { useEffect } from 'react';
import Aos from "aos"
import "aos/dist/aos.css"
function Section16() {
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);     
    return (
        <div >
            <div data-aos="fade-up" className={style.background}>
                <div className={style.container}>
                    <div className={style.cards}>
                        <div className={style.card}>
                            <h2><FaMapMarkedAlt /></h2>
                            <div className={style.text}>
                                <h1>ÜNVAN</h1>
                                <p>Bakı şəh, Nəsimi ray, Şamil Əzizbəyov 140 küç (Jalə Plaza)</p>
                            </div>
                        </div>
                        <div className={style.card}>
                            <h2><IoIosCall /></h2>
                            <div className={style.text}>
                                <h1>ƏLAQƏ NÖMRƏSİ</h1>
                                <div className={style.number}>
                                    <p><a href="tel:+994553437703" >(055) 343-77-03</a></p>
                                    <p><a href="tel:+994123105303" >(012) 310-53-03</a></p>
                                </div>
                            </div>
                        </div>
                        <div id={style.card} className={style.card}>
                            <h2><MdEmail /></h2>
                            <div className={style.text}>
                                <h1>EMAIL ADDRESS</h1>
                                <p><a href="mailto:info@technogen.az">info@technogen.az</a></p>
                                <div className={style.links}>
                                    <a href='https://www.instagram.com/technogen.az/' target="_blank"><GrInstagram /></a>
                                    <a href="https://wa.me/<+994553437703>" target="_blank" ><SiWhatsapp/></a>
                                    <a href='https://www.facebook.com/www.technogen.az/' target="_blank"><SiFacebook/></a>
                                    <a href='https://www.linkedin.com/' target="_blank"><FaLinkedinIn /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section16