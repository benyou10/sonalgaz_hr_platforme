import { DatePickerWithRange } from "./calander"
import {BarChart} from "./chart"
import CardLineChart from "./chart"
import Chart from "./chart"
import { AlertDemo } from "./notfication"
import PersonalNav from "./personalNav"
import {Donut} from "./pie"
import SideNav from "./sideNave"
import { TableDemo } from "./table"
import TopNavBar from "./topnavbar"

export default function Grid(){
    const style="bg-transparent border-neutral-300 bg-white rounded-sm"
    const style2="bg-transparent border-r-trasparent border-b-transparent border-t-transparent    border-neutral-300  rounded-sm"

    return(
        <div className="grid grid-cols-[14]  gap-1 mt-2   auto-rows-[65px]">
          
            <div className={` ${style} border-b-transparent border-l-transparent  col-span-10`}  ><PersonalNav/></div>
            <div className={` col-span-10 row-span-3  `} >
                <div className="grid grid-cols-4 gap-1 auto-rows-[200px]">
<div className={`${style2}`} >
<div className="flex bg-[#FEFEE3] rounded-lg pb-5 justify-center mb-6">
                        <div className="flex  flex-col justify-center items-center">
                            <div className="flex items-center mb-1">
                                <div className="text-2xl w-10 mt-3 h-10  mb-3 rounded-full font-semibold"><div className="p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6  h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
</svg></div>

                                </div>
                            </div>
                            <div className="text-xl ">Total en conges</div>
                            <div className="text-4xl mt-6 text-black ">144</div>

                        </div>
                        </div>
</div>
<div className={`${style2}`}>
<div className="flex justify-center bg-[#17BEBB]  rounded-lg pb-5 mb-6">
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex items-center mb-1">
                                <div className="text-2xl w-10 mt-3 h-10  mb-3 rounded-full font-semibold"><div className="p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
</svg>
</div>

                                </div>
                            </div>
                            <div className="text-xl ">Total abcantes</div>
                            <div className="text-4xl mt-6 text-black ">144</div>

                        </div>
                        </div>
</div>
<div className={`${style2}`}>
<div className="flex justify-center bg-[#080357]  rounded-lg  mb-6">
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex text-white items-center mb-1">
                                <div className="text-2xl w-10 mt-3 h-10  mb-3 rounded-full font-semibold"><div className="p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6  h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
</svg></div>

                                </div>
                            </div>
                            <div className="text-xl text-white ">Total attendence</div>
                            <div className="text-4xl mt-6 text-white ">144</div>
                            <div className="p-1 rounded bg-emerald-500/10 text-emerald-500 text-[12px] font-semibold leading-none ml-2">+30%</div>


                        </div>
                        </div>
</div>

<div className={`${style2}`} >
<div className="flex bg-[#D1B3C4] rounded-lg pb-5 justify-center mb-6">
                        <div className="flex  flex-col justify-center items-center">
                            <div className="flex items-center mb-1">
                                <div className="text-2xl w-10 mt-3 h-10  mb-3 rounded-full font-semibold"><div className="p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6  h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
</svg></div>

                                </div>
                            </div>
                            <div className="text-xl  ">Total en conges</div>
                            <div className="text-4xl mt-6 text-black ">144</div>

                        </div>
                        </div>
</div>
</div>
            </div>
            <div className={`${style} col-span-8 min-w-80 min-h-80 row-span-6 `} ><BarChart/></div>
            <div className={`${style} col-span-2 row-span-12  ` } ><Donut/>
            <div>
            <AlertDemo/>
            <AlertDemo/>
            <AlertDemo/>
            <AlertDemo/>
            </div>
            
            </div>
            <div className={`${style} col-span-8 row-span-6`} ><TableDemo/></div>
        </div>
    )
}