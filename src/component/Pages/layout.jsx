import {Outlet, Link} from "react-router-dom"
const Layout = () =>{
    return(
        <>
            <nav>
                <ul>
                    <li>
                       <Link to="/">Home</Link> 
                    </li>
                    <li>
                       <Link to="/">Explore</Link> 
                    </li>
                    <li>
                       <Link to="/">Notifications</Link> 
                    </li>
                    <li>
                       <Link to="/">Messages</Link> 
                    </li>
                    <li>
                       <Link to="/">Bookmarks</Link> 
                    </li>
                    <li>
                       <Link to="/">lists</Link> 
                    </li>
                    <li>
                       <Link to="/">profile</Link>
                    </li>
                    <li>
                       <Link to="/">More</Link> 
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}
export default Layout