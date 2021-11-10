import './Homepage.css'
import NavWindow from './Navbars'; 

function Homepage() {
    return (
        <NavWindow pageName="Home">
            <div id="centerSpace" style={{
                gridTemplateColumns: "2fr 1fr"
            }}>
                <div id="leftBox" style={{
                    gridColumn: 1,
                    gridTemplateColumns: "1fr 30px 1fr",
                    gridTemplateRows: "1fr 15px 1fr",
                }}>
                    <div id="upcomingAssignments" className="container" style={{
                        gridColumn: 1,
                        gridRow: 1
                    }}>
                        <h2>
                            UPCOMING ASSIGNMENTS
                        </h2>
                    </div>
                    <div id="inProgressAssignments" className="container" style={{
                        gridColumn: 3,
                        gridRow: 1
                    }}>
                        <h2>
                            IN-PROGRESS ASSIGNMENTS
                        </h2>
                    </div>
                    <div id="goalsForTheWeek" className="container" style={{
                        gridColumnStart: 1,
                        gridColumnEnd: -1,
                        gridRow: 3
                    }}>
                        <h2>
                            GOALS FOR THE WEEK
                        </h2>
                    </div>
                </div>
                <div id="rightBox" style={{
                    gridColumn: 2,
                    gridTemplateRows: "1fr 30px 4fr 30px 2fr"
                }}>
                    <div id="calendar" style={{
                        gridRow: 1
                    }}>
                        <h2>
                            Calendar
                        </h2>
                    </div>
                    <div id="completedAssignments" className="container" style={{
                        gridRow: 3
                    }}>
                        <h2>
                            COMPLETED ASSIGNMENTS
                        </h2>
                    </div>
                    <div id="grades" className="container" style={{
                        gridRow: 5
                    }}>
                        <h2>
                            GRADES
                        </h2>
                    </div>
                </div>
            </div>
        </NavWindow>
    );
}

export default Homepage