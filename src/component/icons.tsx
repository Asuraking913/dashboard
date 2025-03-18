type icon = {
    icon: any, 
    text: string
}

function Icon({icon, text} : icon) {
    
  return (
    <div className="text-2xl">
        <button className="p-[10px] border-b border-gray-300 outline-none rounded-full hover:scale-110 hover:duration-[0.2s] text-[--accent]">
            {icon}
        </button>
    </div>
  )
}

export default Icon