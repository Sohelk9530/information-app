import { useState } from 'react'
import './App.css'


function App() {
  const [values, setvalues] = useState({
    firstname: '',
    lastname: '',
    address: '',
    email: '',
    contact: '',
    gender: '',
    qualifications: '',
    Uploadphoto: '',
    about: ''
  })
  const handleChange = (e) => {
    setvalues({ ...values, [e.target.name]: [e.target.value] })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);

  }
  const Resetfun = () => {
    setvalues({ firstname: "", lastname: '', email: '', contact: '' })
  }

  const [submit, setsubmit] = useState(false)
  return (
    <>
      <div className='container'>

        {
          submit ? <>
            <div className="display-data">
              <div className='card'>
                <div className="cardimg">
                  <img src={values.Uploadphoto} alt="img" />
                </div>
                <div className="cardbody">
                  <h1>Hi I Am {values.firstname} {values.lastname}</h1>
                  <h3>Currently I Am working as a {values.about}</h3>
                  <button>Contact-Me</button>
                </div>
              </div>
              <div className="details">
                <h2>More Details About Me Let's Scroll-Down</h2>
                <ul>
                  <li>Name:{values.firstname} {values.lastname}</li>
                  <li>Gender:{values.gender}</li>
                  <li>Address:{values.address}</li>
                  <li>Qualifications:{values.qualifications}</li>
                  <li>Contact_Number:{values.contact}</li>
                  <li>Email:{values.email}</li>
                </ul>
              </div>
            </div></> : <>
            <h1>PERSONAL INFORMATION</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="firstname" >First Name*</label>
              <input type="text" placeholder='Enter First Name' name='firstname'
                onChange={(e) => handleChange(e)} required value={values.firstname} />

              <label htmlFor="lastname" >Last Name*</label>
              <input type="text" placeholder='Enter Last Name' name='lastname'
                onChange={(e) => handleChange(e)} required value={values.lastname} />

              <label htmlFor="address" >Address*</label>
              <input type="text" placeholder='Enter Your Address' name='address'
                onChange={(e) => handleChange(e)} required value={values.address} />

              <label htmlFor="email">Enter Email*</label>
              <input type="text" placeholder='Enter Email' name='email'
                onChange={(e) => handleChange(e)} required value={values.email} />

              <label htmlFor="contact">Contact*</label>
              <input type="text" placeholder='Enter Mobile Number' name='contact'
                onChange={(e) => handleChange(e)} required value={values.contact} />

              <label htmlFor="gender">Gender*</label>
              <input type="radio" name='gender'
                onChange={(e) => handleChange(e)} /> Male
              <input type="radio" name='gender'
                onChange={(e) => handleChange(e)} /> Female
              <input type="radio" name='gender'
                onChange={(e) => handleChange(e)} /> Other

              <label htmlFor="qualifications">Qualifications*</label>
              <select name="qualifications" id="qualifications"
                onChange={(e) => handleChange(e)}>
                <option value="select">select</option>
                <option value="ilt">illetrate</option>
                <option value="10th">Till 10th</option>
                <option value="12th">Till 12th</option>
                <option value="ug">Till Under-graduation</option>
                <option value="pg">Till Post-graduation</option>
              </select>
              <label htmlFor="Uploadphoto">Upload Photo*</label>
              <input type="file" placeholder='Upload Photo' name='Uploadphoto'
                onChange={(e) => handleChange(e)} />

              <label htmlFor="about">About Your Present Condition*</label>
              <textarea name='about' id='about' placeholder='About Your Present Condition' cols='30' rows='10'
                onChange={(e) => handleChange(e)} />

              <button type='button' onClick={Resetfun}>Reset</button>
              <button type='submit' onClick={() => { setsubmit(true) }} >Submit</button>
            </form>
          </>
        }
      </div>
      {/* <Info/> */}

      {/*display the data which is from user*/}

      {/* <CardBs/> */}

    </>
  )
}

export default App

