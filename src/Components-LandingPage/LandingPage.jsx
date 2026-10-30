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
    <div className="Prp-LandingPage-Wrapper">
  <div className="Prp-LandingPage-Stage">
        <header className="Prp-LandingPage-Header">
          <div className="Prp-LandingPage-Brand">
            <div className="Prp-LandingPage-BrandMark">
              <img src={GraduationCapIcon} alt="" className="Prp-LandingPage-BrandIcon" />
            </div>
            <p className="Prp-LandingPage-BrandName">
              Placement &
              <br />
              Recruitment Platform
            </p>
          </div>

          <button type="button" className="Prp-LandingPage-Menu-Btn" aria-expanded={mobileNavOpen} aria-label={mobileNavOpen ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setMobileNavOpen((open) => !open)}
          >
            <span className="Prp-LandingPage-Menu-Line" />
            <span className="Prp-LandingPage-Menu-Line" />
            <span className="Prp-LandingPage-Menu-Line" />
          </button>

          <div
            className={
              mobileNavOpen
                ? 'Prp-LandingPage-Menu-Open'
                : 'Prp-LandingPage-Menu'
            }
          >
            <nav className="Prp-LandingPage-Nav-Links" aria-label="Primary">
              <Link to="#" className="Prp-LandingPage-Nav-Home" onClick={() => setMobileNavOpen(false)}
              >
                Home
              </Link>
              <Link to="#" className="Prp-LandingPage-Nav-Features" onClick={() => setMobileNavOpen(false)}
              >
                Features
              </Link>
              <Link to="#" className="Prp-LandingPage-Nav-Recruiters" onClick={() => setMobileNavOpen(false)}
              >
                For Recruiters/Employers
              </Link>
              <Link to="#" className="Prp-LandingPage-Nav-Training" onClick={() => setMobileNavOpen(false)}
              >
                For Training Institutions
              </Link>
              <Link to="#" className="Prp-LandingPage-Nav-Stories" onClick={() => setMobileNavOpen(false)}
              >
                Success Stories
              </Link>
            </nav>

            <div className="Prp-LandingPage-Header-Actions">
              <button type="button" className="Prp-LandingPage-Btn-Login" onClick={() => navigate("/PRP_Portal/Login")}>
                Login
              </button>
              <button type="button" className="Prp-LandingPage-Btn-Register" onClick={() => navigate("/PRP_Portal/WelcomeRegistration")}>
                Register
              </button>
            </div>
          </div>

          <img src={NavActiveIndicator} alt="" className="Prp-LandingPage-NavIndicator" />
        </header>

        <section className="Prp-LandingPage-Hero">
          <p className="Prp-LandingPage-Hero-Label">BUILD YOUR FUTURE</p>
          <p className="Prp-LandingPage-Hero-Title1">
            Connect. Learn.
          </p>
          <p className="Prp-LandingPage-Hero-Title2">
            Get Placed.
          </p>
          <p className="Prp-LandingPage-Hero-Desc1">
            The all-in-one platform that bridges the gap between
          </p>
          <p className="Prp-LandingPage-Hero-Desc2">
            talented individuals, top employers and training institutions.
          </p>
          <button type="button" className="Prp-LandingPage-Hero-BtnPrimary">
            Get Started
          </button>
          <button type="button" className="Prp-LandingPage-Hero-BtnSecondary">
            Explore Jobs
          </button>
          <img src={InterviewBro} alt="Interview illustration" className="Prp-LandingPage-Hero-Img" />
        </section>

        <section className="Prp-LandingPage-Feat">
          <p className="Prp-LandingPage-FeatLabel">WHY CHOOSE US</p>
          <h2 className="Prp-LandingPage-FeatHeading">
            Everything You Need for a Successful Career
          </h2>
          <div className="Prp-LandingPage-Feat-Grid">
            {featureCards.map((card) => (
              <div key={card.title} className="Prp-LandingPage-Feat-Card">
                <img src={card.icon} alt="" className="Prp-LandingPage-Feat-Icon" />
                <h3 className="Prp-LandingPage-Feat-Title">{card.title}</h3>
                <p className="Prp-LandingPage-Feat-Text">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="Prp-LandingPage-Stories">
          <p className="Prp-LandingPage-StoriesLabel">SUCCESS STORIES</p>
          <h2 className="Prp-LandingPage-StoriesHeading">WHAT OUR USERS SAY</h2>
          <div className="Prp-LandingPage-Story-Grid">
            {testimonials.map((item) => (
              <div key={item.name} className="Prp-LandingPage-Story-Card">
                <img src={QuoteIcon} alt="" className="Prp-LandingPage-Story-Quote" />
                <div className="Prp-LandingPage-Story-Header">
                  <img src={TestimonialUserAvatar} alt="" className="Prp-LandingPage-Story-Avatar" />
                  <div className="Prp-LandingPage-Story-Details">
                    <div className="Prp-LandingPage-Story-Rating">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <img key={i} src={StarIcon} alt="" className="Prp-LandingPage-Story-Star" />
                      ))}
                    </div>
                    <p className="Prp-LandingPage-Story-Name">{item.name}</p>
                    <p className="Prp-LandingPage-Story-Role">{item.role}</p>
                  </div>
                </div>
                <p className="Prp-LandingPage-Story-Text">{item.quote}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="Prp-LandingPage-Partners">
          <p className="Prp-LandingPage-Partner-Label">TRUSTED BY Leading Companies</p>
          <h2 className="Prp-LandingPage-Partner-Heading">Top companies hire here</h2>
          <div className="Prp-LandingPage-Partner-Logos">
            {companyLogos.map((logo) => (
              <img key={logo.alt} src={logo.src} alt={logo.alt} className="Prp-LandingPage-Partner-Logo" />
            ))}
          </div>
        </section>

        <footer className="Prp-LandingPage-Footer">
          <div className="Prp-LandingPage-Footer-Cols">
            <div className="Prp-LandingPage-Footer-Col">
              <p className="Prp-LandingPage-Footer-Heading">COMPANY</p>
              <Link to="#" className="Prp-LandingPage-Footer-Link">About Us</Link>
              <Link to="#" className="Prp-LandingPage-Footer-Link">Careers</Link>
              <Link to="#" className="Prp-LandingPage-Footer-Link">contact</Link>
            </div>
            <div className="Prp-LandingPage-Footer-Col">
              <p className="Prp-LandingPage-Footer-Heading">Platform</p>
              <Link to="#" className="Prp-LandingPage-Footer-Link">Job Postings</Link>
              <Link to="#" className="Prp-LandingPage-Footer-Link">AI Resume Matching</Link>
              <Link to="#" className="Prp-LandingPage-Footer-Link">Training & skill Readiness</Link>
              <Link to="#" className="Prp-LandingPage-Footer-Link">Placement Analytics</Link>
            </div>
            <div className="Prp-LandingPage-Footer-Col">
              <p className="Prp-LandingPage-Footer-Heading">SUPPORT</p>
              <Link to="#" className="Prp-LandingPage-Footer-Link">Help Center</Link>
              <Link to="#" className="Prp-LandingPage-Footer-Link">FAQ</Link>
              <Link to="#" className="Prp-LandingPage-Footer-Link">Raise Issue</Link>
              <Link to="#" className="Prp-LandingPage-Footer-Link">Contact Support</Link>
            </div>
            <div className="Prp-LandingPage-Footer-Legal">
              <p className="Prp-LandingPage-Footer-Heading">LEGAL</p>
              <p className="Prp-LandingPage-Footer-LegalText">
                Privacy Policy{'\n'} Terms & Conditions{'\n'} Cookie Policy
              </p>
            </div>
          </div>
          <div className="Prp-LandingPage-Footer-Bottom">
            <p className="Prp-LandingPage-Copyright">
              © 2026 Placement and Recruitment Platform.
            </p>
            <div className="Prp-LandingPage-Social-Links">
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
