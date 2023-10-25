/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom"

function Nav(props) {
    return (
        <>
           <nav className="navbar navbar-expand d-flex justify-content-around">
                <span className="container-fluid">Blog Front End 2</span>
                <ul className="container d-flex flex-row justify-content-evenly" style={{listStyle: 'none'}} >
                    <Link to='/'>
                        <li className="nav-item">
                            Home
                        </li>
                    </Link>
                    <Link to='/create'>
                        <li className="nav-item">
                            Create Post
                        </li>
                    </Link>
                </ul>
           </nav>
        </>
    )
}

export default Nav