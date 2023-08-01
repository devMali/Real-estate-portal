import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import '../../styles/propertyList.css'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { fetchProperties } from '../../redux/actions/propertyActions'

    const PropertyBuyComponent=   () => {
    useEffect(()=>{
        fetchProperties()
    },[])

    const properties =  useSelector((state) => state.allProperties.properties)
    var renderList =[]

    //console.log(properties);
  
    if(properties !== undefined){
        renderList =properties.map((data) => {
            const {id,padd,img,price,aname,tname} = data;   
            return (
    
                <div>
                    {Object.keys(properties).length === 0 || properties === undefined ? (
                    <div>Loading......</div>      
          
                    ) : (
                <div key={id} class='card' style={{width:'470px'}} id='square' data-aos='zoom-out-down'> 
                <div class="row g-0">
                    <div class="col-md-5" style={{overflow:'hidden'}}>
                     <img src={img} class="img-fluid bolimg" alt="..." />
                    </div>
                    <div class="col-md-7">
                    <div class="card-body">
                        <h5 class="card-title">{tname}</h5>
                        <p class="card-text">{padd}</p>
                        <p class="card-text">
                            <small class="text-success">In {aname}</small> &nbsp;&nbsp;&nbsp;
                            <small class="text-secondary">{price}</small>&nbsp;&nbsp;&nbsp;
                            <Link to={`/property/${id}`}>
                                <button className='btn btn-secondary visitBtn' >View</button>
                            </Link>
                        </p>
                        
    
                    </div>
                    </div>
                </div>
                </div>
                 )}
            </div>
                    
            )
        })
    }

    useEffect(() => {
        Aos.init()
    })
   
  return (
   <>
   {renderList.length > 0 ? (
   <div className='buy_sell' > {renderList.map((data) => (
            <div key={data.id}>{data}</div>
        ))}</div>
    ):
    (
        <div>Loading.....</div>
    )
    }
       </>
  )
}

export default PropertyBuyComponent;