import { BsSearch } from "react-icons/bs"

const Sidebar = () => {
    return <aside className="w-3/12 border-l border-borderColor p-5">
        <div className="relative">
            <BsSearch className="absolute top-1/2 -translate-y-1/2 left-4 text-gray" />
            <input type="text" className="w-full p-3 pl-12 outline-none text-sm bg-hoverColor rounded-full placeholder:text-sm" placeholder="Search Twitter..." />
        </div>
    </aside>
}

export default Sidebar