type icon = {
    icon: any, 
}

function Icon({icon} : icon) {
    
  return (
    <div className="sm:text-2xl text-xl">
        <button className="p-[10px] border-b border-gray-300 outline-none rounded-full hover:scale-110 hover:duration-[0.2s] text-[--accent]">
            {icon}
        </button>
    </div>
  )
}

export default Icon