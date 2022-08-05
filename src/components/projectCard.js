import styled from "styled-components";

import Tasks from "./tasks";

import { RiCloseLine } from "react-icons/ri";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function ProjectCard({ tasksData, setIsOpen, eachProject }) {
  return (
    <Container>
      <div>
        <div>
          <button onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>

          <div className="details">
            <h4>Team Notes:</h4>
            <p>{eachProject.description}</p>
            <br />
          </div>
          <div className="task-list">
            <h4> Tasks:</h4>
            <ul>
              {tasksData.map((eachTask) => (
                <Tasks key={eachTask.id} eachTask={eachTask} />
              ))}
            </ul>
          </div>
          <div>
            <div>
              <button onClick={() => setIsOpen(false)}>Delete</button>
              <button onClick={() => setIsOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default ProjectCard;
