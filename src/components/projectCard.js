import styled from "styled-components";

import Tasks from "./tasks";
import TeamMembers from "./teams";

const Container = styled.div`
  .team {
  }

  .details {
  }

  .task-list {
  }

  .button {
  }
`;

function projects() {
  return (
    <Container>
      <h1> Project Name</h1>
      <div class="Team">
        <h4> "Team Name" </h4>
      </div>
      <div class="details">
        <h6>Client:</h6>
        <p> "business name from business" </p>
        <br />
        <h6>Project Description:</h6>
        <p> "project description from project" </p>
        <br />
        <h6> Due Date: </h6>
        <p> "Due Date from project" </p>
        <br />
        <h6> Task Priority</h6>
        <ul>
          <li> "priority task from tasks" </li>
          <li> "priority tasks form tasks" </li>
        </ul>
      </div>
      <div clas="task-list">
        <h4> Tasks:</h4>
        <Tasks />
      </div>

      <button class="button"> Update Project </button>
      <button class="button"> Delete Project </button>
    </Container>
  );
}
export default projects;
