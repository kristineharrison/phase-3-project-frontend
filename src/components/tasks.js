import styled from 'styled-components'

const Container = styled.div`
.button{}

`
// function so that when the completed button is clicked it becomes more faded


function Tasks(){


    return (
        <Container>
                <p> "Task Name" </p>
                <p> "Task Skills"</p>
                <p> "Task Description" </p>
                <select type="checkbox"> Complete </select>
                <button class="button"> update </button>
                <button class="button"> delete </button>
        </Container>
    )
}
export default Tasks