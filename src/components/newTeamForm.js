import styled from "styled-components"
import { useState } from 'react'

const Container = styled.div`

`

function NewTeamForm ({functionForAddingNewTeam}){

    console.log("new team form" , functionForAddingNewTeam)

    const [teamName, setTeamName] = useState("")
    const [teamSkills, setTeamSkills] = useState("")

    return (
        <Container>
            <form onSubmit={
                (event) => {
                event.preventDefault()

                let newTeamForm ={
                    team_name: teamName,
                    skills: teamSkills
                }
                functionForAddingNewTeam(newTeamForm)


                }
            }>
                <input type="text" placeholder="Team Name"value={teamName} onChange = {(synthEvent) =>setTeamName (synthEvent.target.value) } />
                <input type="text" placeholder="Team Skills"value={teamSkills} onChange = {(synthEvent) =>setTeamSkills(synthEvent.target.value) }/>
                <button type="submit"> Add Team</button>
                {/* i was thinking this last one would be 
                like a type in and search for it and then add them */}
            </form>
        </Container>
    )
}
export default NewTeamForm