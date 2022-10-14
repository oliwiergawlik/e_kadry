import logo from "../../images/front_logo.png"
import "./Header.scss"

function Header(){
    return (
       <header className="header">
           <img className="header__logo" src={logo} alt="Logo AOTM"/>
       </header>
    )
}

export default Header;