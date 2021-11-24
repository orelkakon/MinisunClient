import React from 'react';
import { FullFooter } from './style'
import './style.css'

const Footer = () => {
    return (
        <FullFooter>
             <p>
                כל הזכויות שמורות למיניסאן. האתר פותח ע"י <a style={{color:'black'}} href="http://www.orelkakon.online/" target="_blank" rel="noreferrer">אוראל קקון</a> 2021 Ⓒ
            </p>
        </FullFooter>
    );
};

export default Footer;