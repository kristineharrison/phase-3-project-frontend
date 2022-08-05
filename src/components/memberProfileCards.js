// colors to use
//  white for main background
//  bluish for accents (#75B9BE)
//  charcole for text (383F51)
//  silver pink for background accents (#D4BEBE)

<<<<<<< HEAD

import styled from "styled-components";

const Container = styled.div`

  color: white;
  background-color: #D4BEBE;
  min-width: 300px;
  border: 4px solid #75b9be;
  margin-top: 20px;
  margin-left:auto;
  margin-bottom: 15px;
  margin-right: auto;
  border-radius: 20px / 10px;
  

  .not-project-list{
    display: flex;
    
=======
import styled from "styled-components";

const Container = styled.div`
  color: white;
  border: solid 3px #75b9be;
  border-radius: 20px / 10px;
  background-color: #D4BEBE;
  width: 700px;
  height: 100px;
  margin: 10px;

  .not-projects{
  }

  .project-list {
>>>>>>> main
  }
  
  
`

<<<<<<< HEAD
function MemberProfileCard({eachMember}){
  return(
      <Container>
        <div className="not-projects-list">
        <p> Name: {eachMember.name} </p>
          <p> Skill: {eachMember.skill}</p>
        </div>
          <div class="projects-list">
              <p> "List of projects :" </p>
          </div>
      </Container>
=======
function MemberProfileCard({ eachMember, functionToDeleteMembers }) {
  function deleteClick() {
    fetch(`http://localhost:9292/projects/${eachMember.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => functionToDeleteMembers(eachMember.id));
  }

  return (
    <Container>
      <p> Name: {eachMember.name} </p>
      <p> Skill: {eachMember.skill}</p>
      <br />
      <div className="projects-list">
        <li> "List of projects they are on" </li>
      </div>
      <button onClick={deleteClick}> Delete Member </button>
    </Container>
>>>>>>> main
  );
}
export default MemberProfileCard;
