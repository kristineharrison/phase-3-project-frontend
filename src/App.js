import { useState, useEffect } from 'react';
import styled from 'styled-components'
import LandingPage from './components/landingPage';



const Container = styled.div`


`

function App(){
  console.log("for updating purposes")

  const [projectsData, setProjectsData] = useState([])

  useEffect(()=>{
    fetch('http://localhost:9292/projects')
    .then(res => res.json())
    .then ((fetchedData)=> {(console.log(fetchedData))
                            setProjectsData(fetchedData)})
    }, [])



  return (
    <Container>
      <div className="App">
        <header className="App-header">
        </header>

        <div>
          <LandingPage sendingProjectData={projectsData}/> 
        </div>

      </div>
    </Container>
  );
}

export default App;
