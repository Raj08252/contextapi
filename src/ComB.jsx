import React, { useContext } from 'react';
import ComC from './ComC';
import { FirstName,LastName } from './App';
const ComB=()=>{
    const Fname=useContext(FirstName);
    const Lname=useContext(LastName);
    return(
        <h1 className="text-center">
        My name is {Fname}
        {Lname}
      </h1>
);
}

export default ComB;