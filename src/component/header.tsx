import { MdDriveFolderUpload } from "react-icons/md";

function Header() {
  return (
    <div className="p-[10px] flex items-start justify-between w-full text-[0.9rem]">

        <div>
          <h1 className="text-3xl urba">Overview dashboard</h1>
          <p className=" text-[--accent]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>

        <div className="flex items-center gap-[20px]">
          <div className="p-[8px] border-[1.8px] border-[--accent] rounded-[4px]">
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