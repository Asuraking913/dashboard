import { MdDriveFolderUpload } from "react-icons/md";

function Header() {
  return (
    <div className="p-[10px] flex sm:items-start items-end sm:gap-0 gap-[10px] justify-between w-full text-[0.9rem]">

        <div>
          <h1 className="sm:text-3xl text-2xl urba">Overview dashboard</h1>
          <p className="sm:text-[1rem] text-[0.8rem] text-[--accent]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>

        <div className="flex sm:flex-row flex-col items-center sm:gap-[20px] gap-[10px] ">
          <div className="sm:p-[8px] p-[6px] border-[1.8px] border-[--accent] rounded-[4px] sm:block hidden">
              Lorem ipsum dolor sit amet.
          </div>

          <button className="bg-[--accent] p-[10px] text-[--white] rounded-[5px] flex items-center gap-[5px]">
            <i className="text-[1.2rem]"><MdDriveFolderUpload /></i>
            <span>
              Export
            </span>
          </button>
        </div>
      </div>
  )
}

export default Header