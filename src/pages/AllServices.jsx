
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    fetchAllServices();
  }, [search]);

  const fetchAllServices = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/services?search=${search}`);
      setServices(data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  return (
    <div className="container mx-auto my-12 px-4">
    {/* Search Bar */}
    <div className="w-[400px] mx-auto mb-6">
               
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    name="search"
                    placeholder="Search for movies..."
                    className="input input-bordered w-full p-4 rounded-xl shadow-md transition-all hover:shadow-xl focus:outline-none"
                    required
                />
            </div>

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
