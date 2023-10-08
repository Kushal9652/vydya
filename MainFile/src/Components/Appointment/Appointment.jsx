

'use client';

// import { Carousel } from 'flowbite-react';
import { Select, Textarea, Button, Datepicker, TextInput } from 'flowbite-react';
// import { HiMail } from 'react-icons/hi';

// import React, { useState } from 'react';
import './login.css'
import { useState } from 'react';
export default function Appointment() {
  const [Token,setToken]=useState(0)
const [Check,setCheck]=useState(true)
const Onsubmit=()=>{
  setCheck(!Check)
  setToken(Token+1)
}
  return (
    <div className=' relative dummybody'>
      <div className='h-full w-[60%] relative flex justify-center flex-col items-center'>
      <div className='bg-[#1f2937] opacity-70 w-full h-full flex justify-center items-center'>
          <div className="h-full flex flex-col  items-center justify-center px-[4rem] gap-[3rem]">
            <p className='text-6xl text-white'> Find the Perfect Doctor: Book Your Appointment Today</p>
            <p   className='text-xl text-white'>
            Are you in need of a medical consultation, expert advice, or specialized care? Finding the right doctor and securing an appointment has never been easier. At Vydya, we're committed to connecting you with top-notch healthcare professionals who can address your specific needs.
            </p>
          </div>
        </div>
      </div>
         {
           Check?
           
           <form className='w-[40%]' action="" onSubmit={()=>Onsubmit()} >
            <p className='text-white mb-[3rem] text-4xl underline font-extrabold'>REQUEST APPOINTMENT</p>
          <div className='grid grid-cols-2 gap-4'>
            <div className="max-w-md">

              <TextInput
                
                id="username3"
                placeholder="Patient Name"
                required
              />
            </div>
            <div className="max-w-md">

            <Select
                id="countries"
                required
              >
                <option disabled className='disabled:text-gray-500'>
                 Gender
                </option>
                <option>
                 Male
                </option>
                <option>
                  Female
                </option>
                <option>
                  Others
                </option>
              </Select>
            </div>
            <div className="max-w-md">

            <TextInput
                
                id="place"
                placeholder="Place"
                required
              />
            </div>
            <div >   <Datepicker /></div>

            <div
              className="max-w-md"
              id="select"
            >

              <Select
                id="countries"
                required
              >
                <option disabled className='disabled:text-gray-500'>
                  Timings for Docter Appointment
                </option>
                <option>
                  09:00 AM
                </option>
                <option>
                  10:00 AM
                </option>
                <option>
                  11:00 AM
                </option><option>
                  12:00 PM
                </option>
                <option>
                  04:00 PM
                </option>
                <option>
                  05:00 PM
                </option><option>
                  06:00 PM
                </option>
              </Select>
            </div>
            <div className="relative mb-3" data-te-input-wrapper-init>
              <input
                type="number"
                className="peer block min-h-[auto] w-full rounded border-0 bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]"
                id="exampleFormControlInputNumber"
                placeholder="Age" />

            </div>
            <div className="relative mb-3" data-te-input-wrapper-init>
              <input
                type="tel"
                className="peer block min-h-[auto] w-full rounded border-0 bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]"
                id="exampleFormControlInputTel"
                placeholder="Phone Number" />

            </div>
            <div
              className="max-w-md"
              id="select"
            >

              <Select
                id="countries"
                required
              >
                <option disabled className='disabled:text-gray-500'>
                Select Doctor
                </option>
                <option>Cardiologist</option>
                <option>Dermatologist</option>
                <option>Orthopedic Surgeon</option>
                <option>Neurologist</option>
                <option>Gynecologist</option>
                <option>Pediatrician</option>
                <option>Ophthalmologist</option>
                <option>ENT Specialist (Otolaryngologist)</option>
                <option>Gastroenterologist</option>
                <option>Urologist</option>
                <option>Psychiatrist</option>
                <option>Pulmonologist</option>
                <option>Endocrinologist</option>
                <option>Rheumatologist</option>
                <option>Oncologist</option>
                <option>Nephrologist</option>
                <option>Allergist/Immunologist</option>
                <option>Infectious Disease Specialist</option>
                <option>Emergency Medicine Physician</option>
                <option>Geriatrician</option>
              
              </Select>
            </div>
          </div>
          <div
            className="w-full mt-[2rem]"
            id="textarea"

          >

            <Textarea
              id="comment"
              placeholder="Type Your Helath Condition "
              required
              rows={5}
            />
          </div>
          <Button gradientDuoTone="cyanToBlue" className='m-[2rem] px-[1rem]' type='submit'>
           Submit
          </Button>

        </form>:
        <div className=' bg-[#37556a] w-[40%] flex justify-center items-center h-full'><div class="message">
        <h1>Registration Successful</h1>
        <p>You will receive an email with your plan shortly.</p>
        <p> Your token number is {Token}</p>
        <Button gradientDuoTone="cyanToBlue"onClick={()=>Onsubmit()} className='mx-auto my-3 px-[1rem]' type='submit'>
            Get Another 
          </Button>
    </div></div>
         }
    </div>
  );
}
