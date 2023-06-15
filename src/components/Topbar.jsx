import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGaugeHigh, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Topbar() {
  const [activeButton, setActiveButton] = useState('');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className='h-[100px] bg-[#567086] px-40 flex items-center justify-between'>
      <h2 className='text-[#ffff] text-2xl font-bold'>PRODUCT ADMIN</h2>
      <div className='flex items-center justify-between'>
        <div className={`flex justify-center w-30 h-[100px] p-5 m-5 ${activeButton === 'dashboard' ? 'bg-yellow-500' : ''}`} onClick={() => handleButtonClick('dashboard')}>
          <Link to='/dashboard' className={` text-white ${activeButton === 'dashboard' ? '' : 'hover:text-yellow-500'}`}>
            <FontAwesomeIcon icon={faGaugeHigh} className='w-5 h-5 ml-6' />
            <p>Dashboard</p>
          </Link>
        </div>
        <div className={`flex justify-center w-30 h-[100px] p-6 m-5 ${activeButton === 'product' ? 'bg-yellow-500' : ''}`} onClick={() => handleButtonClick('product')}>
          <Link to='/products' className={`h-full w-full text-white ${activeButton === 'product' ? '' : 'hover:text-yellow-500'}`}>
            <FontAwesomeIcon icon={faUser} className='w-5 h-5 ml-4' />
            <p>Product</p>
          </Link>
        </div>
        <div className={`flex justify-center w-30 h-[100px] p-5 m-5 ${activeButton === 'account' ? 'bg-yellow-500' : ''}`} onClick={() => handleButtonClick('account')}>
          <Link to='/account' className={`h-full w-full text-white ${activeButton === 'account' ? '' : 'hover:text-yellow-500'}`}>
            <FontAwesomeIcon icon={faCartShopping} className='w-5 h-5 ml-4' />
            <p>Account</p>
          </Link>
        </div>
      </div>
      <Link to='/login' className='text-white text-lg hover:text-yellow-500'>Admin, Logout</Link>
    </div>
  );
}

export default Topbar;
