import styled from "styled-components"
import { useState } from 'react'

const Container = styled.div`

`

function NewTeamform (functionForAddingNewteam){

    const [teamName, setTeamName] = useState("")
    const [teamSkills, setTeamSkills] = useState("")

    return (
        <Container>
            <form onSubmit ={((event) => {
                event.preventDefault()

                let newTeamForm ={
                    name: teamName,
                    skills: teamSkills
                }
                functionForAddingNewteam(newTeamForm)


            })}/>
                <input type="text" placeholder="Team Name"value={teamName} onChange = {(synthEvent) =>setTeamName (synthEvent.target.value) } />
                <input type="text" placeholder="Team Members"value={teamSkills} onChange = {(synthEvent) =>setTeamSkills(synthEvent.target.value) }/>
                <button type="submit"> Add Team</button>
                {/* i was thinking this last one would be 
                like a type in and search for it and then add them */}
        </Container>
    )
}
export default NewTeamform