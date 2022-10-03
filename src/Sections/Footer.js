import React from 'react'
import pblogo from '../assets/pblogo.svg'
import '../Components/Footer/footercss.css'

export default function Footer() {
    return (
        <div className='footercontainer'>
            <div className='logoandsocials'>
                <div className='footerlogo'>
                    <a href='https://www.pointblank.club/'>
                        <img src={pblogo} alt='' />
                    </a>
                </div>
                <div className='socials'>
                    <div className='socialicons'>
                        <a href='https://www.facebook.com/PBDSCE/'>
                            <i className='fab fa-facebook-square' id='ic'></i>
                        </a>
                    </div>
                    <div className='socialicons'>
                        <a href='https://www.linkedin.com/company/point-blank-d/mycompany/'>
                            <i className='fab fa-linkedin' id='ic'></i>
                        </a>
                    </div>
                    <div className='socialicons'>
                        <a href='https://www.instagram.com/pointblank_dsce/'>
                            <i className='fab fa-instagram' id='ic'></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className='copyrightandlinks'>
                <div className='copyright'>
                    Made with ❤️ by <b className='pb'> Point Blank</b>. All
                    Rights Reserved
                </div>
                <div className='shortcuts'>
                    <div className='shortcutlinks'>
                        <a href='https://blog.pointblank.club/'>Blog</a>
                    </div>
                    <div className='shortcutlinks'>
                        <a href='https://forum.dsce.in/'>Forum</a>
                    </div>
                    <div className='shortcutlinks'>
                        <a href='https://forms.gle/yCwMHcn2iatnk9mW6'>
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
