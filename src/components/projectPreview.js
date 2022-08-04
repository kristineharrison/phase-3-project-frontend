import styled from 'styled-components'

const Container = styled.div`

`

function ProjectPreview({eachProject}) {
    return(
        <Container>
            <h3>{eachProject.name}</h3>
            <img src={eachProject.business.logo_url} style={{width: '300px'}} alt={eachProject.business.name} />
            <h6>{eachProject.due_date}</h6>
            {/* on click upens this information */}
            <p>{eachProject.business.name}</p>
            <p>{eachProject.description}</p>
            <p>**Need to figure out Team**</p>
        </Container>
    )
}
export default ProjectPreview;
