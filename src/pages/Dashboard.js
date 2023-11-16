import { useEffect,useState } from "react"
import { UserDetailApi } from "../services/Api"
import NavBar from "../components/NavBar"
import { logout,isAuthenticated } from "../services/Auth"
import { useNavigate,Navigate } from "react-router-dom"


export default function DashboardPage(){
    const navigate=useNavigate();
    const [user,setUser]=useState({name:"",age:"",email:"",localId:""})
    useEffect(()=>{
        if(isAuthenticated())
    {
        UserDetailApi().then((response)=>{
            console.log(response);
           setUser({
            name:response.data.users[0].displayName,
            email:response.data.users[0].email,
            age:response.data.users[0].displayAge,
            localId:response.data.users[0].localId,
        })
        })
    }
    },[])
    const logoutUser =()=>{
        logout();
        navigate('/login')
    }
    if(!isAuthenticated()){
        //redirect
        return <Navigate to="/login" />
    }

    return(
    <div>
        <NavBar logoutUser={logoutUser}/>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <main role="main" className="container mt-5">
            <div className="container">
              <div className="text-center mt-5">
              <br></br>
                <h4>Dashboard</h4>
                <br></br>
                {user.name&&user.email&&user.localId?
                (<div>
                    <p className="text-bold " ><b>NAME:</b>{user.name}</p>
                    <p><b>ID:</b>{user.localId}</p>
                    <p><b>EMAIL:</b> {user.email}</p>
                </div>):<p>Loading...</p>
                }
                 <br></br>
              </div>
            </div>
        </main>
    </div>
    )
}
