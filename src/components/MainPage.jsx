import { useState } from "react"
  // import Swiper JS
  import { Swiper, SwiperSlide } from "swiper/react";
  // import Swiper styles
  import "swiper/css";
  import "swiper/css/free-mode";
  import "swiper/css/navigation";
  import "swiper/css/thumbs";
  import { FreeMode, Navigation, Pagination, Thumbs } from "swiper";
import { Footer } from "./Footer";


export const MainPage = () => {
  
    const [showMenu, setShowMenu] = useState(false)
   const [showPopup, setShowPopup] = useState(false)
   const [thumbsSwiper, setThumbsSwiper] = useState(null);

    /* Active link, and remove menu */
/*     const linkAction = ({target}) => {
        const navLink = document.querySelectorAll('.nav__link')
        navLink.forEach(n => n.classList.remove('active'))
        target.classList.add('active')
        setShowMenu(!showMenu)  
    }
        TODAVIA NO ESTA ACTIVADO*/ 
    /* Active and remove menu */
    const handleToggle = () => {
        setShowMenu( !showMenu )  
    }
    const handlePopup = () => {
        setShowPopup( !showPopup )  
    }

    
    const controlImg = () => {
        gsap.from('.islands__subtitle', {opacity: 0, duration: .2, delay: .2, y:-20})
        gsap.from('.islands__title', {opacity: 0, duration: .2, delay: .2, y:-20})
        gsap.from('.islands__description', {opacity: 0, duration: .2, delay: .2, y:-20})
        gsap.from('.islands__button', {opacity: 0, duration: .2, delay: .2, y:-20})
    }



    return (
    /* HEADER */
    <>

    <header className="header">
        <nav className="nav bd-container">
            <a href="" className="nav__logo">Ma<span className="x">X</span>lim</a>
        
            <div className= {`nav__menu ${showMenu ? "show-menu" : ""}`} id="nav-menu">
                <ul className="nav__list">
                    <li className="nav__item"><a href="#island1" className="nav__link">Home</a></li>
                    <li className="nav__item"><a href="#service" className="nav__link">Servicios</a></li>
                    <li className="nav__item"><a href="#whyus" className="nav__link">Nosotros</a></li>
                    <li  className="nav__item"><a href="#metrics" className="nav__link">Experiencia</a></li>
                </ul>
            </div>
             <div onClick={handleToggle} className="nav__toggle" id="nav-toggle">
             <i className='bx bx-menu'></i>
             </div>
        </nav>
    </header>
  {/* MAIN */}
  
    <main className="main">
            <div>
            <Swiper
        spaceBetween={5}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper"
      >

                {/* ISLANDS 1 */}
                <SwiperSlide>
                <section className="islands" id="island1">
                <img src="src\assets\img\opcion3.jpg" alt="" className="islands__bg" />
                <div className="islands__container bd-container">
                    <div className="islands__data">
                        <h2 className="islands__subtitle">Nos encargamos de tu</h2>
                        <h1 className="islands__title">Hogar</h1>
                        <p className="islands__description">Servicio a empresas</p>
                        <a href="" className="islands__button">Explorar<i className='bx bx-right-arrow-alt islands__button-icon'></i></a>
                    </div>

{/*                     <div className="islands__video">
                        <div onClick={handlePopup} className="islands__video-content">
                        <i className='bx bx-play-circle islands__video-icon'></i>
                        </div>
                    </div> */}
                </div>
                </section>
                </SwiperSlide>
              {/* ISLANDS 2 */}
              <SwiperSlide>

               <section className="islands" id="island2">
                <img src="src\assets\img\empresa.jpg" alt="" className="islands__bg" />
                <div className="islands__container bd-container">
                    <div className="islands__data">
                        <h2 className="islands__subtitle">Nos encargamos de tu</h2>
                        <h1 className="islands__title">Empresa</h1>
                        <p className="islands__description">jeje</p>
                        <a href="" className="islands__button">Explorar<i className='bx bx-right-arrow-alt islands__button-icon'></i></a>
                    </div>

{/*                     <div className="islands__video">
                        <div onClick={handlePopup} className="islands__video-content">
                        <i className='bx bx-play-circle islands__video-icon'></i>
                        </div>
                    </div> */}
                </div>
                 </section>
              </SwiperSlide>
               {/* ISLANDS 3 */}
               <SwiperSlide>
                
                <section className="islands" id="island3">
                <img src="src\assets\img\option6.jpg" alt="" className="islands__bg" />
                <div className="islands__container bd-container">
                    <div className="islands__data">
                        <h2 className="islands__subtitle">Nos encargamos de tus</h2>
                        <h1 className="islands__title">Finales de Obra</h1>
                        <p className="islands__description">Servicio a empresas</p>
                        <a href="" className="islands__button">Explorar<i className='bx bx-right-arrow-alt islands__button-icon'></i></a>
                    </div>
                        {/*  PARA HABILITAR LINK A VIDEOS EL DIA DE MAÑANA */}
{/*                     <div className="islands__video">
                        <div onClick={handlePopup} className="islands__video-content">
                        <i className='bx bx-play-circle islands__video-icon'></i>
                        </div>
                    </div> */}
                </div>
                 </section>
               </SwiperSlide>
        </Swiper>
                 {/* ISLANDS POPUP - UNA VEZ ABIERTO */}
                 {/* <div className={`islands__popup ${showPopup ? "show-popup" : ""}`} id="popup">
                    <div>
                        <div onClick={handlePopup} className="islands__popup-close" id="popup-close">
                        <i className='bx bx-x' ></i>
                        </div>

                        <iframe className="islands__popup-video" width="560" height="315" src="https://www.youtube.com/embed/6GBVaHH_6bQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                 </div> */}
            </div>
        {/* CONTROLS */}
        <div className="controls">
            <div className="controls__container">
                <a href="#island1" className="controls__links"><img onClick={controlImg}  href='#' src="src\assets\img\opcion3.jpg" alt="" className="controls__img" /></a>
                <a href="#island2" className="controls__links"><img onClick={controlImg}  src="src\assets\img\empresa.jpg" alt="" className="controls__img" /></a>
                <a href="#island3" className="controls__links"><img onClick={controlImg}  src="src\assets\img\option6.jpg" alt="" className="controls__img" /></a>
            </div>
        </div>
    </main>
    <section className="service container" id="service">
                 <div className="service__container">
                    <div className="service__titles">
                        <h5 className="service__subtitle">A estos nos dedicamos</h5>
                        <h2 className="service__title">Nuestros Servicios</h2>
                    </div>
                    <div className="service__boxs">
                        <div className="service__box">
                            <i className='service__box-img bx bx-map-pin' ></i>
                            <h3 className="service__box-title">Corporate Solution</h3>
                            <p className="service__box-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, quasi illum esse libero eveniet, ab aspernatur aut facilis ex ipsa nisi, debitis consectetur expedita cupiditate dolore dolores tempora commodi pariatur.</p>
                        </div>
                        <div className="service__box">
                            <i className='service__box-img bx bxs-sun'></i>
                            <h3 className="service__box-title">Corporate Solution</h3>
                            <p className="service__box-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, quasi illum esse libero eveniet, ab aspernatur aut facilis ex ipsa nisi, debitis consectetur expedita cupiditate dolore dolores tempora commodi pariatur.</p>
                        </div>
                        <div className="service__box">
                            <i className='service__box-img bx bxs-notepad'></i>
                            <h3 className="service__box-title">Corporate Solution</h3>
                            <p className="service__box-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, quasi illum esse libero eveniet, ab aspernatur aut facilis ex ipsa nisi, debitis consectetur expedita cupiditate dolore dolores tempora commodi pariatur.</p>
                        </div>
                    </div>
                    <button className="service__button">See All Services<i className='bx bx-right-arrow-alt islands__button-icon'></i></button>
                 </div>
    </section>
    <section className="whyus" id="whyus">
        <div className="whyus__container container">
            <div className="whyus__titles">
                <h5 className="whyus__subtitle">Algunas razones</h5>
                <h2 className="whyus__title">Para Elegirnos</h2>
            </div>
            <div className="whyus__boxs">
                    <div className="whyus__box">
                        <h5 className="whyus__box-number">01-</h5>
                        <div className="whyus__box-content">
                        <h3 className="whyus__box-title">High Quality Hardware</h3>
                        <p className="whyus__box-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates labore quis ut architecto voluptatibus sequi excepturi ducimus, cupiditate, error eos molestiae sed laudantium atque quam saepe corporis, libero provident minus.</p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="whyus__box">
                        <h5 className="whyus__box-number">02-</h5>
                    <div className="whyus__box-content">
                        <h3 className="whyus__box-title">High Quality Hardware</h3>
                        <p className="whyus__box-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates labore quis ut architecto voluptatibus sequi excepturi ducimus, cupiditate, error eos molestiae sed laudantium atque quam saepe corporis, libero provident minus.</p>
                    </div>
                    </div>
                    {/*  */}
                    <div className="whyus__box">
                        <h5 className="whyus__box-number">03-</h5>
                        <div className="whyus__box-content">
                        <h3 className="whyus__box-title">High Quality Hardware</h3>
                        <p className="whyus__box-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates labore quis ut architecto voluptatibus sequi excepturi ducimus, cupiditate, error eos molestiae sed laudantium atque quam saepe corporis, libero provident minus.</p>
                        </div>
                    </div>

                {/*  */}

                    <div className="whyus__box">
                        <h5 className="whyus__box-number">04-</h5>
                    
                    <div className="whyus__box-content">
                        <h3 className="whyus__box-title">High Quality Hardware</h3>
                        <p className="whyus__box-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates labore quis ut architecto voluptatibus sequi excepturi ducimus, cupiditate, error eos molestiae sed laudantium atque quam saepe corporis, libero provident minus.</p>
                    </div>
                    </div>
                    {/*  */}
                    <div className="whyus__box">
                        <div className="whyus__box-position">
                        <h5 className="whyus__box-number">05-</h5>
                        </div>
                    <div className="whyus__box-content">
                        <h3 className="whyus__box-title">High Quality Hardware</h3>
                        <p className="whyus__box-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates labore quis ut architecto voluptatibus sequi excepturi ducimus, cupiditate, error eos molestiae sed laudantium atque quam saepe corporis, libero provident minus.</p>
                    </div>
                    </div>
                    {/*  */}
                    <div className="whyus__box">
                        <h5 className="whyus__box-number">06-</h5>
                    <div className="whyus__box-content">
                        <h3 className="whyus__box-title">High Quality Hardware</h3>
                        <p className="whyus__box-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates labore quis ut architecto voluptatibus sequi excepturi ducimus, cupiditate, error eos molestiae sed laudantium atque quam saepe corporis, libero provident minus.</p>
                    </div>
                    </div>
                </div>
        </div>
    </section>
    <section className="metrics container" id="metrics">
        <img className="metrics__img" src="src\assets\img\limp.png" alt="" />
        <div className="metrics__dates">
            <div className="metrics__dates-1">
                <h2 className="metrics__date-number">+20</h2>
                <h3 className="metrics__date-text">Años de experiencia</h3>
            </div>
            <div className="metrics__dates-1">
                <h2 className="metrics__date-number">+100</h2>
                <h3 className="metrics__date-text">Trabajos completados</h3>
            </div>
            <div className="metrics__dates-1">
                <h2 className="metrics__date-number">+10</h2>
                <h3 className="metrics__date-text">Personal capacitado</h3>
            </div>
        </div>
    </section>
    <section className="contact">
        <div className="contact__container container">
            <h2 className="contact__title">Contactanos</h2>
            <div className="contact__content">
                <div className="contact__text">
                <p className="contact__text-subtitle">No dudes en preguntar!</p>
                <ul className="contact__list">
                <li>Presupuesto gratuito</li>
                <li>Dudas o consultas</li>
                <li>Contrataciones</li>
                </ul>
                </div>
                <form className="contact__form" action="">
                    <input type="text" placeholder="Nombre" className="contact__input" />
                    <input type="email" placeholder="Email" className="contact__input" />
                    <textarea placeholder="Dejanos tu consulta!" className="contact__input" />
                </form>
                <button className="contact__button">Enviar</button>
            </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}
