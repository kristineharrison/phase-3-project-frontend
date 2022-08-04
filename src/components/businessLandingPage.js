import styled from 'styled-components'
import BusinessCards from './businessCards'


const Container = styled.div`

`

function BusinessHomePage({sendBusinessData}){

    const BusinessList = sendBusinessData.map((eachBusiness)=>{
        <BusinessCards key={eachBusiness.id}
                        eachBusiness={eachBusiness}
                    />
    })

    return(
        <Container>
            <h1> Business Managers </h1>
            {BusinessList}

        </Container>
    )
}
export default BusinessHomePage