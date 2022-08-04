import styled from 'styled-components'
import { useState } from 'react'

import NewBusinessForm from './newBusinessForm'
import NewProjectForm from './newProjectForm'
import NewMemberForm from './newMemberform'
import NewTeamForm from './newTeamForm'

const Container = styled.div`

`

function NavFormBar({functionForAddingNewBusiness,
                        functionForAddingNewTeam,
                        functionForAddingNewTask,
                        functionForAddingNewMember,
                        functionForAddingNewProject}){

    const [openformNav, closeformNav] = useState(false)
    const [openBusinessForm, closeBusinessForm] = useState(false)
    const [openProjectForm, closeProjectForm] = useState(false)
    const [openMemberForm, closeMemberForm] = useState(false)
    const [openTeamForm, closeTeamForm] = useState(false)



    return(
        <Container>
            <div className="nav-forms">
                <h4 onClick={()=> {closeformNav(!openformNav)}}> Forms Bar </h4>

                { openformNav ? 
                    <div className="forms">
                        <h6 onClick={()=> {closeBusinessForm(!openBusinessForm)}} > Add New Business </h6>
                            {openBusinessForm? <NewBusinessForm functionForAddingNewBusiness={functionForAddingNewBusiness}/> : null}
                        <h6 onClick={()=> {closeMemberForm(!openMemberForm)}} > Add New Member</h6>
                            {openMemberForm? <NewMemberForm functionForAddingNewMember={functionForAddingNewMember}/> : null}
                        <h6 onClick={()=> {closeProjectForm(!openProjectForm)}} > Add New Project</h6>
                            {openProjectForm? <NewProjectForm functionForAddingNewProject={functionForAddingNewProject}/> : null}
                        <h6 onClick={()=> {closeTeamForm(!openTeamForm)}} > Add New Team </h6>
                            {openTeamForm? <NewTeamForm functionForAddingNewTeam={functionForAddingNewTeam}/> : null}
                    </div>
                    : 
                    null
                }  
            </div>
        </Container>
    )

}
export default NavFormBar