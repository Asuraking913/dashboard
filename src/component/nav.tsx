import { MdOutlineTextsms } from "react-icons/md";
import { CiBrightnessDown } from "react-icons/ci";
import { CiInboxIn } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";



function Nav() {

  const [nav, setNav] = useState<boolean>(false)
  const handleNav = (e: any) => {
    e.preventDefault()

    setNav(prev => !prev)
    console.log(nav)
  }

  return (
    <div className="p-[15px] bg-[--white] border-b-gray00 border-[1.5px] flex items-center justify-between fixed top-0 w-full">

        <div className="flex items-center justify-center gap-[60px]">

            <p className="text-xl urba font-semibold">Fullmoon.</p>
            
            <ul className={`sm:flex ${ nav ? "fixed w-full h-screen left-0 top-0 bg-[#0000007c] flex items-center flex-col" : "hidden"} items-center justify-center text-[0.85rem] pop gap-[10px] text-[--accent]`}>
                <li className={`${nav && "bg-[--accent] w-[60%] text-[--white] text-center p-[10px] rounded-[20px]"}`}>Crytocurrency</li>
                <li className={`${nav && "bg-[--accent] w-[60%] text-[--white] text-center p-[10px] rounded-[20px]"}`}>Exchange</li>
                <li className={`${nav && "bg-[--accent] w-[60%] text-[--white] text-center p-[10px] rounded-[20px]"}`}>Crytocurrency</li>
                <li className={`${nav && "bg-[--accent] w-[60%] text-[--white] text-center p-[10px] rounded-[20px]"}`}>Community</li>
                <li className={`${nav && "bg-[--accent] w-[60%] text-[--white] text-center p-[10px] rounded-[20px]"}`}>Learn</li>
            </ul>


        </div>

        <ul className="flex items-center gap-[10px]">

          <i className="sm:text-2xl text-xl sm:p-[8px] p-[8px] border-[0.5px] border-gray-300 rounded-full"><CiInboxIn /></i>
          <i className="sm:text-2xl text-xl sm:p-[8px] p-[8px] border-[0.5px] border-gray-300 rounded-full"><CiBrightnessDown /></i>
          <i className="sm:text-2xl text-xl sm:p-[8px] p-[8px] border-[0.5px] border-gray-300 rounded-full"><MdOutlineTextsms /></i>

        </ul>
        {

          !nav
          &&
          <button className="sm:hidden" onClick={(e) => handleNav(e)}>
          <i className="text-[1.3rem] text-[--accent]">
            <FaBars />
          </i>
        </button>
        
        }
        { nav 

          &&

          <button className="sm:hidden fixed top-[15%] left-[10%]" onClick={(e) => handleNav(e)}>
          <i className="text-[2rem] text-[--accent]">
            <FaTimes />
          </i>
        </button>
        
        }

    </div>
  )
}

export default Nav