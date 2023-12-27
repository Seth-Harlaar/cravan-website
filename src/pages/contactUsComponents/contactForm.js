import React, { useState } from "react";
import emailjs from 'emailjs-com';
import ContactModal from "./contactModal";



function ContactForm() {
  const [modalOpen, setModalOpen] = useState(false);

  function openModal(){
    setModalOpen(true);
  }

  function closeModal(){
    setModalOpen(false);
  }

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_7d6hwmn', 'template_mmkoolq', e.target, 'qGkgBUkkqo3MDqlkU')
      .then((result) => {
          const form = document.getElementById("email-form");
          form.reset();
          console.log('email sent');
          openModal();
      }, (error) => {
          console.log(error.text);
      });
  }

  const inputWrapperStyle = "relative py-4 ";

  const inputStyle = " outline-none text-xl py-2 border-b-2 border-darkBgLight w-full peer duration-200 " +
    " placeholder:text-clear placeholder-shown:" + 
    " focus:border-highlight ";
  const labelStyle = " absolute top-0 left-0 -translate-y-[50%] text-darkBg text-xl duration-200 " + 
    " peer-placeholder-shown:top-[50%] peer-focus:text-highlight";

  return (
    <>
      <div className=" w-[650px] m-auto p-10">
        <form onSubmit={sendEmail} id="email-form">
          <div className=" flex flex-col ">
            <div className=" flex justify-between space-x-4">
              <div className={inputWrapperStyle + " flex-1 "}>
                <input name="name" placeholder="first name" className={inputStyle}/>
                <label for="name" className={labelStyle}>Name</label>
              </div>
              <div className={inputWrapperStyle + " flex-1" }>
                <input name="subject" placeholder="subject" className={inputStyle}/>
                <label for="subject" className={labelStyle}>Subject</label>
              </div>
            </div>
            <div className={inputWrapperStyle}>
              <input name="email" placeholder="email" className={inputStyle}/>
              <label for="email" className={labelStyle}>Return Email</label>
            </div>
            <div className={inputWrapperStyle}>
              <input name="message" placeholder="message" className={inputStyle}/>
              <label for="message" className={labelStyle}>Message</label>
            </div>
            <button type="submit" className="p-4 bg-highlight w-32">Send</button>
          </div>
        </form>
      </div>

      {/* modal */}
      {modalOpen && <ContactModal closeModal={closeModal}/>}
    </>
  )
}

export default ContactForm;