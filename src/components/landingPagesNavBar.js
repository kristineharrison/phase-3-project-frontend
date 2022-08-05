import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`

`
const StyledLink= styled(Link)`
  color:#383F51;
  
`


function PagesNavBar() {
  return (
    <Container>
      <StyledLink to="/">
        Projects
      </StyledLink>
      <StyledLink to="/members">
        Members
      </StyledLink>
      <StyledLink to="businesses">
        Businesses
      </StyledLink>
    </Container>
  );
}
export default PagesNavBar;
