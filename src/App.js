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

  return (
    <Container>
      < NavFormBar
        functionForAddingNewBusiness={addNewBusiness}
        functionForAddingNewTeam={addNewTeam}
        functionForAddingNewTask={addNewTask}
        functionForAddingNewMember={addNewMember}
        functionForAddingNewProject={addNewProject}

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
                  />}
                ></Route>

                <Route path="/members" element={
                  <MembersLandingPage/>
                  }
                ></Route>

                <Route path="/businesses" element={
                  <BusinessLandingPage />
                }
                ></Route>

              </Routes>
            </div>

    </Container>
  )
}

export default App