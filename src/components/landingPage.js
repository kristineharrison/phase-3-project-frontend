import { useState } from "react";
import styled from "styled-components";

import NavFormBar from "./navFormBar";
import ProjectCard from "./projectCard";
import ProjectPreview from "./projectPreview";

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-flow: row wrap;
  padding: 20px;
`;

function LandingPage({ sendProjectsData, tasksData}) {
  const [openFullProject, setOpenFullProject] = useState(true);

  function displayFullCards() {
    setOpenFullProject(!openFullProject);
  }

  const projectList = sendProjectsData.map((eachProject) => (
    <ProjectPreview key={eachProject.id} eachProject={eachProject} />
  ));

  return (
    <div>
      <h1> Project Manager </h1>
      <Container>
        {projectList}

        {/* 
            <div className="projectItems" onClick={displayFullCards}> 
                {openFullProject? 
                    <ProjectPreview sendProjectsData={sendProjectsData}/> : 
                    <ProjectCard sendProjectsData={sendProjectsData} tasksData={tasksData}/>}
            </div> */}
      </Container>
      <button className="bttn"> Create New Project </button>

      <ProjectCard sendProjectsData={sendProjectsData} tasksData={tasksData} />
    </div>
  );
}
export default LandingPage;
