import styled from "styled-components"
import { useEffect, useState } from "react"

const Container = styled.div`

`

function UpdateBusinessForm({eachBusiness, functionToUpdateBus, idForEdit}){

    const [formData, setFormData] = useState({
        name:'',
        logo_url:'',
        email: '',
        phone: '',
        contact_name: ''
    })
    // const {name, logo_url, email, phone, contact_name} = formData

    useEffect(()=>{
        fetch(`http://localhost:9292/business/${eachBusiness.id}}`)
        .then((resp) => resp.json())
        .then((business)=> setFormData(business))
    }, [idForEdit])
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ [name]: value });
    };

    function handleSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:9292/business/${eachBusiness.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
            }
        )
        .then(res =>res.json())
        .then(updatedData => functionToUpdateBus(updatedData))
    }
    
    return(
        <Container>
            <form onSubmit={handleSubmit}>
                <h3> Update Business </h3>
                <input type ="text" placeholder='Business Name' name={formData.name} value={formData.name} onChange={handleChange}/> 
                <input type ="text" placeholder='Business Image Url' name={formData.logo_url} value={formData.logo_url} onChange={handleChange}/>
                <input type ="text" placeholder='Business Email' name={formData.email} value={formData.email} onChange={handleChange}/>
                <input type ="text" placeholder='Business Phone Number' name={formData.phone} value={formData.phone} onChange={handleChange}/>
                <input type ="text" placeholder='Primary Contact' name={formData.contact_name}value={formData.contact_name} onChange={handleChange}/>
                <button type="submit"> Update </button>
            </form>
        </Container>
    )
}
export default UpdateBusinessForm