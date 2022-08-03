import styled from 'styled-components'

import ProjectCard from './projectCard'

const Container = styled.div`

.projectItem{ }

.bttn{ }

`


function LandingPage(){


    return(
        <Container>
            <h1> Project Manager </h1>
            {/* potentially a search bar here by Project name, teammembers, languages used */}
            <div class="projectItems"> 
                <ProjectCard/>
                <button class="bttn"> Delete Project </button>
            </div>
            <button class="bttn"> Create New Project </button>
        </Container>
    )
}
export default LandingPage