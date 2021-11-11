
import "./assignmentOverview.css";

function assignmentOverview() {
  return (
    <>
    <div id="wrapper">
      <div id="assignmentOverview" className="container">
        <h2>
          Assignment: <span className="purpleText"> Section 3.1 </span>
        </h2>
        <p>
          <b> Class </b> : Algebra 1
        </p>
        <p>
          <b> Status </b> : Incomplete
        </p>
      </div>

      <div id="noOfProblems" className="container">
        <h2>12 Problems Left</h2>

        <p>20 Problems Total</p>
        <p>40 Points Total</p>
      </div>

      <div id="due" className="container">
        <h2>Due Date:</h2>
      </div>

      
    </div>
    
    <div className="tableWrap">
      <table>
        <thead className="tableHead" >
          <th>#</th>
          <th>Title</th>
          <th>Points</th>
          <th>Status</th>
        </thead>
        <tr>
          <td> 1 </td>
          <td>Problem 1</td>
          <td>2</td>
          <td>Incomplete</td>
        </tr>
        <tr>
          <td> 2 </td>
          <td>Problem 2</td>
          <td>2</td>
          <td>Incomplete</td>
        </tr>
      </table>
    </div>
  </>
  );
}

export default assignmentOverview;
