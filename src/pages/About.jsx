import resume from "../assets/resume.pdf"
export const About = () => {
    return (
        <div className="flex flex-col items-center mt-28 px-4">
            <h1 className="text-4xl font-bold mb-4">About</h1>
            <p className="w-full max-w-lg p-4 text-base text-slate-300 text-center">
                My name is Pankaj Kumar, and I’m a Full Stack Developer always ready for the next big challenge 💻. Driven by a passion for learning and staying ahead of tech trends 🚀, I’ve honed skills that span frontend, backend, and everything in between. Whether it's crafting sleek interfaces with React or building robust backends with Node.js, I’m your go-to problem solver 🎯. My superpower? 💪 Adapting quickly and delivering solutions that make an impact 📈. When I’m not coding, you’ll find me sharing knowledge or picking up something new 📚.
            </p>

            <div className="mt-10">
                <h2 className="text-2xl font-bold text-center">Learn more about my:</h2>
                <div className="mt-6 flex flex-wrap justify-center gap-6">
                    <div className="box-border p-4 border-2 cursor-pointer border-gray-300 rounded-lg shadow-md hover:bg-white transition duration-300 ease-in-out w-28 h-13 text-slate-100 hover:text-black flex items-center justify-center">
                        <a href="#Skill" className="font-semibold">Skills</a>
                    </div>
                    <div className="box-border p-4 border-2 cursor-pointer border-gray-300 rounded-lg shadow-md hover:bg-white transition duration-300 ease-in-out w-28 h-13 text-slate-100 hover:text-black flex items-center justify-center">
                        <a href="#Project" className="font-semibold">Projects</a>
                    </div>
                    <div className="box-border p-4 border-2 cursor-pointer border-gray-300 rounded-lg shadow-md hover:bg-white transition duration-300 ease-in-out w-28 h-13 text-slate-100 hover:text-black flex items-center justify-center"  >
                        <a href={resume} className="font-semibold " id="Project" >Resume</a>
                    </div>
                </div>
            </div>
        </div>
    )
 }
