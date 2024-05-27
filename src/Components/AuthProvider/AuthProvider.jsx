import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup,GoogleAuthProvider,onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../Firebase/firebase.config";



export const authContext= createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser]= useState('user to nai  vaio')
    const googleProvider = new GoogleAuthProvider();

    const registerUser= (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
        
    }
    const loginUser= (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
        
    }
    // google sign in process
    const googleLogin = ()=>{
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth, (currentUser) => {
            
            if (currentUser) {
              setUser(currentUser)
            } else {
              setUser(null)
            }
            return ()=>{
                unsubscribe()
            }
          });
    }
          ,[])



    const authInfo={registerUser,loginUser,user,setUser,googleLogin,logOut}
    
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