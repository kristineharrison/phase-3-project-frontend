import { useState } from 'react'
import styled from 'styled-components'

import ProjectCard from './projectCard'
import ProjectPreview from './projectPreview'

const Container = styled.div`

.projectItems{ }

.bttn{ }

`


function LandingPage({sendProjectsData, tasksData}){

    const [openFullProject, setOpenFullProject]= useState(true)

    function displayFullCards(){
        setOpenFullProject(!openFullProject)
    }


    const projectList = sendProjectsData.map((eachProject) => (
        <ProjectPreview
        key={eachProject.id}
        eachProject={eachProject}
        />   
    )
    );

    return(
        <Container>
            <h1> Project Manager </h1>
            {projectList}
            <div class="projectItems" onClick={displayFullCards}> 
                {openFullProject ? 
                        <ProjectPreview sendProjectData={sendProjectData}/> 
                        : 
                        <ProjectCard sendProjectsData={sendProjectsData} tasksData={tasksData}/>}
            </div>
            <button class="bttn"> Create New Project </button> 

            <ProjectCard
                sendProjectsData={sendProjectsData}
                tasksData={tasksData}
            />



        </Container>
)
}
export default LandingPage;
