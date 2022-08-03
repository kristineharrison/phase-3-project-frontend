// import { useEffect, useState } from 'react'
import styled from 'styled-components'
import {Routes, Route} from "react-router-dom"

import NavFormBar from './navFormBar'
import ProjectCard from './projectCard'

const Container = styled.div`

.projectItem{ }

.bttn{ }

`


function LandingPage({functionForAddingNewBusiness, functionForAddingNewRequest, functionForAddingNewTeam, functionForAddingNewTask, functionForAddingNewMember}){

    return(
        <Container>
            <header>
                <NavFormBar functionForAddingNewBusiness={functionForAddingNewBusiness}
                            functionForAddingNewRequest = {functionForAddingNewRequest}
                            functionForAddingNewTeam = {functionForAddingNewTeam}
                            functionForAddingNewTask = {functionForAddingNewTask}
                            functionForAddingNewMember ={functionForAddingNewMember}

                
                />
            </header>
            <h1> Project Manager </h1>
            {/* potentially a search bar here by Project name, teammembers, languages used */}
            <div class="projectItems"> 
                <ProjectCard/>
                <button class="bttn"> Delete Project </button>
            </div>
            <button class="bttn"> Create New Project </button>
            
        </Container>
    )
}
export default LandingPage