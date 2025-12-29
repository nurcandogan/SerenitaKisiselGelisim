import { Outlet } from "react-router-dom"
import NavbarNav from "./components/NavbarNav"

const RootLayout = () => {
    return(
        <>
        <NavbarNav/>
        <Outlet/>
        </>
    )
}

export default RootLayout;