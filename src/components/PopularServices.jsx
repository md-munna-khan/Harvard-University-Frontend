// import axios from "axios";
// import { useEffect, useState } from "react";
// import ServiceCard from "./ServiceCard";
// import { Link } from "react-router-dom";


// const PopularServices = () => {

    
//   const [services,setServices]=useState([])

//   useEffect(()=>{
//     fetchAllJobs()
//   },[])
//   const fetchAllJobs=async()=>{
//     const {data}= await axios.get(`${import.meta.env.VITE_API_URL}/services`)
//     setServices(data)
//   }
//     return (
//         <div>
//             <div >
//                 <h1 className="text-3xl md:text-5xl font-bold text-center">Popular services</h1>
//                 <p className="text-2xl text-center">This is Our popular service if you interest on book now </p>
//             </div>
//              <div className='grid grid-cols-1 gap-2 my-10 md:grid-cols-2 mx-auto '>
             
//         {services.slice(0, 6).map((service) => (
//           <ServiceCard key={service._id} service={service} />
//         ))}
   
//           </div>
//           <div className="text-center justify-center mx-auto">
//       <Link to='/all-services'>
//        <button className="p-4 text-white  my-10 bg-blue-500">Show All Services</button>
//        </Link>
//       </div>
//         </div>
//     );
// };

// export default PopularServices;


import axios from "axios";
import { useEffect, useState, useContext } from "react";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PopularServices = () => {
  const { isDark } = useContext(AuthContext);  // Assuming dark mode state is in AuthContext
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchAllJobs();
  }, []);

  const fetchAllJobs = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/services`);
      setServices(data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  return (
    <div className={`p-6 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div>
        <h1 className="text-3xl md:text-5xl font-bold text-center">Popular Services</h1>
        <p className="text-2xl text-center">This is Our popular service if you're interested in booking now</p>
      </div>

      <div className="grid grid-cols-1 gap-2 my-10 md:grid-cols-2 mx-auto">
        {services.slice(0, 6).map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>

      <div className="text-center justify-center mx-auto">
        <Link to="/all-services">
          <button className="p-4 text-white my-10 bg-blue-500 hover:bg-blue-600 rounded-lg">
            Show All Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularServices;
