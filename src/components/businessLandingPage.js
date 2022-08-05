import styled from "styled-components";
import BusinessCards from "./businessCards";

const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  padding: 20px;
  margin-top: 20px;

  justify-content: space-around;
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
    <div>
      <h1 style={{ textAlign: "center" }}> Business Managers </h1>
      <Container>{businessList}</Container>
    </div>
  );
}
export default BusinessHomePage;
