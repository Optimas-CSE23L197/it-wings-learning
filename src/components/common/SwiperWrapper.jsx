import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { defaultSwiper } from "../../utils/swiperConfig";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function SwiperWrapper({
    items = [],
    renderItem,
    config = {},
}) {
    const finalConfig = { ...defaultSwiper, ...config };

    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            {...finalConfig}
        >
            {items.map((item, i) => (
                <SwiperSlide key={i}>{renderItem(item)}</SwiperSlide>
            ))}
        </Swiper>
    );
}
