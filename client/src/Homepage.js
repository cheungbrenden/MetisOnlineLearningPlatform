import './Homepage.css'
import NavWindow from './Navbars'; 
import globe_icon from './images/globe.png';
import {useNavigate} from "react-router-dom";

function AssignmentBox(props) {
    return (
        <button className="assignment" onClick={() => {if (props.navigate) props.navigate("/assignment/overview")}} disabled={props.navigate === undefined}>
            <div className="assignment-leftBox" style={{backgroundColor: props.color + "55"}}>
                <img className="assignment-icon" src={props.icon}/>
            </div>
            <div className="assignment-centerBox">
                <div className="assignment-class font-medium" style={{color: props.color}}>{props.subject}</div>
                <div className="assignment-name font-medium font-smallCaps">{props.assignmentName}</div>
            </div>
            <div className="assignment-rightBox">
                <div className="assignment-dueDate font-medium font-smallCaps">{props.dueDate}</div>
                <div className="assignment-grade font-regular">{props.grade}</div>
            </div>
        </button>
    );
}

function GoalBox(props) {
    return (
        <div className="goal">
            { !props.excludeIcon &&
            <div className="goal-leftBox" style={{backgroundColor: props.color + "88"}}>
                <img className="goal-icon" src={props.icon}/>
            </div> }
            <div className="goal-centerBox">
                <div className="goal-name">{props.goalName}</div>
                <div className="goal-type">{props.goalType}</div>
            </div>
        </div>
    );
}

function Homepage() {
    const navigate = useNavigate();
    return (
        <NavWindow pageName="Home">
            <div id="homepage-centerSpace" style={{
                gridTemplateColumns: "1fr 1fr 1fr",
                columnGap: "30px",
                gridTemplateRows: "3fr 2fr 1fr",
                rowGap: "10px"
            }}>
                <div id="upcomingAssignments" className="container" style={{
                    gridColumnStart: 1,
                    gridColumnEnd: 2,
                    gridRowStart: 1,
                    gridRowEnd: 2
                }}>
                    <h2 className="container-title">
                        UPCOMING ASSIGNMENTS
                    </h2>
                    <AssignmentBox color="#0912F1" icon={globe_icon} subject="WORLD HISTORY" assignmentName="Homework 5" dueDate="12/03 11pm"/>
                    <AssignmentBox color="#F10909" subject="ALGEBRA 1" assignmentName="Section 3.2" dueDate="12/03 11pm"/>
                    <AssignmentBox color="#0CA838" subject="CHEMISTRY 2" assignmentName="Lab 3 Quiz" dueDate="12/04 11pm"/>
                    <AssignmentBox color="#F18609" subject="ENGLISH 10" assignmentName="Essay 4" dueDate="12/05 11pm"/>
                </div>
                <div id="inProgressAssignments" className="container" style={{
                    gridColumnStart: 2,
                    gridColumnEnd: 3,
                    gridRowStart: 1,
                    gridRowEnd: 2
                }}>
                    <h2 className="container-title">
                        IN-PROGRESS ASSIGNMENTS
                    </h2>
                    <AssignmentBox color="#F10909" subject="ALGEBRA 1" assignmentName="Section 3.1" dueDate="12/02 11pm" navigate={navigate}/>
                    <AssignmentBox color="#0912F1" icon={globe_icon} subject="WORLD HISTORY" assignmentName="Homework 4" dueDate="12/01 11pm"/>
                    <AssignmentBox color="#0CA838" subject="CHEMISTRY 2" assignmentName="Lab 3" dueDate="12/03 11pm"/>
                </div>
                <div id="completedAssignments" className="container" style={{
                    gridRowStart: 1,
                    gridRowEnd: 2,
                    gridColumn: 3
                }}>
                    <h2 className="container-title">
                        COMPLETED ASSIGNMENTS
                    </h2>
                    <AssignmentBox color="#F18609" subject="ENGLISH 10" assignmentName="Essay 3" grade="94%"/>
                    <AssignmentBox color="#0912F1" icon={globe_icon} subject="WORLD HISTORY" assignmentName="Homework 3" grade="100%"/>
                    <AssignmentBox color="#F10909" subject="ALGEBRA 1" assignmentName="Section 2.3" grade="96%"/>
                    <AssignmentBox color="#0CA838" subject="CHEMISTRY 2" assignmentName="Lab 2" grade="80%"/>
                    <AssignmentBox color="#F10909" subject="ALGEBRA 1" assignmentName="Section 2.2" grade="90%"/>
                    <AssignmentBox color="#0CA838" subject="CHEMISTRY 2" assignmentName="Lab 1" grade="85%"/>
                </div>
                <div id="goalsForTheWeek" className="container" style={{
                    gridColumnStart: 1,
                    gridColumnEnd: 3,
                    gridRowStart: 2,
                    gridRowEnd: -1
                }}>
                    <h2 className="container-title">
                        GOALS FOR THE WEEK
                    </h2>
                    <div id="goalsBox">
                        <GoalBox color="#F10909" goalName="SLO 3 - Fractions" goalType="Class Goal"/>
                        <GoalBox color="#F10909" goalName="Review SLO 2 Questions" goalType="Teacher Set Goal"/>
                        <GoalBox color="#F18609" goalName="Find Group for Final Project" goalType="Personal Goal"/>
                        <GoalBox excludeIcon={true} goalName="Contribute to 3 Chat Posts" goalType="Personal Goal"/>
                    </div>
                </div>
                <div id="grades" className="container" style={{
                    gridRow: 2,
                    gridColumn: 3
                }}>
                    <h2 className="container-title">
                        GRADES
                    </h2>
                    <div id="gradesBox">
                        <AssignmentBox color="#F18609" subject="ENGLISH 10" assignmentName="87%"/>
                        <AssignmentBox color="#0CA838" subject="CHEMISTRY 2" assignmentName="76%"/>
                        <AssignmentBox color="#0912F1" icon={globe_icon} subject="WORLD HISTORY" assignmentName="79%"/>
                        <AssignmentBox color="#F10909" subject="ALGEBRA 1" assignmentName="95%"/>
                    </div>
                </div>
                <div id="calendar" style={{
                    gridRow: 3,
                    gridColumn: 3
                }}>
                    <div id="calendar-row">
                        <div className="calendar-cell">
                            <div className="calendar-date">11/28</div>
                            <div className="calendar-day">Su</div>
                        </div>
                        <div className="calendar-cell">
                            <div className="calendar-date">11/29</div>
                            <div className="calendar-day">M</div>
                        </div>
                        <div className="calendar-cell">
                            <div className="calendar-date">11/30</div>
                            <div className="calendar-day">T</div>
                        </div>
                        <div className="calendar-cell calendar-current">
                            <div className="calendar-date">12/01</div>
                            <div className="calendar-day">W</div>
                        </div>
                        <div className="calendar-cell">
                            <div className="calendar-date">12/02</div>
                            <div className="calendar-day">Th</div>
                        </div>
                        <div className="calendar-cell">
                            <div className="calendar-date">12/03</div>
                            <div className="calendar-day">F</div>
                        </div>
                        <div className="calendar-cell">
                            <div className="calendar-date">12/04</div>
                            <div className="calendar-day">S</div>
                        </div>
                    </div>
                </div>
            </div>
        </NavWindow>
    );
}

export default Homepage