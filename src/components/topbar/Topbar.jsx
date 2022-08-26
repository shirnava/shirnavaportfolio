import './topbar.scss'
import ModeNightIcon from '@mui/icons-material/ModeNight';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';

export default function topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={"topbar "+(menuOpen && "active")}>
        <div className="wrapper">
          <div className="left">
            {/* logo */}
            <a href="#intro" className="logo">
            <ModeNightIcon className ="logoMoon"/>
            shi
            </a>
            <div className="logor">r</div>
            <div className = "itemContainer">
            <PersonIcon className = "icon"/>
            <span>+1(305)409-3112</span>
            </div>
            <div className = "itemContainer">
            <MailIcon className = "icon"/>
            <span>shirnava@gmail.com</span>
            </div>
            <div className = "itemContainer">
            <a href="https://github.com/shirnava" title = "GitHub">
            <img src="assets/github.png" alt="" width={25} height={25} />
            </a>
            </div>
            <div className = "socialIcons">
            <a href="https://www.linkedin.com/in/shir-nava/" title="LinkedIn">
            <img src="assets/linkedin.png" alt="" width={28} height={28} />
            </a>
            
            </div>
            <div className = "socialIcons">
            <a href="https://drive.google.com/file/d/1e2nSRdX6xFmSL8hGqZ-H_luIK-shSwVL/view?usp=sharing" title = "Resume">
            <img src="assets/resume.png" alt="" width={28} height={28} />
            </a>
            
            </div>
              
          </div>
          <div className="right">
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
              <span className='firstline'>

              </span>
              <span className='secondline'>

              </span>
              <span className='thirdline'>

              </span>
            </div>
          </div>
        </div>
        </div>
  )
}
