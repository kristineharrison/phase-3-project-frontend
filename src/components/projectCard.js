import { useState } from "react";
import styled from "styled-components";
import Tasks from "./tasks";
import TeamMembers from "./teams";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function ProjectCard({ setIsOpen, eachProject }) {
  return (
    <Container>
      <div>
        <div>
          <div className="details">
            <h4>Team Notes:</h4>
            <p>{eachProject.description}</p>
            <br />
          </div>
          <div className="task-list">
            <h4> Tasks:</h4>
            <ul>
              {eachProject.tasks.map((eachTask) => (
                <div>
                  <p>{eachTask.name} </p>
                  <p>Skills Needed: {eachTask.skills_needed}</p>
                  <p>{eachTask.description}</p>
                </div>
              ))}
            </ul>
          </div>
          <div>
            <div>
              <button onClick={() => setIsOpen(false)}>Close Details</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default ProjectCard;
