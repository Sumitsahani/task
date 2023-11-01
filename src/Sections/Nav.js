import React from 'react'
import 
{BsPerson}from 'react-icons/bs'
import '../App.css';
const Nav = () => {
  return (
    <div className='nav'>
    <div className='title'>
        <h1>atlys.com</h1>
        <h3>#visalikepizza  <BsPerson className='icon'/></h3>
    </div>
        <h4 className='slogan'>99.2% visas on time</h4>
        <h2 className='bold'>Get Your Visa on Time or On Us.</h2>
        <div className='inputbox'>
            <input type='text'
             input={<BsPerson className='icon'/>}
             placeholder='Where To ?' />
        </div>
    </div>
  )
}

export default Nav