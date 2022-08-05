import styled from "styled-components";
import TeamMembers from "./teams";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    color: #75b9be;
  }
`;

const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  p {
    margin: 5px;
  }
`;

function ProjectCard({ setIsOpen, eachProject }) {
  return (
    <Container>
      <div className="details">
        <h4>Team Notes:</h4>
        <p>{eachProject.description}</p>
      </div>
      <TaskList>
        <h4> Tasks:</h4>

        {eachProject.tasks.map((eachTask) => (
          <div>
            <p>{eachTask.name}</p>
            <p>Skills Needed: {eachTask.skills_needed}</p>
            <p>{eachTask.description}</p>
          </div>
        ))}
      </TaskList>

      <button onClick={() => setIsOpen(false)}>Close Details</button>
    </Container>
  );
}
export default ProjectCard;
