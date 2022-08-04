import styled from 'styled-components'

const Container = styled.div`
    
    h6{
        font-size: 15px;
    }
    p{
        font-size: 15px;
    }


.project-list{}

`

function MemberProfileCard({eachMember}){
    return(
        <Container>
            <p> Name: {eachMember.name} </p>
            <p> Skill: {eachMember.skill}</p>
            <br/> 
            <div class="projects-list">
                <li> "List of projects theyre on" </li>
            </div>
        </Container>
    )

}
export default MemberProfileCard