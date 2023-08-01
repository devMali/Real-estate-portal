import React, { useEffect } from "react";
import { useFormik } from "formik";
import { signInSchema } from "../../Schema";
import './signup.css'
import back4 from '../../Assets/back4.png'
import { Link } from "react-router-dom";
import {loginUser} from '../../redux/actions/userActions'
import { useDispatch,useSelector } from 'react-redux'
import { toast } from "react-toastify";
import { useNavigate  } from 'react-router-dom';
import { fetchUsers } from '../../redux/actions/userActions';
import bcrypt from "bcryptjs";
//import bcrypt from 'bcrypt'
import CreateCon from "../../util/CreatContext";


const initialValues = {
    email:'',
    password:''
}


const Signin = (props) =>{
  const navigate = useNavigate();
  var obj;
  var flag;

  if(localStorage.getItem('user')){
    navigate('/home')
    toast('You are already logged in')
  
    const data = localStorage.getItem('user')
    obj = JSON.parse(data)
  }else{
    obj = null;
  }
  

  const users = useSelector((state) => state.getUserReducer.users)
  //const signUpuser = useSelector((state) => state.adduser.users.data)
  
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(fetchUsers());
            // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
        initialValues,
        validationSchema:signInSchema,
        onSubmit : async (values,action) =>{
          
          await users.find( user => user.email === values.email &&  bcrypt.compare(values.password,user.password,function(err,matched){
            if(err){
              toast.error("Invalid Credentials");
              flag=false;
            }else if(!matched){
              toast.error("Invalid Credentials");
              flag=false;
            }else{
              dispatch(loginUser(values))
              toast.success("Login successful");
              localStorage.setItem('login',true)
              navigate('/')
             }
        }))
        

        
        }
    })

    //console.log(errors);
    
    return(
        <> 

        <CreateCon.Provider value={obj}>
            {props.children}
        </CreateCon.Provider>

        <h2 className="formTitle">Sign In</h2>

        <div className="loginForm"> 

        <div className="formStyle" style={{width:'1000px'}}>

        <form onSubmit={handleSubmit}>

         <div className=" loginStyle">
        <div className="form-group col-md-20" style={{width:'250px'}}>
        <label htmlFor="email" >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="Enter Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className="form-error">{errors.email}</p>
          ) : null}
        </div>
       
          <div className="form-group col-md-20" style={{width:'250px'}}>
          <label htmlFor="password" >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            placeholder="Enter Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p className="form-error">{errors.password}</p>
          ) : null}
          </div>
        <button type="submit" className="btn btn-primary txt">Sign In</button>
        <p>&nbsp;&nbsp;Don't have an account..?<Link to='../registration'>Sign Up</Link></p>
        </div>

  </form>
    <div>
            <img src={back4} alt='myimg' height={'500px'}/>
            </div>
  </div>
  </div>
        </>
    )
}
export default Signin;