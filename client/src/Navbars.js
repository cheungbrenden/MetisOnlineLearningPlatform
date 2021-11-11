// Module for top and side nav bars
import './Navbars.css';

// Top Nav Bar icons
import logo from './images/grad-cap.png';
import profile_icon from './images/profile.svg';

// Side Nav Bar icons
import chat_icon from './images/chat.svg';
import goals_icon from './images/goals.svg';
import grades_icon from './images/grades.svg';

function NavWindow(props) {
    return (
        <div id="navWindow">
            <TopNavBar pageName={props.pageName}/>
            <SideNavBar />
            <div id="centerWindow">
                {props.children}
            </div>
        </div>
    )
}

function TopNavBar(props) {
    return (
        <span id="topNavBar" className="background-blue">
            <img id="icon-logo" src={logo} alt="Metis Logo" />
            <span id="text-metis" className="font-white font-bold">METIS</span>
            <span id="text-pageName" className="font-oblique font-condensed font-light font-white">{props.pageName}</span>
            <div id="profileIcons">
                <div className="text-profileName font-darkBlue font-regular font-smallCaps">Panda Bear</div>
                <img className="icon-profile" src={profile_icon} alt="Profile icon" />
            </div>
        </span>
    )
}

function SideNavBar() {
    return (
        <div id="sideNavBar" className="background-darkBlue font-smallCaps font-white font-regular">
            <div className="sideBarButton">
                <img src={grades_icon} className="sideBarButton-icon"/>
                <div className="sideBarButton-text">Grades</div>
            </div>
            <div className="sideBarButton">
                <img src={chat_icon} className="sideBarButton-icon"/>
                <div className="sideBarButton-text">Chat</div>
            </div>
            <div className="sideBarButton">
                <img src={goals_icon} className="sideBarButton-icon"/>
                <div className="sideBarButton-text">Goals</div>
            </div>
        </div>
    )
}

export default NavWindow;