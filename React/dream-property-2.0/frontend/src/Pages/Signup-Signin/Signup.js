import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../../Schema";
import './signup.css'
import { useEffect } from "react";
import back1 from '../../Assets/back1.png'
import { Link } from "react-router-dom";
import {addUser} from '../../redux/actions/userActions'
import { useDispatch } from 'react-redux'
import { useNavigate  } from 'react-router-dom';
import { toast } from 'react-toastify';

const initialValues = {
    fname : '',
    lname : '',
    email:'',
    password:'',
    cpassword:'',
    mobile:'',
    address:'',
}

const Signup = () =>{
  const navigate = useNavigate();
  const dispatch = useDispatch()
    useEffect(()=>{
      localStorage.removeItem('img')
    },[])

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =

    useFormik({
        initialValues,
        validationSchema:signUpSchema,
        onSubmit : (values,action) =>{
            const other = {
              uimg : localStorage.getItem('img'),
              role:'user'
            }
            const final = {...other,...values}
            //console.log(final);
           // const {password,cpassword,...regData} = final;
           
            //localStorage.setItem('user',JSON.stringify(regData))
  

            action.resetForm();
            dispatch(addUser(final))
            toast.success("Registration successful")
            navigate('/')
            //navigate('../login')
        }
    })
    //console.log(errors);
    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        //console.log(reader.result);
        localStorage.setItem('img',reader.result)
      };
    };
    return(
        <> 
                <h2 className="formTitle">Sign Up</h2>

        <div className="formStyle">

        <form onSubmit={handleSubmit} style={{maxWidth:'700px'}}>

        <div className="form-row">
          <div className="form-group col-md-4 txt">
          <label htmlFor="fname">First Name</label>
            <input
            className="form-control"
            type="name"
            name="fname"
            id="fname"
            placeholder="Enter first name"
            value={values.fname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.fname && touched.fname ? (
            <p className="form-error">{errors.fname}</p>
          ) : null}
          </div>


          <div className="form-group col-md-4 txt">
            <label htmlFor="lname">
            Last Name
          </label>
          <input
            type="name"
            name="lname"
            id="lname"
            className="form-control"
            placeholder="Enter last name"
            value={values.lname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.lname && touched.lname ? (
            <p className="form-error">{errors.lname}</p>
          ) : null}
          </div>
        </div>
        <div className="form-group col-md-6 txt">
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
        <div className="form-group col-md-6 txt">
        <label htmlFor="mobile" >
            Mobile
          </label>
          <input
            type="tel"
            name="mobile"
            id="mobile"
            className="form-control"
            placeholder="Enter Mobile Number"
            value={values.mobile}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.mobile && touched.mobile ? (
            <p className="form-error">{errors.mobile}</p>
          ) : null}
        </div>
        <div className="form-row">
          <div className="form-group col-md-4 txt">
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
          <div className="form-group col-md-4 txt">
          <label htmlFor="cpassword">
            Confirm Password
          </label>
          <input
            type="password"
            name="cpassword"
            id="cpassword"
            className="form-control"
            placeholder="Enter Confirm Password"
            value={values.cpassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.cpassword && touched.cpassword ? (
            <p className="form-error">{errors.cpassword}</p>
          ) : null}
          </div>
          <div className="form-group col-md-6 txt">
          <label htmlFor="address">
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className="form-control"
            placeholder="Enter Address"
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.address && touched.address ? (
            <p className="form-error">{errors.address}</p>
          ) : null}
          </div>
        </div>
        <div className="form-group txt">
        <label htmlFor="uimg">
            Profile Picture:
          </label>
          <input
            type="file"
            name="uimg"
            id="uimg"
            class="form-control-file"
            onChange={handleImageUpload}
          />
        </div>
        <button type="submit" className="btn btn-primary txt">Sign up</button>
        <p>&nbsp;&nbsp;Already have an account..?<Link to='../login'>Sign in</Link></p>
  </form>
  <div>
          <img src={back1} alt='myimg' height={'500px'}/>
        </div>
  </div>

        </>
    )
}
export default Signup;