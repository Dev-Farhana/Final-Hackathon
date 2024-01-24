import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import Projects from '../components/Projects';

function UserProjects() {
    const [data, setData] = useState([]);
    const [error,setError] =  useState("");
    const [loading, setLoading] = useState(true); // Initial loading state
  
    useEffect( () => {
      const fetchData = async() => {
        try{ 
          const response =  await axios.get("http://localhost:2000/projects")
          setData(response.data);
          console.log(response.data);
        }catch(err){
          setError(`Something went wrong data not Fetched!`);
        }finally {
          // Set loading to false regardless of success or failure
          setLoading(false);
        }
      }
      fetchData();
    },[]);

  return (
    <div className=' p-5' >
    <div className='d-flex justify-content-center align-items-center py-3'>
      <h3 className=''> Project Section </h3>
    </div>
    
    {loading ? ( <Spinner />  ) : (   <Projects data={data} />    )}

    { error && <div className="alert alert-danger w-25 text-center m-auto"> {error} </div> }

  </div>
  )
}

export default UserProjects


