import { useForm } from "react-hook-form";
import { useState } from "react";

const Register = () => {
  const  [islogin,setislogin] = useState(true);
  const toggleForm = () =>{
    setislogin(!islogin)
    console.log("toggled")
  }
  const {register,handleSubmit,formState:{errors},reset} =useForm();
  const submitHandler=(data) =>{ console.log(data)
    reset();
  }
  return (
    <>
    <div className='text-white h-[90%] w-[96.5%] flex items-center justify-center gap-2 '>
      <div className="container h-[95%] w-[63%] bg-white mt-10 flex items-center justify-center shadow-xl">
        <div className="cnt1 h-[100%] w-[50%] text-black flex flex-col items-center justify-center text-gray-600">
          <h1 className='text-center  text-4xl font-bold text-black'>Welcome Back</h1>
                      <div className='text-center mt-5 shadow-md w-[70%] h-10 flex items-center justify-bwtween gap-15 p-2'><span><img className='h-6 w-6 object-contain' src="./src/images/google.webp" /></span> <small>Log in with google</small></div>
            <hr className='w-[80%] mt-5 border-gray-300' />

          <form  onSubmit={handleSubmit(submitHandler)} className='flex flex-col justify-center items-center'>
            {!islogin && (
                          <input {...register("fullname")}   className=' mt-5 shadow-md w-80 h-10 p-2 focus:outline-none'  placeholder='FullName'    type="fullname"/>
                          

            ) }
            {!islogin && (
              <div>
<input
  {...register("dob")}
  type="text"
  onFocus={(e) => (e.target.type = "date")}
  onBlur={(e) => (e.target.type = "text")}
  placeholder="Date of Birth"
  className="mt-5 shadow-md w-40 h-10 p-2 focus:outline-none"
/>                <select
  {...register("state")}
  className="mt-5 shadow-md w-40 h-10 p-2 focus:outline-none"
>
  <option value="">Select your state</option>
  <option value="Andhra Pradesh">Andhra Pradesh</option>
  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
  <option value="Assam">Assam</option>
  <option value="Bihar">Bihar</option>
  <option value="Chhattisgarh">Chhattisgarh</option>
  <option value="Goa">Goa</option>
  <option value="Gujarat">Gujarat</option>
  <option value="Haryana">Haryana</option>
  <option value="Himachal Pradesh">Himachal Pradesh</option>
  <option value="Jharkhand">Jharkhand</option>
  <option value="Karnataka">Karnataka</option>
  <option value="Kerala">Kerala</option>
  <option value="Madhya Pradesh">Madhya Pradesh</option>
  <option value="Maharashtra">Maharashtra</option>
  <option value="Manipur">Manipur</option>
  <option value="Meghalaya">Meghalaya</option>
  <option value="Mizoram">Mizoram</option>
  <option value="Nagaland">Nagaland</option>
  <option value="Odisha">Odisha</option>
  <option value="Punjab">Punjab</option>
  <option value="Rajasthan">Rajasthan</option>
  <option value="Sikkim">Sikkim</option>
  <option value="Tamil Nadu">Tamil Nadu</option>
  <option value="Telangana">Telangana</option>
  <option value="Tripura">Tripura</option>
  <option value="Uttar Pradesh">Uttar Pradesh</option>
  <option value="Uttarakhand">Uttarakhand</option>
  <option value="West Bengal">West Bengal</option>
  <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
  <option value="Chandigarh">Chandigarh</option>
  <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
  <option value="Delhi">Delhi</option>
  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
  <option value="Ladakh">Ladakh</option>
  <option value="Lakshadweep">Lakshadweep</option>
  <option value="Puducherry">Puducherry</option>
</select>


                
              </div>
            )}
            <input {...register("email")}   className=' mt-5 shadow-md w-80 h-10 p-2 focus:outline-none'  placeholder='Your email '    type="email"/>
            <input {...register("Password")} className=' mt-5 shadow-md w-80 h-10 p-2 focus:outline-none'   placeholder={islogin? "Your Password" : "Set Password"} type="password" />
            <button className=' mt-5 shadow-md w-80 h-10 p-2 bg-[#201E71] text-white' >{islogin? "login" : "SingUp"} </button>
                       <hr className='w-95 mt-5 border-gray-300' />
<div className='mt-5'>            <small>{islogin? "Don't have an Account Yet?" :"Already have an Account!"} <a onClick={toggleForm} href="#">{islogin? "SignUp" : "Login"}</a></small>
</div>
          </form>
        </div>
        <div className="cnt2 h-[100%] w-[50%] flex justify-center"> 
          <img className='object-contain' src="./src/images/login.jpg"  />
        </div>
      </div>
    </div>
    </>
  )
}

export default Register