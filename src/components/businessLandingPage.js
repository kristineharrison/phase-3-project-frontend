import styled from 'styled-components'
import BusinessCards from './businessCards'


const Container = styled.div`

`

function BusinessHomePage(){
    return(
        <Container>
            <h1> Business Managers </h1>
            <BusinessCards />

        </Container>
    )
}
export default BusinessHomePage