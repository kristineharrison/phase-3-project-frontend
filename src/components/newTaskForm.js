import styled from "styled-components"
import { useState } from 'react'

const Container = styled.div`

`

function NewTaskform (functionForAddingNewTask){

    const [taskName, setTaskName] = useState("")
    const [taskLang, setTaskLang] = useState("")
    const [taskDescription, setTaskDescription] = useState("")

    return (
        <Container>
            <form onSubimt ={((event) => {
                event.preventDefault()

                let newTask ={
                    name: taskName,
                    email: taskLang,
                    skills: taskDescription
                }
                functionForAddingNewTask(newTask)

            })}/>
                <input type="text" placeholder="Task Name"value={taskName} onChange = {(synthEvent) =>setTaskName (synthEvent.target.value) } />
                <input type="text" placeholder="Languages Needed"value={taskLang} onChange = {(synthEvent) =>setTaskLang (synthEvent.target.value) }/>
                <input type="text" placeholder="Task Description"value={taskDescription} onChange = {(synthEvent) =>setTaskDescription(synthEvent.target.value) }/>
        </Container>
    )
}
export default NewTaskform