import React from 'react'


const CardBs = (props) => {
  return (
    <div className='container'>
        <div className="display-data">
      <div className='card'>
        <div className="cardimg">
          <img src={props.Uploadphoto} alt="img" />
        </div>
        <div className="cardbody">
          <h1>Hi I Am {props.firstname} {props.lastname}</h1>
          <h3>Currently I Am working as a {props.about}</h3>
          <button>Contact-Me</button>
        </div>
         </div>
         <div className="details">
          <h2>More Details About Me Let's Scroll-Down</h2>
          <ul>
            <li>Name:{props.firstname} {props.lastname}</li>
            <li>Gender:{props.gender}</li>
            <li>Address:{props.address}</li>
            <li>Qualifications:{props.qualifications}</li>
            <li>Contact_Number:{props.contact}</li>
            <li>Email:{props.email}</li>
          </ul>
      </div>
       

      </div>
    </div>
  )
}

export default CardBs