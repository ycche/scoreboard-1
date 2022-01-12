import React, {useState} from 'react'
import ContactNavbar from '../Components/Contact/ContactNavbar'
import ContactSection from '../Components/Contact/ContactSection'
import Footer from '../Components/Footer/Footer';
import FormSuccess from '../Components/Contact/FormSuccess'
function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm(){
    setIsSubmitted(true);
  }
  return (
    <>
      <ContactNavbar/>
      {!isSubmitted ? (<ContactSection submitForm = {submitForm}/>) : (<FormSuccess/>)}
      <Footer/>
    </>
  )
}

export default ContactPage
