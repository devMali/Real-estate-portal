import React from 'react'
import CreateCon from './CreatContext';

const MyContext = (props) => {

    var obj= null;
    if(localStorage.getItem('user')){
        const data = localStorage.getItem('user')
        obj = JSON.parse(data)
    }
    else{
        obj = null;
    }
    return(
        <>
        <CreateCon.Provider value={obj}>
            {props.children}
        </CreateCon.Provider>
        </>
    )
}

export default MyContext