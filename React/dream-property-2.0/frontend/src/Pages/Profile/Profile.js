import React from 'react'
import { toast } from 'react-toastify'
import { useNavigate  } from 'react-router-dom';

import './Profile.css'
const Profile = () =>{

    var obj=null;
    const navigate = useNavigate();

    if(localStorage.getItem('user')){
          
        const data = localStorage.getItem('user')
        obj = JSON.parse(data)
      }
      else{
       toast.error('You are not logged in')
       navigate('/login')
      }
      
    return (
        <>
        { obj === null ? (<>        {navigate('/login')}
</>):(
            <section>
    <div class="container" >
        <div class="row">
            <div class="col-lg-12 mb-4 mb-sm-5">
                <div class="card card-style1 border-0">
                    <div class="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
                        <div class="row align-items-center">
                            <div class="col-lg-6 mb-4 mb-lg-0">
                                <img class="img-fluid" src={obj.uimg} height="400px" width="400px" alt="..." />
                            </div>
                            <div class="col-lg-6 px-xl-10">
                                <div class="bg-secondary d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded">
                                    <h3 class="h2 text-white mb-0"> <p style={{fontVariant:'all-petite-caps'}}> {obj.fname} {obj.lname}</p> </h3>
                                    <span class="text-primary"></span>
                                </div>
                                <ul class="list-unstyled mb-1-9">
                                    <li class="mb-2 mb-xl-3 display-28"><span class="display-26 text-secondary me-2 font-weight-600">Email:</span>{obj.email} </li>
                                    <li class="mb-2 mb-xl-3 display-28"><span class="display-26 text-secondary me-2 font-weight-600">Mobile:</span>{obj.mobile}</li>
                                    <li class="mb-2 mb-xl-3 display-28"><span class="display-26 text-secondary me-2 font-weight-600">Address:</span>{obj.address}</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </div>


</section>
        )}
        </>    
    )
}
export default Profile;
