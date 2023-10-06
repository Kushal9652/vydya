import React from 'react'
// import './styles.css'
import { Select, Textarea, Button, Datepicker, TextInput } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';
export default function Bmi() {
    function getdata(){
        var name=document.getElementById('name').value;
        var age=document.getElementById('age').value;
        var height=parseFloat(document.getElementById('h').value);
        var weight=parseFloat(document.getElementById('w').value);
        var h_measurement=document.getElementById('h_measurement').value;
        
        if(name && age && height && weight && h_measurement){
         var heightOnMeter=H_convertToMeter(height,h_measurement);
         var bmiRes=parseFloat(calculateBMI(weight,heightOnMeter));
         display(name,bmiRes);
        
        console.log(bmiRes);
        }
        
        else{
            alert("Please enter value");
        }
        
        }
        
        function H_convertToMeter(height,h_measurement){
            var converValue=0;
               
            if(h_measurement==='m'){
                converValue=height;
            }
            else if(h_measurement==='cm'){
                converValue=height/100;
            }
            else if(h_measurement==='f'){
                converValue=height*0.3048;
            }
            return converValue;
        }
        
        function calculateBMI(weight,heightOnMeter) {
         
            var bmiRes=weight/((heightOnMeter)*(heightOnMeter));
           return bmiRes;
        }
        
        function display(uname,bmiRes){
        
            var display='';
            if(bmiRes<16){
                display='Hi '+uname+', Your BMI value is '+bmiRes+' n and you are in Underweight (Severe thinness)';
            }
            else if(bmiRes>=16 && bmiRes<=16.9){
                display='Hi '+uname+', Your BMI value is '+bmiRes+'\n and you are in Underweight (Moderate thinness)';
            }
            else if(bmiRes>=17 && bmiRes<=18.4){
                display='Hi '+uname+', Your BMI value is '+bmiRes+' \nand you are in Underweight (Mild thinness)';
            } 
            else if( bmiRes>=18.5 && bmiRes <=24.9){
            display='Hi, '+uname+', Your BMI value is '+bmiRes+' \n and you are in Normal range';
            }
            else if( bmiRes >=25 && bmiRes<=29.9){
                display='Hi '+uname+', Your BMI value is '+bmiRes+'\n and you are in Overweight (Pre-obese)';
            }
            else if(bmiRes>=30){
                display='Hi '+uname+', Your BMI value is '+bmiRes+'\n and you are in Obese Class';
            }
            
            var displayelement=document.getElementById('display');
        
           displayelement.querySelector('p').textContent=display;
          
            
            
        }
        
  return (
    <div className='bmibody'>
       <center>
        <div className="container">
        <form action="" onSubmit={()=>getdata()} >
          <div className='grid grid-cols-2 gap-4'>
            <div className="max-w-md">

              <TextInput
                addon="@"
                id="username3"
                placeholder="User Name"
                required className='name'
              />
            </div>
            <div className="max-w-md">

            <input
                type="number"
                className=" w peer block min-h-[auto] w-full rounded border-0 bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]"
                id="exampleFormControlInputNumber"
                placeholder="Age"/>
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
                className=" age peer block min-h-[auto] w-full rounded border-0 bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]"
                id="exampleFormControlInputNumber"
                placeholder="Age"/>

            </div>
            <div className="relative mb-3" data-te-input-wrapper-init>
            <input
                type="number"
                className=" h peer block min-h-[auto] w-full rounded border-0 bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]"
                id="exampleFormControlInputNumber"
                placeholder="Age"/>

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

        </form>
        </div>
        <div id='display'>
            <p className="result"></p>
        </div>
    </center>
    </div>
  )
}
