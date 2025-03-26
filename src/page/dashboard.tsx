import Nav from "../component/nav"
import Sideicons from "../component/sidebar"
import Header from "../component/header"
import Hero1 from "../component/hero1"
import Hero2 from "../component/hero2"
import { RiMenuAddFill } from "react-icons/ri";
import React, { useState } from "react"


function Dashboard() {

  const [toogleIcon, setToogleIcon] = useState<Boolean>(false)

  const handleToogle = (e: React.MouseEvent<HTMLButtonElement>) => {

    e.preventDefault()
    setToogleIcon(prev => !prev)

  } 
  
  return (
    <section className="sm:pt-[80px] pt-[60px] flex ">

      <Nav />

        <button onClick={(e) => handleToogle(e)} className={`fixed ${ toogleIcon ? "left-[21%] duration-[0.5s]" : "left-[10px] duration-[0.5s]"} sm:hidden bg-[#00000069] top-[50%] text-[--white] shadow-sm shadow-[--accent] p-[10px] text-[2rem] rounded-full`}>
          <RiMenuAddFill />
        </button>

      <Sideicons toogleIcon={toogleIcon} />

      <article className="w-full sm:pr-[10px] h-screen overflow-scroll hide-scrollbar flex flex-col gap-[5px] py-[10px]">

        <Header />

        <Hero1 />

        <Hero2 />

      </article>
        
    </section>
  )
}

export default Dashboard