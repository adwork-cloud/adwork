import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";
import Footer from "./Footer";

export default function Layout() {
    return (
        <>
            <TopNav />
            <main className="container">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}