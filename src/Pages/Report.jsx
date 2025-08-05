import React from 'react'

const Report = () => {
  return (
    <>
    <div className='flex items-center justify-center h-full w-full'>
      <div className='h-[90%] w-[70%] bg-blue-100 rounded-3xl shadow-xl '>
                  <h1 className='text-2xl font-bold text-center mt-5' >Complain? Let Us Know</h1>

         <form  className='flex  w-full p-10 items-start flex-wrap'>
          <div className='flex flex-col w-[50%] h-full'>
            <input className='w-[80%] mt-5 shadow-md focus:outline-none p-3' type="text" placeholder='FullName            ' />
          <input className='  w-[80%] mt-5 shadow-md focus:outline-none p-3' type="text" placeholder='Email    ' />
          <input className='  w-[80%] mt-5 shadow-md focus:outline-none p-3' type="text" placeholder='contactInfo       ' />
          <input className='  w-[80%] mt-5 shadow-md focus:outline-none p-3' type="text" placeholder='Address         ' />
<select
  className="w-[80%] mt-5 shadow-md focus:outline-none p-3 "
>
  <option value="">Select Type of Complaint</option>
  <option value="road">Road Damage</option>
  <option value="water">Water Leakage</option>
  <option value="electricity">Electricity Issue</option>
  <option value="garbage">Garbage Collection</option>
  <option value="sewage">Sewage Blockage</option>
  <option value="other">Other</option>
</select>
          </div>
          <div className='flex flex-col w-[50%] h-full'>
            <textarea
  className="w-[80%]  shadow-md focus:outline-none p-3 h-60 resize-none"
  placeholder="Enter a detailed description of the complaint"
></textarea>
<input  className="w-[80%]  shadow-md focus:outline-none p-3 h-auto resize-none mt-5" type="file"   accept="image/*" 
 />
            
</div>
 <button className="w-[40%]  shadow-md focus:outline-none p-3 mt-10 ml-70 bg-[#201E71] text-white " > Submit Complain</button>

         </form>
    </div>
    </div>
    </>
  )
}

export default Report