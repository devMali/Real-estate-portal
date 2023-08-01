import React,{useState} from "react";
import { useFormik } from "formik";
import '../Signup-Signin/signup.css'
import { useEffect } from "react";
import {addProperty, fetchProperties} from '../../redux/actions/propertyActions'
import { useDispatch } from 'react-redux'
import { useNavigate  } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from "axios";
import banner8 from '../../Assets/banner8.jpg'

const initialValues = {
  padd : '',
  price : '',
  description:'',
  size:'',
  is_sell:'',
  is_rent:'',
  aid:'',
  tid:'',
}
export default function AddProperty() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  
  const data = localStorage.getItem('user')

    if(data){

      const obj = JSON.parse(data)
      const uid = obj.id
      const role = obj.role;

      console.log(uid, role);

      if(role === 'admin'){
        //toast('Welcome Admin')
      }else{
        toast.error("Access denied")
        navigate('/')
      }
    }
    else{
      toast.error("You are not logged in")
      navigate('/')
    }

    const [area,setArea] = useState([])
    const [type,setType] = useState([])
  
      useEffect(() => {
        
        axios.get('http://localhost:3031/aview')
        .then((response) => {
            setArea(response.data)
        })
        
        axios.get('http://localhost:3031/tview')
          .then((response) => {
              setType(response.data)
          })
  
        localStorage.removeItem('pro-img')
        //console.log(area);
        //console.log(type);
      },[])
      const { values, handleBlur, handleChange, handleSubmit } =
  
      useFormik({
          initialValues,
          //validationSchema:signUpSchema,
          onSubmit : (values,action) =>{
  
            var rval,sval;
            const {img,is_rent,is_sell,...data} = values
  
            if(values.is_rent === ''){
              rval=false;
            }else{
              rval = true;
            }
  
            if(values.is_sell === ''){
              sval=false;
            }else{
              sval = true;
            }
  
            const otherData = {
              img:localStorage.getItem('pro-img'),
              is_rent:  rval,
              is_sell: sval
            }
           
              const final = {...otherData,...data}
              console.log(final);
             
              action.resetForm();
              dispatch(addProperty(final))
              dispatch(fetchProperties())
              toast.success("Property Added")
              navigate('/admin/properties')
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
          localStorage.setItem('pro-img',reader.result)
        };
      };
    
    return (
      <> 
                  <h2 className="formTitle" >Add Property</h2>
  
          <div className="addPropForm"> 
  
          <form onSubmit={handleSubmit} style={{width:'1000px'}}>
  
          <div className="form-row">
            <div className="form-group col-md-8 txt">
            <label htmlFor="padd">Property Address</label>
              <input
              className="form-control"
              type="text"
              name="padd"
              id="padd"
              placeholder="Enter Property Address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.padd}
              required
            />
          
            </div>
  
  
            
          </div>
          <div className="form-group col-md-8 txt">
          <label htmlFor="description" >
              Description
            </label>
            <input
              type="text"
              name="description"
              id="description"
              className="form-control"
              placeholder="Enter Description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
              required
            />
           
          </div>
          <div className="form-row">

          <div className="form-group col-md-3 txt">
          <label htmlFor="size" >
              Size
            </label>
            <input
              type="text"
              name="size"
              id="size"
              className="form-control"
              placeholder="Enter size"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.size}
              required
            />
          
          </div>
          <div className="form-group col-md-3 txt">
              <label htmlFor="price">
              Price
            </label>
            <input
              type="text"
              name="price"
              id="price"
              className="form-control"
              placeholder="Enter Price"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
              required
            />
           
            </div>
            </div>
          <div className="form-row">
            <div className="form-group col-md-4 txt">
            <label htmlFor="is_rent" >
              For Rent
            </label>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id='is_rent' name="is_rent" onChange={handleChange}
              onBlur={handleBlur} value={values.is_rent}  defaultValue={false} />
            </div>
         
            </div>
            <div className="form-group col-md-4 txt">
            <label htmlFor="is_sell" >
              For Sell
            </label>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id='is_sell' name="is_sell" onChange={handleChange}
              onBlur={handleBlur} value={values.is_sell}  defaultValue={false}  />
            </div>
         
            </div>
            
          </div>
          
  
  
          <div className="form-row">
            <div className="form-group col-md-4 txt">
            <label htmlFor="aid" >
              Area
            </label>
            <select name="aid" id="aid" onChange={handleChange}
              onBlur={handleBlur}  value={values.aid} required>
                <option>Select Area</option>
              {area.map(data =>
                <option value={data.id}>{data.aname}</option>
              )};
            </select>
         
            </div>
            <div className="form-group col-md-4 txt">
            <label htmlFor="tid" >
              Type
            </label>
            <select name="tid" id="tid" onChange={handleChange}
              onBlur={handleBlur} value={values.tid} required>
                <option>Select Type</option>
              {type.map(data =>
                <option value={data.id}>{data.tname}</option>
              )};
            </select>
         
            </div>
            
          </div>
  
          <div className="form-group txt">
          <label htmlFor="img">
              Property Image:
            </label>
            <input
              type="file"
              name="img"
              id="img"
              class="form-control-file"
              onChange={handleImageUpload}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary txt">Add</button>
  
    </form>
    <div>
      <img src={banner8} className="formImg img-fluid" alt='fa' />
    </div>
   </div>
    </>
          
    )
  }
  
  