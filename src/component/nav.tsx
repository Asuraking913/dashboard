import { MdOutlineTextsms } from "react-icons/md";
import { CiBrightnessDown } from "react-icons/ci";
import { CiInboxIn } from "react-icons/ci";



function Nav() {
  return (
    <div className="p-[15px] border-b-gray00 border-[1.5px] flex items-center justify-between fixed top-0 w-full">

        <div className="flex items-center justify-center gap-[60px]">

            <p className="text-xl urba font-semibold">Fullmoon.</p>
            
            <ul className="flex items-center justify-center text-[0.85rem] pop gap-[10px] text-[--accent]">
                <li>Crytocurrency</li>
                <li>Exchange</li>
                <li>Crytocurrency</li>
                <li>Community</li>
                <li>Learn</li>
            </ul>


        </div>

        <ul className="flex items-center gap-[10px]">

          <i className="text-2xl p-[8px] border-[0.5px] border-gray-300 rounded-full"><CiInboxIn /></i>
          <i className="text-2xl p-[8px] border-[0.5px] border-gray-300 rounded-full"><CiBrightnessDown /></i>
          <i className="text-2xl p-[8px] border-[0.5px] border-gray-300 rounded-full"><MdOutlineTextsms /></i>

        </ul>

    </div>
  )
}

export default Nav