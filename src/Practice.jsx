import { useState } from 'react'
import './App.css'
import React from 'react'
import Info from './Info'
import CardBs from './CardBs'

function App() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")

    
  
  
    return (
        <>
            <div className='container'>
                <h1>PERSONAL INFORMATION</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="firstname" >First Name*</label>
                    <input type="text" placeholder='Enter First Name' name='firstname'
                        onChange={(txt) => { setFirstName(txt) }} />

                    <label htmlFor="lastname" >Last Name*</label>
                    <input type="text" placeholder='Enter Last Name' name='lastname'
                        onChange={(txt) => { setLastName(txt) }} />

                    <label htmlFor="address" >Address*</label>
                    <input type="text" placeholder='Enter Your Address' name='address'
                        onChange={(txt) => { setAddress(txt) }} />

                    <label htmlFor="email">Enter Email*</label>
                    <input type="text" placeholder='Enter Email' name='email'
                        onChange={(txt) => { setEmail(txt) }} />

                    <label htmlFor="contact">Contact*</label>
                    <input type="text" placeholder='Enter Mobile Number' name='contact'
                        onChange={(txt) => { setContact(txt) }} />

                   
                  
                </form>
            </div>
           
        </>
    )
}

export default App
