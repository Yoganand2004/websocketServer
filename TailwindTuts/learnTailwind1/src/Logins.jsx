import React from 'react'
import {Bold, MapPin} from 'lucide-react'

function Logins() {
  return (
    <>
    <div className='min-h-screen flex items-center justify-center bg-gray-400'>      
      <div className='bg-white rounded-2xl p-6 w-90 h-130 shadow-lg text-center'>
        <div className='profile-section'>
          <img 
          src='https://upload.wikimedia.org/wikipedia/commons/2/29/Ms._Smriti_Mandhana%2C_Arjun_Awardee_%28Cricket%29%2C_in_New_Delhi_on_July_16%2C_2019_%28cropped%29.jpg'>
          </img>
          <h1>Smriti Mandhana</h1>
          
          <p> <MapPin/> Mumbai, IN</p>
        </div>

        <div className='button-section'>
          <button type='button' className='text-white bg-brand box-border border border-transparent'>Follow</button>
          <button type="button" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none">Default</button>

          <button type='button' className=''>Message</button>
        </div>
        <div className='followers-section'>
          <p>12 Followers you know</p>
          <div className='avatars flex h-8 w-8 object-cover space-x-2 '>
            <img className='rounded-full'
            src='https://upload.wikimedia.org/wikipedia/commons/3/3a/Alia_Bhatt_promoting_Kalank.jpg'
            ></img>
            <img className='rounded-full '
            src='https://upload.wikimedia.org/wikipedia/commons/f/fd/Hansika_Motwani_at_HELLO%21_Hall_of_Fame_Awards_2023_%281%29_%28cropped%29.jpg'
            ></img>
            <img className='rounded-full'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMKRPjQy0497xE_kKTpNO9lZaGBigIHx50Kw6pqG_u-j1f9Wtqsj0TmSJOXKoK241t4NJPNUx6MHY_1Xb7Evu4NOkfK81O9oq5iYQfqcXqUQ&s=10'
            ></img>
            <img className='rounded-full'
            src='https://admin.thecricketer.com/weblab/sites/96c8b790-b593-bfda-0ba4-ecd3a9fdefc2/resources/images/site/kohli231007.jpg'
            ></img>
            <img className='rounded-full'
            src='https://upload.wikimedia.org/wikipedia/commons/2/27/Lionel_Messi_NE_Revolution_Inter_Miami_7.9.25-178.jpg'
            ></img>

          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Logins