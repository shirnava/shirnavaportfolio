import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className = {"menu "+(menuOpen && "active")}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#portfolio">Projects</a>
            </li>
            {/* <li onClick={()=>setMenuOpen(false)}>
                <a href="#work">Work</a>
            </li> */}
            {/* <li onClick={()=>setMenuOpen(false)}>
                <a href="#contact">Contact</a>
            </li> */}
            <li onClick={()=>setMenuOpen(false)}>
                <a href="https://drive.google.com/file/d/1e2nSRdX6xFmSL8hGqZ-H_luIK-shSwVL/view?usp=sharing">Résumé</a>
            </li>
        </ul>
    </div>
  )
}
