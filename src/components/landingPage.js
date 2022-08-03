import { useState } from 'react'
import styled from 'styled-components'

import NavFormBar from './navFormBar'
import ProjectCard from './projectCard'
import ProjectPreview from './projectPreview'

const Container = styled.div`

.projectItems{ }

.bttn{ }

`


function LandingPage(){

    const [openFullProject, setOpenFullProject]= useState(true)

    function displayFullCards(){
        setOpenFullProject(!openFullProject)
    }



    return(
        <Container>
            <h1> Project Manager </h1>
            <div class="projectItems" onClick={displayFullCards}> 
                {openFullProject? <ProjectPreview/> : <ProjectCard/>}
            </div>
            <button class="bttn"> Create New Project </button> 
        </Container>
)
}
export default LandingPage;
