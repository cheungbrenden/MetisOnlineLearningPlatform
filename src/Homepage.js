import './Homepage.css'

function Homepage() {
    return (
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
                        Upcoming Assignments
                    </h2>
                </div>
                <div id="inProgressAssignments" className="container" style={{
                    gridColumn: 3,
                    gridRow: 1
                }}>
                    <h2>
                        In-Progress Assignments
                    </h2>
                </div>
                <div id="goalsForTheWeek" className="container" style={{
                    gridColumnStart: 1,
                    gridColumnEnd: -1,
                    gridRow: 3
                }}>
                    <h2>
                        Goals For The Week
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
                        Completed Assignments
                    </h2>
                </div>
                <div id="grades" className="container" style={{
                    gridRow: 5
                }}>
                    <h2>
                        Grades
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Homepage