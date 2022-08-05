import styled from "styled-components";

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
  border: 2px solid #d4bebe;
  border-radius: 8px;
  padding: 20px;
  margin: 20px;
`;

const ButtonNav = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

function BusinessCards({ eachBusiness, functionToDeleteBusiness }) {
  // console.log("This is the cards", eachBusiness)

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
        {/* <p> Current Projects </p>
                  <li>"Project Names" </li> */}
        <button onClick={deleteClick}>Delete</button>
      </Card>
    </Container>
  );
}
export default BusinessCards;
