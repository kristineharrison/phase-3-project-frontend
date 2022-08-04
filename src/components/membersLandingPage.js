import styled from "styled-components";
import MemberProfileCard from "./memberProfileCards";

const Container = styled.div`
  .member-cards {
  }
`;

function MembersHomePage({sendMembersData}){

  const membersList = sendMembersData.map((eachMember)=>
      <MemberProfileCard key={eachMember.id} eachMember={eachMember}
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
