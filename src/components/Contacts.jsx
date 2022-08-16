import React from 'react'

const Contacts = () => {
  return (
    <div id="contact">
        <h3>Pošalji nam na e-mail</h3>
        <div className="contact-input">
            <input type="email" placeholder="example@mail.com" />
            <a href="#">Kontakt</a>
        </div>
    </div>
  )
}

export default Contacts