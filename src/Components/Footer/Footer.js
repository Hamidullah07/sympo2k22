import React from 'react'
import './Footer.css';
import  {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCopyright} from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div>
        <footer>
            <h5><FontAwesomeIcon icon={faCopyright} /> Copyright <span>PhotoPholio</span>. All Rights Reserved</h5>
        </footer>
    </div>
  )
}

export default Footer