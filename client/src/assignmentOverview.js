import "./assignmentOverview.css";
import NavWindow from "./Navbars";

function assignmentOverview() {
  return (
    <NavWindow>
    <div id="wrapper">
      <div id="assignmentOverview" className="container">
        <h2>
          Assignment: <span className="purpleText"> Section 3.1 </span>
        </h2>
        <p>
          <b> Class </b> : Algebra 1
        </p>
        <p>
          <b> Status </b> : In Progress
        </p>
        <p>
          <b> Due </b> : December 2 @ 11pm
        </p>
      </div>

      <div id="Comprehension" className="container">
        <h2>Comprehension:</h2>

        <p id="large">5.7/10</p>
        <p>Self Evaluation</p>
      </div>

      <div id="Completion" className="container">
        <h2>Completion:</h2>
        <p>0/20 Problems</p>
        <p>0/40 Points</p>
      </div>

      
    </div>
    
    <div id="tableWrap">
      <table>
        <thead>
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
  </NavWindow>
  );
}

export default assignmentOverview;