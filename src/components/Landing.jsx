import React from "react";
import LandingImg from '../assets/images/landing.svg' 
const Landing = () => {
  return (
    <div className="container flex flex-col-reverse justify-between items-center lg:flex-row mt-[61px] ">
      <div className="w-[1131px] max-w-full h-full text-center lg:text-right">
        <h3 className="text-[32px] font-bold leading-[51.2px] lg:text-[60px] lg:leading-[96px]"> ماذا نقدم لكم في كويكلي من الخدمات الاكاديمية</h3>
        <p className="text-[16px] text-gray leading-[38.4px] mt-[16px] lg:text-[24px]">
          هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما من سيلهي
          القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع من ما الفقرات في
          الصفحة التي يقرأها
        </p>
        <button className="text-white bg-purple rounded-[10px] w-[192px] text-[20px]  lg:text-[24px] lg:w-[256px] py-[11px] mt-[32px]">
          <a href="#">تواصل معنا</a>
        </button>
      </div>
      <div className="w-full mb-[48px]">
        <img src={LandingImg} alt="landing" className="w-full object-fill"/>
      </div>
    </div>
  );
};

export default Landing;
