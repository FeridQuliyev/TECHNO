import React from 'react'
import style from "../Section3/Section3.module.css"
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import john from "../image/john.jpg"
import Aos from "aos"
import "aos/dist/aos.css"
function Section3() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div  >
      <div  data-aos="fade-up-right" className={style.container}>
        <div className={style.text}>
          <h1>Haqqımızda</h1>
        </div>
        <div className={style.section}>
          <div className={style.image}>
            <img src={john} />
          </div>
          <div data-aos="fade-up-left" className={style.text1}>
            <h1>Technogen MMC</h1>
            <p>Technogen MMC 2018-ci ildə yaradılmışdır. İnformasiya Texnologiyaları sahəsində bir çox işlərə imza atmış və əsasən gənclərin İKT sahəsinə olan maraqlarını dəyərləndirərək onların bu sahədə yüksək biliklərə sahib olmasında və karyera qurmasında böyük dəstək göstərmişdir.Bununla yanaşı, bir sıra IT xidmətləri özümüzdə cəmləyərək fərdi və korporativ müştərilərə xidmət göstəririk. Əsas məqsədimiz, göstərdiyimiz xidmətlərin ölkə daxilində ən münasib qiymətə və yüksək keyfiyyətə sahib olmasıdır. Xidmətlərimiz və əməkdaşlarımız haqqında ətraflı məlumatları səhifəmizin digər bölmələrindən əldə edə bilərsiniz. Bizi seçdiyiniz üçün təşəkkür edirik.</p>
            <div className={style.but}>
              <NavLink to={"/contact"} >Müraciət edin</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section3