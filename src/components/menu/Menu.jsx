import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className = {"menu "+(menuOpen && "active")}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#projects">Projects</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#work">Work</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#contact">Contact</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#contact">Résumé</a>
            </li>
        </ul>
    </div>
  )
}
