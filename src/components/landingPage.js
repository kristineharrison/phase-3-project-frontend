import styled from "styled-components";


import ProjectPreview from "./projectPreview";

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-flow: row wrap;
  padding: 20px;
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
      <h1> Project Manager </h1>
      <Container>{projectList}</Container>
      <button className="bttn"> Create New Project </button>
    </div>
  );
}
export default LandingPage;