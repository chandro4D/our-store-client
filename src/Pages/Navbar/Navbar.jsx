import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then((result) => {
                Swal.fire({
                    icon: "success",
                    text: "LogOut successfully!",
                });
                console.log(result.user);
            })
            .catch();
    };

    const Links = (
        <>
            <li className="text-xl mt-3 text-gray-950">
                <Link to="/">Home</Link>
            </li>
            {user ? (
                <li className="text-xl mt-3 text-gray-950">
                    <button onClick={handleSignOut}>LogOut</button>
                </li>
            ) : (
                <li className="text-xl mt-3 text-gray-950">
                    <Link to="/login">LogIn</Link>
                </li>
            )}
            <li className="mt-[20xl]">
                <Link to="/register">
                    <a className="btn btn-secondary text-xl text-white">Join Us</a>
                </Link>
            </li>
        </>
    );

    return (
        <div className="navbar z-10 bg-sky-500 w-full text-white lg:h-32">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {Links}
                    </ul>
                </div>
                <div className="ml-4 lg:ml-[100px] pt-3">
                    <a className="text-white text-3xl lg:text-4xl font-medium">
                        <span className="text-purple-600">O</span>ur
                        <span className="text-purple-600">S</span>tore
                    </a>
                </div>
            </div>
            <div className="hidden lg:flex lg:ml-[300px]">
                <ul className="menu menu-horizontal space-x-4">{Links}</ul>
            </div>
        </div>
    );
};

export default Navbar;










// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../Provider/AuthProvider";
// import Swal from "sweetalert2";

// const Navbar = () => {
//     const { user, logOut } = useContext(AuthContext);


//     const handleSignOut = () => {
//         logOut()
//             .then(result => {

//                 Swal.fire({
//                     icon: "success",
//                     text: "LogOut successfully!",

//                 });
//                 console.log(result.user);
//             })
//             .catch()
//     }

//     const Links = <>
//         <li className="text-xl mt-3  "><Link to="/">Home</Link></li>

        
//         {
//             user? <><button onClick={handleSignOut} className="text-xl mt-3"><Link to="/register">LogOut</Link></button></> : <><li className="text-xl mt-3"><Link to="/login">LogIn</Link></li></>
//         }
//         <Link to="/register"><li ><a className="btn btn-secondary mt-3 text-xl text-white ">Join Us</a></li></Link>

//     </>
//     return (
//         <div className="navbar  z-10 bg-sky-500 w-full text-white lg:h-32  ">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                     </div>
//                     <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//                         {Links}
//                     </ul>
//                 </div>
//                 <div className="">
//                     <a className="text-white text-4xl font-medium ml-[100px]  pt-3"> <span className="text-purple-600">O</span>ur<span className="text-purple-600">S</span>tore</a>
//                 </div>
//             </div>
//             <div className=" hidden lg:flex ml-[300px] ">
//                 <ul className="menu menu-horizontal ">
//                     {Links}
//                 </ul>
//             </div>



//         </div>
//     );
// };

// export default Navbar;