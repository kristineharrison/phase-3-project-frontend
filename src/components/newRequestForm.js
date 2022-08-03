import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`

`

function NewRequest ({functionForAddingNewRequest}){
    const [nameState, setNameState] = useState('')
    const [dueDateState, setDueDateState] = useState('')
    const [languageState, setLanguageState] = useState('')
    const [descriptionState, setDescriptionState] = useState('')


    return(
        <Container>
            <form onSubmit={(event)=>{
                event.preventDefault()

                let newRequest = {
                    name: nameState, 
                    dueDate: dueDateState,
                    languages: languageState,
                    description: descriptionState
                }
                functionForAddingNewRequest(newRequest)

                }
            } 
            > 
            <input type="text" placeholder= "Business Name" value={nameState} onChange={(synthevent)=> setNameState(synthevent.target.default)}/>
            <input type="text" placeholder="Due Date" value={dueDateState} onChange={(synthevent)=> setDueDateState(synthevent.target.default)}/>
            <input type="text" placeholder= "Required languages" value={languageState} onChange={(synthevent)=> setLanguageState(synthevent.target.default)}/>
            <input type="text" placeholder= "Project Description" value={descriptionState} onChange={(synthevent)=> setDescriptionState(synthevent.target.default)}/>
            </form>
        </Container>

    )
}
export default NewRequest