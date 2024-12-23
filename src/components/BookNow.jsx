import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";

const ServiceDetails = () => {
  const [service, setService] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchService();
  }, [id]);

  const fetchService = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/service/${id}`);
      setService(data);
    } catch (error) {
      console.error("Error fetching service:", error);
    }
  };

  if (!service) {
    return <Loading />;
  }

  const { image, title, buyer, area, service_price, description } = service;

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md overflow-hidden lg:flex">
      <img className="w-full lg:w-1/2 object-cover" src={image} alt={title} />
      <div className="lg:ml-4 lg:flex lg:flex-col lg:justify-between">
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2">{title}</div>
          <p className="text-gray-700 text-base mb-4">{description}</p>
          <Link to={`/service-details/${id}`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Detail
            </button>
          </Link>
        </div>
        <div className="px-6 py-4 flex items-center border-t mt-4">
          <img className="w-10 h-10 rounded-full mr-4" src={buyer?.photo} alt={buyer?.name} />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{buyer?.name}</p>
            <p className="text-gray-600">{area}</p>
          </div>
          <div className="ml-auto text-right">
            <span className="text-gray-900 font-bold">${service_price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
