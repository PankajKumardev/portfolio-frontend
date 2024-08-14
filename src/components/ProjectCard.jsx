import { Stackbox } from "./stackbox";

export const ProjectCard = ({ img, title, description, techStack, website }) => {
    return ( 
        <div className="box-border border-2 w-full max-w-xs h-auto border-[#1A1B1C] rounded-lg shadow-md transition duration-300 ease-in text-slate-10 ml-4 bg-[#0c0e12] mb-4">
            <img src={img} alt="" className="lg:h-48 h-32 w-full object-fill sm:w-full md:w-full lg:w-full rounded-t-lg object-cover" />
            <h1 className="text-lg font-semibold mt-1 ml-1 mr-2">{title}</h1>
            <p className="text-slate-300 text-base ml-1 mr-2">{description}</p>
            <div className="flex flex-wrap mt-2 ml-1 mb-2">
                {techStack.map((skill, index) => (
                    <Stackbox key={index} skill={skill} />
                ))}
            </div>
            <div className=" w-20 border p-1 ml-2 mt-2 border-none rounded-lg bg-white text-center text-[#262626] text-sm h-7 flex items-center justify-center font-semibold mb-2 ml-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-globe size-3 "
                >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                    <path d="M2 12h20"></path>
                </svg> 
                <a className="text-sm ml-2 pr-1" href={website} target="_blank" rel="noopener noreferrer">Website</a>
            </div>
        </div>
    );
}
