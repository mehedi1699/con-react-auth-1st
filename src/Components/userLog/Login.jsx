import { useContext, useEffect } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const Login = () => {
    const {loginUser,setUser,googleLogin,user} = useContext(authContext)

    const location=useLocation()
    console.log(location)
    const nevigate = useNavigate()

    const handleLogin = e=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email,password)
        .then(result=>{
            setUser(result.user)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    const handleGoogleLogin =()=>{
        googleLogin()
        .then(result=> {setUser(result.user)
            nevigate(location.state)
        })
        .catch(error=> console.log(error.message))

    }
    // useEffect(()=>{
    //     if(user){
    //         nevigate(location.state)
    //     }
    // },[])


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">LOG IN</button>
                        </div>
                       
                    </form>
                    <button onClick={handleGoogleLogin} className=" mx-8 btn btn-secondary">Goole Login </button>
                </div>
            </div>
        </div>
    );
};

export default Login;