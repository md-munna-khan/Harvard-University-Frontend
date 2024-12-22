import axios from "axios"
import toast from "react-hot-toast"
// import useAuth from "../hooks/useAuth"
import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
// import { useNavigate } from "react-router-dom"


const AddService = () => {
    // const navigate = useNavigate()
    const { user } = useContext(AuthContext)
   
    const handleSubmit = async e => {
      e.preventDefault()
      const form = e.target
      const title = form.service_title.value
      const image = form.service_image.value
      const area = form.service_area.value
      const email = form.email.value
      
   
   
      const service_price= parseFloat(form.service_price.value)
  
      const description = form.description.value
  
      const formData = {
        image,
        title,
        buyer: {
            email,
          name: user?.displayName,
          photo: user?.photoURL,
        },
       area,
       service_price,
        description,
        // bid_count: 0,
      }
      console.log(formData)
      try {
        // 1. make a post request
        await axios.post(`${import.meta.env.VITE_API_URL}/add-services`, formData)
        // 2. Reset form
        form.reset()
        // 3. Show toast and navigate
        toast.success('Data Added Successfully!!!')
        // navigate('/my-posted-jobs')
      } catch (err) {
        console.log(err)
        toast.error(err.message)
      }
    }
  
    return (
      <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
        <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
          <h2 className='text-lg font-semibold text-gray-700 capitalize '>
            Post a Service
          </h2>
  
          <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
              <div>
                <label className='text-gray-700 ' htmlFor='job_title'>
                Image URL of the Service
                </label>
                <input
                  id='service_image'
                  name='service_image'
                  type='text'
                  placeholder="  Image URL of the Service"
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
              <div>
                <label className='text-gray-700 ' htmlFor='job_title'>
                  Job Title
                </label>
                <input
                  id='service_title'
                  name='service_title'
                  type='text'
                  placeholder=" Job Title"
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
  
              <div>
              <label className='text-gray-700 ' htmlFor='emailAddress'>
                Email Address
              </label>
              <input
                id='emailAddress'
                type='email'
                name='email'
                defaultValue={user?.email}
                // disabled={true}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

  
              <div>
                <label className='text-gray-700 ' htmlFor='min_price'>
                  Price
                </label>
                <input
                  id='service_price'
                  name='service_price'
                  type='number'
                  placeholder="  Price"
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
              <div>
                <label className='text-gray-700 ' htmlFor='min_price'>
                Service Area, 
                </label>
                <input
                  id='service_area'
                  name='service_area'
                  type='text'
                  placeholder="service_area"
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
  
            </div>
            <div className='flex flex-col gap-2 mt-4'>
              <label className='text-gray-700 ' htmlFor='description'>
                Description
              </label>
              <textarea
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                name='description'
                id='description'
              ></textarea>
            </div>
            <div className='flex justify-end mt-6'>
              <button className='disabled:cursor-not-allowed w-full px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                Save
              </button>
            </div>
          </form>
        </section>
      </div>
    )
  }





    

export default AddService;