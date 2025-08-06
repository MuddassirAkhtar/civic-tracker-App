import {useContext} from "react"
import { nanoid } from 'nanoid';
import { useForm } from "react-hook-form";
import {dashbordcontext} from "../Wrapper"
import { toast } from 'react-toastify';




const Report = () => {
  const [dashbord,setdashbord] = useContext(dashbordcontext);
    const {register,handleSubmit,formState:{errors},reset} =useForm();

    const submitHandler = (data)=>{
      
        console.log(data);
     const newdashbord ={
      id:nanoid(),
      title:data.complaintType,
      location:data.Address,
      date:data.date,
     }
     setdashbord([...dashbord,newdashbord])
     reset()
     
    }


  return (
    <>
    <div className='flex items-center justify-center h-full w-full'>
  <div className='h-[100%] w-[70%] bg-blue-100 rounded-3xl shadow-xl'>
    <h1 className='text-2xl font-bold text-center mt-5'>Complain? Let Us Know</h1>

    <form onSubmit={handleSubmit(submitHandler)} className='flex w-full p-10 items-start flex-wrap'>

      {/* Left Side */}
      <div className='flex flex-col w-[50%] h-full'>
        {/* Full Name */}
        <input
          {...register("FullName", { required: "Full name is required" })}
          className='w-[80%] mt-5 shadow-md focus:outline-none p-3'
          type="text"
          placeholder='Full Name'
        />
        {errors.FullName && <p className="text-red-500 ml-5">{errors.FullName.message}</p>}

        {/* Email */}
        <input
          {...register("Email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format"
            }
          })}
          className='w-[80%] mt-5 shadow-md focus:outline-none p-3'
          type="text"
          placeholder='Email'
        />
        {errors.Email && <p className="text-red-500 ml-5">{errors.Email.message}</p>}

        {/* Contact Info */}
        <input
          {...register("contactInfo", {
            required: "Contact info is required",
            minLength: { value: 10, message: "Minimum 10 digits required" }
          })}
          className='w-[80%] mt-5 shadow-md focus:outline-none p-3'
          type="text"
          placeholder='Contact Info'
        />
        {errors.contactInfo && <p className="text-red-500 ml-5">{errors.contactInfo.message}</p>}

        {/* Address */}
        <input
          {...register("Address", { required: "Address is required" })}
          className='w-[80%] mt-5 shadow-md focus:outline-none p-3'
          type="text"
          placeholder='Address'
        />
        {errors.Address && <p className="text-red-500 ml-5">{errors.Address.message}</p>}

        {/* Complaint Type */}
        <select
          {...register("complaintType", { required: "Select a complaint type" })}
          className="w-[80%] mt-5 shadow-md focus:outline-none p-3"
        >
          <option value="">Select Type of Complaint</option>
          <option value="road">Road Damage</option>
          <option value="water">Water Leakage</option>
          <option value="electricity">Electricity Issue</option>
          <option value="garbage">Garbage Collection</option>
          <option value="sewage">Sewage Blockage</option>
          <option value="other">Other</option>
        </select>
        {errors.complaintType && <p className="text-red-500 ml-5">{errors.complaintType.message}</p>}
      </div>

      {/* Right Side */}
      <div className='flex flex-col w-[50%] h-full'>

        {/* Description (optional) */}
        <textarea
          {...register("description")}
          className="w-[80%] shadow-md focus:outline-none p-3 h-60 resize-none"
          placeholder="Enter a detailed description of the complaint"
        ></textarea>

        {/* Image (optional) */}
        <input
          className="w-[80%] shadow-md focus:outline-none p-3 h-auto resize-none mt-5"
          type="file"
          accept="image/*"
        />

        {/* Date */}
        <input
          {...register("date", { required: "Date is required" })}
          className="w-[80%] shadow-md focus:outline-none p-3 h-auto resize-none mt-5"
          type="date"
        />
        {errors.date && <p className="text-red-500 ml-5">{errors.date.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-[40%] shadow-md focus:outline-none p-3 mt-10 ml-70 bg-[#201E71] text-white"
      >
        Submit Complain
      </button>
    </form>
  </div>
</div>

    </>
  )
}

export default Report