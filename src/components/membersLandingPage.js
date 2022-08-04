import styled from "styled-components";
import MemberProfileCard from "./memberProfileCards";

const Container = styled.div`
  .member-cards {
  }
`;

function MembersHomePage({sendMembersData, functionToDeleteMembers}){

  const membersList = sendMembersData.map((eachMember)=>
      <MemberProfileCard key={eachMember.id} eachMember={eachMember}
                          functionToDeleteMembers={functionToDeleteMembers}
      /> 
      );
  return(
      <Container>
          <h1> Members Manager</h1>
          {membersList}


      </Container>
  );
}
export default MembersHomePage;
