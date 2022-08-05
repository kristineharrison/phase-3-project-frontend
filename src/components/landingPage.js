import styled from "styled-components";

import ProjectPreview from "./projectPreview";

const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  padding: 20px;
  margin-top: 20px;

  justify-content: space-around;
`;

function LandingPage({
  sendProjectsData,
  tasksData,
  functionToDeleteProjects,
  functionToDeleteTasks,
}) {
  const projectList = sendProjectsData.map((eachProject) => (
    <ProjectPreview
      key={eachProject.id}
      eachProject={eachProject}
      tasksData={tasksData}
      functionToDeleteProjects={functionToDeleteProjects}
      functionToDeleteTasks={functionToDeleteTasks}
    />
  ));

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Project Manager </h1>
      <button className="bttn" style={{ float: "right", marginBottom: "10px" }}>
        {" "}
        Create New Project{" "}
      </button>
      <Container>{projectList}</Container>
    </div>
  );
}

export default LandingPage;
