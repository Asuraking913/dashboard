import { BiArrowToBottom, BiArrowToTop } from "react-icons/bi";

type portfolioProps = {
        asset: string,
        balance: string, 
        buyPrice: string,
        profitLoss: string,
        value: string, 
        symbol: string,
        icon: any
}

function Portfolio({asset, balance, buyPrice, profitLoss, value, symbol, icon} : portfolioProps) {

    const green = ['ETH', 'ADA', "BNB"]

  return (
    <ul className='flex sm:text-[0.9rem] text-[0.7rem] pop sm:gap-[20px] gap-[10px] items-center'>
        <li className='w-full flex items-center gap-[5px]'>
        {/* chain landmark */}
            <img src={icon} className='sm:w-[40px] sm:h-[40px] w-[30px] h-[30px] object-cover' alt="" />
            <p>{asset}</p>
            <p className='sm:text-[0.8rem] text-gray-400 sm:block hidden'>{symbol}</p>
        </li>
        <li className='w-[70%] bg-b'>
            <p>{balance}</p>
        </li>
        <li className='w-[80%] bg-b flex items-center gap-[5px]'>
            <span>
                <i className={`text-[1rem] ${green.includes(symbol) ? "text-green-400" : "text-red-400 p-[3px]"} bg-white rounded-full text-[1.1rem]`}>
                    {
                        green.includes(symbol) ? 
                            <BiArrowToTop />
                        :

                        <BiArrowToBottom />
                    }
                </i>
            </span>
            <p>{buyPrice}</p>
        </li>
        <li className='w-[70%] bg-b'>
            <p>{profitLoss}</p>
        </li>
        <li className='w-[70%] bg-b'>
            <p>{value}</p>
        </li>
    </ul>
  )
}

export default Portfolio