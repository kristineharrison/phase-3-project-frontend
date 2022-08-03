import styled from "styled-components"
import { useState } from 'react'

const Container = styled.div`

`

function NewTaskform (functionForAddingNewTask){

    const [taskName, setTaskName] = useState("")
    const [taskSkills, setTaskSkills] = useState("")
    const [taskDescription, setTaskDescription] = useState("")

    return (
        <Container>
            <form onSubimt ={((event) => {
                event.preventDefault()

                let newTask ={
                    name: taskName,
                    description: taskDescription,
                    skills_needed: taskSkills
                }
                functionForAddingNewTask(newTask)

            })}/>
                <input type="text" placeholder="Task Name"value={taskName} onChange = {(synthEvent) =>setTaskName (synthEvent.target.value) } />
                <input type="text" placeholder="Languages Needed"value={taskSkills} onChange = {(synthEvent) =>setTaskLang (synthEvent.target.value) }/>
                <input type="text" placeholder="Task Description"value={taskDescription} onChange = {(synthEvent) =>setTaskDescription(synthEvent.target.value) }/>
        </Container>
    )
}
export default NewTaskform