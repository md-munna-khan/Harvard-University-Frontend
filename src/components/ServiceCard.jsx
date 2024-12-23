

import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { image, title, buyer, service_price, description, _id } = service || {};

  return (
    <div className="mx-auto rounded-lg border space-y-2 p-2 shadow-lg overflow-hidden grid gap-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
      <div className="lg:col-span-2 md:col-span-1 col-span-1">
        <img className="w-full h-64 lg:h-full rounded-lg object-cover" src={image} alt={title} />
      </div>
      <div className="lg:col-span-2 md:col-span-1 col-span-1 flex flex-col justify-between">
        <div>
          <div className="font-bold text-xl mb-2"> Title:{title}</div>
          <p className="text-gray-700 text-base">
           Description :{description?.substring(0, 100)}...
          </p>
        </div>
        <div className="flex items-center ">
        <img className="w-10 h-10 rounded-full mr-4" src={buyer?.photo} alt={buyer?.name} />
          <div className="text-sm">
         
            <p className="text-gray-900 leading-none">Name: {buyer?.name}</p>
          </div>
          <div className="ml-auto">
            <span className="text-gray-900 font-bold">Price:${service_price.toFixed(2)}</span>
          </div>
        </div>
        <div className="text-center mb-4">
          <Link to={`/service-details/${_id}`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded">
              View Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

  