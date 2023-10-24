import React from 'react'
import FooterImg from '../assets/images/Footer.svg'
import Telephone from '../assets/icon/telephone.svg'
import Mail from '../assets/icon/mail.svg'
import Facebookfooter from '../assets/icon/facebookfooter.svg'
function Footer() {
  return (
    <footer className='text-right bg-purple rounded-t-[40px] lg:h-[443px] pb-[24px] pt-[48px]'>
      <div className='container flex justify-between align-center flex-wrap border-b-[2px] border-solid border-white pb-[49px]'>
      <div className='mb-[24px]'>
        <img src={FooterImg} alt="Footer" className='w-[296px] lg:w-full mb-[18.35px]'/>
        <p className='text-[20px] lg:text-[24px] leading-[38.4px] lg:leading-[36px] text-greenlight font-light w-[353px] max-w-full lg:w-[379px]'>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما من سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع من ما </p>
       </div>
       <ul className='text-greenlight font-normal'>
         <h3 className='text-[20px] lg:text-[24px] text-greenlight font-bold pb-[16px]'>روابط</h3>
         <li className='pb-[12px] lg:pb-[16px]  text-[16px] lg:text-[24px]'>عننا</li>
         <li className='pb-[12px] lg:pb-[16px]  text-[16px] lg:text-[24px]'>خدمات الاكاديمية</li>
         <li className='pb-[12px] lg:pb-[16px]  text-[16px] lg:text-[24px]'>اراء العملاء</li>
         <li className='pb-[12px] lg:pb-[16px] text-[16px]'>تواصل معنا</li>
       </ul>
       <ul>
         <h3 className='text-[20px] lg:text-[24px] text-greenlight font-bold pb-[16px] pt-[24px] lg:pt-[0px]'>روابط التواصل</h3>
         <li className='pb-[16px]'><a href="#" className='flex items-center gap-[12px]'><img src={Telephone} alt="telephone" className='w-[24px]' /><span className='font-normal text-[20px] lg:text-[24px] leading-[38.4px] text-greenlight'>00967770536980</span></a></li>
         <li className='pb-[16px]'><a href="#" className='flex items-center gap-[12px]'><img src={Mail} alt="mail" /><span className='font-normal text-[20px] lg:text-[24px] leading-[38.4px] text-greenlight'>asem73739@gmail.com</span></a></li>
         <li><a href="#" className='flex items-center gap-[12px]'><img src={Facebookfooter} alt="facebookfooter" /><span className='font-normal text-[20px] lg:text-[24px] leading-[38.4px] text-greenlight'>كويكلي للخدمات الاكاديمية</span></a></li>
       </ul>
      </div>
      <span className='flex items-center justify-center text-[18px] lg:text-[24px] text-greenlight font-normal leading-[38.4px] pt-[24px]'>@جميع حقوق الطبع محفوظة لدى كويكلي</span>
    </footer>
  )
}

export default Footer