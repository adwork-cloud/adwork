import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./Footer";

export default function Layout() {
    return (
        <>
            <Navbar />
            <main className="container">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}