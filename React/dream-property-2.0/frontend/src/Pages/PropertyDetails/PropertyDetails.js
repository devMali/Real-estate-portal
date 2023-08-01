import React,{useEffect,useState,useRef} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProperty,removeSelectedProperty } from '../../redux/actions/propertyActions'
import {fetchInquiry} from '../../redux/actions/inquiryActions'
import { userAuthenticated } from '../../redux/actions/userActions'
import '../../styles/propertyDetails.css'
import { toast } from 'react-toastify'
import axios from 'axios'

export default function PropertyDetails() {

  const property = useSelector((state) => state.property)
  
  const {id} = useParams()
  const dispatch = useDispatch()
  //console.log(property);
  console.log('details called');
 
  const msg = useRef()
  const handleSubmit =  async (e) => {
    e.preventDefault();
    const data = localStorage.getItem('user')

    if(data){

      //console.log(data);
      const obj = JSON.parse(data)
      const uid = obj.id
      const pid = id;
      const message = msg.current.value;
      
      const finalData = {
        'uid' : uid,
        'pid':pid,
        'message' : message
      }
    console.log('final data',finalData);
    console.log(obj);
    await axios.post('http://localhost:3031/iins',finalData)
      .then(response => {
        console.log(response);
        toast.success('Query sent successfully')
      })
      .catch(err => {console.log(err);})

      
     console.log(msg.current.value); 
      msg.current.value = ''
    }
    else{
      toast.error("please login first")
      msg.current.value = ''
    }
  }
  useEffect(() => {
    dispatch(userAuthenticated())
        // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
 
  useEffect(() => {
    if (id && id !== "") dispatch(fetchProperty(id));
    dispatch(fetchInquiry(5))

    //console.log(property[0].is_sell);
    return() => {
      dispatch(removeSelectedProperty())
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  
  useEffect(() => {
    setTimeout(() => {
      setFound("Not found")
    }, 3000);
    
  })
  const [found , setFound] = useState("Loading....");
 
  return (
    <div className='container-fluid'>
      {Object.keys(property).length === 0 ? (
      <div className='notFound'>{found}</div>      
      
      ) :
      
      (
        <div className="container ">
    <div className="header">
        <div className="row r1">
            <div className="col-md-9 abc">
                <h1>Property Details</h1>
            </div>
    </div>
    <div className="container-body mt-4">
        <div className="row r3">
            <div className="col-md-5 p-0 klo">
              <h2 className='title'>
              {property[0].tname} <br/>
              </h2>
                <h4>
                <p className="m-0 p-0 price-pro">
                    <p> {property[0].is_sell && !property[0].is_rent ? ('For sell') : ('') }</p>
                    <p> {property[0].is_rent && !property[0].is_sell ? ('For rent') : ('') }</p>
                    <p> {property[0].is_rent && property[0].is_sell ? ('For rent and sell') : ('') }</p>
                </p>
                </h4>
                
                <p className="m-0 p-0 price-pro">
                  {property[0].padd}
                </p>
                <hr className="p-0 m-0" />
                <h5>
                <div className="col-lg-15 pt-4">
                    <small className="text-success">Location : {property[0].aname}</small> &nbsp;&nbsp;&nbsp;
                    <small className="text-dark">Price : {property[0].price}</small>&nbsp;&nbsp;&nbsp;
                    <small className="text-dark">Size : {property[0].size}</small>&nbsp;&nbsp;&nbsp;
                </div>
                <div className="col-lg-12 pt-4">
                    <span>{property[0].description}</span>
                    <hr className="m-0 pt-2 mt-3" />
                </div>
                </h5>
                <div>
                    <br />
                    <form onSubmit={handleSubmit}>
                      <textarea placeholder='Enter any queries' cols={50} rows={4} required ref={msg} /> <br/>
                      <button type="submit" className='btn btn-success' value="submit">Submit</button>
                    </form>
                  </div>
            </div>
            <div className="col-md-7"> <img src={property[0].img} alt='dfs' width="90%" height="95%" /> </div>
        </div>
    </div>
</div>
</div>
      )}
    </div>
  )
}
