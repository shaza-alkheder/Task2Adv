import { MdEmail, MdLocationPin, MdOutlineFacebook } from 'react-icons/md'
import './Footer.css'
import { FaPhoneAlt } from 'react-icons/fa'
import { GrTwitter } from 'react-icons/gr'
import { IoLogoLinkedin } from 'react-icons/io'
import { footerContacts, footerLinks, footerPolicies, footerSocials } from './FooterData'

const Footer = () => {
    return (
        <>
            <footer>
                <div className='topFooter'>
                    <div className='infoContact'>
                        <div className='descFooter'>
                            <img src="/assets/img/LogoFooter.png" alt="logo" />
                            <p>We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
                        </div>
                        <div className='infoFooter'>
                            {footerContacts.map((contact) => (
                                <div key={contact.id}>
                                    <div className="iconFooter">
                                        {contact.icon}
                                    </div>

                                    <p>
                                        <a href={contact.href}>
                                            {contact.text}
                                        </a>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='linksPage'>
                        {footerLinks.map((group) => (
                            <div
                                className={`Links ${group.id}Links`}
                                key={group.id}
                            >
                                <h2>{group.title}</h2>

                                <ul>
                                    {group.links.map((link) => (
                                        <li key={link.id}>
                                            <a href={link.href}>
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                </div>
                <div className='policy'>
                    <div className='policyList'>
                        <ul>
                            {footerPolicies.map((policy) => (
                                <li key={policy.href}>
                                    <a href={policy.href}>
                                        {policy.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='soctial'>
                        {footerSocials.map((social) => (
                            <a
                                className="iconSoctial"
                                href={social.href}
                                key={social.id}
                                aria-label={social.label}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className='copyright'>
                    <p>                    Copyright © [2023] Little Learners Academy. All rights reserved.
                    </p>
                </div>

            </footer>
        </>
    )
}

export default Footer
