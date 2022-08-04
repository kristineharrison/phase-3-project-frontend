import styled from 'styled-components'

const Container = styled.div`

`

function BusinessCards({eachBusiness}){
    return(
        <Container>
            <img 
                src={eachBusiness.logo_url}
                alt={eachBusiness.name}
                />
            <p> Name:{eachBusiness.name} </p>
            <p>Point of Contact: {eachBusiness.contact_name}</p>
            <p> Email: {eachBusiness.email}</p>
            <p> Phone: {eachBusiness.phone}</p>
            {/* <p> Current Projects </p>
                <li>"Project Names" </li> */}
        </Container>
    )
}
export default BusinessCards