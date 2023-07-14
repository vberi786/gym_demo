import React from 'react'

const Contact = () => {
  return (
    <div className='bg-[#0e0e3c]'>
       <div className='lg:flex justify-around '>
          <div className='bg-[#111528] lg:w-[20%] h-[25rem] border-[4px] border-green-700 rounded-2xl'>
          <h1 className="lg:text-[72px] text-[64px] text-justify lg:my-24  flex justify-center p-4 text-green-600 ">
        Contact US...
      </h1>
          </div>
          <div className='bg-[#090c16] lg:w-[50%] lg:my-24 m-2 p-2 text-justify  rounded-xl'>
            {/* <p className='text-white ' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate illum consectetur, modi eius quos commodi fuga rerum debitis, eum corrupti aliquam aperiam non obcaecati animi temporibus deserunt ex nisi ullam est culpa accusantium mollitia necessitatibus labore. Sed error magnam nesciunt aperiam unde et nulla similique quos velit at accusantium rerum deleniti officia non maiores laboriosam fuga, voluptatem ullam asperiores quibusdam dolorum earum illum modi minima! Exercitationem maiores aperiam, enim id atque officiis adipisci quaerat odio dolorum necessitatibus libero reprehenderit! Quibusdam illum eaque amet perferendis optio cumque rem obcaecati totam vitae hic voluptatibus quas nisi debitis non ex odit, dolor pariatur unde, in sed praesentium! Veniam repellendus cumque dolores ducimus, neque id nesciunt ipsam distinctio inventore fuga quam incidunt deleniti voluptatum eius velit eaque accusamus eum, quas ad voluptas obcaecati numquam tenetur quidem odit. Dicta debitis doloremque ratione quisquam atque laborum inventore vel veniam exercitationem. Consequatur, quos quasi voluptatum assumenda iure dolorem, magnam dolor odio ipsum nostrum odit labore at quae adipisci exercitationem dicta natus enim laudantium molestiae expedita aliquam delectus porro? Fuga facilis sit incidunt unde odit deleniti dicta ipsa amet dolorem commodi, repellat quo minima, nemo ex quae inventore aspernatur perferendis quas praesentium. Odio temporibus distinctio placeat aperiam vero.</p> */}
         <div className='grid grid-cols-1 md:grid-cols-2  p-2'>
         <div className=''> 
          <h1 className='text-white p-2 '>First Name</h1>
          <input type="text" placeholder='First Name' className='border-none  focus:outline-none bg-transparent text-white border border-green-400 rounded-2xl p-2' ></input>
          </div>
          <div>
          <h1 className='text-white p-2 '>Last Name</h1>
          <input type="text" placeholder='Last Name' className='bg-transparent text-white border border-green-400 rounded-2xl p-2' ></input>
          </div>
          <div>
         <h1 className='text-white p-2 '>Email*</h1>
          <input type="text" placeholder='xyz@mail.com' className='bg-transparent text-white border border-green-400 rounded-2xl p-2' ></input>
         </div>
         <div>
         <h1 className='text-white p-2 '>Phone*</h1>
          <input type="tel" name="phone" placeholder='+91**********' className='bg-transparent text-white border border-green-400 rounded-2xl p-2' ></input>
         </div>
         </div>
         
          
         
          
          </div>
        </div>
        <div className='lg:flex justify-center'>
           <img className='' src="https://finwave.co/images/gif/Contact-1.gif"></img>

        </div>
    </div>
  )
}

export default Contact