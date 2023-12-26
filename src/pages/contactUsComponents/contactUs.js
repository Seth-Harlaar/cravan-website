import React, { useContext } from "react";
import PageBanner from "../../components/pageBanner";
import ContactForm from "./contactForm";
import {ScreenContext} from "../../components/screenProvider";

function ContactUs() {
  const {isSmallScreen} = useContext(ScreenContext);

  return (
    <>
      <PageBanner title={"Contact Us"} description={"Feel free to reach out."} isSmallScreen={isSmallScreen}/>
      <div>
        <ContactForm/>
      </div>
    </>
  );
}
  
export default ContactUs;