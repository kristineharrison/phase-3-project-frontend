import styled from 'styled-components'

const Container = styled.div`

`

function NewProject (){
    return(
        <Container>
            <input type="text" placeholder= "Business Name"/>
            <input type="text" placeholder="Project Name"/>
            <input type="text" placeholder="Due Date"/>
            <input type="text" placeholder= "Required languages"/>
            <input type="text" placeholder= "Project Description"/>
        </Container>

    )
}
export default NewProject