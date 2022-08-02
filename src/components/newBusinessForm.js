import styled from 'styled-components'

const Container = styled.div`

`

function NewBusiness(){
    return(
        <Container>
            <h3> Add your business</h3>
            <input type ="text" placeholder='Business Name'/>
            <input type ="url" placeholder='Business Image Url'/>
            <input type ="text" placeholder='Business Email'/>
            <input type ="text" placeholder='Business Phone Number'/>
            <input type ="text" placeholder='Primary Contact'/>

        </Container>
    )
}
export default NewBusiness