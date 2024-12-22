import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";


const ServiceDetails = () => {
    const [services, setServices] = useState([]);
const {id} = useParams()
    useEffect(() => {
      fetchAllServices();
    }, [id]);
  
    const fetchAllServices = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/service/${id}`);
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    if (!services) {
      return <Loading></Loading> ;
  }
    const { image, title, buyer, service_price, description, _id} = services || {};
    return (
      <div className=" mx-auto rounded  m-4 overflow-hidden shadow-lg">
      <img className="w-[800px]  object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
        {description?.substring(0,100)}...
        </p>
       <Link to={`/service-details/${_id}`}>
       <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View Detail
        </button>
       </Link>
      </div>
      <div className="px-6 py-4 flex items-center">
        <img className="w-10 h-10 rounded-full mr-4" src={buyer?.photo} alt={buyer?.name} />
        <div className="text-sm">
          <p className="text-gray-900 leading-none">{buyer?.name}</p>
        </div>
        <div className="ml-auto">
          {/* <span className="text-gray-900 font-bold">${service_price.toFixed(2)}</span> */}
        </div>
      </div>
    </div>
    );
};

export default ServiceDetails;


