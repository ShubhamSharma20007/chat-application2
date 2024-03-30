import React from 'react'
import { useNavigate } from 'react-router-dom';
import { BiPowerOff } from "react-icons/bi";
const Logout = () => {
    const navigate = useNavigate();

    function handleClick(){
        localStorage.clear();
        navigate("/login");
    }

  return (
    <div>
        
      <BiPowerOff onClick={handleClick} />
    </div>
  )
}

export default Logout
