import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './LandingPage.css'

import InterviewBro from '../assets/LandingPageAssets/InterviewBro.png'
import GraduationCapIcon from '../assets/LandingPageAssets/GraduationCapIcon.png'
import AiResumeMatchingIcon from '../assets/LandingPageAssets/AiResumeMatchingIcon.png'
import TrainingSkillReadinessIcon from '../assets/LandingPageAssets/TrainingSkillReadinessIcon.png'
import PlacementAnalyticsIcon from '../assets/LandingPageAssets/PlacementAnalyticsIcon.png'
import ForEveryUserIcon from '../assets/LandingPageAssets/ForEveryUserIcon.png'
import WideJobOpportunitiesIcon from '../assets/LandingPageAssets/WideJobOpportunitiesIcon.png'
import StarIcon from '../assets/LandingPageAssets/StarIcon.png'
import QuoteIcon from '../assets/LandingPageAssets/QuoteIcon.png'
import TestimonialUserAvatar from '../assets/LandingPageAssets/TestimonialUserAvatar.png'
import GrokLogo from '../assets/LandingPageAssets/GrokLogo.png'
import WaymoLogo from '../assets/LandingPageAssets/WaymoLogo.png'
import QwenLogo from '../assets/LandingPageAssets/QwenLogo.png'
import DeepseekLogo from '../assets/LandingPageAssets/DeepseekLogo.png'
import InfosysLogo from '../assets/LandingPageAssets/InfosysLogo.png'
import ClaudeLogo from '../assets/LandingPageAssets/ClaudeLogo.png'
import OpenAiLogo from '../assets/LandingPageAssets/OpenAiLogo.png'
import FacebookIcon from '../assets/LandingPageAssets/FacebookIcon.png'
import TwitterXIcon from '../assets/LandingPageAssets/TwitterXIcon.png'
import InstagramIcon from '../assets/LandingPageAssets/InstagramIcon.png'
import NavActiveIndicator from '../assets/LandingPageAssets/NavActiveIndicator.png'

const featureCards = [
  {
    title: 'Wide Job Opportunities',
    description:
      'Access to thousands of\njob opening from top\ncompanies',
    icon: WideJobOpportunitiesIcon,
  },
  {
    title: 'AI Resume Matching',
    description: 'Get matched with the\nnight jobs using\nAI technology',
    icon: AiResumeMatchingIcon,
  },
  {
    title: 'Training & Skill Readiness',
    description:
      'Build in-demand skills\nwith industry-relevant\ntraining programs.',
    icon: TrainingSkillReadinessIcon,
  },
  {
    title: 'Placement Analytics',
    description: 'Track performance and\nmake date-driven\ndecisions',
    icon: PlacementAnalyticsIcon,
  },
  {
    title: 'For Every User',
    description:
      'Tailored benefits for\njob seekers, recruiters\nand training institutions',
    icon: ForEveryUserIcon,
  },
]

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Product Designer @ Aura Systems',
    quote:
      '"ConnectHire transformed my job search. The AI\nmatching felt intuitive, and within two weeks, I was\ninterviewed and hired by my dream company in\nfintech. The process was seamless."',
  },
  {
    name: 'Jhon Francis',
    role: 'Recruitment Manager @ Vertex Solutions',
    quote:
      '"The community gave me the confidence to showcase my work and connect with amazing people. I got my first full-time offer within 6 months. The support and guidance here are unmatched."',
  },
  {
    name: 'David Miller',
    role: 'Talent Director @ Zenith Capital',
    quote:
      '"The quality of candidates on ConnectHire is\nunmatched. We reduced our time-to-hire by 40%\nand have found some of our most productive team\nmembers through their automated screening."',
  },
]

const companyLogos = [
  { src: GrokLogo, alt: 'Grok' },
  { src: WaymoLogo, alt: 'Waymo' },
  { src: QwenLogo, alt: 'Qwen' },
  { src: DeepseekLogo, alt: 'Deepseek' },
  { src: InfosysLogo, alt: 'Infosys' },
  { src: ClaudeLogo, alt: 'Claude' },
  { src: OpenAiLogo, alt: 'OpenAI' },
]

const LandingPage = () => {
  const navigate = useNavigate()
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  return (
    <div className="Prp-Lp-Wrapper">
  <div className="Prp-Lp-Stage">
        <header className="Prp-Lp-Topbar">
          <div className="Prp-Lp-Brand">
            <div className="Prp-Lp-Brand-Mark">
              <img src={GraduationCapIcon} alt="" className="Prp-Lp-Brand-Icon" />
            </div>
            <p className="Prp-Lp-Brand-Name">
              Placement &
              <br />
              Recruitment Platform
            </p>
          </div>

          <button type="button" className="Prp-Lp-Topbar-MenuButton" aria-expanded={mobileNavOpen} aria-label={mobileNavOpen ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setMobileNavOpen((open) => !open)}
          >
            <span className="Prp-Lp-Topbar-MenuLine" />
            <span className="Prp-Lp-Topbar-MenuLine" />
            <span className="Prp-Lp-Topbar-MenuLine" />
          </button>

          <div
            className={
              mobileNavOpen
                ? 'Prp-Lp-Topbar-Menu Prp-Lp-Topbar-MenuOpen'
                : 'Prp-Lp-Topbar-Menu'
            }
          >
            <nav className="Prp-Lp-Topbar-NavLinks" aria-label="Primary">
              <Link to="#" className="Prp-Lp-Topbar-NavItem Prp-Lp-Topbar-Home" onClick={() => setMobileNavOpen(false)}
              >
                Home
              </Link>
              <Link to="#" className="Prp-Lp-Topbar-NavItem Prp-Lp-Topbar-Features" onClick={() => setMobileNavOpen(false)}
              >
                Features
              </Link>
              <Link to="#" className="Prp-Lp-Topbar-NavItem Prp-Lp-Topbar-Recruiters" onClick={() => setMobileNavOpen(false)}
              >
                For Recruiters/Employers
              </Link>
              <Link to="#" className="Prp-Lp-Topbar-NavItem Prp-Lp-Topbar-Training" onClick={() => setMobileNavOpen(false)}
              >
                For Training Institutions
              </Link>
              <Link to="#" className="Prp-Lp-Topbar-NavItem Prp-Lp-Topbar-Stories" onClick={() => setMobileNavOpen(false)}
              >
                Success Stories
              </Link>
            </nav>

            <div className="Prp-Lp-Topbar-Actions">
              <button type="button" className="Prp-Lp-Topbar-Login" onClick={() => navigate("/PRP_Portal/Login")}>
                Login
              </button>
              <button type="button" className="Prp-Lp-Topbar-Register" onClick={() => navigate("/PRP_Portal/WelcomeRegistration")}>
                Register
              </button>
            </div>
          </div>

          <img src={NavActiveIndicator} alt="" className="Prp-Lp-Topbar-Marker" />
        </header>

        <section className="Prp-Lp-Welcome">
          <p className="Prp-Lp-Welcome-Label">BUILD YOUR FUTURE</p>
          <p className="Prp-Lp-Welcome-Headline Prp-Lp-Welcome-HeadlineFirst">
            Connect. Learn.
          </p>
          <p className="Prp-Lp-Welcome-Headline Prp-Lp-Welcome-HeadlineSecond">
            Get Placed.
          </p>
          <p className="Prp-Lp-Welcome-Subtext Prp-Lp-Welcome-SubtextFirst">
            The all-in-one platform that bridges the gap between
          </p>
          <p className="Prp-Lp-Welcome-Subtext Prp-Lp-Welcome-SubtextSecond">
            talented individuals, top employers and training institutions.
          </p>
          <button type="button" className="Prp-Lp-Welcome-Actions Prp-Lp-Welcome-CTA">
            Get Started
          </button>
          <button type="button" className="Prp-Lp-Welcome-Actions Prp-Lp-Welcome-AltCTA">
            Explore Jobs
          </button>
          <img src={InterviewBro} alt="Interview illustration" className="Prp-Lp-Welcome-HeroArt" />
        </section>

        <section className="Prp-Lp-Highlights">
          <p className="Prp-Lp-Highlights-Label">WHY CHOOSE US</p>
          <h2 className="Prp-Lp-Highlights-Heading">
            Everything You Need for a Successful Career
          </h2>
          <div className="Prp-Lp-Highlights-Grid">
            {featureCards.map((card) => (
              <div key={card.title} className="Prp-Lp-Highlights-Card">
                <img src={card.icon} alt="" className="Prp-Lp-Highlights-Icon" />
                <h3 className="Prp-Lp-Highlights-Title">{card.title}</h3>
                <p className="Prp-Lp-Highlights-Text">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="Prp-Lp-Reviews">
          <p className="Prp-Lp-Reviews-Label">SUCCESS STORIES</p>
          <h2 className="Prp-Lp-Reviews-Heading">WHAT OUR USERS SAY</h2>
          <div className="Prp-Lp-Reviews-Grid">
            {testimonials.map((item) => (
              <div key={item.name} className="Prp-Lp-Reviews-Card">
                <img src={QuoteIcon} alt="" className="Prp-Lp-Reviews-Quote" />
                <div className="Prp-Lp-Reviews-Header">
                  <img src={TestimonialUserAvatar} alt="" className="Prp-Lp-Reviews-Avatar" />
                  <div className="Prp-Lp-Reviews-Details">
                    <div className="Prp-Lp-Reviews-Rating">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <img key={i} src={StarIcon} alt="" className="Prp-Lp-Reviews-Star" />
                      ))}
                    </div>
                    <p className="Prp-Lp-Reviews-Name">{item.name}</p>
                    <p className="Prp-Lp-Reviews-Role">{item.role}</p>
                  </div>
                </div>
                <p className="Prp-Lp-Reviews-Text">{item.quote}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="Prp-Lp-Partners">
          <p className="Prp-Lp-Partners-Label">TRUSTED BY Leading Companies</p>
          <h2 className="Prp-Lp-Partners-Heading">Top companies hire here</h2>
          <div className="Prp-Lp-Partners-Logos">
            {companyLogos.map((logo) => (
              <img key={logo.alt} src={logo.src} alt={logo.alt} className="Prp-Lp-Partners-Logo" />
            ))}
          </div>
        </section>

        <footer className="Prp-Lp-Footer">
          <div className="Prp-Lp-Footer-Columns">
            <div className="Prp-Lp-Footer-Column">
              <p className="Prp-Lp-Footer-Heading">COMPANY</p>
              <Link to="#" className="Prp-Lp-Footer-Link">About Us</Link>
              <Link to="#" className="Prp-Lp-Footer-Link">Careers</Link>
              <Link to="#" className="Prp-Lp-Footer-Link">contact</Link>
            </div>
            <div className="Prp-Lp-Footer-Column">
              <p className="Prp-Lp-Footer-Heading">Platform</p>
              <Link to="#" className="Prp-Lp-Footer-Link">Job Postings</Link>
              <Link to="#" className="Prp-Lp-Footer-Link">AI Resume Matching</Link>
              <Link to="#" className="Prp-Lp-Footer-Link">Training & skill Readiness</Link>
              <Link to="#" className="Prp-Lp-Footer-Link">Placement Analytics</Link>
            </div>
            <div className="Prp-Lp-Footer-Column">
              <p className="Prp-Lp-Footer-Heading">SUPPORT</p>
              <Link to="#" className="Prp-Lp-Footer-Link">Help Center</Link>
              <Link to="#" className="Prp-Lp-Footer-Link">FAQ</Link>
              <Link to="#" className="Prp-Lp-Footer-Link">Raise Issue</Link>
              <Link to="#" className="Prp-Lp-Footer-Link">Contact Support</Link>
            </div>
            <div className="Prp-Lp-Footer-Column Prp-Lp-Footer-LegalColumn">
              <p className="Prp-Lp-Footer-Heading">LEGAL</p>
              <p className="Prp-Lp-Footer-LegalText">
                Privacy Policy{'\n'} Terms & Conditions{'\n'} Cookie Policy
              </p>
            </div>
          </div>
          <div className="Prp-Lp-Footer-Bottom">
            <p className="Prp-Lp-Footer-Copyright">
              © 2026 Placement and Recruitment Platform.
            </p>
            <div className="Prp-Lp-Footer-Socials">
              <Link to="#" aria-label="Facebook">
                <img src={FacebookIcon} alt="" />
              </Link>
              <Link to="#" aria-label="Twitter">
                <img src={TwitterXIcon} alt="" />
              </Link>
              <Link to="#" aria-label="Instagram">
                <img src={InstagramIcon} alt="" />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default LandingPage
