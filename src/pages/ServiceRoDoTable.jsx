
const ServiceRoDoTable= ({ book, handleStatusChange }) => {
    const {serviceImage,  serviceName,  area, serviceTakingDate,   price,  description, status, _id } = book || {};

    return (
        <tr>
            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                <img src={serviceImage} alt={ serviceName} className="w-10 h-10 object-cover" />
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
            {serviceTakingDate}
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                { serviceName}
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                ${  price}
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                {area}
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                {  description}
            </td>
            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div
                    className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${
                        status === 'pending' && ' bg-yellow-100/60 text-yellow-500'
                    } ${status === 'In Progress' && ' bg-blue-100/60 text-blue-500'} ${
                        status === 'completed' && ' bg-green-100/60 text-green-500'
                    } ${status === 'Rejected' && ' bg-red-100/60 text-red-500'}`}
                >
                    <span
                        className={`h-1.5 w-1.5 rounded-full ${
                            status === 'pending' && 'bg-yellow-500'
                        } ${status === 'In Progress' && 'bg-blue-500'} ${
                            status === 'completed' && 'bg-green-500'
                        } ${status === 'Rejected' && 'bg-red-500'} `}
                    ></span>
                    <h2 className="text-sm font-normal ">{status}</h2>
                </div>
            </td>
        </tr>
    );
};



export default ServiceRoDoTable;