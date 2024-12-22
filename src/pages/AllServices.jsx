import axios from "axios";
import { useEffect, useState } from "react";

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
    <div className="container mx-auto my-12">
      <h1 className="text-2xl font-bold mb-8">All Services ({services.length})</h1>
      <div className="grid grid-cols-1 gap-6">
        {services.map((service) => (
          <div key={service.id} className="p-6 bg-white rounded-lg shadow-md">
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-md" />
            <h2 className="text-xl font-semibold mt-4">{service.title}</h2>
            <p className="text-gray-700 mt-2">
              {service.description.length > 100
                ? `${service.description.substring(0, 100)}...`
                : service.description}
            </p>
            <div className="flex items-center mt-4">
              <img src={service.buyer.photo} alt={service.buyer.name} className="w-10 h-10 object-cover rounded-full" />
              <div className="ml-3">
                <p className="text-gray-700 font-medium">{service.buyer.name}</p>
              </div>
            </div>
            <p className="text-gray-700 mt-2">Area: {service.area}</p>
            <p className="text-gray-700 mt-2">Price: ${service.service_price.toFixed(2)}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              View Detail
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
