import styled from "styled-components";

const Container = styled.div`
  .project-list {
  }
`;

function MemberProfileCard() {
  return (
    <Container>
      <p> Name: </p>
      <p> "Name from data" </p>
      <by />
      <p> Email: </p>
      <p> "email from data" </p>
      <br />
      <p> On Team:</p>
      <p> "On Team" </p>
      <br />
      <div className="projects-list">
        <li> "List of projects theyre on" </li>
      </div>
    </Container>
  );
}
export default MemberProfileCard;
