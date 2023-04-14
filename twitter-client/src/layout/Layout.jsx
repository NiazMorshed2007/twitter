import BreadCrumb from "@/components/BreadCrumb"
import Navigations from "@/components/Navigations"
import Sidebar from "@/components/Sidebar"
import { Inter } from "@next/font/google"

const inter = Inter({ subsets: ["latin"] })

const Layout = ({ children, breadCrumb }) => {
    return <main className={`${inter.className} w-screen flex `}>
        <Navigations />
        <div className="main w-1/2">
            <BreadCrumb />
            {children}</div>
        <Sidebar />
    </main>
}


export default Layout