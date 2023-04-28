import Header from "../components/Header"
import Login from "../components/Login"

export default function login(){
    return(
        <div className="bg-white h-[100vh]">
             <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
                />
                <div className=" grid place-content-center">
                <div className="w-full">
                <Login/>
                </div>
                
                </div>
           
        </div>
    )
}