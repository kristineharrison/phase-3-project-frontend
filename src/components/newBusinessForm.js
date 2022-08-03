import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`

`

function NewBusiness({functionForAddingNewBusiness}){

    const [nameState, setNameState] = useState("")
    const [imageState, setImageState] = useState("")
    const [emailState, setEmailState] = useState("")
    const [phoneState, setPhoneState] = useState("")
    const [contactState, setContactState] = useState('')


    return(
        <Container>
            <form onSubmit={(event) => {
                event.preventDefault()

                let newBusiness ={
                    name: nameState,
                    image: imageState,
                    email: emailState,
                    phone: phoneState,
                    contact: contactState
                }
                functionForAddingNewBusiness(newBusiness)
            }}
            >

                <h3> Add your business</h3>
                <input type ="text" placeholder='Business Name' value={nameState} onChange={(synthevent)=> setNameState(synthevent.target.value)}/>
                <input type ="url" placeholder='Business Image Url' value={imageState} onChange={(synthevent)=> setImageState(synthevent.target.value)}/>
                <input type ="text" placeholder='Business Email' value={emailState} onChange={(synthevent)=> setEmailState(synthevent.target.value)}/>
                <input type ="text" placeholder='Business Phone Number' value={phoneState} onChange={(synthevent)=> setPhoneState(synthevent.target.value)}/>
                <input type ="text" placeholder='Primary Contact' value={contactState} onChange={(synthevent)=>setContactState(synthevent.target.value)}/>
                <button type="submit"> Add Business </button>
            </form>

        </Container>
    )
}
export default NewBusiness