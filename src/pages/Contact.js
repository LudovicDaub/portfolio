import React from 'react'
import Navigation from '../components/Navigation'
import ButtonsBottom from '../components/ButtonsBottom'
import ContactForm from '../components/ContactForm'
import SocialNetwork from '../components/SocialNetwork'
import Logo from '../components/Logo'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { motion } from 'framer-motion'

const Contact = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 300,
    },
  }

  const transition = {
    ease: [0.03, 0.87, 0.73, 0.9],
    duration: 0.6,
  }

  return (
    <main>
      <motion.div
        className="contact"
        exit="out"
        animate="in"
        initial="out"
        variants={pageTransition}
        transition={transition}
      >
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>adresse</h4>
              <p>Résidence la Petite Campagne</p>
              <p>14400 Bayeux</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>téléphone</h4>
              <CopyToClipboard text="0771006614" className="hover">
                <p
                  style={{ cursor: 'pointer' }}
                  className="clipboard"
                  onClick={() => {
                    alert('Téléphone copié !')
                  }}
                >
                  07 71 00 66 14
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>email</h4>
              <CopyToClipboard text="daub.ludovic@gmail.com" className="hover">
                <p
                  style={{ cursor: 'pointer' }}
                  className="clipboard"
                  onClick={() => {
                    alert('Email copié !')
                  }}
                >
                  daub.ludovic@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>Ludovic Daub - 2021</p>
          </div>
        </div>
        <ButtonsBottom left={'/projet-3'} />
      </motion.div>
    </main>
  )
}

export default Contact
