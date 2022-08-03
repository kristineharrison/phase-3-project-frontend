import styled from 'styled-components'
import { useState } from 'react'

const Container = styled.div`

`

function NewMember (functionForAddingNewMember){

    const [memberName, setMemberName] = useState("")
    const [memberSkills, setMemberSkills] = useState("")


    return(
        <Container>
            <form onSubmit ={((event) => {
                event.preventDefault()

                let newMember ={
                    name: memberName,
                    skill: memberSkills
                }
                functionForAddingNewMember(newMember)
                
            })}>
                <h4> New Member </h4>
                <input type="text" placeholder='your name' value={memberName} onChange = {(synthEvent) =>setMemberName (synthEvent.target.value) }/>
                <input type="text" placeholder='Languages/Skills'value={memberSkills} onChange = {(synthEvent) =>setMemberSkills (synthEvent.target.value) }/>
                <button> Add Member </button>
        </form>
        </Container>
    )
}
export default NewMember