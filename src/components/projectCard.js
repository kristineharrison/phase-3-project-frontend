import styled from "styled-components";

import Tasks from "./tasks";
import TeamMembers from "./teams";

const Container = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`;

function ProjectCard({ sendProjectsData, tasksData }) {
  return (
    <Container>
      <h1>{sendProjectsData.name}</h1>
      <div className="Team">
        <h4>Team Name{sendProjectsData.team_name}</h4>
      </div>
      <div className="details">
        <h6>Client:</h6>
        {/* <p>{sendProjectsData.business.name}</p> */}
        <br />
        <h6>Project Description:</h6>
        <p>{sendProjectsData.description}</p>
        <br />
        <h6> Due Date: </h6>
        <p>{sendProjectsData.due_date}</p>
        <br />
        {/* <h6> Task Priority</h6>
        <ul>
          <li> "priority task from tasks" </li>
          <li> "priority tasks form tasks" </li>
        </ul> */}
      </div>
      <div className="task-list">
        <h4> Tasks:</h4>
        <ul>
          {tasksData.map((eachTask) => (
            <Tasks key={eachTask.id} eachTask={eachTask} />
          ))}
        </ul>
      </div>

      <button className="button"> Update Project </button>
      <button className="button"> Delete Project </button>
    </Container>
  );
}
export default ProjectCard;
