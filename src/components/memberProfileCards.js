import styled from "styled-components";

const Container = styled.div`
  .project-list {
  }
`;

function MemberProfileCard({eachMember, functionToDeleteMembers}){

  function deleteClick(){
    fetch(`http://localhost:9292/projects/${eachMember.id}`, {
      method:"DELETE"
    })
    .then(res =>res.json())
    .then(()=> functionToDeleteMembers(eachMember.id))
  }

  return(
      <Container>
          <p> Name: {eachMember.name} </p>
          <p> Skill: {eachMember.skill}</p>
          <br/> 
          <div class="projects-list">
              <li> "List of projects theyre on" </li>
          </div>
          <button onClick={deleteClick}> Delete Member </button>
      </Container>
  );
}
export default MemberProfileCard;
