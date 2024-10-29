import finsyc from "../assets/Projects/finsync.png"
import Medium from '../assets/Projects/Medium.png';
import trimmr from "../assets/Projects/trimmr.png"
import zen from "../assets/Projects/zen-tasks.png"
import { ProjectCard } from "../components/ProjectCard"


export const Project = () =>{
    return (
        <div>
            <div className=" mt-36">
            <h1 className="flex justify-center text-4xl font-bold mb-4 ">Projects</h1>
            </div>
           <div className="flex flex-col sm:flex-row md:flex-row  lg:flex-row mt-10 md:ml-[68px] sm:ml-[68px] lg:ml-[68px] sm:mr-[68px]justify-center ">

            <ProjectCard 
            img = {Medium}
            title = "Medium Clone"
            description = " A feature-rich blogging platform enabling seamless blog creation, viewing, and user authentication."
            techStack={['React', 'TailwindCSS', 'TypeScript', 'Cloudflare Workers', 'Hono', 'Prisma', 'PostgreSQL']}
            website="https://medium-clone-neon-gray.vercel.app/"
            />
               
           <ProjectCard 
            img = {trimmr}
            title = "Trimmr"
            description = "A URL shortener with features for efficient link management and detailed analytics"
            techStack={['React', 'TailwindCSS', 'Shadcn', 'Supabase']}
            website="https://trimmrr.vercel.app/"
            />
            </div>
          
           <div className="flex flex-col sm:flex-row md:flex-row  lg:flex-row mt-10 ml-[68px] sm:mr-[68px]">

            <ProjectCard 
            img = {finsyc}
            title = "Finsync"
            description = "A user-friendly platform for virtual financial transactions with demo balances and secure simulations"
            techStack={['React', 'Node.js', 'TailwindCSS', 'MongoDB']}
            website="https://finsync.vercel.app/"
            />
           

           <ProjectCard 
            img = {zen}
            title = "Zen-Tasks"
            description = "implement CRUD operations and ensure tasks are stored and retrieved from the backend."
            techStack={['React', 'Node.js', 'TailwindCSS', 'MongoDB']}
             website="https://zen-tasks-fullstack.netlify.app/"
            />

           </div>
            <div className="flex justify-center m-14">
            <div className="border-box border-2 h-8 w-32 bg-black text-white flex justify-center rounded-lg hover:bg-white hover:text-black cursor-pointer" 
            id = "Skill"
            >
                <a href="https://github.com/PankajKumardev" target="_blank">All Projects</a>
            </div>
            </div>
           </div>
    )
}
