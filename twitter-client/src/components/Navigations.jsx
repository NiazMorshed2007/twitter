import { BsBell, BsBookmark, BsEnvelope, BsHash, BsHouseDoor, BsList, BsPerson, BsSearch, BsThreeDots, BsTwitter } from 'react-icons/bs'
import PrimaryButton from './PrimaryButton'

const Navigations = () => {

    const navigations = [
        {
            name: 'Home',
            icon: <BsHouseDoor className="text-2xl" />
        },
        {
            name: 'Explore',
            icon: <BsHash className="text-2xl" />
        },
        {
            name: 'Notifications',
            icon: <BsBell className="text-2xl" />
        },
        {
            name: 'Messages',
            icon: <BsEnvelope className="text-2xl" />
        },
        {
            name: 'Bookmarks',
            icon: <BsBookmark className="text-2xl" />
        },
        {
            name: 'Lists',
            icon: <BsList className="text-2xl" />
        },
        {
            name: 'Profile',
            icon: <BsPerson className="text-2xl" />
        },
    ]

    return <aside className="w-3/12 h-screen border-r flex py-7 pt-3 flex-col items-center justify-between border-borderColor">
        <div className="top w-8/12">
            <BsTwitter className="text-3xl mt-4 ml-4 text-primary" />
            <div className="navs-wrapper mt-7 w-full">
                {navigations.map((nav, index) => (
                    <div key={index} className="flex text-[18px] cursor-pointer items-center gap-5 w-full p-3 rounded-3xl hover:bg-hoverColor hover:font-medium">
                        {nav.icon} {nav.name}
                    </div>
                ))}
            </div>
            <PrimaryButton style={"w-full p-3 mt-4 rounded-3xl"}>Tweet</PrimaryButton>
        </div>

        <div className="bottom w-8/12">
            <div className="profile flex w-full items-center gap-7 justify-between px-3 p-4 pr-5 rounded-full hover:bg-hoverColor">
                <div className="left flex item-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary">
                        <BsTwitter className="text-2xl text-white" />
                    </div>
                    <div className="description">
                        <h1>Twitter HQ</h1>
                        <p className='text-gray text-xs'>@twitter_hq</p>
                    </div>
                </div>
                <BsThreeDots />
            </div>
        </div>
    </aside>
}

export default Navigations