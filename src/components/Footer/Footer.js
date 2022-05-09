import React from 'react'
import style from "../Footer/Footer.module.css"
import { SiFacebook } from 'react-icons/si';
import { GrInstagram } from 'react-icons/gr';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiWhatsapp } from 'react-icons/si';
import { Link } from 'react-router-dom';
function Footer() {

    return (
        <div className={style.container}>
            <div className={style.footers}>
                <div className={style.footer}>
                    <h2>Sürətli keçid</h2>
                    <li><Link to="/">Ana səhifə</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/team">Komandamız</Link></li>
                    <li><Link to="/contact">Əlaqə</Link></li>
                </div>
                <div className={style.footer}>
                    <h2>Dəstək</h2>
                    <li><Link to="/helpdesk" >Help Desk</Link></li>
                    <li><Link to="/network">Şəbəkə Həlləri</Link></li>
                    <li><Link to="/system">Sistem Həlləri</Link></li>
                    <li><Link to="/cloud">Bulud Həlləri</Link></li>
                    <li><Link to="/security">Təhlükəsizlik sistemləri</Link></li>
                </div>
                <div className={style.contact}>
                    <h2>Əlaqə məlumatı</h2>
                    <h1>Ünvan:</h1>
                    <p> Bakı şəh, Nəsimi ray, Şamil Əzizbəyov 140 küç (Jalə Plaza)</p>
                    <h1>Telefon:</h1>
                    <div className={style.phone}><a href="tel:+0553437703">(055) 343-77-03</a></div>
                    <div className={style.phone}><a href="tel:+0553437703">(012) 310-53-03</a></div>
                    <h1>Email:</h1>
                    <div className={style.email}>
                        <a href="mailto:info@technogen.az">info@technogen.az</a>
                    </div>
                </div>
            </div>
            <div className={style.line}>
                <hr></hr>
            </div>
            <div className={style.text}>
                <p>2018-2022 Technogen MMC Bütün hüquqlar qorunur.</p>
            </div>
            <div className={style.icons} >
                <a href='https://www.instagram.com/technogen.az/' target="_blank"><GrInstagram/></a>
                <a href="https://wa.me/<+994553437703>" target="_blank" ><SiWhatsapp/></a>
                <a href='https://www.facebook.com/www.technogen.az/' target="_blank"><SiFacebook/></a>
                <a href='https://www.linkedin.com/' target="_blank"><FaLinkedinIn /></a>
            </div>
        </div>
    )
}
export default Footer