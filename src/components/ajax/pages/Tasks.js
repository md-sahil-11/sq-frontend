import React from 'react'

import {useSelector} from 'react-redux';
function Tasks() {

    const user = useSelector((state)=> state.user.value);
    
  return (
    <div>Tasks</div>
  )
}

export default Tasks