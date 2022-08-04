import styled from "styled-components";

const Card = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  vertical-align: center;
  align-items: center;
  border: 1px solid gray;
  padding: 20px;
`;

function ProjectPreview({ eachProject }) {
  return (
    <Card onClick={() => console.log(eachProject)}>
      <h3>{eachProject.name}</h3>
      <img
        src={eachProject.business.logo_url}
        style={{ width: "150px" }}
        alt={eachProject.business.name}
      />
      <h6>{eachProject.due_date}</h6>
      {/* on click upens this information */}
      <p>{eachProject.business.name}</p>
      <p>{eachProject.description}</p>
      <p>Team: {eachProject.team.team_name}</p>
    </Card>
  );
}
export default ProjectPreview;
