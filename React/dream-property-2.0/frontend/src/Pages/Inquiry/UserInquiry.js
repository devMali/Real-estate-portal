import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchInquiry} from '../../redux/actions/inquiryActions'
import '../../styles/propertyList.css'
import { toast } from 'react-toastify'
import { useNavigate  } from 'react-router-dom';


export default function UserInquiry() {

const navigate = useNavigate();
const inquiry = useSelector((state) => state.inquiryReducer.inquiry)
const dispatch = useDispatch()
var uid;
  //console.log(property);
  const data = localStorage.getItem('user')

    if(data){

      //console.log(data);
        const obj = JSON.parse(data)
        uid = obj.id

    }
    else{
      toast.error("please login first")
      navigate('/')
    }

    useEffect(() => {
        if (uid && uid !== "") dispatch(fetchInquiry(uid));
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [uid]);
      var renderList =[]
    
      if(inquiry !== undefined || inquiry !== '' || inquiry.length === 0){
        renderList =inquiry.map((data) => {
            const {padd,price,img,size,tname,aname,message} = data;   
            return (
    
                <div>
                    {Object.keys(inquiry).length === 0 || inquiry === undefined ? (
                    <div>No inquiries Found</div>      
          
                    ) : (
                    
                    <>
                        <td style={{width:'500px'}}>{padd}</td>
                        <td style={{width:'200px'}}>{price}</td>
                        <td style={{width:'100px'}}>{size}</td>
                        <td style={{width:'150px'}}>{tname}</td>
                        <td style={{width:'150px'}}>{aname}</td>
                        <td style={{width:'500px'}}>{message}</td>
                        <td style={{width:'250px'}}> <img src={img} alt='img' height={'100px'} width={'100px'} /> </td>
                    </>
                 )}
            </div>
                    
            )
        })
      
    }else{
        toast.error('No inquiry found')
    }
      return (
        <>
        {renderList.length > 0 ? (
         <>
        <h3 style={{display:'flex',justifyContent:'center',color:'blueviolet',marginTop:'100px'}}>List of Properties you have Inquired </h3> 
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
   
  
 
 