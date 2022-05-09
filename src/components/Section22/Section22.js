import React from 'react'
import style from "../Section22/Section22.module.css"
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import Aos from "aos"
import "aos/dist/aos.css"
function Section22() {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
    return (
        <div>
            <div className={style.background}>
                <div data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className={style.cards}>
                    <div className={style.card}>
                        <div className={style.info}>
                            <div className={style.name}>Təvəkkül Babaşov</div>
                            <div className={style.prof}>Maliyyə Rəhbəri</div>
                            <div className={style.divider}></div>
                            <div className={style.bio} >
                                <p>Maliyyə prosesi, əsasən, fiziki və hüquqi şəxslərin banka əmanət yerləşdirməsi vasitəsilə işləyir.</p>
                            </div>
                            <NavLink to={"/contact"} className={style.but}>Müraciət edin</NavLink>
                        </div>
                        <div className={style.photo1}></div>
                        <div className={style.channel}>
                            <a  >Maliyyə Rəhbəri</a>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.info}>
                            <div className={style.name}>Elvira Nəzərova</div>
                            <div className={style.prof}>İnsan Resursları</div>
                            <div className={style.divider}></div>
                            <div className={style.bio} >
                                <p>İnsan Resursları İdarəetməsi şirkətin məqsədi və strategiyasını müəyyənləşdirməklə başlayır. İnsan bir qaynaqdır, nəticə deyil.</p>
                            </div>
                            <NavLink to={"/contact"} className={style.but}>Müraciət edin</NavLink>
                        </div>
                        <div className={style.photo2}></div>
                        <div className={style.channel}>
                            <a href='#' >İnsan Resursları</a>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.info}>
                            <div className={style.name}>Murad Yazımov</div>
                            <div className={style.prof}>SMM Mütəxəssisi</div>
                            <div className={style.divider}></div>
                            <div className={style.bio} >
                                <p>Sosial şəbəkələrdə tanıtım, hədəf auditoriyanı hədəfli şəkildə təsir etməyə</p>
                            </div>
                            <NavLink to={"/contact"} className={style.but}>Müraciət edin</NavLink>
                        </div>
                        <div className={style.photo3}></div>
                        <div className={style.channel}>
                            <a >SMM Mütəxəssisi</a>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.info}>
                            <div className={style.name}>Jalə Nağıyeva</div>
                            <div className={style.prof}>Qrafik Dizayner</div>
                            <div className={style.divider}></div>
                            <div className={style.bio} >
                                <p>Qrafik dizaynerlər reklam sahələrində, 3D sahələrində, moda sahəsində - dizayn ilə bağlı bütün sahələrdə yer alırlar.</p>
                            </div>
                            <NavLink to={"/contact"} className={style.but}>Müraciət edin</NavLink>
                        </div>
                        <div className={style.photo4}></div>
                        <div className={style.channel}>
                            <a>Qrafik Dizayner</a>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.info}>
                            <div className={style.name}>Fidan Bünyadzadə</div>
                            <div className={style.prof}>Menecer</div>
                            <div className={style.divider}></div>
                            <div className={style.bio} >
                                <p>İnzibati-təsərrüfat müstəqilliyinə malik olan istehsalın, satışın, servisin təşkili və idarə edilməsi üzrə professional şəxslər menecerlər adlanır. </p>
                            </div>
                            <NavLink to={"/contact"} className={style.but}>Müraciət edin</NavLink>
                        </div>
                        <div className={style.photo5}></div>
                        <div className={style.channel}>
                            <a>Menecer</a>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.info}>
                            <div className={style.name}>Rasim Hümbətov</div>
                            <div className={style.prof}>IT Mütəxəssisi</div>
                            <div className={style.divider}></div>
                            <div className={style.bio} >
                                <p>Helpdesk şirkət daxilində IT məsələlərini həll etməyə köməklik göstərən bir şöbədir.</p>
                            </div>
                            <NavLink to={"/contact"} className={style.but}>Müraciət edin</NavLink>
                        </div>
                        <div className={style.photo6}></div>
                        <div className={style.channel}>
                            <a>IT Mütəxəssisi</a>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.info}>
                            <div className={style.name}>Rasim Hümbətov</div>
                            <div className={style.prof}>IT Mütəxəssisi</div>
                            <div className={style.divider}></div>
                            <div className={style.bio} >
                                <p>Helpdesk şirkət daxilində IT məsələlərini həll etməyə köməklik göstərən bir şöbədir.</p>
                            </div>
                            <NavLink to={"/contact"} className={style.but}>Müraciət edin</NavLink>
                        </div>
                        <div className={style.photo7}></div>
                        <div className={style.channel}>
                            <a>IT Mütəxəssisi</a>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.info}>
                            <div className={style.name}>Rasim Hümbətov</div>
                            <div className={style.prof}>IT Mütəxəssisi</div>
                            <div className={style.divider}></div>
                            <div className={style.bio} >
                                <p>Helpdesk şirkət daxilində IT məsələlərini həll etməyə köməklik göstərən bir şöbədir.</p>
                            </div>
                            <NavLink to={"/contact"} className={style.but}>Müraciət edin</NavLink>
                        </div>
                        <div className={style.photo8}></div>
                        <div className={style.channel}>
                            <a>IT Mütəxəssisi</a>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.info}>
                            <div className={style.name}>Rasim Hümbətov</div>
                            <div className={style.prof}>IT Mütəxəssisi</div>
                            <div className={style.divider}></div>
                            <div className={style.bio} >
                                <p>Helpdesk şirkət daxilində IT məsələlərini həll etməyə köməklik göstərən bir şöbədir.</p>
                            </div>
                            <NavLink to={"/contact"} className={style.but}>Müraciət edin</NavLink>
                        </div>
                        <div className={style.photo9}></div>
                        <div className={style.channel}>
                            <a>IT Mütəxəssisi</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section22