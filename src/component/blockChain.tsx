import React from 'react'

type blockChain = {
    chain: string, 
    price: string, 
    color: string, 
    index: number, 
    icon: any
}

function Blockchain({chain, price, color, index, icon} : blockChain) {

    const green = ['ETH', 'ADA']

  return (
    <div className={`pop text-[0.8rem] w-full ${index === 0 ? "h-full" : "h-[80%]"}  p-[8px] rounded-[15px] ${color} flex flex-col justify-between`}>
        <div className='flex justify-between items-center'>
            <p>{chain}</p>

            <i className={`text-[1rem] ${green.includes(chain) ? "text-green-400" : "text-red-400 p-[3px]"} bg-white rounded-full`}>{icon}</i>
        </div>


        <p className='text-[1rem]'>
            ${price}
        </p>
    </div>
  )
}

export default Blockchain