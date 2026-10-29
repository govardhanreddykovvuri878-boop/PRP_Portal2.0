import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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

const FIGMA_WIDTH = 1920
const FIGMA_HEIGHT = 3041
const DESKTOP_STAGE_MIN_WIDTH = 1200

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
  const scalerRef = useRef(null)
  const wasDesktopStageRef = useRef(true)
  const [scale, setScale] = useState(1)
  const [useDesktopStage, setUseDesktopStage] = useState(true)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  useEffect(() => {
    const node = scalerRef.current
    if (!node) return

    const updateScale = () => {
      const available = node.getBoundingClientRect().width
      const isDesktop = available >= DESKTOP_STAGE_MIN_WIDTH

      if (isDesktop) {
        setUseDesktopStage(true)
        setScale(Math.min(1, available / FIGMA_WIDTH))
        if (!wasDesktopStageRef.current) {
          setMobileNavOpen(false)
        }
      } else {
        setUseDesktopStage(false)
        setScale(1)
      }

      wasDesktopStageRef.current = isDesktop
    }

    updateScale()
    const observer = new ResizeObserver(updateScale)
    observer.observe(node)
    window.addEventListener('resize', updateScale)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', updateScale)
    }
  }, [])

  const scalerClassName = useDesktopStage
    ? 'Prp-LandingPage-Scaler'
    : 'Prp-LandingPage-Scaler Prp-LandingPage-Scaler-Fluid'

  return (
    <div ref={scalerRef} className={scalerClassName} style={useDesktopStage ? { height: FIGMA_HEIGHT * scale } : undefined}>
      <div className="Prp-LandingPage-Stage" style={useDesktopStage ? { transform: `scale(${scale})` } : undefined}>
        <header className="Prp-LandingPage-NavBar">
          <div className="Prp-LandingPage-NavBar-Logo">
            <div className="Prp-LandingPage-NavBar-LogoIconWrap">
              <img src={GraduationCapIcon} alt="" className="Prp-LandingPage-NavBar-LogoIcon" />
            </div>
            <p className="Prp-LandingPage-NavBar-LogoTitle">
              Placement &amp;
              <br />
              Recruitment Platform
            </p>
          </div>

          <button type="button" className="Prp-LandingPage-NavBar-MenuToggle" aria-expanded={mobileNavOpen} aria-label={mobileNavOpen ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setMobileNavOpen((open) => !open)}
          >
            <span className="Prp-LandingPage-NavBar-MenuBar" />
            <span className="Prp-LandingPage-NavBar-MenuBar" />
            <span className="Prp-LandingPage-NavBar-MenuBar" />
          </button>

          <div
            className={
              mobileNavOpen
                ? 'Prp-LandingPage-NavBar-Panel Prp-LandingPage-NavBar-Panel-Open'
                : 'Prp-LandingPage-NavBar-Panel'
            }
          >
            <nav className="Prp-LandingPage-NavBar-Links" aria-label="Primary">
              <a href="#" className="Prp-LandingPage-NavBar-Link Prp-LandingPage-NavBar-Link-Home" onClick={() => setMobileNavOpen(false)}
              >
                Home
              </a>
              <a href="#" className="Prp-LandingPage-NavBar-Link Prp-LandingPage-NavBar-Link-Features" onClick={() => setMobileNavOpen(false)}
              >
                Features
              </a>
              <a href="#" className="Prp-LandingPage-NavBar-Link Prp-LandingPage-NavBar-Link-Recruiters" onClick={() => setMobileNavOpen(false)}
              >
                For Recruiters/Employers
              </a>
              <a href="#" className="Prp-LandingPage-NavBar-Link Prp-LandingPage-NavBar-Link-Training" onClick={() => setMobileNavOpen(false)}
              >
                For Training Institutions
              </a>
              <a href="#" className="Prp-LandingPage-NavBar-Link Prp-LandingPage-NavBar-Link-Success" onClick={() => setMobileNavOpen(false)}
              >
                Success Stories
              </a>
            </nav>

            <div className="Prp-LandingPage-NavBar-Actions">
              <button type="button" className="Prp-LandingPage-NavBar-LoginButton" onClick={() => navigate("/PRP_Portal/Login")}>
                Login
              </button>
              <button type="button" className="Prp-LandingPage-NavBar-RegisterButton" onClick={() => navigate("/PRP_Portal/WelcomeRegistration")}>
                Register
              </button>
            </div>
          </div>

          <img src={NavActiveIndicator} alt="" className="Prp-LandingPage-NavBar-ActiveLine" />
        </header>

        <section className="Prp-LandingPage-Hero-Section">
          <p className="Prp-LandingPage-Hero-Eyebrow">BUILD YOUR FUTURE</p>
          <p className="Prp-LandingPage-Hero-Title Prp-LandingPage-Hero-Title-Line1">
            Connect. Learn.
          </p>
          <p className="Prp-LandingPage-Hero-Title Prp-LandingPage-Hero-Title-Line2">
            Get Placed.
          </p>
          <p className="Prp-LandingPage-Hero-Description Prp-LandingPage-Hero-Description-Line1">
            The all-in-one platform that bridges the gap between
          </p>
          <p className="Prp-LandingPage-Hero-Description Prp-LandingPage-Hero-Description-Line2">
            talented individuals, top employers and training institutions.
          </p>
          <button type="button" className="Prp-LandingPage-Hero-Button Prp-LandingPage-Hero-Button-Primary">
            Get Started
          </button>
          <button type="button" className="Prp-LandingPage-Hero-Button Prp-LandingPage-Hero-Button-Secondary">
            Explore Jobs
          </button>
          <img src={InterviewBro} alt="Interview illustration" className="Prp-LandingPage-Hero-Image" />
        </section>

        <section className="Prp-LandingPage-Features-Section">
          <p className="Prp-LandingPage-Features-Eyebrow">WHY CHOOSE US</p>
          <h2 className="Prp-LandingPage-Features-Title">
            Everything You Need for a Successful Career
          </h2>
          <div className="Prp-LandingPage-Features-Grid">
            {featureCards.map((card) => (
              <article key={card.title} className="Prp-LandingPage-Features-Card">
                <img src={card.icon} alt="" className="Prp-LandingPage-Features-CardIcon" />
                <h3 className="Prp-LandingPage-Features-CardTitle">{card.title}</h3>
                <p className="Prp-LandingPage-Features-CardDescription">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="Prp-LandingPage-Testimonials-Section">
          <p className="Prp-LandingPage-Testimonials-Eyebrow">SUCCESS STORIES</p>
          <h2 className="Prp-LandingPage-Testimonials-Title">WHAT OUR USERS SAY</h2>
          <div className="Prp-LandingPage-Testimonials-Grid">
            {testimonials.map((item) => (
              <article key={item.name} className="Prp-LandingPage-Testimonials-Card">
                <img src={QuoteIcon} alt="" className="Prp-LandingPage-Testimonials-QuoteIcon" />
                <div className="Prp-LandingPage-Testimonials-CardHeader">
                  <img src={TestimonialUserAvatar} alt="" className="Prp-LandingPage-Testimonials-CardAvatar" />
                  <div className="Prp-LandingPage-Testimonials-CardMeta">
                    <div className="Prp-LandingPage-Testimonials-CardStars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <img key={i} src={StarIcon} alt="" className="Prp-LandingPage-Testimonials-CardStar" />
                      ))}
                    </div>
                    <p className="Prp-LandingPage-Testimonials-CardName">{item.name}</p>
                    <p className="Prp-LandingPage-Testimonials-CardRole">{item.role}</p>
                  </div>
                </div>
                <p className="Prp-LandingPage-Testimonials-CardQuote">{item.quote}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="Prp-LandingPage-Trusted-Section">
          <p className="Prp-LandingPage-Trusted-Eyebrow">TRUSTED BY Leading Companies</p>
          <h2 className="Prp-LandingPage-Trusted-Title">Top companies hire here</h2>
          <div className="Prp-LandingPage-Trusted-Logos">
            {companyLogos.map((logo) => (
              <img key={logo.alt} src={logo.src} alt={logo.alt} className="Prp-LandingPage-Trusted-Logo" />
            ))}
          </div>
        </section>

        <footer className="Prp-LandingPage-Footer">
          <div className="Prp-LandingPage-Footer-Columns">
            <div className="Prp-LandingPage-Footer-Column">
              <p className="Prp-LandingPage-Footer-Heading">COMPANY</p>
              <a href="#" className="Prp-LandingPage-Footer-Link">About Us</a>
              <a href="#" className="Prp-LandingPage-Footer-Link">Careers</a>
              <a href="#" className="Prp-LandingPage-Footer-Link">contact</a>
            </div>
            <div className="Prp-LandingPage-Footer-Column">
              <p className="Prp-LandingPage-Footer-Heading">Platform</p>
              <a href="#" className="Prp-LandingPage-Footer-Link">Job Postings</a>
              <a href="#" className="Prp-LandingPage-Footer-Link">AI Resume Matching</a>
              <a href="#" className="Prp-LandingPage-Footer-Link">Training &amp; skill Readiness</a>
              <a href="#" className="Prp-LandingPage-Footer-Link">Placement Analytics</a>
            </div>
            <div className="Prp-LandingPage-Footer-Column">
              <p className="Prp-LandingPage-Footer-Heading">SUPPORT</p>
              <a href="#" className="Prp-LandingPage-Footer-Link">Help Center</a>
              <a href="#" className="Prp-LandingPage-Footer-Link">FAQ</a>
              <a href="#" className="Prp-LandingPage-Footer-Link">Raise Issue</a>
              <a href="#" className="Prp-LandingPage-Footer-Link">Contact Support</a>
            </div>
            <div className="Prp-LandingPage-Footer-Column Prp-LandingPage-Footer-Column-Legal">
              <p className="Prp-LandingPage-Footer-Heading">LEGAL</p>
              <p className="Prp-LandingPage-Footer-Legal">
                Privacy Policy{'\n'} Terms &amp; Conditions{'\n'} Cookie Policy
              </p>
            </div>
          </div>
          <div className="Prp-LandingPage-Footer-Bottom">
            <p className="Prp-LandingPage-Footer-Copy">
              © 2026 Placement and Recruitment Platform.
            </p>
            <div className="Prp-LandingPage-Footer-Socials">
              <a href="#" aria-label="Facebook">
                <img src={FacebookIcon} alt="" />
              </a>
              <a href="#" aria-label="Twitter">
                <img src={TwitterXIcon} alt="" />
              </a>
              <a href="#" aria-label="Instagram">
                <img src={InstagramIcon} alt="" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default LandingPage
