import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`

`

function PagesNavBar(){
    return(
        <Container>
            <Link to="/" className='link'>
                Projects
            </Link>
            <Link to="/members" className="links">
                Members
            </Link>
            <Link to="businesses" className='link'>
                Businesses
            </Link>
        </Container>
    )
}
export default PagesNavBar