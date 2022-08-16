import React, {useState} from 'react'
import logo from "../images/logo.png"

const NavBar = () => {

    const [nav, setNav] = useState(false); /* da se aktivira samio u slucaju koliko smo scrolali */

    function changeBackground(){ /* dio scrolla */
        if(window.scrollY >= 50){ /* ako je scrollan vise od 50px stavi na true! */
            setNav(true);
            
        }else{
            setNav(false);
        }
    }


    window.addEventListener("scroll", changeBackground); /* isto dio scrollanja */
  return (
 
    <nav className={nav ? "nav active" : "nav"}> {/* dio scroll */}
     <a href="#" className="logo"><img src={logo} alt="logo"/></a>
     <ul className="menu">
        <li><a href="#" className="active">Home</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">UI SS</a></li>
        <li><a href="#">Download</a></li>
     </ul>
    </nav>
  );
};

export default NavBar;