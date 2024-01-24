import React from 'react';

function Projects({data}) {
  
//  console.log(data);
  
  return (
    <>
      <div className='d-flex justify-content-center align-items-center flex-wrap'>      
       {data 
          &&  data.map((item,index) => ( 
          <div className="card" style={{ width: "14rem" }} key={index} >
            <ul className="list-group list-group-flush ">
                <li className="list-group-item bg-dark-subtle"> <b> Title: </b> {item.title} </li>
                <li className="list-group-item bg-danger-subtle"> <b> Developer Name: </b> {item.developerName} </li>
                <li className="list-group-item text-success bg-success-subtle"> <b> HostedURL: </b>{item.hostedURL} </li>
                <li className="list-group-item text-success bg-success-subtle"> <b> Description: </b>{item.description} </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}

export default Projects;