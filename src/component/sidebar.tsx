import Icon from './icons'
import { HiOutlineChartBarSquare } from "react-icons/hi2";
import { GiChart } from "react-icons/gi";
import { LuFileSpreadsheet } from "react-icons/lu";
import { MdOutlineSettings } from "react-icons/md";


function Sideicons() {

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
    <section className='flex p-[20px] flex-col gap-[30px] justify-center h-[80vh] w-[10%]'>
        {iconsList}
    </section>
  )
}

export default Sideicons