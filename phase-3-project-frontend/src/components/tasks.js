import styled from 'styled-components'

const Container = styled.div`

`
// function so that when the completed button is clicked it becomes more faded


function Tasks(){


    return (
        <Container>
                <p> "Task Name" </p>
                <p> "Task Skills"</p>
                <p> "Task Description" </p>
                <input type="checkbox"> </input>
                <label for="completedTask"> Completed </label>
                <button> update </button>
                <button> delete </button>
        </Container>
    )
}
export default Tasks