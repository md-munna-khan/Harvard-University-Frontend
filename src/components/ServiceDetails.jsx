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
    const { image, title, buyer,  area, service_price, description, serviceId} = services || {};
    return (
      <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md overflow-hidden lg:flex">
      <img className="w-full lg:w-1/2 object-cover" src={image} alt={title} />
      <div className="lg:ml-4 lg:flex lg:flex-col lg:justify-between">
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2">{title}</div>
          <p className="text-gray-700 text-base mb-4">{description}</p>
          <Link to={`/book-now/${id}`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Book Now
            </button>
          </Link>
          <div className="ml-auto text-right">
            <span className="text-gray-900 font-bold">price:${service_price}</span>
          </div>
        </div>
        <div className="px-6 py-4 flex items-center border-t mt-4">
          <img className="w-10 h-10 rounded-full mr-4" src={buyer?.photo} alt={buyer?.name} />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">Name: {buyer?.name}</p>
            <p className="text-gray-600">Area: {area}</p>
          </div>
        
        </div>
      </div>
    </div>
    );
};

export default ServiceDetails;


