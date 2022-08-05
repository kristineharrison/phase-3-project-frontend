import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  border-bottom: solid 3px #75b9be;
`;
const StyledLink = styled(Link)`
  color: #383f51;
  font-size: 20px;
  padding: 10px;
  margin-bottom: 20px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  links:hover {
    color: #75b9be;
  }
`;

function PagesNavBar() {
  return (
    <Container>
      <StyledLink to="/" className="links">
        Projects
      </StyledLink>
      <StyledLink to="/members" className="links">
        Members
      </StyledLink>
      <StyledLink to="businesses" className="links">
        Businesses
      </StyledLink>
    </Container>
  );
}
export default PagesNavBar;
