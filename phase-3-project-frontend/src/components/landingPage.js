import styled from 'styled-components'

function LandingPage (){
    return(
        <Container>
            <h1> Project Manager </h1>
            {/* potentially a search bar here by Project name, teammembers, languages used */}
            <div class="projectItems"> 
                <h3> "Project Name" </h3>
                <h3> Due Date: </h3>
                <h3> "Project Due Date" </h3>
                <button> Delete Project </button>
            </div>
            <button> Create New Project </button>
            


            
            
        </Container>
    )
}
export default LandingPage