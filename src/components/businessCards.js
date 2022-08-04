import styled from 'styled-components'

const Container = styled.div`

`

function BusinessCards({eachBusiness, functionToDeleteBusiness}){
    // console.log("This is the cards", eachBusiness)
        function deleteClick(){
            fetch(`http://localhost:9292/business/${eachBusiness.id}`, {
                method:"DELETE"
            })
            .then(res =>res.json())
            .then(()=> functionToDeleteBusiness(eachBusiness.id))
        }
    
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
            <button onClick={deleteClick}>Delete</button>
        </Container>
    )
}
export default BusinessCards