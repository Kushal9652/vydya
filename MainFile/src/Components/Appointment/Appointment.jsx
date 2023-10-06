

'use client';

// import { Carousel } from 'flowbite-react';
import { Select, Textarea, Button, Datepicker, TextInput } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';

// import React, { useState } from 'react';
import './login.css'
import { useState } from 'react';
export default function Appointment() {
const [Check,setCheck]=useState(true)
const Onsubmit=()=>{
  setCheck(!Check)
}
  return (
    <div className='dummybody'>
         {
          Check?
          <form action="" onSubmit={()=>Onsubmit()} >
          <div className='grid grid-cols-2 gap-4'>
            <div className="max-w-md">

              <TextInput
                addon="@"
                id="username3"
                placeholder="User Name"
                required
              />
            </div>
            <div className="max-w-md">

              <TextInput
                id="email4"
                placeholder="usermail@gmail.com"
                required
                rightIcon={HiMail}
                type="email"
              />
            </div>
            <div
              className="max-w-md"
              id="select"
            >

              <Select
                id="countries"
                required
              >
                <option>
                  Timings for Docter Appointment
                </option>
                <option>
                  9:00 AM
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
                  4:00 PM
                </option>
                <option>
                  5:00 PM
                </option><option>
                  6:00 PM
                </option>
              </Select>
            </div>
            <div >   <Datepicker /></div>
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

          </div>
          <div
            className="w-full mt-[2rem]"
            id="textarea"

          >

            <Textarea
              id="comment"
              placeholder="Leave your some health condition for better procedure"
              required
              rows={5}
            />
          </div>
          <Button gradientDuoTone="cyanToBlue" className='m-[2rem] px-[1rem]' type='submit'>
            Get Appointment
          </Button>

        </form>:
        <div className=''><div class="message">
        <h1>Registration Successful</h1>
        <p>You will receive an email with your plan shortly.</p>
        <Button gradientDuoTone="cyanToBlue"onClick={()=>Onsubmit()} className='mx-auto my-3 px-[1rem]' type='submit'>
            Get Another Appointment
          </Button>
    </div></div>
         }
    </div>
  );
}
