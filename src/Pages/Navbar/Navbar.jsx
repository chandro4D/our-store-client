// import { useContext } from "react";
// import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../../Provider/AuthProvider";
// import Swal from "sweetalert2";
// import { CiLogout } from "react-icons/ci";
// import useCart from "../../../Hook/useCart";


const Navbar = () => {
    // const [cart] = useCart(); 
    // const { user, logOut } = useContext(AuthContext);


    // const handleSignOut = () => {
    //     // logOut()
    //         .then(result => {

    //             Swal.fire({
    //                 icon: "success",
    //                 text: "LogOut successfully!",

    //             });
    //             console.log(result.user);
    //         })
    //         .catch()
    // }

    const Links = <>
        <li className="text-xl mt-3  "><Link to="/">Home</Link></li>

        <li className="text-xl mt-3"><Link to="/login">LogIn</Link></li>
        <Link to="/register"><li ><a className="btn btn-secondary mt-3 text-xl text-white ">Join Us</a></li></Link>


        {/* <li className="text-xl align-top mt-[6px]"><Link to="cart">
            <button className="btn">
                <FaCartPlus></FaCartPlus> 
                
               <div className="badge badge-secondary">+{cart.length}</div>
            </button>
        </Link></li> */}


        {/* {
            user ?
                <>
                    <div className=" tooltip tooltip-bottom mr-5" data-tip={user.displayName || user.email}  >
                        <div className="dropdown dropdown-bottom">
                            <div tabIndex={0}  className=" m-1"><img className="rounded-full mt-2 w-14" src={user.photoURL || "https://web.programming-hero.com/static/media/profileImage.934e5b10.png"} /></div>
                            <ul tabIndex={0} className="dropdown-content text-black z-[1] menu p-6 shadow bg-gradient-to-r from-cyan-500 to-blue-500 rounded-box w-72">
                                <Link to="/updateProfile"><li className="font-semibold"><a>Update Profile</a></li></Link>
                                <Link to='dashboard/cart'><li className="font-semibold"><a>Dashboard</a></li></Link>
                                <li><a><button onClick={handleSignOut} className="btn bg-white w-[120px] font-bold  text-red-600 text-base  ">Logout<CiLogout className="text-2xl" /></button></a></li>
                            </ul>
                        </div>
                    </div>


                </>
                :
                <>
                    
                </>

        } */}

    </>
    return (
        <div className="navbar  z-10 bg-sky-500 w-full text-white lg:h-32  ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {Links}
                    </ul>
                </div>
                <div className="">
                    <a className="text-white text-4xl font-medium ml-[100px]  pt-3"> <span className="text-purple-600">O</span>ur<span className="text-purple-600">S</span>tore</a>
                </div>
            </div>
            <div className=" hidden lg:flex ml-[300px] ">
                <ul className="menu menu-horizontal ">
                    {Links}
                </ul>
            </div>



        </div>
    );
};

export default Navbar;