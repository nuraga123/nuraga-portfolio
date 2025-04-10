import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import PortfolioSliderItem from "./Item";
import { useMediaQuery } from "@/hooks/useWindowWidth";

interface IPortfolioSlider {
  tabItems: {
    id: number;
    img: string;
    link: string;
    title: string;
  }[];
}

const PortfolioSlider = ({ tabItems }: IPortfolioSlider) => {
  const isMobile800 = useMediaQuery(800);
  const isMobile485 = useMediaQuery(485);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Swiper
        modules={[Autoplay]}
        spaceBetween={isMobile485 ? 30 : 40}
        slidesPerView={isMobile800 ? 1.5 : 2.5}
        loop={true}
        freeMode={true}
        grabCursor={true}
        speed={25000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
      >
        {tabItems.map((item) => (
          <SwiperSlide key={item.id}>
            <PortfolioSliderItem
              title={item.title}
              imgSrc={item.img}
              link={item.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default PortfolioSlider;
