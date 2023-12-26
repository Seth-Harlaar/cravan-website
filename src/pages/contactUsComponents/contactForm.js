import React from "react";



function ContactForm() {
  function sendEmail(){

  }

  const inputWrapperStyle = "relative py-4";

  const inputStyle = " outline-none text-xl py-2 border-b-2 border-darkBgLight w-full peer duration-200 " +
    " placeholder:text-clear placeholder-shown:" + 
    " focus:border-highlight ";
  const labelStyle = " absolute top-0 left-0 -translate-y-[50%] text-darkBg text-xl duration-200 " + 
    " peer-placeholder-shown:top-[50%] peer-focus:text-highlight";

  return (
    <>
    <div className=" w-[650px] m-auto ">
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
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default ContactForm;