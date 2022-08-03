import { useState, useEffect } from 'react';
import styled from 'styled-components'

import LandingPage from './components/LandingPage';
import BusinessLandingPage from './components/businessLandingPage'
import MembersLandingPage from './components/memebersLandingPage'



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
      <div className="App">
          <Routes>
            <header className="App-header">
            < NavFormBar functionForAddingNewBusiness={addNewBusiness}
                          functionForAddingNewRequest={addNewRequest}
                          functionForAddingNewTeam={addNewTeam}
                          functionForAddingNewTask={addNewTask}
                          functionForAddingNewMember={addNewMember}
                
                />
            </header>
            <Route path="/" element={<LandingPage sendingProjectData={projectsData}/>
            }/>
            <Route path="/business" element={<BusinessLandingPage/>}/>
            <Route path="/members" element={<MembersLandingPage/>}/>


        <div>
        </div>
        </Routes>

      </div>
    </Container>
  );
}

export default App;
