import styled from 'styled-components'

const Container = styled.div`

`

function newMember (){
    return(
        <Container>
            <h4> New Member </h4>
            <input type="text" placeholder='your name'/>
            <input type="text" placeholder='your email'/>
            <input type="text" placeholder='Languages/Skills'/>
        </Container>
    )
}
export default newMember