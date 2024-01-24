import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddProject() {
  const navigate = useNavigate();
  const [error,setError] =  useState("");
  const [msg,setMsg] =  useState("");

  const [data,setData] = useState({projectTitle : "", developerName: "", description: "",  hostedURL: ""});


  const change = (e) => {
    // e.preventDefault();
    const {name, value} = e.target;
    setData({...data, [name]: value });
  };

  const submitHandle = async () => {
    try {
      const response = await axios.post("http://localhost:2000/submit", data);  
      if (response.data) {
        //  console.log(response.data);
        setMsg(response.data)
        setData({projectTitle : "", developerName: "", description: "",  hostedURL: ""});
      }
      setTimeout(()=> {
        navigate('/userprojects');
      }, 3000)
    } catch (err) {
      setError(err);
      console.log(err.message);
    }
  };

//   console.log(data);
  
  return (
    <div className='d-flex justify-content-center align-items-center' style={{ minHeight: "91vh"}}>
      <div className="container">
  
       {error && <div className="alert alert-danger w-25 text-center m-auto" >  {error.message} </div>}
        { msg && <div className="alert alert-warning w-25 text-center m-auto" role="alert"> {msg.message} </div>}

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label ">
            Project Title: 
          </label>
          <input  type="text"  className="form-control"
            placeholder="Enter Project Title" name='title'
            onChange={change} value={data.title}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label ">
            Developer Name:
          </label>
          <input  type="text"   className="form-control"
            placeholder="Enter Developer Name" name='developerName' 
            onChange={change} value={data.developerName}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label ">
            Hosted URL:
          </label>
          <input  type="text"   className="form-control"
            placeholder="Enter Project Hosted URL" name='hostedURL'
            onChange={change} value={data.hostedURL}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label ">
            Description:
          </label>
          <input  type="text" className="form-control"
            placeholder="Enter Project Description" name='description'
           onChange={change} value={data.description}
          />
        </div>

        <button  className="btn btn-outline-secondary my-3"
         onClick={submitHandle} >
          Submit
        </button>
      </div>
    </div>
  )
}

export default AddProject;