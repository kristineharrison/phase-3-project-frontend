import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  .button {
  }
`;
// function so that when the completed button is clicked it becomes more faded

function Tasks({eachTask}) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

 
  return (
    <Container>

      <p>Name: {eachTask.name} </p>
      <p>Skills: {eachTask.skills}</p>
      <p>{eachTask.description}</p>

      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        Completed
      </label>
      <button className="button"> update </button>
      <button className="button"> delete </button>
    </Container>
  );
}
export default Tasks;
