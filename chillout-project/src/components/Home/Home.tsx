import React, { FC } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper"
import photoSlide1 from "../../assets/imgs/slider1.jpg"

import "./home.scss"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/autoplay"
import "swiper/css/pagination"

const MainContent: FC = () => {
    return (
        <div className="home">
            <div className="home__title">Developer - Alexey3113</div>
            <div className="home__content">
                <div className="home__swiper">
                    <Swiper
                        modules={[Navigation, Autoplay, Pagination]}
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination
                        autoplay
                        navigation
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log("slide change")}
                    >
                        <SwiperSlide>
                            <div className="slide">
                                <div className="slide__text">
                                    Очень интересные проекты и качественная
                                    реализация кода. Использование современных
                                    технологий таких, как React JS, Typescript,
                                    Sass, HTML5, CSS3
                                </div>
                                <div className="slide__img">
                                    {" "}
                                    <img src={photoSlide1} alt="programming1" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide">
                                <div className="slide__text">
                                    Очень интересные проекты и качественная
                                    реализация кода. Использование современных
                                    технологий таких, как React JS, Typescript,
                                    Sass, HTML5, CSS3
                                </div>
                                <div className="slide__img">
                                    {" "}
                                    <img src={photoSlide1} alt="programming1" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide">
                                <div className="slide__text">
                                    Очень интересные проекты и качественная
                                    реализация кода. Использование современных
                                    технологий таких, как React JS, Typescript,
                                    Sass, HTML5, CSS3
                                </div>
                                <div className="slide__img">
                                    {" "}
                                    <img src={photoSlide1} alt="programming1" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide">
                                <div className="slide__text">
                                    Очень интересные проекты и качественная
                                    реализация кода. Использование современных
                                    технологий таких, как React JS, Typescript,
                                    Sass, HTML5, CSS3
                                </div>
                                <div className="slide__img">
                                    {" "}
                                    <img src={photoSlide1} alt="programming1" />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="home__skills">
                    <div className="home__skills_item">
                        <div className="home__skills_item_img"></div>
                        <div className="home__skills_item_title">Качество</div>
                        <div className="home__skills_item_text">
                            Наше качество превыше всего! Оно позволяет выполнять
                            проекты качественно!
                        </div>
                    </div>
                    <div className="home__skills_item">
                        <div className="home__skills_item_img"></div>
                        <div className="home__skills_item_title">Скорость</div>
                        <div className="home__skills_item_text">
                            Наше качество превыше всего! Оно позволяет выполнять
                            проекты качественно!
                        </div>
                    </div>
                    <div className="home__skills_item">
                        <div className="home__skills_item_img"></div>
                        <div className="home__skills_item_title">Польза</div>
                        <div className="home__skills_item_text">
                            Наше качество превыше всего! Оно позволяет выполнять
                            проекты качественно!
                        </div>
                    </div>
                    <div className="home__skills_item">
                        <div className="home__skills_item_img"></div>
                        <div className="home__skills_item_title">
                            Уверенность
                        </div>
                        <div className="home__skills_item_text">
                            Наше качество превыше всего! Оно позволяет выполнять
                            проекты качественно!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent
