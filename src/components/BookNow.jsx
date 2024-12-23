

import DatePicker from "react-datepicker";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

const BookNow = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [service, setService] = useState({});
    const [startDate, setStartDate] = useState(new Date());
    const { id } = useParams();

    useEffect(() => {
        fetchJobData();
    }, [id]);

    const fetchJobData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/service/${id}`);
        setService(data);
    };

    const {
        image,
        title,
        _id,
        buyer: { email: buyerEmail, name: buyerName, photo: buyerPhoto } = {},
        area,
        service_price,
        description,
    } = service|| {};

    const handleBidSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const comment = form.comment.value;
        const bookData = {
            price: service_price,
            comment,
            serviceId: id,
            serviceName: title,
            serviceImage: image,
            providerEmail: buyerEmail,
            providerName: buyerName,
            currentUserEmail: user?.email,
            currentUserName: user?.displayName,
            serviceTakingDate: startDate,
            description:description,
            area:area,
            status: "pending",
        };

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/add-book`, bookData);
            form.reset();
            toast.success("Booking placed successfully");
            navigate('/booked-services');
        } catch (err) {
            console.log(err);
            toast.error(err.response.data);
        }
    };

    return (
        <div>
            <section className='p-6 w-full bg-white rounded-md shadow-md flex-1 md:min-h-[350px]'>
                <h2 className='text-lg font-semibold text-gray-700 capitalize'>Place A Booking</h2>

                <form onSubmit={handleBidSubmit}>
                    <div>
                        <label className='text-gray-700' htmlFor='serviceImage'>Service Image</label>
                        <img src={image} alt={title} className='block w-full h-auto mt-2 rounded-md' />
                    </div>
                    <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                        <div>
                            <label className='text-gray-700' htmlFor='serviceId'>Service ID</label>
                            <input
                                id='serviceId'
                                type='text'
                                name='serviceId'
                                value={id}
                                readOnly
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700' htmlFor='serviceName'>Service Name</label>
                            <input
                                id='serviceName'
                                type='text'
                                name='serviceName'
                                value={title}
                                readOnly
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700' htmlFor='providerEmail'>Provider Email</label>
                            <input
                                id='providerEmail'
                                type='text'
                                name='providerEmail'
                                value={buyerEmail}
                                readOnly
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700' htmlFor='providerName'>Provider Name</label>
                            <input
                                id='providerName'
                                type='text'
                                name='providerName'
                                value={buyerName}
                                readOnly
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700' htmlFor='currentUserEmail'>Current User Email</label>
                            <input
                                id='currentUserEmail'
                                type='text'
                                name='currentUserEmail'
                                value={user?.email}
                                readOnly
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700' htmlFor='currentUserName'>Current User Name</label>
                            <input
                                id='currentUserName'
                                type='text'
                                name='currentUserName'
                                value={user?.displayName}
                                readOnly
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700' htmlFor='servicePrice'>Service Price</label>
                            <input
                                id='servicePrice'
                                type='text'
                                name='servicePrice'
                                value={service_price}
                                readOnly
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700' htmlFor='serviceTakingDate'>Service Taking Date</label>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
                                dateFormat='MMMM d, yyyy'
                                minDate={new Date()}
                            />
                        </div>

                        <div className='col-span-2'>
                            <label className='text-gray-700' htmlFor='comment'>Special Instruction</label>
                            <textarea
                                id='comment'
                                name='comment'
                                rows='4'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
                            ></textarea>
                        </div>
                    </div>

                    <div className='flex justify-end mt-6'>
                        <button
                            type='submit'
                            className='px-6 py-2 leading-5 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700'
                        >
                            Purchase
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default BookNow;
