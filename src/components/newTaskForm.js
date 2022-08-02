import styled from "styled-components"

const Container = styled.div`

`

function NewTaskform (){
    return (
        <Container>
            <input type="text" placeholder="Task Name" />
            <input type="text" placeholder="Languages Needed"/>
            <input type="text" placeholder="Task Description"/>
        </Container>
    )
}
export default NewTaskform