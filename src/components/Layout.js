import { Outlet } from "react-router-dom";

export default function Layout(){
    return(
        <div id="container">
            <header>
            <h1>MOVIE SEARCH</h1>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}