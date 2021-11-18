// Module for top and side nav bars
import './Navbars.css';

// Top Nav Bar icons
import logo_icon from './images/grad cap logo.svg';
import profile_icon from './images/profile.svg';
import search_icon from './images/search.svg';
import settings_icon from './images/settings.svg';

// Side Nav Bar icons
import home_icon from './images/home.svg';
import classes_icon from './images/classes.svg';
import grades_icon from './images/grades.svg';
import chat_icon from './images/chat.svg';
import progress_icon from './images/progress.svg';
import goals_icon from './images/goals.svg';
import {useNavigate} from "react-router-dom";


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
            <img id="icon-logo" src={logo_icon} alt="Metis Logo" />
            <span id="text-metis" className="font-white font-bold">METIS</span>
            <span id="text-pageName" className="font-oblique font-condensed font-light font-white">{props.pageName}</span>
            <div id="profileInfo">
                <div className="text-profileName font-darkBlue font-regular font-smallCaps">Panda Bear</div>
                <img id="icon-profile" src={profile_icon} alt="Profile icon" />
            </div>
            <img id="icon-search" src={search_icon} />
            <img id="icon-settings" src={settings_icon} />
        </span>
    )
}

function SideBarButton(props) {

    const navigate = useNavigate();

    function handleSubmit() {
        let buttonName = props.name;
        if (buttonName === 'Home') {
            navigate('/home');
        }
        else if (buttonName === 'Classes') {
            navigate('/classes');
        }
        else if (buttonName === 'Grades') {
            navigate('/grades');
        }
        else if (buttonName === 'Chat') {
            navigate('/chat');
        }
        else if (buttonName === 'Progress') {
            navigate('/progress');
        }
        else if (buttonName === 'Goals') {
            navigate('/goals');
        }

    }

    return (

    <div onClick={handleSubmit} style={{cursor: 'pointer'}} className="sideBarButton">
        <img src={props.icon} className="sideBarButton-icon"/>
        <div className="sideBarButton-text">{props.name}</div>

    </div>
    );
}

function SideNavBar() {
    return (
        <div id="sideNavBar" className="background-darkBlue font-smallCaps font-white font-regular">
            <SideBarButton icon={home_icon} name="Home" />
            <SideBarButton icon={classes_icon} name="Classes" />
            <SideBarButton icon={grades_icon} name="Grades" />
            <SideBarButton icon={chat_icon} name="Chat" />
            <SideBarButton icon={progress_icon} name="Progress" />
            <SideBarButton icon={goals_icon} name="Goals" />

        </div>
    )
}

export default NavWindow;