import { useState, useEffect } from 'react';
import styled from 'styled-components'

import LandingPage from './components/LandingPage';
import NavFormBar from './components/navFormBar'
// import BusinessLandingPage from './components/businessLandingPage'
// import MembersLandingPage from './components/memebersLandingPage'



const Container = styled.div`


`

function App(){

  const [projectsData, setProjectsData] = useState([])
  const [businessData, setBusinessData] = useState([])
  const [requestsData, setRequestsData] = useState([])
  const [teamsData, setTeamsData] = useState([])
  const [tasksData, setTasksData] = useState([])
  const [membersData, setMembersData] = useState([])

  useEffect(()=>{
    fetch('http://localhost:9292/projects')
    .then(res => res.json())
    .then ((fetchedData)=> {(console.log(fetchedData))
                            setProjectsData(fetchedData)})
    }, [])

  function addNewBusiness(newBusiness){
    setBusinessData([newBusiness, ...businessData])

    fetch('http://localhost:9292/business', {
      method: "POST",
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(newBusiness)
  })
  }

  function addNewRequest(newRequest){
    setRequestsData([newRequest, ...requestsData])

      fetch('http://localhost:9292/requests', {
      method: "POST",
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(newRequest)
  })
  }
  function addNewTeam(newTeam){
    setRequestsData([newTeam, ...teamsData])

      fetch('http://localhost:9292/teams', {
      method: "POST",
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(newTeam)
  })
  }
  function addNewTask(newTask){
    setRequestsData([newTask, ...tasksData])

      fetch('http://localhost:9292/tasks', {
      method: "POST",
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(newTask)
  })
  }
  function addNewMember(newMember){
    setRequestsData([newMember, ...membersData])

      fetch('http://localhost:9292/members', {
      method: "POST",
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(newMember)
  })
  }


  return (
    <Container>
      <div class="App">
            < NavFormBar sendingProjectData={projectsData}
                          functionForAddingNewBusiness={addNewBusiness}
                          functionForAddingNewRequest={addNewRequest}
                          functionForAddingNewTeam={addNewTeam}
                          functionForAddingNewTask={addNewTask}
                          functionForAddingNewMember={addNewMember}
                
                />
            
            <LandingPage sendingProjectData={projectsData}
                          functionForAddingNewBusiness={addNewBusiness}
                          functionForAddingNewRequest={addNewRequest}
                          functionForAddingNewTeam={addNewTeam}
                          functionForAddingNewTask={addNewTask}
                          functionForAddingNewMember={addNewMember}
            />

      </div>
    </Container>
  );
}

export default App;
