import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  .button {
  }
`;
// function so that when the completed button is clicked it becomes more faded

function Tasks() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <Container>
      <p> "Task Name" </p>
      <p> "Task Skills"</p>
      <p> "Task Description" </p>

      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        Completed
      </label>

      <button class="button"> update </button>
      <button class="button"> delete </button>
    </Container>
  );
}
export default Tasks;
