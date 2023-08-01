import React,{useEffect} from 'react'
import logo from '../../logo.png'
import { Link } from 'react-router-dom'
import {userAuthenticated,logoutUser} from '../../redux/actions/userActions'
import {fetchProperties} from '../../redux/actions/propertyActions'
import { useDispatch,useSelector} from 'react-redux'
import { useNavigate  } from 'react-router-dom';
// import CreateCon from '../../util/CreatContext'

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
   
    console.log('navbar called');

    const loggedUser = useSelector((state) => state.loginUser.loggedInUser)
    var loggedAdmin = useSelector((state) => state.loginUser.admin)

    console.log('logged admin',loggedAdmin);

    //const userData = useSelector((state) => state.loginUser.auth)
    console.log(loggedUser);
   
    var flag = false;
    var loginFlag = false;
   
    const logUser = localStorage.getItem('login')
    if(logUser === 'false'){
      loginFlag=false
    }else{
      loginFlag = true;
    }
    console.log('log user:',logUser);

        if(localStorage.getItem('user')){
          
          const data = localStorage.getItem('user')
          const obj = JSON.parse(data)
          const role = obj.role;

          if(role === 'admin'){
            flag = true;
            //loggedAdmin = true
          }
        }
        else{
          flag = false;
        }
   console.log(flag); 
  // useEffect(()=>{
  //   //dispatch(fetchProperties());
  //     dispatch(userAuthenticated());
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[loginFlag])
  
  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem('user')
    localStorage.setItem('login',false)
    navigate('/login')
  }

  console.log('logged admin',loggedAdmin);
  return (
    <div>
            <nav className='navbar navbar-expand-lg navbar-light fixed-top bg-light flex-md-nowrap p-0'>

{/* <nav className="navbar sticky-top fixed-top navbar-expand-lg navbar-light bg-light flex-md-nowrap p-0"> */}
  <Link className="navbar-brand" to=""><h2 style={{fontFamily:'monospace'}}> <img src={logo} width="40" height="40" class="d-inline-block align-top" alt="img" />
     Dream Property </h2></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto" style={{marginRight:'20px'}}>

     { !flag ? ( <><li className="nav-item active">
        <Link className="nav-link" to="home">Home</Link>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Category
        </Link>
        <div className="dropdown-menu col-md-5" aria-labelledby="navbarDropdown" >
          <Link className="dropdown-item" to="/rent">Properties On Rent</Link>
          <Link className="dropdown-item" to="/buy">Properties To Buy</Link>
        </div>
      </li>
      </> ) :
      (<></>) 
  }
      {flag ? (
        <>
      <li className="nav-item active">
        <Link className="nav-link" to="/admin/properties">All Properties</Link>
      </li>
     
      
      <li className="nav-item active">
        <Link className="nav-link" to="/admin/add-property">Add Property</Link>
      </li>

      <li className="nav-item active">
        <Link className="nav-link" to="/admin/inquiries">All Inquiries</Link>
      </li>
      </>
      ) : (
        <span></span>
      ) }
      
      {/*  <li className="nav-item active">
        <Link className="nav-link" to="login">Login</Link>
      </li>
       <li className="nav-item active" onClick={handleLogout}>
        <Link className="nav-link">Logout</Link>
      </li> 
      */}
      {loggedUser && !flag ? (<li className="nav-item active">
        <Link className="nav-link" to='inq-properties'>Inquired Properties</Link>
      </li>) : (<></>)}
      {loggedUser  ? (
      <>
      <li className="nav-item active">
        <Link className="nav-link" to='profile'>Profile</Link>
      </li>
      <li className="nav-item active" onClick={handleLogout}>
        <Link className="nav-link">Logout</Link>
      </li>
      </> ) : (
        <li className="nav-item active">
        <Link className="nav-link" to="login">Login</Link>
      </li>
      ) }  
      
    </ul>
  
  </div>
</nav>
<br/><br/><br/><br/>
    </div>
  )
}


export default Navbar