import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";


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
            <div>
                <h1 className="text-3xl md:text-5xl font-bold text-center">Popular services</h1>
                <p className="text-2xl text-center">This is Our popular service if you interest on book now </p>
            </div>
             <div className='grid grid-cols-1 gap-2 my-10 md:grid-cols-2 mx-auto '>
             
        {services.slice(0, 6).map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
   
          </div>
          <div className="text-center justify-center mx-auto">
      <Link to='/all-services'>
       <button className="p-4 text-white  my-10 bg-blue-500">Show All Services</button>
       </Link>
      </div>
        </div>
    );
};

export default PopularServices;