import React, { useState } from 'react'
import './WelcomeRegistrationScreen.css'
import WelcomeIllustration from '../assets/RegistrationPageAssets/WelcomeRegistrationIllustration.png'
import UnifiedPlatformIcon from '../assets/RegistrationPageAssets/UnifiedPlatformIcon.png'
import EnterpriseSecurityIcon from '../assets/RegistrationPageAssets/EnterpriseSecurityIcon.png'
import TestimonialProfileIcon from '../assets/RegistrationPageAssets/TestimonialProfileIcon.png'
import DropdownArrow from '../assets/RegistrationPageAssets/DropdownArrow.png'

const WelcomeRegistrationScreen = () => {
    const [selectedRole, setSelectedRole] = useState('')
    const Roles = ['Student', 'Recruiter', 'Placement Officer', 'Training Coordinator']
    return (
        <div className="prp-WelcomeRegistration-Container">
            <section className="prp-WelcomeRegistration-Left">
                <div className="prp-WelcomeRegistration-Content">
                    <div className="prp-WelcomeRegistration-Intro">
                        <h1>Welcome to your career collaborative workspace.</h1>
                        <p>Join over 14,000+ ambitious students, corporate mentors, leading enterprises, and academic institutions shaping the future of workforce talent.</p>
                    </div>
                    <div className="prp-WelcomeRegistration-Illustration">
                        <img src={WelcomeIllustration} alt="People collaborating on career opportunities" />
                    </div>
                    <div className="prp-WelcomeRegistration-Features">
                        <div className="prp-WelcomeRegistration-Feature-Item">
                            <div className="prp-WelcomeRegistration-Feature-Icon">
                                <img src={UnifiedPlatformIcon} alt="Unified Platform icon" />
                            </div>
                            <div className="prp-WelcomeRegistration-Feature-Text">
                                <h3>Unified Platform</h3>
                                <p>Seamless identity, role-based workflows, and organizational compliance</p>
                            </div>
                        </div>
                        <div className="prp-WelcomeRegistration-Feature-Item">
                            <div className="prp-WelcomeRegistration-Feature-Icon">
                                <img src={EnterpriseSecurityIcon} alt="Enterprise Security icon" />
                            </div>
                            <div className="prp-WelcomeRegistration-Feature-Text">
                                <h3>Enterprise Security</h3>
                                <p>Zero-trust access with automated audit logs and real-time governance.</p>
                            </div>
                        </div>
                    </div>
                    <div className="prp-WelcomeRegistration-Testimonial">
                        <p className="prp-WelcomeRegistration-Quote">“Empowering our cross-functional teams with seamless access, verified identity governance, and automated onboarding at global scale.”</p>
                        <div className="prp-WelcomeRegistration-Testimonial-Author">
                            <div className="prp-WelcomeRegistration-Author-Icon">
                                <img src={TestimonialProfileIcon} alt="Testimonial author profile" />
                            </div>
                            <p>Dr. Elena Vance — Dean of Experiential Education, Global University Network</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="prp-WelcomeRegistration-Right">
                <div className="prp-WelcomeRegistration-Form">
                    <div className="prp-WelcomeRegistration-Form-Header">
                        <h2>Your Journey Starts Here</h2>
                        <p>Select your account type below to begin your tailored registration</p>
                    </div>
                    <div className="prp-WelcomeRegistration-Role-Group">
                        <label htmlFor="prp-WelcomeRegistration-Role">REGISTERING AS <span>*</span></label>
                        <div className="prp-WelcomeRegistration-Select-Wrapper">
                            <select id="prp-WelcomeRegistration-Role" value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)} required>
                                <option value="" disabled>Select role</option>
                                {Roles.map((role) => <option key={role} value={role}>{role}</option>)}
                            </select>
                            <img className="prp-WelcomeRegistration-Select-Arrow" src={DropdownArrow} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WelcomeRegistrationScreen