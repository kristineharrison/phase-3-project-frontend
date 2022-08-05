// colors to use
//  white for main background
//  bluish for accents (#75B9BE)
//  charcole for text (383F51)
//  silver pink for background accents (#D4BEBE)

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: white;
  background-color: #d4bebe;
  width: 300px;
  min-height: 180px;
  border: 4px solid #75b9be;
  margin-top: 20px;
  margin-left: auto;
  margin-bottom: 15px;
  margin-right: auto;
  border-radius: 20px / 10px;
  padding: 0 15px 15px 15px;

  .not-project-list {
  }
`;

const FooterButton = styled.div`
  button {
    // color: #383f51;
    background: white;
    margin: 10px;
    border-radius: 12px / 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid white;
  }
  button:hover {
    background-color: #75b9be;
    color: #383f51;
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
      <div className="not-project-list">
        <p>
          <strong>Name: </strong>
          {eachMember.name}{" "}
        </p>
        <p>
          <strong>Skill: </strong>
          {eachMember.skill}
        </p>
      </div>
      <div className="projects-list">
        <p>Ready to work!!!</p>
      </div>
      <FooterButton>
        <button style={{ backgroundColor: "white" }} onClick={deleteClick}>
          {" "}
          Delete Member{" "}
        </button>
      </FooterButton>
    </Container>
  );
}
export default MemberProfileCard;
