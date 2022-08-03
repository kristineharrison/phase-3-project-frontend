import styled from 'styled-components'
import { useState } from 'react'

import NewBusinessForm from './newBusinessForm'
import NewProjectForm from './newProjectForm'
import NewMemberForm from './newMemberform'
import NewTeamForm from './newTeamForm'

const Container = styled.div`

`

function NavFormBar({functionForAddingNewBusiness, functionForAddingNewRequest}){

    const [openformNav, closeformNav] = useState(false)
    const [openBusinessForm, closeBusinessForm] = useState(false)
    const [openProjectForm, closeProjectForm] = useState(false)
    const [openRequestForm, closeRequestForm] = useState(false)
    const [openMemberForm, closeMemberForm] = useState(false)
    const [openTeamForm, closeTeamForm] = useState(false)



    return(
        <Container>
            <div class="nav-forms">
                <h4 onClick={()=> {closeformNav(!openformNav)}}> Forms Bar </h4>

                { openformNav ? 
                    <div class="forms">
                        <h6 onClick={()=> {closeBusinessForm(!openBusinessForm)}} > Add New Business </h6>
                            {openBusinessForm? <NewBusinessForm functionForAddingNewBusiness={functionForAddingNewBusiness}/> : null}
                        <h6 onClick={()=> {closeMemberForm(!openMemberForm)}} > Add New Member</h6>
                            {openMemberForm? <NewMemberForm/> : null}
                        <h6 onClick={()=> {closeProjectForm(!openProjectForm)}} > Add New Project</h6>
                            {openProjectForm? <NewProjectForm/> : null}
                        <h6 onClick={()=> {closeRequestForm(!openRequestForm)}} > Add New Request</h6>
                            {openRequestForm? <NewRequestForm functionForAddingNewRequest = {functionForAddingNewRequest}/> : null}
                        <h6 onClick={()=> {closeTeamForm(!openTeamForm)}} > Add New Team </h6>
                            {openTeamForm? <NewTeamForm/> : null}
                    </div>
                    : 
                    null
                }  
            </div>
        </Container>
    )

}
export default NavFormBar