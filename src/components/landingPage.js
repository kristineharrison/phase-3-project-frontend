import { useState } from 'react'
import styled from 'styled-components'

import NavFormBar from './navFormBar'
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

//     const projectList = function() {
//         sendProjectsData.map((eachProject) => (
    
//             <ProjectPreview
//             key={eachProject.id}
//             eachProject={eachProject}
//             />
//         )
// )
//     }

    return(
        <Container>
            <h1> Project Manager </h1>
            <ul>
                {sendProjectsData.map((eachProject) => (
                    <ProjectPreview
                        key={eachProject.id}
                        eachProject={eachProject}
                    />
                ))}
            </ul>



            {/* <div className="projectItems" onClick={displayFullCards}> 
                {openFullProject? <ProjectPreview sendProjectsData={sendProjectsData}/> : <ProjectCard sendProjectsData={sendProjectsData} tasksData={tasksData}/>}
            </div> */}
            <button className="bttn"> Create New Project </button> 

            <ProjectCard
                sendProjectsData={sendProjectsData}
                tasksData={tasksData}
            />
        </Container>
)
}
export default LandingPage;
