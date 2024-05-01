import * as React from "react";
import '../input.css';
export default function Last() {
  return (
    
    <div className="flex flex-col  items-center px-5 ">
      <div className="pt-[170px] text-center text-4xl text-white font-['Nosifer']">
        Add a New Room Or Device
      </div>
      <div className="text-center self-stretch mt-14 w-full text-2xl text-white max-md:mt-10 max-md:max-w-full">
        Extra Smartify your home by adding a new room or an device to an
        existing room
      </div>
      <div className="flex overflow-hidden relative flex-col items-center px-16 pt-12 pb-20 w-full max-w-[646px] min-h-[528px] max-md:px-5 max-md:max-w-full">
      <iframe src='https://my.spline.design/breakapartcubewhilescrolling-b6e44d5ad2a54a16e304b91171696c81/' frameborder='0' 
      width='1000px' 
      height='100%'
      className="object-cover absolute inset-0 size-full"
      >

      </iframe>
        <div className="bg-transparent  flex relative flex-col mb-36 max-w-full w-[337px] max-md:mb-10">
          <div className="text-center bg-transparent text-2xl text-white">Made easy using Smartify</div>
          <div className="text-center justify-center items-center px-16 py-7 mt-28 text-2xl text-black rounded-xl bg-zinc-300 max-md:px-5 max-md:mt-10">
            Add
          </div>
        </div>
      </div>
    </div>
   
  );
}