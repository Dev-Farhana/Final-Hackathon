import React from 'react';
import Img from '../assets/image2.png';
import {Link} from 'react-router-dom';


function Home() {
  return (
   <div className='container-fluid d-flex justify-content-center align-items-center'>
        <div className="row container">
            <div  className='col-lg-6 d-flex justify-content-center align-items-start flex-column' >
             <h2 style={{fontSize: "90px", paddingTop: "100px"}}> Want to see any 
             <span className='text-info'>  Users  Projects ! </span>   </h2>
             <h2 className='text-secondary'>  Checkout the projects from here  </h2>
                <Link to={"/login"}  type="button"  className="btn btn-outline-secondary my-3">
                  Login 
               </Link>
                <Link to={"/signup"}  type="button"  className="btn btn-outline-secondary my-3">
                  Signup
               </Link>

            </div>

            <div 
             className='col-lg-6 d-flex justify-content-center align-items-end flex-column'
             style={{height: "91.5vh"}} 
            >
              <img src={Img} className='img-fluid float-end' alt="image"  />

            </div>
        </div>
   </div>
  )
}

export default Home;