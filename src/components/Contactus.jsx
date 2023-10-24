import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contactus() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [mesaage, setMesaage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_aynkdf2";
    const templateId = "template_u47u4io";
    const publicKey = "NBfNMgDYUAfUipfnE";

    // Create a new object that contains dynamic template params
    const templateParams = {
      user_name: name,
      user_email: email,
      user_phone: phone,
      message: mesaage,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log(response);
        setName("");
        setEmail("");
        setPhone("");
        setMesaage("");
        return notify;
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <>
      <h3 className="text-[48px] text-blue font-bold leading-[76px] text-center mb-[32px] ">
        تواصل معنا
      </h3>
      <div className="contactus w-[1088px] max-w-full h-auto rounded-[10px] mx-auto mb-[64px] p-[24px]">
        <form ref={form} onSubmit={sendEmail}>
          <div className="flex-col lg:flex-row item-center flex-wrap gap-4">
            <label
              htmlFor="name"
              className="text-blue text-[20px] font-normal mb-[16px] flex-1"
            >
              الاسم
              <br />
              <input
                type="text"
                name="user_name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-[16px] bg-[#F8F8FF] outline-none rounded-[10px] border-[1px] border-solid border-[#EDF0F5] pr-[16px] py-[15px] text-clip text-[20px] font-normal "
                placeholder="ادخل اسمك"
              />
            </label>
            <label
              htmlFor="name"
              className="text-blue text-[20px] font-normal mb-[16px] flex-1"
            >
              رقم التلفون
              <br />
              <input
                type="number"
                name="user_phone"
                id="user_phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full mt-[16px] bg-[#F8F8FF] outline-none rounded-[10px] border-[1px] border-solid border-[#EDF0F5] pr-[16px] py-[15px] text-clip text-[20px] font-normal "
                placeholder="ادخل رقمك"
              />
            </label>
          </div>

          <label htmlFor="email" className="block mb-[16px]">
            البريد الإلكتروني
            <input
              type="email"
              name="user_email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ادخل بريدك الالكتروني"
              className="w-full mt-[16px] bg-[#F8F8FF] outline-none rounded-[10px] border-[1px] border-solid border-[#EDF0F5] pr-[16px] py-[15px] text-clip text-[20px] font-normal"
            />
          </label>
          <label htmlFor="mesaage" className="mb-[16px]">
            الرسالة
          </label>
          <br />
          <textarea
            name="mesaage"
            id="mesaage"
            cols="30"
            rows="10"
            value={mesaage}
            onChange={(e) => setMesaage(e.target.value)}
            className="w-full h-[145px] mt-[16px] bg-[#F8F8FF] outline-none rounded-[10px] border-[1px] border-solid border-[#EDF0F5] pr-[16px] py-[15px] text-clip text-[20px] font-normal mb-[16px]"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-purple text-white text-[24px]  py-[22px] rounded-[10px]"
            onClick={()=>toast("Sent ✅")}
          >
            ارسال
          </button>
          <ToastContainer />
        </form>
      </div>
    </>
  );
}

export default Contactus;
