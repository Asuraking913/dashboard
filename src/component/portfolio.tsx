import React from 'react'
import { BiArrowToBottom, BiArrowToTop } from "react-icons/bi";

type portfolioProps = {
        asset: string,
        balance: string, 
        buyPrice: string,
        profitLoss: string,
        value: string, 
        symbol: string,
}

function Portfolio({asset, balance, buyPrice, profitLoss, value, symbol} : portfolioProps) {

    const green = ['ETH', 'ADA', "BNB"]

  return (
    <ul className='flex text-[0.9rem] pop gap-[20px] items-center'>
        <li className='w-full flex items-center gap-[5px]'>
        {/* chain landmark */}
            <div className='w-[40px] h-[40px] bg-black rounded-f'>

            </div>
            <p>{asset}</p>
            <p className='text-[0.8rem] text-gray-400'>{symbol}</p>
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