import * as React from "react";
import favback from "../images/fav back.jpeg";
import wadrobe from "../images/wadrobe.jpeg";
import refrig from "../images/refrigerator.jpeg";
import dish from "../images/dish.jpeg";
import kitchem from "../images/kitchen.jpeg";
import washing from "../images/wachingmachine.jpeg";
import { Navigate, useNavigate } from "react-router-dom";
import '../input.css';

function Favourite() {
    
  return (
    <div className="pl-[70px] pt-[300px]">
    <div className=" text-[34px] font-bold font-['Nosifer'] text-white items-center text-center pb-[5rem]">Favourite Scenes</div>
    <div className=" flex overflow-hidden relative flex-col items-center px-20 py-14 backdrop-blur-[30px] border border-solid border-white border-opacity-10 min-h-[835px] max-md:px-5">
      <img
        loading="lazy"
        src={favback}
        className="object-cover absolute inset-0 size-full"
        alt="name"
      />
      <div className="relative w-full max-w-[1245px] max-md:max-w-full bg-transparent">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 bg-transparent">
          <div className="flex flex-col w-[29%] max-md:ml-0 max-md:w-full bg-transparent">
            <div className="bg-transparent flex relative flex-col grow px-14 pt-11 pb-5 mt-3.5 w-full text-2xl font-bold text-white whitespace-nowrap rounded-3xl border border-solid backdrop-blur-[30px] border-white border-opacity-10 max-md:px-5 max-md:mt-10">
              <div className="bg-transparent self-center">Wadrobe</div>
              <img
                loading="lazy"
                src={wadrobe}
                className=" bg-transparent mt-6 w-full border  aspect-square backdrop-blur-[30px] border-white border-opacity-10"
              />
            </div>
          </div>
          <div className="bg-transparent flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
            <div className="bg-transparent flex relative flex-col grow px-12 pt-14 pb-5 w-full text-2xl font-bold text-white whitespace-nowrap rounded-3xl border border-solid backdrop-blur-[30px] border-white border-opacity-10 max-md:px-5 max-md:mt-9">
              <div className="bg-transparent self-center">Refrigerator</div>
              {/* <div onClick={RoomPage}> */}
              <img
                loading="lazy"
                src={refrig}
                
                className="cursor-pointer bg-transparent rounded-[10px] mt-4 w-full border border-solid aspect-square backdrop-blur-[30px] border-white border-opacity-10"
              />
              {/* </div> */}
            </div>
          </div>
          <div className="bg-transparent flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
            <div className="bg-transparent flex relative flex-col grow pt-14 pr-3 pb-5 pl-9 w-full rounded-3xl border border-solid backdrop-blur-[30px] border-white border-opacity-10 max-md:pl-5 max-md:mt-9 max-md:max-w-full">
              <div className="bg-transparent self-center text-2xl font-bold text-white">
                Washing Machine
              </div>
              <div className="bg-transparent mt-4 max-md:max-w-full">
                <div className="bg-transparent flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="bg-transparent flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      src={washing}
                      className="bg-transparent grow w-full rounded-[10px] border border-solid aspect-square backdrop-blur-[30px] border-white border-opacity-10 max-md:mt-6"
                    />
                  </div>
                  <div className="bg-transparent flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
                    <div className="bg-transparent flex flex-col grow font-bold max-md:mt-6">
                      <div className="bg-transparent flex flex-col items-start px-12 py-6 text-sm text-white rounded-2xl border border-solid backdrop-blur-[30px] border-white border-opacity-10 max-md:px-5">
                        <div className="bg-transparent text-lg">Last Used :</div>
                        <div className="bg-transparent mt-3.5 text-zinc-300">7 days ago</div>
                        <div className="bg-transparent justify-center px-6 py-2.5 mt-4 whitespace-nowrap rounded-2xl border border-solid backdrop-blur-[30px] border-red-100 border-opacity-10 max-md:px-5">
                          Start
                        </div>
                      </div>
                      <div className="bg-transparent flex flex-col px-16 pt-4 pb-7 mt-3 whitespace-nowrap rounded-2xl border border-solid backdrop-blur-[30px] border-white border-opacity-10 max-md:px-5">
                        <div className="bg-transparent text-lg text-white">Laundry</div>
                        <div className="bg-transparent self-center mt-4 text-sm text-stone-300">
                          Today
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-transparent relative mt-7 w-full max-w-[1245px] max-md:max-w-full">
        <div className="bg-transparent flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="bg-transparent flex flex-col w-[29%] max-md:ml-0 max-md:w-full">
            <div className="bg-transparent flex relative flex-col grow px-14 py-8 mt-1.5 w-full text-2xl font-bold text-white whitespace-nowrap rounded-3xl border border-solid backdrop-blur-[30px] border-white border-opacity-10 max-md:px-5 max-md:mt-10">
              <div className="bg-transparent self-center">Kitchen</div>
              <img
                loading="lazy"
                src={kitchem}
                className="bg-transparentmt-6 rounded-[10px] w-full border border-solid aspect-square backdrop-blur-[30px] border-white border-opacity-10"
              />
            </div>
          </div>
          <div className="bg-transparent flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
            <div className="bg-transparent flex relative flex-col grow text-white max-md:mt-8">
              <div className="bg-transparent flex flex-col px-16 py-5 w-full rounded-3xl border border-solid backdrop-blur-[30px] border-white border-opacity-10 max-md:px-5">
                <div className="bg-transparent mx-5 text-2xl font-bold max-md:mx-2.5">
                  Air Conditioner
                </div>
                <div className="bg-transparent flex gap-3.5 justify-between items-start mt-5 text-lg font-semibold whitespace-nowrap">
                  <div className=" bg-transparent flex gap-0">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7854a76171e81db1ca7bfa5b937258977dd18463df05c7bd2b0d12f68f586ddb?"
                      className="bg-transparent rounded-[10px] shrink-0 aspect-square w-[41px]"
                    />
                    <div className="bg-transparent self-start mt-5">34</div>
                    <div className="bg-transparent shrink-0 my-auto w-2 bg-white rounded-full h-[7px]" />
                    <div className="bg-transparent self-end mt-6">c</div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e76ad8dcb40a31118b6332b1b324fa09c810d5d3cf7074b0d61d9715f45f9950?"
                    className="bg-transparent shrink-0 mt-1.5 aspect-square w-[41px]"
                  />
                  <div className="bg-transparent flex gap-1 self-stretch my-auto">
                    <div className="bg-transparent grow">24</div>
                    <div className="bg-transparent flex gap-0 self-start">
                      <div className="bg-transparent shrink-0 self-start w-2 bg-white rounded-full h-[7px]" />
                      <div className="bg-transparent">c</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-transparent overflow-hidden relative flex-col items-center px-16 pt-9 pb-28 mt-7 w-full text-2xl font-bold border border-solid aspect-[1.74] backdrop-blur-[30px] border-white border-opacity-10 max-md:px-5">
                <img
                  loading="lazy"
                  src={dish}
                  className="bg-transparent rounded-[10px] object-cover absolute inset-0 size-full"
                />
                Dish Washer
              </div>
            </div>
          </div>
          <div className="bg-transparent flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
            <div className="bg-transparent flex relative flex-col grow px-14 py-12 mt-1.5 w-full text-white rounded-3xl border border-solid backdrop-blur-[30px] border-white border-opacity-10 max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="bg-transparent flex gap-2 items-start">
                <div className="bg-transparent flex flex-col font-bold">
                  <div className="bg-transparent self-end text-2xl">Notifications</div>
                  <div className="bg-transparent mt-11 text-base max-md:mt-10">
                    Current Bill Payment
                  </div>
                </div>
                <div className="bg-transparent flex flex-col mt-2 text-xs">
                  <div className="bg-transparent self-end font-semibold max-md:mr-2.5">
                    View All
                  </div>
                  <div className="bg-transparent flex gap-1.5 px-3.5 py-2 mt-10 ml-36 whitespace-nowrap rounded-2xl border border-solid backdrop-blur-[30px] border-white border-opacity-10">
                    <div className="bg-transparent shrink-0 self-start h-[13px] w-[13px]" />
                    <div className="bg-transparent -ml-0.5">Manage</div>
                  </div>
                </div>
              </div>
              <div className="bg-transparent flex gap-5 justify-between mt-3">
                <div className="bg-transparent flex flex-col self-start mt-2 text-base font-bold">
                  <div className="bg-transparent">Task Scheduled Today</div>
                  <div className="bg-transparent mt-7">Laundry To Be Done Today</div>
                  <div className="bg-transparent mt-7">Milk Expires Today</div>
                  <div className="bg-transparent mt-7">TV to be Recharged Tomorrow</div>
                </div>
                <div className="bg-transparent flex flex-col text-xs whitespace-nowrap">
                  <div className="bg-transparent flex gap-1.5 px-3.5 py-2 rounded-2xl border border-solid backdrop-blur-[30px] border-white border-opacity-10">
                    <div className="bg-transparent shrink-0 self-start h-[13px] w-[13px]" />
                    <div className="bg-transparent">Manage</div>
                  </div>
                  <div className="bg-transparent flex gap-1.5 px-3.5 py-2 mt-3 rounded-2xl border border-solid backdrop-blur-[30px] border-white border-opacity-10">
                    <div className="bg-transparent shrink-0 self-start h-[13px] w-[13px]" />
                    <div className="bg-transparent">Manage</div>
                  </div>
                  <div className="bg-transparent flex gap-1.5 px-3.5 py-2 mt-3 rounded-2xl border border-solid backdrop-blur-[30px] border-white border-opacity-10">
                    <div className="bg-transparent shrink-0 self-start h-[13px] w-[13px]" />
                    <div className="bg-transparent">Manage</div>
                  </div>
                  <div className="bg-transparent flex gap-1.5 px-3.5 py-2 mt-3 rounded-2xl border border-solid backdrop-blur-[30px] border-white border-opacity-10">
                    <div className="bg-transparent shrink-0 self-start h-[13px] w-[13px]" />
                    <div className="bg-transparent">Manage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Favourite;