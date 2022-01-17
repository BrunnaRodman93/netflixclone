import React from 'react';
import './Header.css';

export default ({black}) => {
     return (
             <header className={black ? 'black' : ''}>
          <div className="header--logo">
              <a href="/">
              <img src="https://br.web.img3.acsta.net/newsv7/18/11/21/19/10/3930430.png" alt="Netflix"/>
              </a>
          </div>
          <div className="header--user">
              <a href="/">
              <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/c7906d33850498.56ba69ac353e1.png" alt="Usuário" />
              </a>
          </div>
         </header>

     );
 }
