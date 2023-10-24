import React, { useState } from "react";
import Logo from '../assets/images/logo.svg'
import telemobile from '../assets/icon/telephonmobilee.svg'
import facebookmobile from '../assets/icon/facebookmobile.svg'
import whatsappmobile from '../assets/icon/whatsappmobile.svg'
import Phone from '../assets/icon/Phone.svg'
import Facebook from '../assets/icon/Facebook.svg'
import whatsapp from '../assets/icon/whatsapp.svg'
import close from '../assets/icon/close.svg'
import menu from '../assets/icon/menu.svg'
import logomobile from '../assets/images/navmobile.svg'
export const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const content = (
    <>
      <div className="lg:hidden block absolute top-0 h-full w-full left-0 right-0 bg-purple transition pt-[16px] px-[20px]">
        <div className="h-[8vh]">
          <img
            src={logomobile}
            alt="logo"
            className="w-[158px] h-[34.652px] my-auto"
          />
        </div>
        <ul className="flex flex-col text-[24px] font-bold text-greenlight mt-[32px] text-center">
          <li className="mb-[32px]">عننا</li>
          <li className="mb-[32px]">خدمات الاكاديمية</li>
          <li className="mb-[32px]">اراء العملاء</li>
          <li>تواصل معنا</li>
        </ul>
        <ul className="flex justify-center items-center mt-[64px]">
            <li className="ml-[24px]">
              <img src={telemobile} alt="Phone" />
            </li>
            <li className="ml-[24px]">
              <img src={facebookmobile} alt="Facebook" />
            </li>
            <li>
              <img src={whatsappmobile} alt="whatsapp" />
            </li>
          </ul>
      </div>
    </>
  );
  return (
    <header className="container">
      <nav>
        <div className="flex justify-between items-center border-b-2 border-[#4E4097] py-[12px] relative">
          <img
            src={Logo}
            alt="logo"
            className="w-[158px] h-[34.652px] lg:w-[272.218px] lg:h-[59.347px]"
          />

          <ul className="hidden lg:flex text-[24px] font-normal text-gray">
            <li className="ml-[64px]">عننا</li>
            <li className="ml-[64px]">خدمات الاكاديمية</li>
            <li className="ml-[64px]">اراء العملاء</li>
            <li>تواصل معنا</li>
          </ul>

          <ul className="hidden lg:flex">
            <li className="ml-[24px]">
              <img src={Phone} alt="Phone" />
            </li>
            <li className="ml-[24px]">
              <img src={Facebook} alt="Facebook" />
            </li>
            <li>
              <img src={whatsapp} alt="whatsapp" />
            </li>
          </ul>

          {/* Humbrger Menu */}
          <button
            className="block lg:hidden transtion z-50"
            onClick={handleClick}
          >
            {click ? (
              <img src={close} />
            ) : (
              <img src={menu} />
            )}
          </button>
        </div>
        <div>{click && content}</div>
      </nav>
    </header>
  );
};
