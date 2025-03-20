
type service = {
  icons: any,
  text: string,
  percent: string, 
  color1: string, 
  color2: string
}

function Subservice({icons, text, percent, color1, color2} : service) {
  return (
    <div className="text-[0.8rem] pop pt-[20px] flex flex-col gap-[15px] border-l-gray-200 border-l-[1.5px] px-[10px]">
        <div className="flex gap-[10px]">

          <i className={`text-[1.4rem] p-[5px] px-[8px] rounded-full ${color2} ${color1} flex items-center justify-between`}>
            {icons}
          </i>

          <p>
            {text}
          </p>
        </div>

        <p className="text-[2rem] urba">
          {percent}%
        </p>
    </div>
  )
}

export default Subservice