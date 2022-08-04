import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`

`

function PagesNavBar(){
    return(
        <Container>
            <Link to="/" class='link'>
                Projects
            </Link>
            <Link to="/members" class="links">
                Members
            </Link>
            <Link to="businesses" class='link'>
                Businesses
            </Link>
        </Container>
    )
}
export default PagesNavBar