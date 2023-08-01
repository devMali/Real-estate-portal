import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate  } from 'react-router-dom';
import { toast } from 'react-toastify';
import {fetchInquiries} from '../../redux/actions/inquiryActions'
import InquiryTableView from '../../components/Cards/InquiryTableView';

export default function AdminPropertyList() {

    const navigate = useNavigate();
    const dispatch = useDispatch()
    var show = false;
    const data = localStorage.getItem('user')

    if(data){

      const obj = JSON.parse(data)
      const uid = obj.id
      const role = obj.role;

      console.log(uid, role);

      if(role === 'admin'){
        // toast('Welcome Admin');
        show =true;
      }else{
        toast.error("Access denied")
        navigate('/')
        show =false;
      }
    }
    else{
      navigate('/')
      show =false;
    }

    useEffect(()=>{
      dispatch(fetchInquiries());
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
  
    
  return (
    <>
    {show ? (<><div><InquiryTableView /></div></>)
    :(<> { navigate('/') }</>)}
    
    </>
  )
}
