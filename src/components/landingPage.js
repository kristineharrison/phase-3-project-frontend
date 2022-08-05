import styled from "styled-components";

import ProjectCard from "./projectCard";
import ProjectPreview from "./projectPreview";

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-flow: row wrap;
  padding: 20px;

`

function LandingPage({ sendProjectsData, tasksData}) {
  

  const handleClick = (event) => {
    console.log(sendProjectsData[0]);
  };

  const projectList = sendProjectsData.map((eachProject) => (
    <ProjectPreview key={eachProject.id} eachProject={eachProject} />
  ));

  return (
    <div>
      <h1 onClick={handleClick}> Project Manager </h1>
      <Container>
        {projectList}

      </Container>
      <button className="bttn"> Create New Project </button>

      <ProjectCard sendProjectsData={sendProjectsData} tasksData={tasksData} />
    </div>
  );
}
export default LandingPage;
