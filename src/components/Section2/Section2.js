import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import Aos from "aos"
import "aos/dist/aos.css"
import style from "../Section2/Section2.module.css";
function Section2() {
   useEffect(()=>{
       Aos.init({duration:3000});
   },[]); 
    return (
        <div className={style.background}>
            <div data-aos="zoom-in" >
                <div className={style.text}>
                    <h1>Xidmətlərimiz</h1>
                </div>
                <div className={style.container}>
                    <div className={style.card}>
                        <div className={style.box}>
                            <div className={style.content}>
                                <h3>Help Desk</h3>
                                <p>Virusa yoluxmuş kompüter və noutbukların diaqnostikası və həlli. Lokal şəbəkə istifadəçilərinin İnternet şəbəkəsinə mərkəzləşdirilmiş çıxışının təmin olunması.</p>
                                <NavLink to={"/helpdesk"}>Ətraflı</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.box}>
                            <div className={style.content}>
                                <h3>Şəbəkə Həlləri</h3>
                                <p>Router, Switch, Modem, Access Point və digər qurğuların sazlanması. Printeri bütün istifadəçilər üçün əlçatan etmək.IP telefon sistemlərinin qurulması.</p>
                                <NavLink to={"/network"}>Ətraflı</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.box}>
                            <div className={style.content}>
                                <h3>Sistem Həlləri</h3>
                                <p>Server avadanlıqlarının işindəki nasazlıqların aradan qaldırıması üçün təkliflərin hazırlanması.Virtual IT infrastrukturunun qurulması və idarə olunması.</p>
                                <NavLink to={"/system"}>Ətraflı</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.box}>
                            <div className={style.content}>
                                <h3>Bulud  Həllər</h3>
                                <p>Bulud texnologiyası ilə şəxsi və şirkət məlumatlarınızı təhlükəsiz şəkildə saxlayın. Zaman və məkandan asılı olmayaraq məlumatlarınıza sürətli giriş imkanı əldə edin.</p>
                                <div className={style.links}>
                                    <NavLink to={"/cloud"}>Ətraflı</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.box}>
                            <div className={style.content}>
                                <h3>Təhlükəsizlik sistemləri</h3>
                                <p>Nəzarət kameralarının qurulması və texniki dəstək 7/24 səs, video izləmə və həyəcan  sistemlərinin qurulması, smart idarə etmə panellərinin tənzimlənməsi</p>
                                <NavLink to={"/security"}>Ətraflı</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2