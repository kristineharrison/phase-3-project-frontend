import styled from 'styled-components'

const Container = styled.div`

`

<<<<<<< HEAD
function ProjectCard({eachProject}){


    return(
        <Container>
            <h3>{eachProject.name}</h3>
            <img src={eachProject.business.logo_url} 
                style={{width: '300px'}} 
                alt={eachProject.business.name} 
                />
=======
function ProjectPreview({eachProject}) {
    return(
        <Container>
            <h3>{eachProject.name}</h3>
            <img src={eachProject.business.logo_url} style={{width: '300px'}} alt={eachProject.business.name} />
>>>>>>> kristine_branch
            <h6>{eachProject.due_date}</h6>
            {/* on click upens this information */}
            <p>{eachProject.business.name}</p>
            <p>{eachProject.description}</p>
            <p>Team: {eachProject.team.team_name}</p>
        </Container>
    )
}
export default ProjectPreview;
