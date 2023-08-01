import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import PropertyCatComp from '../../components/Cards/PropertyCatComp';
import {fetchRentProperties} from '../../redux/actions/propertyActions'

export default function RentList() {

    const dispatch = useDispatch()
        useEffect(()=>{
      dispatch(fetchRentProperties());
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
  return (
    <div className='container-fluid'>
      <PropertyCatComp />  
    </div>
  )
}
