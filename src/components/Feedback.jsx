// Import Swiper React components
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import "../slider.css"
function Feedback() {
  const [items, setItems] = useState([
    {
      icon: "feedbackname.svg",
      title:
        "هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما،بعض النوادر أو الكلمات",
    },
    {
      icon: "feedbackname.svg",
      title:
        "هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما،بعض النوادر أو الكلمات",
    },
    {
      icon: "feedbackname.svg",
      title:
        "هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما،بعض النوادر أو الكلمات",
    },
    {
      icon: "feedbackname.svg",
      title:
        "هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما،بعض النوادر أو الكلمات",
    },
    {
      icon: "feedbackname.svg",
      title:
        "هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما،بعض النوادر أو الكلمات",
    },
    {
      icon: "feedbackname.svg",
      title:
        "هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما،بعض النوادر أو الكلمات",
    },
    {
      icon: "feedbackname.svg",
      title:
        "هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما،بعض النوادر أو الكلمات",
    },
    {
      icon: "feedbackname.svg",
      title:
        "هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما،بعض النوادر أو الكلمات",
    },
    {
      icon: "feedbackname.svg",
      title:
        "هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما،بعض النوادر أو الكلمات",
    },
  ]);
  return (
    <section className="relative container pb-[100px]">
      <h3 className="text-blue text-center font-extrabold leading-[76px] mb-[32px] text-[24px] lg:text-[48px]">
        اراء العملاء عننا
      </h3>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".review-swiper-button-next",
          prevEl: ".review-swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          1400:{
            slidesPerView: 4,
            spaceBetween: 16,
          }
        }}
        className="mySwiper"
      >
        {items.map((items, index) => {
          return (
            <SwiperSlide
              key={index}
              className="slide border-[1px] border-[#EDF0F5] border-solid rounded-[10px] pt-[16px] pl-[26px] pr-[16px] pb-[16px]"
            >
              <p className="text-right text-[16px] lg:text-[20px] leading-[32px] text-gray pb-[16px]">
                {items.title}
              </p>
              <div className="flex items-center gap-[8px]">
                <img
                  src={`/src/assets/images/${items.icon}`}
                  alt="feedbackname"
                  className="object-contain w-[48px] lg:w-[60px]"
                />
                <span className="text-blue text-[18px] lg:text-[20px] leading-[25.6px] font-bold">
                  عاصم سيف الدبعي
                </span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <i className="icon-arrow-long-right review-swiper-button-next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="16"
          viewBox="0 0 10 16"
          fill="none"
        >
          <path
            d="M1.43555 14.9172L8.03555 8.29844L1.43555 1.67969"
            stroke="#423064"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </i>
      <i className="icon-arrow-long-left review-swiper-button-prev">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="16"
          viewBox="0 0 10 16"
          fill="none"
        >
          <path
            d="M8.56445 1.0828L1.96445 7.70156L8.56445 14.3203"
            stroke="#423064"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </i>
    </section>
  );
}

export default Feedback;
