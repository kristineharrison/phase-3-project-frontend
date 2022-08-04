import styled from 'styled-components'
import MemberProfileCard from './memberProfileCards'

const Container = styled.div`

.member-cards{}

`

function MembersHomePage(){
    return(
        <Container>
            <h1> Members Manager</h1>
            < MemberProfileCard class="member-cards" />
            

        </Container>
    )
}
export default MembersHomePage