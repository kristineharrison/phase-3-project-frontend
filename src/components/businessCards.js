import styled from 'styled-components'

const Container = styled.div`

`

function BusinessCards (){
    return(
        <Container>
            <img 
                src="somesortofURL"
                alt="Business Name"
                />
            <h3> "Business Name" </h3>
            <p>"Primary Contact</p>
            <p>"Working with Team"</p>
            <p> Current Projects </p>
                <li>"Project Names" </li>

        </Container>
    )
}
export default BusinessCards