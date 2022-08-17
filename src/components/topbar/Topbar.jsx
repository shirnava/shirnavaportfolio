import './topbar.scss'
import ModeNightIcon from '@mui/icons-material/ModeNight';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';

export default function topbar() {
  return (
    <div className="topbar">
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
              
          </div>
          <div className="right">
            <div className="hamburger">
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
