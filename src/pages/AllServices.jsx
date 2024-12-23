// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const AllServices = () => {
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     fetchAllServices();
//   }, []);

//   const fetchAllServices = async () => {
//     try {
//       const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/services`);
//       setServices(data);
//     } catch (error) {
//       console.error("Error fetching services:", error);
//     }
//   };

//   return (
//     <div className="container mx-auto my-12">
//       <h1 className="text-2xl font-bold mb-8">All Services ({services.length})</h1>
//       <div className="grid grid-cols-1 gap-6">
//         {services.map((service) => (
//           <div key={service.id} className="p-6 bg-white rounded-lg grid grid-cols-6 shadow-md">
//           <div className="col-span-3">
//           <img src={service.image} alt={service.title} className="w-full h-[400px] object-cover rounded-md" />
//           </div>
//           <div className="col-span-2">
//           <div>
//            <h2 className="text-xl font-semibold mt-4">{service.title}</h2>
//             <p className="text-gray-700 mt-2">
//               {service.description.length > 100
//                 ? `${service.description.substring(0, 100)}...`
//                 : service.description}
//             </p>
//            </div>
//             <div className="flex items-center mt-4">
//               <img src={service.buyer.photo} alt={service.buyer.name} className="w-10 h-10 object-cover rounded-full" />
//               <div className="ml-3">
//                 <p className="text-gray-700 font-medium">{service.buyer.name}</p>
//               </div>
//             </div>
//         <div>
//               <p className="text-gray-700 mt-2">Area: {service.area}</p>
//             <p className="text-gray-700 mt-2">Price: ${service.service_price.toFixed(2)}</p>
//         </div>
//          <div>
//          <Link to={`/service-details/${service._id}`}>
           
//            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
//               View Detail
//             </button>
//            </Link>
//          </div>
//           </div>


//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllServices;
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchAllServices();
  }, []);

  const fetchAllServices = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/services`);
      setServices(data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  return (
    <div className="container mx-auto my-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">All Services ({services.length})</h1>
      <div className="flex flex-col gap-8">
        {services.map((service) => (
          <div key={service.id} className="p-6 bg-white rounded-lg shadow-lg flex flex-col md:flex-row gap-6 transform transition duration-300 hover:scale-105">
            <div className="w-full md:w-1/3">
              <img src={service.image} alt={service.title} className="w-full h-64 object-cover rounded-lg" />
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-between">
              <div className="flex-grow flex flex-col justify-center">
                <h2 className="text-2xl font-semibold mt-4 md:mt-0 text-gray-900">{service.title}</h2>
                <p className="text-gray-700 mt-2">
                  {service.description.length > 100
                    ? `${service.description.substring(0, 100)}...`
                    : service.description}
                </p>
              </div>
              <div className="flex items-center mt-4">
                <img src={service.buyer.photo} alt={service.buyer.name} className="w-12 h-12 object-cover rounded-full" />
                <div className="ml-3">
                  <p className="text-gray-900 font-medium">{service.buyer.name}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-700">Area: {service.area}</p>
                <p className="text-gray-700">Price: ${service.service_price.toFixed(2)}</p>
              </div>
              <Link to={`/service-details/${service._id}`}>
                <p className="mt-4 p-2 bg-blue-500  text-white rounded-md hover:bg-blue-600  text-center">
                  View Detail
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
