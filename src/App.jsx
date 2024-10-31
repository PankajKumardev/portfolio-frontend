
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Skill } from './pages/Skills'
import { Project } from './pages/Project'
import { Contact } from "./pages/Contact"
import { SocialCards } from './components/SocialCards'
import { Analytics } from "@vercel/analytics/react"
function App() {

  return (
   <div className='h-screen flex  justify-center '>
      <Analytics />
    <div className="text-[#FAFAFA]">
    <Navbar></Navbar>
    <Home/>
    <About/>
    <Project/>
    <Skill />
    <Contact/>
    <SocialCards />
    </div>
   </div>
  )
}

export default App
