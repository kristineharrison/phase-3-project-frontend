import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`

`
const StyledLink= styled(Link)`
  color:#383F51;
  font-size: 20px;
  display:flex;
  flex-direction: row;
  justify-content: space-evenly;
  
  links:hover{
    color:#75b9be;
  }
  
`


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
