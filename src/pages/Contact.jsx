import { useState } from "react";
import axios from "axios";
import { InputBox } from "../components/Inputbox";

export const Contact = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [statusMessage, setStatusMessage] = useState(""); 
    const [isLoading, setIsLoading] = useState(false); 

    const handleSubmit = async () => {
        setIsLoading(true);
        setStatusMessage(""); 
        try {
            const response = await axios.post('https://portfolio-backend-iota-drab.vercel.app', {
                name,
                email,
                description,
            });
            setStatusMessage("Message sent successfully!");
        } catch (error) {
            setStatusMessage("An error occurred. Please try again.");
        } finally {
            setIsLoading(false); 
        }
    };

    return (
        <div className="mt-28 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-4 text-center">Contact</h1>
                <p className="text-3xl sm:text-4xl font-bold mt-14 text-slate-200 text-center">
                    Get in Touch
                </p>
                <div className="text-lg text-slate-300 mt-6">
                    <p className="m-5 text-center">
                        Want to connect? Feel free to drop me a message on my{' '}
                        <a href="https://www.linkedin.com/in/pankajkumardev0/" target="_blank" rel="noopener noreferrer" className="text-blue-500">
                            LinkedIn
                        </a>
                    </p>
                    <p className="text-center">Catch you there! ✨</p>
                </div>

                <div className="flex flex-col sm:flex-row mt-10 pl-3 pr-16 gap-3 ">
                    <div className=" lg:ml-[70px]  md:ml-[70px] sm:w-1/2">
                        <InputBox
                            placeholder="Full Name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className=" sm:w-1/2">
                        <InputBox
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>

                <div className="mt-5 flex justify-center">
                    <textarea
                        className="w-full max-w-xl h-48 px-4 py-2 border border-[#262626] rounded-lg text
                        text-slate-300 bg-[#08090A] focus:outline-none focus:border-[#4A4A4A] focus:ring-1 focus:ring-[#4A4A4A] transition duration-300 ease-in resize-none"
                        placeholder="Your Message"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className="pb-32 flex flex-col items-center">
                    <button
                        onClick={handleSubmit}
                        type="submit"
                        className="mt-4 bg-white text-black text-primary-foreground whitespace-nowrap rounded-md text-sm font-medium focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow hover:bg-primary/90 h-9 px-4 py-2 w-full max-w-lg flex justify-center items-center gap-1 transition"
                        disabled={isLoading}
                    >
                        {isLoading ? "Sending..." : "Send Message"}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-send-horizontal"
                        >
                            <path d="m3 3 3 9-3 9 19-9Z"></path>
                            <path d="M6 12h16"></path>
                        </svg>
                    </button>
                    {statusMessage && (
                        <p className={`mt-4 text-center ${statusMessage.startsWith("An error") ? "text-red-500" : "text-green-500"}`}>
                            {statusMessage}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};
