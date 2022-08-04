import { useState, useEffect } from 'react';
import styled from 'styled-components'
import {Routes, Route} from 'react-router-dom'

import LandingPage from './components/landingPage';
import MembersLandingPage from './components/membersLandingPage'
import BusinessLandingPage from './components/businessLandingPage'
import NavFormBar from './components/navFormBar'
import LandingPagesNavBar from './components/landingPagesNavBar'


const Container = styled.div`
  

`

function App(){

  const [projectsData, setProjectsData] = useState([])
  const [businessData, setBusinessData] = useState([])
  const [teamsData, setTeamsData] = useState([])
  const [tasksData, setTasksData] = useState([])
  const [membersData, setMembersData] = useState([])

  const [updateProjects, setUpdateProjects] = useState([])
  const [updateBusiness, setUpdateBusiness] = useState([])
  const [updateTeams, setUpdateTeams]  = useState([])
  const [updateTasks, setUpdateTasks] = useState([])
  const [updateMembers, setUpdateMembers] = useState([])

  useEffect(()=>{
    fetch('http://localhost:9292/projects')
    .then(res => res.json())
    .then ((fetchedData)=> {(console.log("projects: ",fetchedData))
                            setProjectsData(fetchedData)})
    }, [])

  function addNewProject(newProject){
    setProjectsData([newProject, ...projectsData])

    fetch('http://localhost:9292/projects', {
      method: "POST",
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(newProject)
  })
  }
  function updateProj(updatedProj){
    //const updatedProj={}
      fetch('http://localhost:9292/projects/${updateProjects}', {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(updatedProj)
      }
  )
    .then((resp) => resp.json())
    .then(setUpdateProjects) 
  }

  useEffect(()=>{
    fetch('http://localhost:9292/business')
    .then(res => res.json())
    .then ((fetchedData)=> {(console.log(fetchedData))
                            setBusinessData(fetchedData)})
    }, [])
  function addNewBusiness(newBusiness){
    setBusinessData([newBusiness, ...businessData])

    fetch('http://localhost:9292/business', {

      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBusiness),
    });
  }
  function updateBus(updatedBus){
    //const updatedProj={}
      fetch('http://localhost:9292/projects/${updateBusiness}', {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(updatedBus)
      }
  )
    .then((resp) => resp.json())
    .then(setUpdateBusiness) 
  }

  useEffect(()=>{
    fetch('http://localhost:9292/teams')
    .then(res => res.json())
    .then ((fetchedData)=> {(console.log(fetchedData))
                            setTeamsData(fetchedData)})
    }, [])
  function addNewTeam(newTeam){
    setTeamsData([newTeam, ...teamsData])

    fetch("http://localhost:9292/teams", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTeam),
    });
  }
  function updateTeam(updatedTeam){
    //const updatedTeam={}
      fetch('http://localhost:9292/projects/${updateTeams}', {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(updatedTeam)
      }
  )
    .then((resp) => resp.json())
    .then(setUpdateTeams) 
  }

  useEffect(()=>{
    fetch('http://localhost:9292/tasks')
    .then(res => res.json())
    .then ((fetchedData)=> {(console.log("Tasks: ", fetchedData))
                            setTasksData(fetchedData)})
    }, [])

  function addNewTask(newTask){
    setTasksData([newTask, ...tasksData])

    fetch("http://localhost:9292/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    });
  }
  function updateTask(updatedTask){
    //const updatedTask={}
      fetch('http://localhost:9292/projects/${updateTasks}', {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(updatedTask)
      }
  )
    .then((resp) => resp.json())
    .then(setUpdateTasks) 
  }

  useEffect(()=>{
    fetch('http://localhost:9292/members')
    .then(res => res.json())
    .then ((fetchedData)=> {(console.log(fetchedData))
                            setMembersData(fetchedData)})
    }, [])
  function addNewMember(newMember){
    setMembersData([newMember, ...membersData])

    fetch("http://localhost:9292/members", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMember),
    });
  }
  function updateMem(updatedMem){
    //const updatedMem={}
      fetch('http://localhost:9292/projects/${updateMembers}', {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(updatedMem)
      }
  )
    .then((resp) => resp.json())
    .then(setUpdateMembers) 
  }

  return (
    <Container>
      < NavFormBar
        functionForAddingNewBusiness={addNewBusiness}
        functionForAddingNewTeam={addNewTeam}
        functionForAddingNewTask={addNewTask}
        functionForAddingNewMember={addNewMember}
        functionForAddingNewProject={addNewProject}
        sendingBusinessData={businessData}
        

      />
      {/* NAVFORMBAR WORKS SORTOF */}
      <LandingPagesNavBar />
      <div class="landing-page-routes">
                {/* NAVFORMBAR WORKS, forms need to be blanked after submit*/}
              <Routes>
                <Route path="/" element={
                    <LandingPage 
                      sendProjectsData={projectsData}
                      tasksData = {tasksData}
                      functionForAddingNewBusiness={addNewBusiness}
                      functionForAddingNewTeam={addNewTeam}
                      functionForAddingNewTask={addNewTask}
                      functionForAddingNewMember={addNewMember}
                      //tasks, updateProj
                      functionToUpdateProjects = {updateProj}
                      functionToUpdateTasks = {updateTask}
                  />}
                ></Route>

                <Route path="/members" element={
                  <MembersLandingPage 
                    sendMembersData={membersData}
                    //update mem
                    functionToUpdateMembers = {updateMem}
                  />
                }
                ></Route>

                <Route path="/businesses" element={
                  <BusinessLandingPage 
                    sendBusinessData={businessData}
                    // update bus
                    functionToUpdateBus={updateBus}
                  />
                }
                ></Route>

              </Routes>
            </div>

    </Container>
  )
}

export default App