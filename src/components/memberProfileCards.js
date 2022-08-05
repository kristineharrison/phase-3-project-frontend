// colors to use
//  white for main background
//  bluish for accents (#75B9BE)
//  charcole for text (383F51)
//  silver pink for background accents (#D4BEBE)


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
    
  }
  
  
`

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
  );
}
export default MemberProfileCard;
