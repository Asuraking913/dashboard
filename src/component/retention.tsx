type retension = {
    percent: number,
    month: string,
    symbol: string,
    interval: number
}

function Retension({percent, month, symbol, interval} : retension) {
  return (
    <ul className="flex gap-[10px]">
        <li>
            <p>{symbol}</p>
        </li>
        <li className="p-[10px] bg-[--accent]">
            <p>{percent}</p>
        </li>
        
    </ul>
  )
}

export default Retension