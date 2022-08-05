import styled from "styled-components";
import BusinessCards from "./businessCards";

const Container = styled.div`
  border-top: solid 3px #75b9be;
  margin-top: 20px;
  


`;

function BusinessHomePage({ sendBusinessData, functionToDeleteBusiness }) {
  // console.log("This is the HomePage", sendBusinessData)

  const businessList = sendBusinessData.map((eachBusiness) => (
    <BusinessCards
      key={eachBusiness.id}
      eachBusiness={eachBusiness}
      functionToDeleteBusiness={functionToDeleteBusiness}
    />
  ));

  return (
    <Container>
      <h1> Business Managers </h1>
      {businessList}
    </Container>
  );
}
export default BusinessHomePage;
