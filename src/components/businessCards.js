import { useState } from "react";
import styled from "styled-components";
import UpdateBusinessForm from "./updateBusinessForm";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

const Card = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  vertical-align: center;
  align-items: center;
  border: 1px solid gray;
  padding: 20px;
  margin: 20px;
`;

const ButtonNav = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

function BusinessCards({ eachBusiness, functionToDeleteBusiness, functionToUpdateBus, functionToEnterEditMode, idForEdit}) {
  // console.log("This is the cards", eachBusiness)
    const [updateFormOpen, updateFormClosed] = useState(false)
    console.log(updateFormOpen)

    function handleUpdateForm(){
      updateFormClosed(!updateFormOpen)
      functionToEnterEditMode(eachBusiness.id)
    }

  function deleteClick() {
    fetch(`http://localhost:9292/business/${eachBusiness.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => functionToDeleteBusiness(eachBusiness.id));
  }


  return (
    <Container>
      <Card>
        <img
          src={eachBusiness.logo_url}
          alt={eachBusiness.name}
          style={{ width: "200px" }}
        />
        <p> Name:{eachBusiness.name} </p>
        <p>Point of Contact: {eachBusiness.contact_name}</p>
        <p> Email: {eachBusiness.email}</p>
        <p> Phone: {eachBusiness.phone}</p>
      <ButtonNav onClick={handleUpdateForm} > {updateFormOpen? "Close": "Update" }</ButtonNav>
          {updateFormOpen? <UpdateBusinessForm eachBusiness={eachBusiness} functionToUpdateBus={functionToUpdateBus} idForEdit={idForEdit}/> : null}
      <ButtonNav onClick={deleteClick}>Delete</ButtonNav>
      </Card>
    </Container>
  );
}
export default BusinessCards;
