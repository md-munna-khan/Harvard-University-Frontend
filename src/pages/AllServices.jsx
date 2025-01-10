

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import DynamicTitle from "../components/DynamicTitle";
import Loading from "../components/Loading";

const AllServices = () => {
  const { isDark } = useContext(AuthContext);
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllServices();
  }, [search]);

  const fetchAllServices = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/services?search=${search}`);
      setServices(data);
      setLoading(false)
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className={`container mx-auto mt-20 mb-12 px-4 ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      {/* Search Bar */}
      <DynamicTitle></DynamicTitle>
      <div className="w-full my-4 py-2 sm:w-[400px] mx-auto mb-6">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="search"
          placeholder="Search for services..."
          className={`input input-bordered w-full p-4 rounded-xl shadow-md transition-all hover:shadow-xl focus:outline-none ${isDark ? 'bg-gray-800 text-white border-white py-2' : 'bg-white text-black'}`}
          required
        />
      </div>

      <h1 className={`text-4xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-black'}`}>All Services ({services.length})</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div key={service._id} className={`card bg-base-100 shadow-xl ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
            {/* Service Image */}
            <figure>
              <img
                src={service.image}
                alt={service.title}
                className="object-cover w-full h-48 rounded-t-lg"
              />
            </figure>

            {/* Card Body */}
            <div className="card-body">
              <h2 className="card-title">
                {service.title}
                <div className="badge badge-secondary">${service.service_price.toFixed(2)}</div>
              </h2>
              <p>
                {service.description.length > 100
                  ? `${service.description.substring(0, 100)}...`
                  : service.description}
              </p>

              {/* Buyer Information */}
              <div className="flex items-center mt-2">
                <img
                  src={service.buyer.photo}
                  alt={service.buyer.name}
                  className="w-12 h-12 object-cover rounded-full border-2 border-gray-300"
                />
                <div className="ml-3">
                  <p className="font-medium">{service.buyer.name}</p>
                  <p className="text-sm text-gray-500">{service.area}</p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="card-actions justify-start mt-4">
                <Link to={`/service-details/${service._id}`}>
                  <button className="btn text-white p-4 specialGradient">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
