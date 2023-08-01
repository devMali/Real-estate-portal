import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import PropertyComponent from '../../components/Cards/PropertyComponent';
import {fetchProperties} from '../../redux/actions/propertyActions'
import { fetchUsers } from '../../redux/actions/userActions';
import '../../styles/propertyList.css'
import banner4 from '../../Assets/banner4.jpg'
import banner5 from '../../Assets/banner5.jpg'
import banner6 from '../../Assets/banner6.jpg'
import banner7 from '../../Assets/banner7.jpg'
import banner8 from '../../Assets/banner8.jpg'


export default function PropertyList() {
    //const properties = useSelector((state) => state)
    //console.log(properties);
    //const users = useSelector((state) => state.loginUser.user)
    //console.log(users);
    
    console.log('propertyList called');
    const dispatch = useDispatch()
        useEffect(()=>{

          dispatch(fetchProperties());
          dispatch(fetchUsers())
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    //console.log(properties);
  return (
    <>
    <div className='home col-md-10'>
      <div className='carouselStyle col-md-7'>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" >
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
  </ol>
  <div className="carousel-inner">
  <div className="carousel-item active">
      <img className="d-block w-100 h-100 img-fluid" src={banner5} alt="Second slide" />
      <div className="carousel-caption d-none d-md-block"  style={{color:'black',fontFamily:'cursive'}}>
            <p>A house is made with walls and beams; a home is built with love and dreams.</p>
            <h5>Get you dream house with <strong>Dream Property</strong> </h5>
      </div>
    </div>
    
    <div className="carousel-item">
      <img className="d-block w-100 h-100 img-fluid" src={banner8} alt="First slide" />
      
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 h-100 img-fluid" src={banner6} alt="Third slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 h-100 img-fluid" src={banner7} alt="Fourth slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 h-100 img-fluid" src={banner4} alt="Fifth slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
      </div>
        <div className='main col-md-5'><PropertyComponent /></div>
    </div>
    </>
  )
}
