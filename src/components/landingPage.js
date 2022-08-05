import styled from "styled-components";
import {useState} from 'react'

import ProjectPreview from "./projectPreview";
import NewProjectForm from './newProjectForm'


const Container = styled.div`

  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  padding: 20px;
  border-top: solid 3px #75b9be;
    margin-top: 20px;
  
  justify-content: space-around;
 
`;

function LandingPage({
    sendProjectsData,
    tasksData,
    functionToDeleteProjects,
    functionToDeleteTasks,
    functionForAddingNewProject,
    
    }) {

  
    const [openProjForm, setOpenProjForm] = useState(false)

    const projectList = sendProjectsData.map((eachProject) => (
        <ProjectPreview
        key={eachProject.id}
        eachProject={eachProject}
        tasksData={tasksData}
        functionToDeleteProjects={functionToDeleteProjects}
        functionToDeleteTasks={functionToDeleteTasks}
        />
    ));

    function toggleform(){
      setOpenProjForm(!openProjForm)
    }

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Project Manager </h1>
            <button className="bttn" onClick={toggleform}> Create Project </button>
            {openProjForm? < NewProjectForm functionForAddingNewProject={functionForAddingNewProject}/> :null}
            <Container>{projectList}</Container>
        
        </div>
    );
}

export default LandingPage;