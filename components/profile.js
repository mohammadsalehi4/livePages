import { useState } from "react"
import { useEffect } from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function Profile({userid}){
    const States = useSelector(state => state);
    const dispatch = useDispatch();

    const [user,setUser]=useState({})

    useEffect(()=>{
        const prof=States.people.find((item)=>item.id===userid)
        setUser(prof)
    },[])

    return (
        <a href={user.name} id="profile" style={{backgroundImage: `url(${user.image})`}}>
            <h2>
                Live
            </h2>
            <h3>{user.name}</h3>
        </a>
    )
}

export default Profile