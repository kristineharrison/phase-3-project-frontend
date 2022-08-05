import styled from "styled-components"
import { useState } from 'react'

const Container = styled.div`

`


function NewProject({functionForAddingNewProject}){
    const [newProjName, setNewProjName]= useState("")
    const [newDescription, setNewDescription]= useState('')
    const [newDueDate, setNewDueDate]= useState('')



    return(
        <Container>
            <form onSubmit={(event)=>{
                event.preventDefault()

                let newProject={
                    name: newProjName,
                    description: newDescription,
                    due_date:newDueDate
                }
                functionForAddingNewProject(newProject)
            }}>
                <h4> New Project</h4>
                <input type="text" placeholder="project name" value={newProjName} onChange={(synthEvent)=> setNewProjName(synthEvent.target.value)} />
                <input type="text" placeholder="project description" value={newDescription} onChange={(synthEvent)=> setNewDescription(synthEvent.target.value)} />
                <input type="text" placeholder="project due date" value={newDueDate} onChange={(synthEvent)=> setNewDueDate(synthEvent.target.value)} />
                <button type="submit"> Add Project</button>
                
                

            </form>
        </Container>
    )
}
export default NewProject 