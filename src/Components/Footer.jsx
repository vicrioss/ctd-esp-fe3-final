import React from 'react'
import '../Styles/footer.css';

const Footer = () => {
  return (
    <footer>
        <div className='logo'>
        <p>Powered by</p> 
        <img src="/images/DH.png" alt='DH-logo' />
        </div>
        <div className='redes'>
        <img src="/images/ico-facebook.png" alt='fb' />
        <img src="/images/ico-instagram.png" alt='ig' />
        <img src="/images/ico-tiktok.png" alt='tt' />
        <img src="/images/ico-whatsapp.png" alt='wpp' />
        </div>
    </footer>
  )
}

export default Footer
