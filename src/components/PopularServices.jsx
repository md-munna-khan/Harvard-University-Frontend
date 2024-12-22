import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const PopularServices = () => {

    
  const [services,setServices]=useState([])

  useEffect(()=>{
    fetchAllJobs()
  },[])
  const fetchAllJobs=async()=>{
    const {data}= await axios.get(`${import.meta.env.VITE_API_URL}/services`)
    setServices(data)
  }
    return (
        <div>
             <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 '>
         {
            services.map(service=><ServiceCard  key={service._id} service={service}></ServiceCard>)
         }
          </div>
        </div>
    );
};

export default PopularServices;