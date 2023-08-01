import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import PropertyBuyComponent from '../../components/Cards/PropertyCatComp';
import {fetchBuyProperties} from '../../redux/actions/propertyActions'

export default function BuyList() {

    const dispatch = useDispatch()
        useEffect(()=>{
      dispatch(fetchBuyProperties());
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
  return (
    <div className='container-fluid'>
      <PropertyBuyComponent />  
    </div>
  )
}
