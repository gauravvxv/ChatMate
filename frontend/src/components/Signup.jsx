import React from 'react'

const Signup = () => {
  return (
    <>
      <div className='bg-[#aed2ee] h-[584px] flex justify-center items-center'>
        <div className='bg-[#ffff] w-[1000px] h-[500px] rounded-xl grid grid-cols-2 gap-4'>

          <div className='bg-[#3d76c7] w-[400px] h-[500px] text-white text-center rounded-xl p-16'>

            <div className='flex justify-evenly pb-12'>
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-messages"><path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" /><
                  path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" /></svg>
              <h1 className='text-4xl font-bold'>CHATMATE</h1>
            </div>

            <div className='text-xl w-64 pb-12'>
              <p>Share Your Smile with this world and find friends</p>
            </div>


            <div className='flex justify-center items-center pb-6'>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-coffee"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.83 -.642 2.077 -1.017 3.5 -1c1.423 -.017 2.67 .358 3.5 1" /><path d="M8 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" /><path d="M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" /><path d="M3 10h14v5a6 6 0 0 1 -6 6h-2a6 6 0 0 1 -6 -6v-5z" /><path d="M16.746 16.726a3 3 0 1 0 .252 -5.555" /></svg>
              </div>
            </div>

            <h1 className='text-4xl font-semibold'>Enjoy..!</h1>
          </div>

          {/* Form Part */}

          <div>

            <div class>
              <h1 className='text-4xl font-semibold'>WELCOME</h1>
            </div>


            <div className=' p-24 text-center'>
              <form>
                <input type="text" name="" id="" placeholder='Enter Name' className='w-72 h-10 text-center rounded-sm' />
                <br />
                <br />

                <input type="password" name="" id="" placeholder='Enter Email' className='w-72 h-10 text-center rounded-sm' />

                <br />
                <br />
               
                <input type="password" name="" id="" placeholder='Create Password' className='w-72 h-10 text-center rounded-sm' />
                <br />
                <br />
                
                <input type="password" name="" id="" placeholder='Confirm Password' className='w-72 h-10 text-center rounded-sm' />
                <br /><br />
                <button type='submit'>Sign up</button>
              </form>
            </div>

          </div>



        </div>
      </div>


    </>
  )
}

export default Signup
