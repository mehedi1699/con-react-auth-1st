import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../../Firebase/firebase.config";


export const authContext= createContext(null)



const AuthProvider = ({children}) => {
    const [user,setUser]= useState('user to nai  vaio')

    const registerUser= (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error);
    })
    }
    const loginUser= (email,password)=>{
         signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error);
    })
    }




    const authInfo={registerUser,loginUser}
    
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {
                    children
                }
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;