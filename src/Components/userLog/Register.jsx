import { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const Register = () => {
    const {registerUser} = useContext(authContext)
    const [error,setError]= useState()

    const handleRegister = e=>{
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        setError('')

        if(password.length < 6){
            setError("password must be 6 characters")
            return
        }
        if(!/\d/.test(password)){
            setError('password must be a number')
            return
        }
        if(password !== confirmPassword) {
            setError("password didn't match")
            return
        }
        
        

        registerUser(email,password)
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{
            setError(error.message)
        })
        // console.log(name,photo,email,password,confirmPassword)
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" placeholder="Your Photo" name="photo" className="input input-bordered" />
                        </div>
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
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="password" name="confirmPassword" className="input input-bordered" required />
                        </div>
                        {
                            error && <small className="text-red-500">{error}</small>
                        }
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">REGISTER</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;