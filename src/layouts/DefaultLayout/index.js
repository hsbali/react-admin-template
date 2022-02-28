import { Outlet, Link } from "react-router-dom";

export default function DefaultLayout({ homeRoute }) {
    return (
        <>
            <header>
                <nav className={`flex gap-3 border-b-2 h-[75px] items-center px-4 fixed w-full`}>
                    <Link to={homeRoute}>
                        {/* <img src={} alt="logo" /> */}
                        <div className="text-3xl font-bold">Logo</div>
                    </Link>
                </nav>
            </header>
            <main className="pt-[75px]">
                <Outlet />
            </main>
        </>
    )
}