

import React, { useState } from 'react';


function AccountPages() {
  const [selectedAccount, setSelectedAccount] = useState('');
  

  const handleAccountChange = (event) => {
    setSelectedAccount(event.target.value);
  };

  return (
  //  <div className="w-full h-screen bg-[#4E657A] "></div>
  <>
   <div className='bg-[#4E657A] flex justify-center gap-10'>
      <div className='bg-[#435C70] mb-1 m-10 ml-20 mr-20 w-full h-[18rem]'>
        <h1 className='text-white font-bold p-10 text-[18px]'>List of Accounts</h1>
        <label htmlFor='account' className='text-white font-bold p-10'>
          Accounts
        </label>
        <select
          id='account'
          className='bg-[#50657B] m-4 ml-10 w-[92%] p-4 text-[#acc6de;] grid'
          value={selectedAccount}
          onChange={handleAccountChange}>
            
          <option value=''>Select account</option>
          <option value='admin'>Admin</option>
          <option value='editor'>Editor</option>
          <option value='merchant'>Merchant</option>
          <option value='customer'>Customer</option>
        </select>
      </div>
    </div>
    
    <div className='bg-[#4E657A] flex'>
    <div className='bg-[#435C70] m-10 ml-20 w-100 h-[30rem]'>
      <h1 className='font-bold text-white p-5'>Change Avatar</h1>
      <img className='p-5 ' src="	https://templatemo.com/templates/templatemo_524_product_admin/img/avatar.png" alt="profile" />

      <button className='bg-yellow-500 ml-10 w-[80%] p-4 flex justify-center items-center text-white hover:bg-[#4E657A] border hover:text-yellow-500' >
        <a href="/account">UPLOAD NEW IMAGE</a></button>
    </div>
    <div className='bg-[#435C70] m-10  w-[65%] mr-20 h-[32rem] '>
    <h1 className='text-white font-bold p-10' >Account Settings</h1>
    <div className='p-4 text-white grid-cols-2  '>
       <label className='flex p-2 ml-8 ' htmlFor="Account-Name">Account Name</label>
    <input type="text" className=' bg-[#54657D] p-4 w-80 ml-10'/>
    
    <label className=' p-2 ml-8' htmlFor="Account-Email">Account Email</label>
    <input type="text" className=' bg-[#54657D]  p-4 w-80 ' />

    <label className=' flex p-2 ml-8' htmlFor="Password">Password</label>
    <input type="text"  className='p-4 w-80 ml-10  bg-[#54657D] '/>
  
    <label className='  p-2 ' htmlFor="reenter-pasword">Re-enter Password</label>
    <input type="text"  className='p-4 w-80  bg-[#54657D] '/>

    <label className='flex p-2 ml-10' htmlFor="Phone">Phone</label>
    <input type="text" className='p-4 w-80 ml-10  bg-[#54657D] '/>

    <button className='bg-yellow-500 p-4 w-[36%] ml-[17%] hover:bg-[#435C70]  border hover:text-yellow-500'><a href="/account"> Update Your Profile</a></button>
    </div>
    
    <button className='bg-yellow-500 p-4 w-[86%] ml-14 text-white hover:bg-[#435C70]  border hover:text-yellow-500 ' >  <a href="/account"> DELETE YOUR ACCOUNT </a></button>
    </div>

   
    </div>
    </>
  );
}
export default AccountPages;




 