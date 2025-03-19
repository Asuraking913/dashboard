import Nav from "../component/nav"
import Sideicons from "../component/sidebar"
import Header from "../component/header"
import Hero1 from "../component/hero1"

function Dashboard() {

  
  return (
    <section className="pt-[80px] flex ">

      <Nav />

      <Sideicons />

      <article className="w-full pr-[10px]">

        <Header />

        <Hero1 />
      </article>
        
    </section>
  )
}

export default Dashboard