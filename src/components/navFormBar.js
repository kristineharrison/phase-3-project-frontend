import styled from 'styled-components'
import { useState } from 'react'

import NewBusinessForm from './newBusinessForm'
import NewProjectForm from './newProjectForm'
import NewMemberForm from './newMemberform'
import NewTeamForm from './newTeamForm'

const Container = styled.div`
    color: #383F51;
    .forms{
        position:absolute;
        background-color:rgba(212, 190, 190,.85);
        border-top: 1px solid #383F51;
        border-bottom: 1px solid #383F51;
    }

    h4{
        margin-bottom: 20px;
        
    }

`

function NavFormBar({functionForAddingNewBusiness,
                        functionForAddingNewTeam,
                        functionForAddingNewMember,
                        functionForAddingNewProject}){

    // console.log(functionForAddingNewTeam)

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
                        <h6 onClick={()=> {closeBusinessForm(!openBusinessForm)}} > Add Business Form </h6>
                            {openBusinessForm? <NewBusinessForm functionForAddingNewBusiness={functionForAddingNewBusiness}/> : null}
                        <h6 onClick={()=> {closeMemberForm(!openMemberForm)}} > Add Member Form </h6>
                            {openMemberForm? <NewMemberForm functionForAddingNewMember={functionForAddingNewMember}/> : null}
                        <h6 onClick={()=> {closeProjectForm(!openProjectForm)}} > Add Project Form</h6>
                            {openProjectForm? <NewProjectForm functionForAddingNewProject={functionForAddingNewProject}/> : null}
                        <h6 onClick={()=> {closeTeamForm(!openTeamForm)}} > Add Team Form</h6>
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