import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../App.css";
import { Autoplay, Pagination, Navigation } from "swiper";

const SliderMain = (props) => {
    return (     
        <div className="main__slider slider">    
            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                {props.sliderList.map(slide =>{
                    return (
                        <SwiperSlide>
                            <div className="slider__container" key={slide.id} style={{backgroundColor: slide.bgcolor}}>
                                <div className="slider__titleBox">
                                    <h1 className="slider__title">
                                        {slide.title}<span> {slide.titleEndBold}</span>                          
                                    </h1>
                                    <p className="slider__txt">
                                        {slide.text}                          
                                    </p>
                                    <button className="slider__btn" type="button">
                                        {slide.button}  
                                        <span> <FontAwesomeIcon icon={faArrowRight}/></span>                          
                                    </button>
                                </div>
                                <div className="slider__imgBox">
                                    <img 
                                        src={slide.image}
                                        alt={slide.name}
                                    />                    
                                </div>                          
                            </div>
                        </SwiperSlide>
                    )
                })}
                </Swiper>
            </>
        </div>
        
    );


                        
}

export default SliderMain;