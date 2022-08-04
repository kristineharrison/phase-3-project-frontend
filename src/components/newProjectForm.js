import styled from "styled-components"
import { useState } from 'react'



const Container = styled.div`

`


function NewProject({functionForAddingNewProject}){


    const [newProjName, setNewProjName] = useState("")
    const [newBusinessName, setNewBusinessName] = useState("")
    const [newBusLogo, setNewBusLogo] = useState("")
    const [newDescription, setNewDescription] = useState("")
    const [newDueDate, setNewDueDate] =  useState("")

    return(
        <Container>
            <form onSubmit ={((event) => {
                event.preventDefault()

                let newProject ={
                    name: newProjName,
                    business: {
                        name: newBusinessName,
                        logo_url: newBusLogo
                    },
                    description: newDescription,
                    dueDate: newDueDate
                }
                functionForAddingNewProject(newProject)
                //functionForAddingNewBusiness(nameState)
                
            })}></form>
            <h4> New Project </h4>
                <input type="text" placeholder='project name' value={newProjName} onChange = {(synthEvent) =>setNewProjName (synthEvent.target.value) }/>
                <input type="text" placeholder='business name'value={newBusinessName} onChange = {(synthEvent) =>setNewBusinessName (synthEvent.target.value) }/>
                <input type="text" placeholder='business logo'value={newBusLogo} onChange = {(synthEvent) =>setNewBusLogo (synthEvent.target.value) }/>
                <input type="text" placeholder='project description'value={newDescription} onChange = {(synthEvent) =>setNewDescription (synthEvent.target.value) }/>
                <input type="text" placeholder='due date'value={newDueDate} onChange = {(synthEvent) =>setNewDueDate (synthEvent.target.value) }/>

                <button> Add Project </button>

        </Container>
    )
}
export default NewProject 