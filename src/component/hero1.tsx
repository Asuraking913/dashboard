import { IoArrowUpCircleOutline } from "react-icons/io5";
import Subservice from "./subService";
import { FaDartLang } from "react-icons/fa6";
import { SiGooglesheets } from "react-icons/si";
import { GiTrophy, GiTrophyCup } from "react-icons/gi";
import { RiArrowRightUpBoxFill } from "react-icons/ri";


function Hero1() {
  
  const subService = [
     {
      icons: <RiArrowRightUpBoxFill />, 
      text: "Avg.monthly growing", 
      percent: ""
     },
     {
      icons: <FaDartLang />, 
      text: "Rebalance Accuracy", 
      percent: ""
     },
     {
      icons: <SiGooglesheets />, 
      text: "Resilience index", 
      percent: ""
     },
     {
      icons: <GiTrophy />, 
      text: "Portfolio score", 
      percent: ""
     }
  ]


  const subSeriviceList = subService.map((items, i) => <Subservice {...items}/>)

  return (
    <section className="flex gap-[10px]">

        <section className='h-[40vh] w-[100%] border-[1.5px] border-b-gray-300 rounded-[20px] p-[20px] flex flex-col justify-between'>

          <div className="flex justify-between w-full">
            
            <div className="text-[0.8rem] flex flex-col gap-[20px]">
                <div>
                  <h1 className="urba font-semibold text-[1.1rem]">Total Profit</h1>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex items-center gap-[20px]">
                    <div className="flex flex-col items-start">
                      <p className="text-[2rem] pop font-bold">$75,843.52</p>
                      <p className="p-[4px] border-[--accent] border-[1.5px] rounded-[15px] pop font-semibold px-[10px]">You have a great performance</p>
                    </div>
                    <div className="flex items-center gap-[5px]">
                      <i className="text-[1.4rem] text-green-400">
                        <IoArrowUpCircleOutline />
                      </i>
                      <p className="pop">24.21%</p>
                    </div>
                </div>
            </div>
            <div className="w-[300px] bg-black h-[20vh]">
            
            </div>
            
          </div>

          <div className="flex justify-between gap-[10px]">
            {subSeriviceList}
          </div>

        </section>

        <section className='min-h-[40vh] w-[80%] bg-slate-700'>
          
        </section>

    </section>
  )
}

export default Hero1