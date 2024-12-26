




// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../providers/AuthProvider";


// import Loading from "../components/Loading";
// import BookTableRow from "../components/BookTableRow";

// import DynamicTitle from "../components/DynamicTitle";
// import useAxiosSecure from "../hooks/useAxiosSecure";
// import { toast } from "react-toastify";


// const MyBookedServices = () => {
//     const axiosSecure =useAxiosSecure()
//     const { user,isDark } = useContext(AuthContext);
//     const [bookings, setBookings] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         if (user?.email) {
//             fetchBookedServices();
//         }
//     }, [user]);

//     const fetchBookedServices = async () => {
//         try {
//             const { data } = await axiosSecure.get(`/bookings/${user?.email}`);
//            setBookings(data);
//         } catch (error) {
//             toast.error("Error fetching booked services:", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     if (loading) {
//         return <div><Loading></Loading></div>;
//     }

//     return (
//         <section className="container px-4 mx-auto pt-12">
//             <DynamicTitle></DynamicTitle>
//             <div className="flex items-center gap-x-3">
//                 <h2 className="text-lg font-medium text-gray-800">My Booked Services</h2>
//                 <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">
//                     {bookings.length} service{bookings.length !== 1 && 's'}
//                 </span>
//             </div>

//             {bookings.length === 0 ? (
//                 <div className="mt-6 text-center text-gray-500">
//                     You have no booked bookings.
//                 </div>
//             ) : (
//                 <div className="flex flex-col mt-6">
//                     <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//                         <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
//                             <div className="overflow-hidden border border-gray-200 md:rounded-lg">
//                                 <table className="min-w-full divide-y divide-gray-200">
//                                     <thead className="bg-gray-50">
//                                         <tr>
//                                             <th className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500">Image</th>
//                                             <th className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500">Email</th>
//                                             <th className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500">Date</th>
//                                             <th className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500">Service Name</th>
//                                             <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">Price</th>
//                                             <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">Service Area</th>
//                                             <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">Description</th>
//                                             <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">Actions</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody className="bg-white divide-y divide-gray-200">
//                                       {
//                                         bookings.map(book=> <BookTableRow key={book._id}book={book}></BookTableRow>)
//                                       }
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </section>
//     );
// };

// export default MyBookedServices;


import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Loading from "../components/Loading";
import BookTableRow from "../components/BookTableRow";
import DynamicTitle from "../components/DynamicTitle";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const MyBookedServices = () => {
    const axiosSecure = useAxiosSecure();
    const { user, isDark } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            fetchBookedServices();
        }
    }, [user]);

    const fetchBookedServices = async () => {
        try {
            const { data } = await axiosSecure.get(`/bookings/${user?.email}`);
            setBookings(data);
        } catch (error) {
            toast.error("Error fetching booked services:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div><Loading /></div>;
    }

    return (
        <section className={`container px-4 rounded-lg mx-auto my-10 pt-12 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <DynamicTitle />
            <div className="flex items-center gap-x-3">
                <h2 className={`text-lg font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>My Booked Services</h2>
                <span className={`px-3 py-1 text-xs ${isDark ? 'text-blue-600 bg-blue-100' : 'text-blue-800 bg-blue-200'} rounded-full`}>
                    {bookings.length} service{bookings.length !== 1 && 's'}
                </span>
            </div>

            {bookings.length === 0 ? (
                <div className={`mt-6 text-center ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    You have no booked services.
                </div>
            ) : (
                <div className="flex flex-col mt-6">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className={`overflow-hidden border ${isDark ? 'border-gray-700' : 'border-gray-200'} md:rounded-lg`}>
                                <table className={`min-w-full divide-y ${isDark ? 'divide-gray-700' : 'divide-gray-200'}`}>
                                    <thead className={isDark ? 'bg-gray-800' : 'bg-gray-50'}>
                                        <tr>
                                            <th className="py-3.5 px-4 text-md font-normal text-left rtl:text-right">Image</th>
                                            <th className="py-3.5 px-4 text-md font-normal text-left rtl:text-right">Email</th>
                                            <th className="py-3.5 px-4 text-md font-normal text-left rtl:text-right">Date</th>
                                            <th className="py-3.5 px-4 text-md font-normal text-left rtl:text-right">Service Name</th>
                                            <th className="px-4 py-3.5 text-md font-normal text-left rtl:text-right">Price</th>
                                            <th className="px-4 py-3.5 text-md font-normal text-left rtl:text-right">Service Area</th>
                                            <th className="px-4 py-3.5 text-md font-normal text-left rtl:text-right">Description</th>
                                            <th className="px-4 py-3.5 text-md font-normal text-left rtl:text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className={isDark ? 'bg-gray-900' : 'bg-white'}>
                                        {
                                            bookings.map(book => <BookTableRow key={book._id} book={book} isDark={isDark} />)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default MyBookedServices;
