import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";



const Home = () => {
    const user = useContext(authContext)
    console.log(user)
    return (
        <div>
            <h3>This is Home</h3>
        </div>
    );
};

export default Home;<h3>This is Home</h3>