import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import '../../styles/propertyList.css'
//import { useNavigate  } from 'react-router-dom';
import { fetchProperties } from '../../redux/actions/propertyActions'

    const PropertyTableView=   () => {

//        const navigate = useNavigate()
        
        console.log('called');
        const properties =  useSelector((state) => state.allProperties.properties)
        var renderList =[]
    
        useEffect(()=>{
            fetchProperties()
        },[])
    
        
        //console.log(properties);
      
        if(properties !== undefined){
            renderList =properties.map((data) => {
                const {id,padd,img,price,aname,tname} = data;   
                return (
        
                    <div>
                        {Object.keys(properties).length === 0 || properties === undefined ? (
                        <div>Loading......</div>      
              
                        ) : (
                        
                        <>
                            <td style={{width:'100px'}}>{id}</td>
                            <td style={{width:'600px'}}>{padd}</td>
                            <td style={{width:'100px'}}>{price}</td>
                            <td style={{width:'100px'}}>{aname}</td>
                            <td style={{width:'200px'}}>{tname}</td>
                            <td style={{width:'100px'}}> <img src={img} height={'50px'} width={'100px'} alt='pimg' /> </td>
                        </>
                     )}
                </div>
                        
                )
            })
        }
    
      return (
       <>
       {renderList.length > 0 ? (
        <>
       <h3 style={{display:'flex',justifyContent:'center',color:'blueviolet',marginTop:'100px'}}>List of properties</h3> 
       <div style={{justifyContent:'center',display:'flex'}}> 
           
        <table border={'2px'} cellPadding={'20px'} className='tableStyle'>
        {/* <th>
                <td>id</td>
                <td style={{maxWidth:'150px'}}>Address</td>
                <td style={{width:'150px'}}>Price</td>
                <td style={{width:'150px'}}>Area</td>
                <td style={{width:'150px'}}>Type</td>
                <td style={{width:'150px'}}>Image</td>
            </th> */}

            <tbody>
            <tr>
            {renderList.map((data) => (
                <>
                
                <div key={data.id}>{data}</div>
                </>
            ))}
            </tr>
            </tbody>
        </table>
        </div>
        </>):
        (
            <div>Loading.....</div>
        )
        }
           </>
      )
    }
export default PropertyTableView;