import Html from '../assets/skills/html5.webp';
import css from '../assets/skills/icons8-css-128.png';
import js from '../assets/skills/javascript.webp';
import ts from '../assets/skills/typescript.webp';
import reacT from '../assets/skills/react.webp';
import tailwind from "../assets/skills/tailwindcss.webp";
import nodE from "../assets/skills/nodejs.webp"
import expresS from "../assets/skills/express-js.webp"
import prisma from "../assets/skills/prisma (1).webp"
import mongodb from "../assets/skills/mongodb-240.webp"
import postgres from "../assets/skills/icons8-postgres-200.png"
import cplus from "../assets/skills/cplusplus.webp"
import python from "../assets/skills/python.webp"
import git from "../assets/skills/git.webp";
import vs from "../assets/skills/vscode.webp";
import postman from "../assets/skills/postman.1edcc07b.svg"
 
export const Skill = () => {
    return (
        <div >
            <div className="flex flex-col items-center mt-28 " >
                <h1 className="text-3xl font-bold mb-8">My Skills</h1>
                <p className="text-slate-400 text-xl mb-4">Web Development</p>
                <p className="text-slate-300 text-lg mt-10">Frontend Development</p>
            </div>

            <div className="flex flex-wrap justify-center mt-10 gap-6">
                <div className="flex flex-col items-center group">
                    <img src={Html} alt="HTML" className="w-16 h-16 transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:opacity-90" />
                    <span className="mt-2 text-white">HTML</span>
                </div>
                <div className="flex flex-col items-center group">
                    <img src={css} alt="CSS" className="w-16 h-16 transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:opacity-90" />
                    <span className="mt-2 text-white">CSS</span>
                </div>
                <div className="flex flex-col items-center group">
                    <img src={tailwind} alt="CSS" className="w-16 h-16 transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:opacity-90" />
                    <span className="mt-2 text-white">Tailwindcss</span>
                </div>
                <div className="flex flex-col items-center group">
                    <img src={js} alt="JavaScript" className="w-16 h-16 transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:opacity-90" />
                    <span className="mt-2 text-white">JavaScript</span>
                </div>
                <div className="flex flex-col items-center group">
                    <img src={ts} alt="TypeScript" className="w-16 h-16 transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:opacity-90" />
                    <span className="mt-2 text-white">TypeScript</span>
                </div>
                <div className="flex flex-col items-center group">
                    <img src={reacT} alt="React" className="w-16 h-16 transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:opacity-90" />
                    <span className="mt-2 text-white">React</span>
                </div>
            </div>

            <div className="mt-10">
                <p className="text-slate-300 text-lg flex justify-center">Backend Development</p>
                <div className="flex flex-wrap justify-center mt-10 gap-6">
                    <div className="flex flex-col items-center group">
                        <img src={nodE} alt="Node.js" className="w-16 h-16 transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:opacity-90" />
                        <span className="mt-2 text-white">Node.js</span>
                    </div>
                    <div className="flex flex-col items-center group">
                        <img src={expresS} alt="Express" className="w-16 h-16 transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:opacity-90 filter invert" />
                        <span className="mt-2 text-white">Express</span>
                    </div>
                    <div className="flex flex-col items-center group">
                        <img src={prisma} alt="Prisma" className="w-16 h-16 transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:opacity-90 filter invert" />
                        <span className="mt-2 text-white">Prisma</span>
                    </div>
                    <div className="flex flex-col items-center group">
                        <img src={mongodb} alt="MongoDB" className="w-16 h-16 transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:opacity-90" />
                        <span className="mt-2 text-white">MongoDB</span>
                    </div>
                    <div className="flex flex-col items-center group">
                        <img src={postgres} alt="PostgreSQL" className="w-16 h-16 transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:opacity-90" />
                        <span className="mt-2 text-white">PostgreSQL</span>
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <p className="text-slate-300 text-lg flex justify-center">Languages & Tools</p>
                <div className="flex flex-wrap justify-center mt-10 gap-6">
                    <div className="flex flex-col items-center group">
                        <img src={cplus} alt="C++" className="w-16 h-16 transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:opacity-90" />
                        <span className="mt-2 text-white">C++</span>
                    </div>
                    <div className="flex flex-col items-center group">
                        <img src={python} alt="Python" className="w-16 h-16 transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:opacity-90" />
                        <span className="mt-2 text-white">Python</span>
                    </div>
                    <div className="flex flex-col items-center group">
                        <img src={js} alt="JavaScript" className="w-16 h-16 transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:opacity-90" />
                        <span className="mt-2 text-white">JavaScript</span>
                    </div>
                    <div className="flex flex-col items-center group">
                        <img src={git} alt="Git" className="w-16 h-16 transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:opacity-90" />
                        <span className="mt-2 text-white">Git</span>
                    </div>
                    <div className="flex flex-col items-center group">
                        <img src={vs} alt="Visual Studio Code" className="w-12 h-14 mt-1 transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:opacity-90" />
                        <span className="mt-3 text-white">VS Code</span>
                    </div>
                    <div className="flex flex-col items-center group">
                        <img src={postman} alt="Postman" className="w-14 h-14 mt-2 transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:opacity-90" />
                        <span className="mt-2 text-white" id='Contact'>Postman</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
