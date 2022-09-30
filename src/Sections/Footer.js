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
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='30'
                                height='30'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    d='M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z'
                                    fill='#6163FF'
                                    fillRule='nonzero'
                                />
                            </svg>
                        </a>
                    </div>
                    <div className='socialicons'>
                        <a href='https://www.linkedin.com/company/point-blank-d/mycompany/'>
                            <svg
                                height='30'
                                width='30'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 256 256'
                            >
                                <g fill='none'>
                                    <path
                                        d='M0 18.338C0 8.216 8.474 0 18.92 0h218.16C247.53 0 256 8.216 256 18.338v219.327C256 247.79 247.53 256 237.08 256H18.92C8.475 256 0 247.791 0 237.668V18.335z'
                                        fill='#6163FF'
                                    ></path>
                                    <path
                                        d='M77.796 214.238V98.986H39.488v115.252H77.8zM58.65 83.253c13.356 0 21.671-8.85 21.671-19.91-.25-11.312-8.315-19.915-21.417-19.915-13.111 0-21.674 8.603-21.674 19.914 0 11.06 8.312 19.91 21.169 19.91h.248zM99 214.238h38.305v-64.355c0-3.44.25-6.889 1.262-9.346 2.768-6.885 9.071-14.012 19.656-14.012 13.858 0 19.405 10.568 19.405 26.063v61.65h38.304v-66.082c0-35.399-18.896-51.872-44.099-51.872-20.663 0-29.738 11.549-34.78 19.415h.255V98.99H99.002c.5 10.812-.003 115.252-.003 115.252z'
                                        fill='#fff'
                                    ></path>
                                </g>
                            </svg>
                        </a>
                    </div>
                    <div className='socialicons'>
                        <a href='https://www.instagram.com/pointblank_dsce/'>
                            <svg
                                width='30'
                                height='30'
                                viewBox='0 0 16 16'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <title>Instagram</title>
                                <g>
                                    <circle
                                        cx='12.145'
                                        cy='3.892'
                                        r='1'
                                    ></circle>
                                    <path
                                        d='M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z'
                                        fill='#6163FF'
                                    ></path>
                                    <path
                                        d='M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z'
                                        fill='#6163FF'
                                    ></path>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className='copyrightandlinks'>
                <div className='copyright'>
                    Made with ❤️ by Point Blank. All Rights Reserved
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
