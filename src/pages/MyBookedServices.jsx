

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";

import Loading from "../components/Loading";
import BookTableRow from "../components/BookTableRow";

const MyBookedServices = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            fetchBookedServices();
        }
    }, [user]);

    const fetchBookedServices = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/bookings/${user?.email}`);
           setBookings(data);
        } catch (error) {
            console.error("Error fetching booked services:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div><Loading></Loading></div>;
    }

    return (
        <section className="container px-4 mx-auto pt-12">
            <div className="flex items-center gap-x-3">
                <h2 className="text-lg font-medium text-gray-800">My Booked Services</h2>
                <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">
                    {bookings.length} service{bookings.length !== 1 && 's'}
                </span>
            </div>

            {bookings.length === 0 ? (
                <div className="mt-6 text-center text-gray-500">
                    You have no booked bookings.
                </div>
            ) : (
                <div className="flex flex-col mt-6">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500">Image</th>
                                            <th className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500">Date</th>
                                            <th className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500">Service Name</th>
                                            <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">Price</th>
                                            <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">Service Area</th>
                                            <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">Description</th>
                                            <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                      {
                                        bookings.map(book=> <BookTableRow key={book._id}book={book}></BookTableRow>)
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

