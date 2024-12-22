
import { Link } from 'react-router-dom';

const AdmissionForm = () => {
    return (
        <div>
             <section className="extra-section-2 bg-green-500  grid  lg:grid-cols-12 p-10 gap-4 my-10 rounded-lg">
       <div className="col-span-6 flex h-full  flex-col items-center justify-center text-white space-y-3 ">
        <h1 className=" lg:text-5xl text-center text-2xl ">Contact Us For Your Booking</h1>
        <p className="lg:text-3xl text-md">I hope Your Journey <br /> Mind  Blowing For Us</p>
       </div>
       <div className="col-span-6 justify-center items-center ">
        
       <form className="space-y-4 ">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-white">First Name</label>
              <input type="text" id="firstName" placeholder="First Name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"/>
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-white">Last Name</label>
              <input type="text" id="lastName" placeholder="Last Name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"/>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
              <input type="email" id="email" placeholder="Email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"/>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white">Phone Number</label>
              <input type="tel" id="phone" placeholder="Phone Number" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"/>
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-white">Description</label>
              <textarea id="description" rows="4" placeholder="Description" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"></textarea>
            </div>
            <Link to='/register' type="register" className="w-full py-2 px-4 btn bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
             Register
            </Link>
          </form>
       </div>
      
      </section>
        </div>
    );
};

export default AdmissionForm;