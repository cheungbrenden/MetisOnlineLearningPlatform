// Module for top and side nav bars
import './Navbars.css';
import logo from './images/grad-cap.png';
import profile from './images/profile.png';

function NavWindow(props) {
    return (
        <div className="navWindow">
            <TopNavBar pageName={props.pageName}/>
            <SideNavBar />
            <div className="centerWindow">
                {props.children}
            </div>
        </div>
    )
}

function TopNavBar(props) {
    return (
        <span className="topNavBar background-blue">
            <img className="icon-logo" src={logo} alt="Metis Logo" />
            <span className="text-metis font-white font-bold">METIS</span>
            <span className="text-pageName font-oblique font-condensed font-light font-white">{props.pageName}</span>
            <div id="profileIcons">
                <div className="text-profileName font-darkBlue font-regular font-smallCaps">Panda Bear</div>
                <img className="icon-profile" src={profile} alt="Profile icon" />
            </div>
        </span>
    )
}

function SideNavBar() {
    return (
        <div className="sideNavBar background-darkBlue">
            <h1>SIDE NAV BAR</h1>
        </div>
    )
}

export default NavWindow;