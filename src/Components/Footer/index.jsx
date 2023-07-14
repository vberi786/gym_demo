import React from 'react'

const Footer = () => {
  return (
    
   <div className='bg-black'>
        <div className="lg:flex justify-around border border-green-400 rounded-xl   ">
            <div></div>
            <div className="rounded-2xl lg:h-96 lg:w-96 sm:m-2 sm:p-2 sm:text-center">
              <img src="https://i.pinimg.com/originals/cf/78/c9/cf78c96172bb2c979dd49e88dde4ad22.gif"></img>
            </div>
            <div>
              <p className="text-white  p-2 text-2xl lg:text-[20px] text-center">
                Home
              </p>
              <ul className="text-white">
                <li>Home</li>
                <li>About</li>
                <li>Shop</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <p className="text-white  p-2 text-2xl lg:text-[20px] text-center">
                Policies
              </p>
              <ul className="text-white">
                <li>FAQ</li>
                <li>Store Policy</li>

                <li>Contact</li>
              </ul>
            </div>
            <div>
              {/* <p className='text-white   '>Contact</p>
            <ul className='text-white'>
            <li>+91 **********</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    
                    <li>Calinfornia,USA</li>
            </ul> */}
              <p className="text-white   text-2xl lg:text-[20px] text-center">
                Contact
              </p>
              <ul className="text-white">
                <li>+91 **********</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>

                <li>Calinfornia,USA</li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="text-white text-center">MADE BY VASU BERI ❤️</h1>
          </div>
   </div>
  )
}

export default Footer