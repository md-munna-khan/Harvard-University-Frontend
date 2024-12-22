import axios from "axios";
import { useEffect, useState } from "react";


const PopularServices = () => {

    
  const [services,setServices]=useState([])

  useEffect(()=>{
    fetchAllJobs()
  },[])
  const fetchAllJobs=async()=>{
    const {data}= await axios.get(`${import.meta.env.VITE_API_URL}/jobs`)
    setServices(data)
  }
    return (
        <div>
            
        </div>
    );
};

export default PopularServices;