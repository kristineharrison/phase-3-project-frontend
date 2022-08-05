// colors to use
//  white for main background
//  bluish for accents (#75B9BE)
//  charcole for text (383F51)
//  silver pink for background accents (#D$B3B3)

import styled from "styled-components";
import MemberProfileCard from "./memberProfileCards";

const Container = styled.div`
  margin-top: 20px;

  header {
    text-align: center;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
  }
  .title {
    text-align: center;
  }
`;

function MembersHomePage({ sendMembersData, functionToDeleteMembers }) {
  const membersList = sendMembersData.map((eachMember) => (
    <MemberProfileCard
      key={eachMember.id}
      eachMember={eachMember}
      functionToDeleteMembers={functionToDeleteMembers}
    />
  ));
  return (
    <Container>
      <div className="title">
        <h1> Members Manager</h1>
      </div>
      <div className="cards">{membersList}</div>
    </Container>
  );
}
export default MembersHomePage;
