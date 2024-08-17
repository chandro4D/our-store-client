import { Helmet } from "react-helmet-async";
// import useAxiosPublic from "../../Hook/useAxiosPublic";

import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
    // const axiosPublic = useAxiosPublic();

    const [showPassword, setShowPassword] = useState(false);
    const [registerError, setRegisterError] = useState("");
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();

    const location = useLocation();
    console.log(location);

    // const from = location.state?.from?.pathname || "/";

    const { createUser, googleLogin  } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        console.log(email, password, name);

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters');
            Swal.fire({
                icon: "error",
                text: "Password should be at least 6 characters!",

            });
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one upper case letter');

            Swal.fire({
                icon: "error",
                text: "Your password should have at least one upper case letter!",

            });
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError('Your password should have at least one lower case letter');
            Swal.fire({
                icon: "error",
                text: "Your password should have at least one lower case letter!",

            });
            return;
        }
        setRegisterError('');
        setSuccess('');

        createUser(email, password, name)
            .then(result => {

                console.log(result.user);
                
                setSuccess("Account Created successfully");
                Swal.fire({
                    icon: "success",
                    text: "Account Created successfully!",
                    
                  });
                
                
                // .then()
                navigate("/");
            })
            .catch(error => {
                console.log(error);
                setRegisterError(error.message);
            })
    }
    //--------- Google Login-----------
    const handleGoogleLogin = e => {
        e.preventDefault();
        googleLogin()
        .then(result =>{
            console.log(result.user)
            Swal.fire({
                icon: "success",
                text: "LogIn successfully!",
                
              });
            navigate(location?.state ? location.state : '/');
        })
        .catch(error =>{
            console.log(error.message);
            alert(error.message)
        })


    }

    return (
        <div className="pt-10 flex justify-center items-center">
            <div className="w-full max-w-lg lg:w-[500px] lg:h-[600px] sm:w-[400px] sm:h-[550px] bg-gray-600 mx-5 sm:mx-auto mb-10 rounded-xl">
                <Helmet>
                    <title>OurStore | Register</title>
                </Helmet>
                <div className="pt-10">
                    <h2 className="text-center text-2xl font-bold text-white mb-2">WELCOME TO OUR STORE</h2>
                    <p className="text-center text-xl font-semibold text-black">Register to your account</p>
                </div>
                <form onSubmit={handleRegister} className="pt-8 px-5 sm:px-12">
                    <div className="w-full h-[50px]">
                        <input className="w-full h-full rounded-lg text-center" type="text" placeholder="Your Name" required name="name" />
                    </div>
                    <br />
                    <div className="w-full h-[50px]">
                        <input className="w-full h-full rounded-lg text-center" type="email" placeholder="Your Email" required name="email" />
                    </div>
                    <br />
                    <div className="flex items-center">
                        <div className="w-full">
                            <input className="text-black rounded-lg text-center w-full h-[50px]" placeholder="Password" required
                                type={showPassword ? "text" : "password"} name="password" />
                        </div>
                        <div className="ml-2 cursor-pointer">
                            <span onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash className="w-6 h-6" /> : <FaEye className="w-6 h-6" />}
                            </span>
                        </div>
                    </div>
                    <br />
                    <div className="w-full h-[50px] bg-lime-400 rounded-2xl">
                        <button className="w-full h-full text-white">Register</button>
                    </div>
                </form>
                {registerError && <p className="text-red-700 text-center text-xl font-semibold mt-5">{registerError}</p>}
                {success && <p className="text-green-500 text-center text-xl font-semibold mt-5">{success}</p>}
                <br />
                <div className="flex justify-center">
                    <button onClick={handleGoogleLogin} className="text-center pt-1">
                        <FcGoogle className="w-10 h-10" />
                    </button>
                </div>
                <div className="mt-4">
                    <h3 className="text-center text-xl font-medium text-amber-600">Already Have An Account? <Link to={"/login"}><span className="text-lime-300">LOGIN</span></Link></h3>
                </div>
            </div>
        </div>
    );
};

export default Register;



// import { Helmet } from "react-helmet-async";
// // import useAxiosPublic from "../../Hook/useAxiosPublic";

// import { useContext, useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../Provider/AuthProvider";


// const Register = () => {

//     // const axiosPublic = useAxiosPublic();

//     const [showPassword, setShowPassword] = useState(false);
//     const [registerError, setRegisterError] = useState("");
//     const [success, setSuccess] = useState('');

//     const navigate = useNavigate();

//     const location = useLocation();
//     console.log(location);

//     // const from = location.state?.from?.pathname || "/";

//     const { createUser, googleLogin  } = useContext(AuthContext);

//     const handleRegister = e => {
//         e.preventDefault();
//         const email = e.target.email.value;
//         const password = e.target.password.value;
//         const name = e.target.name.value;
//         console.log(email, password, name);

//         if (password.length < 6) {
//             setRegisterError('Password should be at least 6 characters');
//             Swal.fire({
//                 icon: "error",
//                 text: "Password should be at least 6 characters!",

//             });
//             return;
//         }
//         else if (!/[A-Z]/.test(password)) {
//             setRegisterError('Your password should have at least one upper case letter');

//             Swal.fire({
//                 icon: "error",
//                 text: "Your password should have at least one upper case letter!",

//             });
//             return;
//         }
//         else if (!/[a-z]/.test(password)) {
//             setRegisterError('Your password should have at least one lower case letter');
//             Swal.fire({
//                 icon: "error",
//                 text: "Your password should have at least one lower case letter!",

//             });
//             return;
//         }
//         setRegisterError('');
//         setSuccess('');

//         createUser(email, password, name)
//             .then(result => {

//                 console.log(result.user);
                
//                 setSuccess("Account Created successfully");
//                 Swal.fire({
//                     icon: "success",
//                     text: "Account Created successfully!",
                    
//                   });
                
                
//                 // .then()
//                 navigate("/");
//             })
//             .catch(error => {
//                 console.log(error);
//                 setRegisterError(error.message);
//             })
//     }
//     //--------- Google Login-----------
//     const handleGoogleLogin = e => {
//         e.preventDefault();
//         googleLogin()
//         .then(result =>{
//             console.log(result.user)
//             Swal.fire({
//                 icon: "success",
//                 text: "LogIn successfully!",
                
//               });
//             navigate(location?.state ? location.state : '/');
//         })
//         .catch(error =>{
//             console.log(error.message);
//             alert(error.message)
//         })


//     }

//     return (
//         <div className="pt-10">
//             <div className="lg:w-[500px] lg:h-[600px] sm:w-[400px] sm:h-[550px] bg-gray-600 lg:ml-[500px] sm:ml-0  mb-10 rounded-xl">
//                 <Helmet>
//                     <title>OurStore | Register</title>
//                 </Helmet>
//                 <div className=" pt-10">
//                     <h2 className="text-center text-2xl font-bold text-white mb-2">WELCOME TO OUR STORE</h2>
//                     <p className="text-center text-xl font-semibold text-black">Register to your account </p>
//                 </div>
//                 <form onSubmit={handleRegister} className="pt-8 lg:pl-12 sm:pl-0">
//                     <div className=" lg:w-[400px] sm:w-[250px] h-[50px]">
//                         <input className="w-full h-full rounded-lg text-center" type="name" placeholder="Your Name" required name="name" />
//                     </div>
//                     <br />
//                     <div className=" lg:w-[400px] sm:w-[250px] h-[50px]">
//                         <input className="w-full h-full rounded-lg text-center" type="email" placeholder="Your Email" required name="email" />
//                     </div>
//                     <br />
//                     <div className="flex ">
//                         <div className="w-[400px] " >
//                             <input className="text-black rounded-lg text-center w-full     h-[50px]" placeholder="password" required
//                                 type={showPassword ? "text" : "password"} name="password" />
//                         </div>
//                         <div className="mt-3  ">
//                             <span className="" onClick={() => { setShowPassword(!showPassword) }}>
//                                 {
//                                     showPassword ? <FaEyeSlash className="w-10 h-5"></FaEyeSlash> : <FaEye className="w-10 h-5"></FaEye>
//                                 }
//                             </span>
//                         </div>
//                     </div>
                    


//                     <br />
//                     <div className=" lg:w-[400px] sm:w-[250px]]  h-[50px] bg-lime-400 rounded-2xl">
//                         <button className="w-full h-full text-white"> Register</button>
//                     </div>
//                 </form>
//                 {
//                     registerError && <p className="text-red-700 text-center text-xl font-semibold mt-5">{registerError}</p>
//                 }
//                 {
//                     success && <p className="text-green-500 text-center text-xl font-semibold mt-5">{success}</p>
//                 }
//                 <br />
//                 <div className="flex  ml-[240px]   ">
//                     <div  >
//                         <button onClick={handleGoogleLogin} className=" mr-8    text-center pt-1 "><FcGoogle className="w-10 h-10"></FcGoogle></button>
//                     </div>

//                 </div>
//                 <div>
//                     <h3 className="text-center text-xl font-medium text-amber-600">Already Have An Account? <Link to={"/login"}><span className="text-lime-300" >LOGIN</span></Link></h3>
//                 </div>
//                 <div>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Register;