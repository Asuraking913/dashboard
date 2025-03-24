import Portfolio from './portfolio'
import { HiDotsHorizontal } from 'react-icons/hi'
import Retension from './retention'
import bnb from "./../assets/bnb.png"
import btc from "./../assets/btc.png"
import cardana from "./../assets/cardana.png"
import sol from "./../assets/sol.png"
import eth from "./../assets/eth.png"

function Hero2() {

    type chainsProps = {
        asset: string,
        balance: string,
        buyPrice: string,
        profitLoss: string,
        value: string,
        symbol: string, 
        icon: any
    }

    type retensionProps = {
        percent: number, 
        month: string, 
        symbol: string, 
        interval: number
    }

    const chains:  chainsProps[] = [
        {
            asset: "Bitcoin", 
            symbol: "BTC",
            balance: "8,234", 
            buyPrice: "14,2023", 
            profitLoss: "8.43", 
            value: "120,477,234",
            icon: btc
        }, 
        {
            asset: "Ethereum", 
            symbol: "ETH",
            balance: "8,234", 
            buyPrice: "14,2023", 
            profitLoss: "8.43",
            value: "120,477,234",
            icon: eth
        }, 
        {
            asset: "Solana", 
            symbol: "SOL",
            balance: "8,234", 
            buyPrice: "14,2023", 
            profitLoss: "8.43",
            value: "120,477,234",
            icon: sol
        }, 
        {
            asset: "Cardino", 
            symbol: "ADA",
            balance: "8,234", 
            buyPrice: "14,2023", 
            profitLoss: "8.43",
            value: "120,477,234",
            icon: cardana
        }, 
        {
            asset: "Binance", 
            symbol: "BNB",
            balance: "8,234", 
            buyPrice: "14,2023", 
            profitLoss: "8.43",
            value: "120,477,234",
            icon: bnb
        }
    ]

    const retension: retensionProps[] = [
        {
            percent: 100, 
            month: "january", 
            symbol: "Jan", 
            interval: 40
        }, 
        {
            percent: 100, 
            month: "Feburary", 
            symbol: "Feb", 
            interval: 50
        }, 
        {
            percent: 100, 
            month: "March", 
            symbol: "Mar", 
            interval: 60
        }, 
        {
            percent: 100, 
            month: "April", 
            symbol: "Apr", 
            interval: 60
        }, 
        {
            percent: 100, 
            month: "May", 
            symbol: "May", 
            interval: 60
        }, 
        {
            percent: 100, 
            month: "June", 
            symbol: "Jun", 
            interval: 60
        }
    ]

    const retensionList = retension.map((items, i) => <Retension key={i} {...items}/>)

    const chainsList = chains.map((items, i) => <Portfolio key={i} {...items}/>)

  return (
    <section className='w-[100%]  flex gap-[5px]'>

        <section className='w-[100%] border-[1.5px] border-b-gray-300 rounded-[20px] h-full p-[10px] flex flex-col gap-[5px]'>
            <h2 className='urba text-[1.2rem] '>My Portfolio</h2>

                <div className='w-full flex flex-col gap-[5px]'>

                <ul className='flex text-[0.85rem] pop text-gray-400 mt-[10px] gap-[10px]'>
                    <li className='w-full bg-b'>
                        <p>ASSET</p>
                    </li>
                    <li className='w-[70%] bg-b'>
                        <p>BALANCE</p>
                    </li>
                    <li className='w-[80%] bg-b'>
                        <p>AVG.BUY PRICE</p>
                    </li>
                    <li className='w-[70%] bg-b'>
                        <p>PROFIT/LOSS</p>
                    </li>
                    <li className='w-[70%] bg-b'>
                        <p>VALUE</p>
                    </li>
                </ul>

                <div className='flex flex-col gap-[10px] '>
                    {chainsList}
                </div>

            </div>

        </section>

        <section className='w-[87%] h-full border-[1.5px] border-b-gray-300 rounded-[20px] p-[10px] flex flex-col gap-[20px]'>

            <div className='flex items-center justify-between text-[0.8rem] pop'>
                <div>
                    <h2 className='urba text-[1.1rem]'>Bitcoin Retention</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>

                <i className='text-[1.1rem] p-[8px] bg-white border-[1.5px] border-gray-300 rounded-full'>
                    <HiDotsHorizontal />
                </i>

            </div>

            <div className='flex flex-col gap-[5px]'>
                {retensionList}
            </div>

        </section>
        
    </section>
  )
}

export default Hero2