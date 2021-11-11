import './Homepage.css'
import NavWindow from './Navbars'; 
import globe_icon from './images/globe.png';


function AssignmentBox(props) {
    return (
        <div className="assignment">
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
        </div>
    );
}

function Homepage() {
    return (
        <NavWindow pageName="Home">
            <div id="centerSpace" style={{
                gridTemplateColumns: "1fr 30px 1fr 30px 1fr",
                gridTemplateRows: "1.3fr 10px 0.70fr 10px 0.4fr"
            }}>
                <div id="upcomingAssignments" className="container" style={{
                    gridColumn: 1,
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
                    gridColumn: 3,
                    gridRowStart: 1,
                    gridRowEnd: 2
                }}>
                    <h2 className="container-title">
                        IN-PROGRESS ASSIGNMENTS
                    </h2>
                    <AssignmentBox color="#0912F1" icon={globe_icon} subject="WORLD HISTORY" assignmentName="Homework 4" dueDate="12/01 11pm"/>
                    <AssignmentBox color="#F10909" subject="ALGEBRA 1" assignmentName="Section 3.1" dueDate="12/02 11pm"/>
                    <AssignmentBox color="#0CA838" subject="CHEMISTRY 2" assignmentName="Lab 3" dueDate="12/03 11pm"/>
                </div>
                <div id="goalsForTheWeek" className="container" style={{
                    gridColumnStart: 1,
                    gridColumnEnd: 4,
                    gridRowStart: 3,
                    gridRowEnd: 6
                }}>
                    <h2 className="container-title">
                        GOALS FOR THE WEEK
                    </h2>
                </div>
                <div id="calendar" style={{
                    gridRow: 5,
                    gridColumn: 5
                }}>
                    <h2 className="container-title">
                        Calendar
                    </h2>
                </div>
                <div id="completedAssignments" className="container" style={{
                    gridRowStart: 1,
                    gridRowEnd: 2,
                    gridColumn: 5
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
                <div id="grades" className="container" style={{
                    gridRow: 3,
                    gridColumn: 5
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
            </div>
        </NavWindow>
    );
}

export default Homepage