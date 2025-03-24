import { IoArrowUpCircleOutline } from "react-icons/io5";
import Subservice from "./subService";
import { FaDartLang } from "react-icons/fa6";
import { SiGooglesheets } from "react-icons/si";
import { GiTrophy } from "react-icons/gi";
import { RiArrowRightUpBoxFill } from "react-icons/ri";
import { BiArrowToBottom, BiArrowToTop } from "react-icons/bi";
import Blockchain from "./blockChain";
import Graph from "./graph";


function Hero1() {

  type subServiceProps = {
    icons: any,
    text: string,
    percent: string,
    color1: string,
    color2: string
  }

  type blockChainProps = {
    chain: string,
    price: string, 
    color: string,
    icon: any
  }
  
  const subService: subServiceProps[] = [
     {
      icons: <RiArrowRightUpBoxFill />, 
      text: "Avg.monthly growing", 
      percent: "2.34", 
      color1: "bg-[#C7E3E7]",
      color2: "text-[--accent]"
     },
     {
      icons: <FaDartLang />, 
      text: "Rebalance Accuracy", 
      percent: "64", 
      color1: "bg-[#CBF5FA]",
      color2: "text-[#006B82]"
     },
     {
      icons: <SiGooglesheets />, 
      text: "Resilience index", 
      percent: "0.46", 
      color1: "bg-[#E6D5F8]",
      color2: "text-[#7238A1]"
     },
     {
      icons: <GiTrophy />, 
      text: "Portfolio score", 
      percent: "75", 
      color1: "bg-[#FFE2BF]",
      color2: "text-[#9C612D]"
     }
  ]


  const blockChain: blockChainProps[] = [
    {
      chain: "BTC",
      price: "12,8456", 
      color: "bg-[#FFE2BF]", 
      icon: <BiArrowToBottom />
    }, 
    {
      chain: "ETH",
      price: "10,738", 
      color: "bg-[#E8D4F6]", 
      icon: <BiArrowToTop />
    },
    {
      chain: "SOL",
      price: "8,886",
      color: "bg-[#CCE6EB]", 
      icon: <BiArrowToBottom />
    }, 
    {
      chain: "ADA",
      price: "6,425", 
      color: "bg-[#F5FBBF]", 
      icon: <BiArrowToTop />
    },
    {
      chain: "BNB",
      price: "3,654", 
      color: "bg-[#CBF5F9]", 
      icon: <BiArrowToBottom />
    }
    
  ]


  const subSeriviceList = subService.map((items, i) => <Subservice key={i} {...items}/>)
  const blockChainList1 = blockChain.slice(0, 2).map((items, i) => <Blockchain key={i} index={i} {...items}/>)
  const blockChainList2 = blockChain.slice(2, 5).map((items, i) => <Blockchain key={i} index={i} {...items}/>)

  return (
    <section className="flex gap-[10px]">

        <section className='h-[50vh] w-[100%] border-[1.5px] border-b-gray-300 rounded-[20px] p-[20px] flex flex-col justify-between'>

          <div className="flex justify-between w-full">
            
            <div className="text-[0.8rem] flex flex-col gap-[20px]">
                <div>
                  <h1 className="urba  text-[1.2rem]">Total Profit</h1>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex items-center gap-[5px]">
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

            {/* graph */}
            <div className="w-[300px] 0vh]">
              <Graph />
            </div>
            
          </div>

          <div className="flex justify-between gap-[10px] mt-[20px]">
            {subSeriviceList}
          </div>

        </section>

        <section className=' w-[90%] flex gap-[5px]'>

            <div className="w-full border-[1.5px] border-b-gray-300 rounded-[20px] p-[10px] flex flex-col gap-[10px]">
                
                <p className="text-[1.2rem] urba">Token allocation</p>

              <div className="w-full h-full flex justify-between gap-[5px]">

                <div className="h-[100%] flex flex-col gap-[5px] w-[80%]">
                  {blockChainList1}
                </div>

                <div className="h-[100%] flex flex-col gap-[5px] w-[100%]">
                  {blockChainList2}
                </div>

              </div>
          

            </div>


            <div className="w-[60%] min-h-[40vh] flex flex-col gap-[5px]">

              <div className="w-full h-full border-[1.5px] border-b-gray-300 rounded-[20px] py-[5px] pop px-[20px] flex flex-col justify-between">

                  <h2 className="urba text-[1.1rem]">Highest volume(24h)</h2>

                  <div>
                    <p className="text-[0.9rem] text-gray-400">ETH</p>
                    <p className="text-[1.2rem]">$64,436k</p>
                  </div>

              </div>

              <div className="w-full h-full border-[1.5px] border-b-gray-300 rounded-[20px] py-[5px] pop px-[20px] flex flex-col justify-between">

                  <h2 className="urba text-[1.1rem]">Performance comparison</h2>

                
              </div>
              

            </div>
        </section>

    </section>
  )
}

export default Hero1