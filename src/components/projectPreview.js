import { useState } from "react";
import styled from "styled-components";
import ProjectCard from "./projectCard";

const Card = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  vertical-align: center;
  align-items: center;
  border: 1px solid gray;
  padding: 20px;
`

const ButtonNav = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`

function ProjectPreview({ eachProject, tasksData, functionToDeleteProjects }) {
  const [isOpen, setIsOpen] = useState(false);

  function deleteClick() {
    fetch(`http://localhost:9292/projects/${eachProject.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => functionToDeleteProjects(eachProject.id));
  }

  return (
    <Card>
      <h3>Project Name: {eachProject.name}</h3>
      <img
        // src={eachProject.business.logo_url}
        style={{ width: "150px" }}
        // alt={eachProject.business.name}
      />
      <h6>Due Date: {eachProject.due_date}</h6>
      {/* <p>Client:{eachProject.business.name}</p> */}
      <p>{eachProject.description}</p>
      {/* <p>Team Assigned: {eachProject.team.team_name}</p> */}

      <button onClick={() => setIsOpen(true)}>Project Details</button>
      {isOpen && (
        <ProjectCard
          setIsOpen={setIsOpen}
          eachProject={eachProject}
          tasksData={tasksData}
        />
      )}
      <ButtonNav>
        <button className="button"> Update Project </button>
        <button className="button" onClick={deleteClick}>
          {" "}
          Delete Project{" "}
        </button>
      </ButtonNav>
    </Card>
  );
}
export default ProjectPreview;
