import React, { useState } from 'react';
import '../css/RouteApplication.css';
import App2Route from '../pages/app2_route';
import App2Home from '../pages/app2_home';
import { useNavigate } from "react-router-dom"; 
const AppHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const navigate=useNavigate()
    return (
        <>
        <header className="header2">
            <div className="header-left2">
                <div className="logo2">🌐</div>
                <div className="header-title2">RouteSphere</div>
            </div>

            <div className={`nav-section2 ${isMenuOpen ? 'active' : ''}`}>
                <div className="nav-link2">Home</div>
                <div className="nav-link2" onClick={()=>navigate('/card')}>Courses</div>
                <div className="nav-link2" onClick={()=>navigate('/Attract')}>Attractions</div>
                <div className="nav-link2" onClick={()=>navigate('/map')}>Map</div>
                <div className="login-btn2">Login</div>
            </div>

            <div className="header-right2">
                <div className="hamburger2" onClick={toggleMenu}>
                    <span className="bar2"></span>
                    <span className="bar2"></span>
                    <span className="bar2"></span>
                </div>
            </div>
        </header>
        <App2Route/>
        <App2Home /> 
        </>
    );
};

export default AppHeader;
