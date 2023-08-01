import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import '../../styles/propertyList.css'
import { useNavigate  } from 'react-router-dom';
import { fetchInquiries } from '../../redux/actions/inquiryActions'
import { toast } from 'react-toastify';

    const InquiryTableView=   () => {

//        const navigate = useNavigate()
        
    const navigate = useNavigate();
    var show = false;
    const data = localStorage.getItem('user')

    if(data){

      const obj = JSON.parse(data)
      const uid = obj.id
      const role = obj.role;

      console.log(uid, role);

      if(role === 'admin'){
        // toast('Welcome Admin');
     }else{
        toast.error("Access denied")
        navigate('/')
      }
    }
    else{
      navigate('/')
    }

        console.log('called');
        const inquiries =  useSelector((state) => state.inquiryReducer.inquiries)
        var renderList =[]
    
        useEffect(()=>{
            fetchInquiries()
        },[])
    
        
        //console.log(inquiries);
      
        if(inquiries !== undefined){
            renderList =inquiries.map((data) => {
                const {inqid,fname,lname,email,mobile,price,message} = data;   
                return (
        
                    <div>
                        {Object.keys(inquiries).length === 0 || inquiries === undefined ? (
                        <div>Loading......</div>      
              
                        ) : (
                        
                        <>
                            <td style={{width:'100px'}}>{inqid}</td>
                            <td style={{width:'100px'}}>{fname}</td>
                            <td style={{width:'100px'}}>{lname}</td>
                            <td style={{width:'250px'}}>{email}</td>
                            <td style={{width:'150px'}}>{mobile}</td>
                            <td style={{width:'150px'}}>{price}</td>
                            <td style={{width:'500px'}}>{message}</td>
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
       <h3 style={{display:'flex',justifyContent:'center',color:'blueviolet',marginTop:'100px'}}>List of inquiries</h3> 
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
export default InquiryTableView;