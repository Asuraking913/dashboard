import Nav from "../component/nav"
import Sideicons from "../component/sidebar"
import Header from "../component/header"
import Hero1 from "../component/hero1"
import Hero2 from "../component/hero2"

function Dashboard() {

  
  return (
    <section className="sm:pt-[80px] pt-[60px] flex ">

      <Nav />

      <Sideicons />

      <article className="w-full sm:pr-[10px] h-screen overflow-scroll hide-scrollbar flex flex-col gap-[5px] py-[10px]">

        <Header />

        <Hero1 />

        <Hero2 />

      </article>
        
    </section>
  )
}

export default Dashboard