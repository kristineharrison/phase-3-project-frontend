import styled from 'styled-components'
import BusinessCards from './businessCards'


const Container = styled.div`

`

function BusinessHomePage({sendBusinessData}){
    // console.log("This is the HomePage", sendBusinessData)

    const businessList = sendBusinessData.map((eachBusiness)=>
        <BusinessCards key={eachBusiness.id} eachBusiness={eachBusiness}
        /> 
        );

    return(
        <Container>
            <h1> Business Managers </h1>
            {businessList}

        </Container>
    )
}
export default BusinessHomePage