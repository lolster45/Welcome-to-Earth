//Components...
import { useLocation, Link } from 'react-router-dom';

//React icons...
import {BsGlobeAmericas} from "react-icons/bs"
import {FaHome, FaLanguage} from "react-icons/fa"
import {ImFlag} from "react-icons/im"


const NavMenu = () => {
    const location = useLocation();
    const currentUrl = location.pathname;
  

    return (
        <div className="grid-content">
            <Link 
                to="/" 
                style={{backgroundColor: currentUrl === "/" ? "#5050505a" : "#0000005a"}}
            >
                <FaHome/>Home
            </Link>
            <Link 
                to="/Continents" 
                style={{backgroundColor: currentUrl === "/Continents" ? "#5050505a" : "#0000005a"}}
            >
                <BsGlobeAmericas/>Continents
            </Link>
            <Link 
                to="/Countries" 
                style={{backgroundColor: currentUrl === "/Countries" ? "#5050505a" : "#0000005a"}}
            >
                <ImFlag/>Countries
            </Link>
            <Link 
                to="/Languages" 
                style={{backgroundColor: currentUrl === "/Languages" ? "#5050505a" : "#0000005a"}}
            >
                <FaLanguage/>Languages
            </Link>
        </div>
    );
};

export default NavMenu;