import styled from 'styled-components'

const Container = styled.div`

`

function BusinessCards({eachBusiness}){
    // console.log("This is the cards", eachBusiness)
    return(
        <Container>
            <img 
                src={eachBusiness.logo_url}
                alt={eachBusiness.name}
                quality={100}
                height={100}
                width={100}
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