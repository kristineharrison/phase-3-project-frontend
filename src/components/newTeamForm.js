import styled from "styled-components"
import { useState } from 'react'

const Container = styled.div`

`

function NewTeamform (functionForAddingNewteam){

    const [teamName, setTeamName] = useState("")
    const [teamImage, setTeamImage] = useState("")
    const [teamSkills, setTeamSkills] = useState("")

    return (
        <Container>
            <form onSubimt ={((event) => {
                event.preventDefault()

                let newTeamForm ={
                    name: teamName,
                    email: teamImage,
                    skills: teamSkills
                }
                functionForAddingNewteam(newTeamForm)


            })}/>
                <input type="text" placeholder="Team Name"value={teamName} onChange = {(synthEvent) =>setTeamName (synthEvent.target.value) } />
                <input type="url" placeholder="Team Image Url"value={teamImage} onChange = {(synthEvent) =>setTeamImage (synthEvent.target.value) } />
                <input type="text" placeholder="Team Members"value={teamSkills} onChange = {(synthEvent) =>setTeamSkills(synthEvent.target.value) }/>
                {/* i was thinking this last one would be 
                like a type in and search for it and then add them */}
        </Container>
    )
}
export default NewTeamform