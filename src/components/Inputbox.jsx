export function InputBox({label,placeholder,onChange}) {
    return <div>
        <input required onChange={onChange} placeholder={placeholder} className="sm:mb-0  w-[280px] px-2 py-1 border rounded border-[#262626] text-slate-300 bg-[#08090A] focus:outline-none focus:border-[#4A4A4A] focus:ring-1 focus:ring-[#4A4A4A] transition duration-300 ease-in resize-none "  />
    </div>
}