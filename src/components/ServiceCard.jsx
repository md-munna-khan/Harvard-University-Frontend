

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const ServiceCard = ({ service }) => {
  const { image, title, buyer, service_price, description, _id } = service || {};
  const { isDark } = useContext(AuthContext);

  return (
    <div
      className={`mx-auto rounded-lg border overflow-hidden shadow-lg transition-all transform hover:scale-105 duration-300 ease-in-out ${isDark ? 'dark:bg-gray-800 dark:border-gray-600' : 'bg-white'}`}
    >
      <div className="relative">
        {/* Service Image */}
        <img
          className="w-full h-64 lg:h-[400px] rounded-t-lg object-cover"
          src={image}
          alt={title}
        />
        <div className="absolute top-4 left-4 p-2 specialGradient text-white rounded-lg text-sm">
          ${service_price.toFixed(2)}
        </div>
      </div>

      <div className="p-6 space-y-4">
        {/* Title */}
        <div className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </div>

        {/* Description */}
        <div className={`text-base text-gray-600 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          <span className="font-bold">Description:</span> {description?.substring(0, 100)}...
        </div>

        {/* Buyer Info */}
        <div className="flex items-center space-x-4">
          <img
            className="w-12 h-12 rounded-full border-2 border-blue-500"
            src={buyer?.photo}
            alt={buyer?.name}
          />
          <div>
            <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>By {buyer?.name}</p>
          </div>
        </div>

        {/* View Detail Button */}
        <div className="mt-4">
          <Link to={`/service-details/${_id}`}>
            <button className="w-full py-3 px-4 specialGradient text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out">
              View Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
