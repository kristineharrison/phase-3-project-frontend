// colors to use
//  white for main background
//  bluish for accents (#75B9BE)
//  charcole for text (383F51)
//  silver pink for background accents (#D4BEBE)

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
  }
`;

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
  );
}
export default MemberProfileCard;
