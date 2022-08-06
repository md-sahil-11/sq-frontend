import React from 'react'

import {useSelector} from 'react-redux';
function Transaction() {

    const user = useSelector((state)=> state.user.value);
    console.log("transactions",user);
  return (
    <div>Transaction</div>
  )
}

export default Transaction