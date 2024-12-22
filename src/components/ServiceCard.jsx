

const ServiceCard = ({ service }) => {
    const { image, title, buyer, service_price, description } = service || {};
  
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <img className="w-full h-48 object-cover" src={image} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
            {description.length > 100 ? description.slice(0, 100) + "..." : description}
          </p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Detail
          </button>
        </div>
        <div className="px-6 py-4 flex items-center">
          <img className="w-10 h-10 rounded-full mr-4" src={buyer?.photo} alt={buyer?.name} />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{buyer?.name}</p>
          </div>
          <div className="ml-auto">
            <span className="text-gray-900 font-bold">${service_price.toFixed(2)}</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default ServiceCard;
  