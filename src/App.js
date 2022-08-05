// colors to use
//  white for main background
//  bluish for accents (#75B9BE)
//  charcole for text (383F51)
//  silver pink for background accents (#D4BEBE)

import { useState, useEffect } from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./components/landingPage";
import MembersLandingPage from "./components/membersLandingPage";
import BusinessHomePage from "./components/businessLandingPage";
import NavFormBar from "./components/navFormBar";
import LandingPagesNavBar from "./components/landingPagesNavBar";

const Container = styled.div`
  width: 100%;
  color: #383f51;
  background-color: white;
  .heading {
    border-bottom: solid 3px #75b9be;
  }
  font-family: sans-serif;
  h1 {
    color: #75b9be;
  }

  p {
    color: #383f51;
  }
  display: flex;
  justify-content: center;
  align-content: center;

  button {
    background-color: #d4bebe;
    border: 0;
    border-radius: 8px;
    box-sizing: border-box;
    color: #222222;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    margin: 5px;
    outline: none;
    padding: 5px 10px;
    position: relative;
    text-align: center;
    text-decoration: none;
    width: auto;
  }

  button:active {
    background-color: #f7f7f7;
    border-color: #000000;
    transform: scale(0.96);
  }
`;

function App() {
  const [projectsData, setProjectsData] = useState([]);
  const [businessData, setBusinessData] = useState([]);
  const [teamsData, setTeamsData] = useState([]);
  const [tasksData, setTasksData] = useState([]);
  const [membersData, setMembersData] = useState([]);
  const [updateProjects, setUpdateProjects] = useState([])
  const [businessID, setBusinessID] = useState(false)
  const [updateTeams, setUpdateTeams]  = useState([])
  const [updateTasks, setUpdateTasks] = useState([])
  const [updateMembers, setUpdateMembers] = useState([])



  useEffect(() => {
    fetch("http://localhost:9292/projects")
      .then((res) => res.json())
      .then((fetchedData) => {
        console.log("projects: ", fetchedData);
        setProjectsData(fetchedData);
      });
  }, []);

  function addNewProject(newProject) {
    setProjectsData([newProject, ...projectsData]);

    fetch("http://localhost:9292/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProject),
    });
  }

  function DeleteProject(id) {
    console.log(id);
    setProjectsData((previousProject) => {
      const filteredProjectbyID = previousProject.filter(
        (project) => project.id !== id
      );
      return filteredProjectbyID;
    });
  }

  function updateProj(updatedProj) {
    console.log(updatedProj);
    //const updatedProj={}
    fetch(`http://localhost:9292/projects/${updateProjects}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProj),
    })
      .then((resp) => resp.json())
      .then((data) => setUpdateProjects(data));
  }

  useEffect(() => {
    fetch("http://localhost:9292/business")
      .then((res) => res.json())
      .then((fetchedData) => {
        console.log("Businesses:", fetchedData);
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


function updateBus(updatedBus){
  setBusinessData(previousBusiness => {
    const newBusinessArray = previousBusiness.map(business =>{
      if(business.id === updatedBus.id){
        return updatedBus
      }else{
        return business
      }
    })
    return newBusinessArray
  })
  setBusinessID(false)
}

function enterEditMode(id){
  setBusinessID(id)
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

  function updateTeam(updatedTeam) {
    //const updatedTeam={}
    fetch(`http://localhost:9292/projects/${updateTeams.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTeam),
    })
      .then((resp) => resp.json())
      .then((data) => setUpdateTeams(data));
  }

  function DeleteBusiness(id) {
    console.log(id);
    setBusinessData((previousBusiness) => {
      const filteredBusinessbyID = previousBusiness.filter(
        (business) => business.id !== id
      );
      return filteredBusinessbyID;
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

  function DeleteTasks(id) {
    console.log(id);
    setTasksData((previousTasks) => {
      const filteredTasksbyID = previousTasks.filter((task) => task.id !== id);
      return filteredTasksbyID;
    });
  }

  function updateTask(updatedTask) {
    //const updatedTask={}
    fetch(`http://localhost:9292/projects/${updateTasks}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTask),
    })
      .then((resp) => resp.json())
      .then((data) => setUpdateTasks(data));
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

  function DeleteMembers(id) {
    console.log(id);
    setMembersData((previousMember) => {
      const filteredMemberbyID = previousMember.filter(
        (member) => member.id !== id
      );
      return filteredMemberbyID;
    });
  }

  function updateMem(updateMem) {
    //const updatedMem={}
    fetch(`http://localhost:9292/projects/${updateMembers}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateMembers),
    })
      .then((resp) => resp.json())
      .then((data) => setUpdateMembers(data));
  }

  return (
    <div>
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
          <div className="landing-page-routes">
            {/* NAVFORMBAR WORKS, forms need to be blanked after submit*/}
            <Routes>
              <Route
                path="/"
                element={
                  <LandingPage
                    sendProjectsData={projectsData}
                    tasksData={tasksData}
                    functionForAddingNewTask={addNewTask}
                    functionForAddingNewProject={addNewProject}
                    functionToDeleteProjects={DeleteProject}
                    functionToDeleteTasks={DeleteTasks}
                    functionToUpdateProjects={updateProj}
                    functionToUpdateTasks={updateTask}
                  />
                }
              ></Route>

              <Route
                path="/members"
                element={
                  <MembersLandingPage
                    sendMembersData={membersData}
                    functionForAddingNewMember={addNewMember}
                    functionToDeleteMembers={DeleteMembers}
                    functionToUpdateMembers={updateMem}
                  />
                }
              ></Route>

              <Route
                path="/businesses"
                element={
                  <BusinessHomePage
                    sendBusinessData={businessData}
                    functionForAddingNewBusiness={addNewBusiness}
                    functionToDeleteBusiness={DeleteBusiness}
                    functionToEnterEditMode={enterEditMode}
                    functionToUpdateBus={updateBus}
                    idForEdit={businessID}
                  />
                }
              ></Route>
            </Routes>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
