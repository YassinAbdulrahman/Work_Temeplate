import React, { useState } from "react";
import BoxServices from "./BoxServices";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";


export const Services = () => {
  const [items, setItems] = useState([
    {
      icon: "search.svg",
      title: "كتابة البحوث",
    },
    {
      icon: "secondsrv.svg",
      title: "كتابة المقالات",
    },
    {
      icon: "thiredsrv.svg",
      title: "اعداد المشاريع والبروجكتات",
    },
    {
      icon: "fourthsrv.svg",
      title: "عمل بروفريدينق ومراجعة وادقيق للكتابة",
    },
    {
      icon: "fifithsrv.svg",
      title: "دروس خصوصية اونلاين",
    },
    {
      icon: "lastsrv.svg",
      title: "المساعدة في كتابة رسائل الماجستر والدكتورة وكتابة الديزرتيشن ",
    },
  ]);
  return (
    <section className="lg:container mt-[157px] mx-auto mb-[300px]">
      <div className="h-[285px] bg-purple lg:rounded-[20px]">
        <h3 className="text-[24px] leading-[32px] pt-[48px] font-bold text-white text-center lg:text-[48px] lg:leading-[76px] lg:pt-[64px]">
          الخدمات التي تقدمها الاكاديمية
        </h3>
        <div className="hidden lg:flex justify-center items-center gap-[10px] pt-[32px] pr-[20px] pl-[20px]">
          {items.map((item , index) => (
            <BoxServices item={item} key={index}/>
          ))}
        </div>
        <div className="lg:hidden pr-[17px]">
          <Swiper
            spaceBetween={-70}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="swiper"
          >
            {items.map((item , index) => {
              return (
                <SwiperSlide key={index} className="swiperslide">
                  <BoxServices item={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
