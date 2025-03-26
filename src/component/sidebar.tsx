import Icon from './icons'
import { HiOutlineChartBarSquare } from "react-icons/hi2";
import { GiChart } from "react-icons/gi";
import { LuFileSpreadsheet } from "react-icons/lu";
import { MdOutlineSettings } from "react-icons/md";
import React from 'react';
import { motion } from 'framer-motion';

interface SideIconsProps {
  toogleIcon: Boolean,
  // onToogleIcon: React.Dispatch<React.SetStateAction<Boolean>>
}

const Sideicons: React.FC<SideIconsProps> = ({toogleIcon}) => {

  type iconsProp = {
    icon: any,
    text: string
  }

    const icons: iconsProp[] = [
    {
      icon: <HiOutlineChartBarSquare />,
      text: ""
    }, 
    {
      icon: <GiChart />,
      text: ""
    }, 
    {
      icon: <LuFileSpreadsheet />,
      text: ""
    }, 
    {
      icon: <MdOutlineSettings />,
      text: ""
    }, 
    {
      icon: <MdOutlineSettings />,
      text: ""
    }
  ]

  const iconsList = icons.map((items, i) => <Icon key={i} {...items}/>)

  return (
    <motion.section
    initial={{
      
    }}
     className={`sm:flex ${ toogleIcon ? "flex fixed left-0 bg-white h-[50vh] top-[30%] rounded-[20px] shadow-sm shadow-[black]" : "hidden w-[8%]"} p-[20px] flex-col gap-[30px] justify-center h-[80vh] `}>
        
        {iconsList}
    </motion.section>
  )
}

export default Sideicons