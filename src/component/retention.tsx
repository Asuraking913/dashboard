type retension = {
    percent: number,
    symbol: string,
    interval: number
}

function Retension({percent, symbol, interval} : retension) {
  return (
    <ul className="flex gap-[5px] items-center justify-start text-[0.9rem]">
        <li className="p-[10px] text-center text-gray-400 pop w-full">
            <p>{symbol}</p>
        </li>
        <li className={`p-[10px] text-center text-[--white] pop ${"bg-[--accent]"} w-[90%] rounded-[4px]`}>
            <p>{percent}</p>
        </li>
        <li className={`p-[10px] text-center text-[--white] pop ${percent - interval < 70 ? "bg-[--accent1]" : "bg-[--accent]"} w-[90%] rounded-[4px]`}>
            <p>{percent - interval}</p>
        </li>
        <li className={`p-[10px] text-center text-[--white] pop ${percent - interval < 70 ? "bg-[--accent2]" : "bg-[--accent1]"} w-[90%] rounded-[4px]`}>
            <p>{percent - interval - 10}</p>
        </li>
        <li className={`p-[10px] text-center text-[--white] pop ${percent - interval < 70 ? "bg-[--accent3]" : "bg-[--accent2]"} w-[90%] rounded-[4px]`}>
            <p>{percent - interval - 20}</p>
        </li>
        <li className={`p-[10px] text-center text-[--white] pop ${percent - interval < 70 ? "bg-[--accent4]" : "bg-[--accent3]"} w-[90%] rounded-[4px]`}>
            <p>{percent - interval - 30}</p>
        </li>
        <li className={`p-[10px] text-center text-[--white] pop ${percent - interval < 70 ? "bg-[--accent5]" : "bg-[--accent4]"} w-[90%] rounded-[4px]`}>
            <p>{percent - interval - 40}</p>
        </li>
        
        
    </ul>
  )
}

export default Retension