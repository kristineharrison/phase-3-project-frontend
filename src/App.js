// colors to use
//  white for main background
//  bluish for accents (#75B9BE)
//  charcole for text (383F51)
//  silver pink for background accents (#D$B3B3)


import { useState, useEffect } from 'react';
import styled from 'styled-components'
import {Routes, Route} from 'react-router-dom'

import LandingPage from './components/landingPage';
import MembersLandingPage from './components/membersLandingPage'
import BusinessHomePage from './components/businessLandingPage'
import NavFormBar from './components/navFormBar'
import LandingPagesNavBar from './components/landingPagesNavBar'


const Container = styled.div`
  color: #383f51;
  background-color: white;

  .heading{
    border-bottom: solid 3px #75B9BE;
  }
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
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProject),
    });
  }
  function DeleteProject(id){
    console.log(id)
    setProjectsData(previousProjects => {
      const filteredProjectsbyID = previousProjects.filter(project => project.id !== id)
      return filteredProjectsbyID
    })
  }

  useEffect(() => {
    fetch("http://localhost:9292/business")
      .then((res) => res.json())
      .then((fetchedData) => {
        console.log( "Businesses:",fetchedData);
        setBusinessData(fetchedData);
      });
  }, []);
  function addNewBusiness(newBusiness) {
    setBusinessData([newBusiness, ...businessData]);

    fetch("http://localhost:9292/business", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBusiness),
    });
  }
  function DeleteBusiness(id){
    console.log(id)
    setBusinessData(previousBusiness => {
      const filteredBusinessbyID = previousBusiness.filter(business => business.id !== id)
      return filteredBusinessbyID
    })
  }

  useEffect(() => {
    fetch("http://localhost:9292/teams")
      .then((res) => res.json())
      .then((fetchedData) => {
        console.log("Teams:", fetchedData);
        setTeamsData(fetchedData);
      });
  }, []);
  function addNewTeam(newTeam) {
    setTeamsData([newTeam, ...teamsData]);

    fetch("http://localhost:9292/teams", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTeam),
    });
  }
  

  useEffect(() => {
    fetch("http://localhost:9292/tasks")
      .then((res) => res.json())
      .then((fetchedData) => {
        console.log("Tasks: ", fetchedData);
        setTasksData(fetchedData);
      });
  }, []);
  function addNewTask(newTask) {
    setTasksData([newTask, ...tasksData]);

    fetch("http://localhost:9292/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    });
  }
  function DeleteTasks(id){
    console.log(id)
    setTasksData(previousTasks => {
      const filteredTasksbyID = previousTasks.filter(task => task.id !== id)
      return filteredTasksbyID
    })
  }

  useEffect(() => {
    fetch("http://localhost:9292/members")
      .then((res) => res.json())
      .then((fetchedData) => {
        console.log("members:", fetchedData);
        setMembersData(fetchedData);
      });
  }, []);
  function addNewMember(newMember) {
    setMembersData([newMember, ...membersData]);

    fetch("http://localhost:9292/members", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMember),
    });
  }
  function DeleteMembers(id){
    console.log(id)
    setMembersData(previousMember => {
      const filteredMemberbyID = previousMember.filter(member => member.id !== id)
      return filteredMemberbyID
    })
  }

  return (
    <Container>
      <div className="heading"> 
        <NavFormBar
          functionForAddingNewBusiness={addNewBusiness}
          // functionForAddingNewTeam={toodles}
          functionForAddingNewTeam={addNewTeam}
          functionForAddingNewTask={addNewTask}
          functionForAddingNewMember={addNewMember}
          functionForAddingNewProject={addNewProject}
        />
        {/* NAVFORMBAR WORKS SORTOF */}
        <LandingPagesNavBar />
      </div>
      <div className="landing-page-routes">
                {/* NAVFORMBAR WORKS, forms need to be blanked after submit*/}
              <Routes>
                <Route path="/" element={
                    <LandingPage 
                      sendProjectsData={projectsData}
                      tasksData = {tasksData}
                      functionForAddingNewTask={addNewTask}
                      DeleteProject={DeleteProject}
                      functionToDeleteTasks={DeleteTasks}
                  />}
                ></Route>

                <Route path="/members" element={
                  <MembersLandingPage 
                    sendMembersData={membersData}
                    functionForAddingNewMember={addNewMember}
                    functionToDeleteMembers={DeleteMembers}
                    
                  />}
                ></Route>

                <Route path="/businesses" element={
                  <BusinessHomePage 
                    sendBusinessData={businessData}
                    functionForAddingNewBusiness={addNewBusiness}
                    functionToDeleteBusiness={DeleteBusiness}
                  />}
                ></Route>

              </Routes>
            </div>

    </Container>
  );
}

export default App;
