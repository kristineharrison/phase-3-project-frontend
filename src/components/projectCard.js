import styled from 'styled-components'

const Container = styled.div`

`

function ProjectCard(){


    return(
        <Container>
            <h3>Project Name </h3>
            <img src="url" alt="Company Name" />
            <h6> Due Date </h6>
            {/* on click upens this information */}
            <p> company name</p>
            <p>description</p>
            <p>team</p>
        </Container>
    )
}
export default ProjectCard