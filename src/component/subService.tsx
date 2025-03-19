
type service = {
  icons: any,
  text: string,
  percent: string
}

function Subservice({icons, text, percent} : service) {
  return (
    <div className="text-[0.9rem] p-[20px] bg-black">
        {text}
    </div>
  )
}

export default Subservice