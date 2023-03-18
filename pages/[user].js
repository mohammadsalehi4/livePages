import { useRouter } from "next/router"
import Layout from "@/components/Layout"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { GoVerified } from "react-icons/go";
import Profile from "@/components/profile";

function userPage(){
    const States = useSelector(state => state);
    const dispatch = useDispatch();
    const router = useRouter()
    const { user } = router.query

    const [getName,SetgetName]=useState()
    const [info,SetInfo]=useState()
    const [imageAdd,SetImageAdd]=useState(undefined)
    const [buttonMode,SetbuttonMode]=useState(false)

    useEffect(()=>{
        SetgetName(user)
    },[user])

    useEffect(()=>{
        const myUser=States.people.find((pItem)=>pItem.name===getName)
        SetInfo(myUser)
    },[getName])

    useEffect(()=>{
        if(info!=undefined){
            SetImageAdd(info.image)
        }
    },[info])

    const roomSelect=()=>{
        SetbuttonMode(true)
    }

    const reqSelect=()=>{
        SetbuttonMode(false)
    }

    useEffect(()=>{
        const getEl1=document.getElementById('room')
        const getEl2=document.getElementById('question')
        if(buttonMode){
            if(typeof getEl1 !== 'undefined' && getEl1 !== null && typeof getEl2 !== 'undefined' && getEl2 !== null) {
                getEl1.style.zIndex=2;
                getEl2.style.zIndex=1;
                getEl1.style.background="white"
                getEl2.style.background="rgb(70, 70, 70)"
                getEl1.style.color="black"
                getEl2.style.color="white"
            }
        }else{
            if(typeof getEl1 !== 'undefined' && getEl1 !== null && typeof getEl2 !== 'undefined' && getEl2 !== null) {
                getEl1.style.zIndex=1;
                getEl2.style.zIndex=2;
                getEl1.style.background="rgb(70, 70, 70)"
                getEl2.style.background="white"
                getEl1.style.color="white"
                getEl2.style.color="black"
            }
        }
    },[buttonMode])

    return (
        <Layout title={user}>
            {
            imageAdd!=undefined?
                <div id="userProfile">
                    <div id="userDataBox">
                        <img src={imageAdd} id="profImage"/>
                        <div className="userProfNumbers first">
                            <h1>{info.followers}</h1>
                            <h2>followers</h2>
                        </div>

                        <div className="userProfNumbers">
                            <h1>{info.supporters}</h1>
                            <h2>supporters</h2>
                        </div>

                        <div className="userProfNumbers">
                            <h1>{info.following}</h1>
                            <h2>following</h2>
                        </div>
                        <div id="userInformation">
                            <h1>{info.name} <GoVerified id="icon"/></h1>
                            <h2>@{info.userId}</h2>
                            <h3>{info.description}</h3>
                            <h4>{info.email}</h4>
                        </div>
                        <div id="userProfileButton">
                            <button id="first">Follow</button>
                            <button>Message</button>
                            <button>...</button>
                        </div>
                    </div>
                    <div id="userQuestionBox">
                        <h1 id="room" onClick={roomSelect}>Room</h1>
                        <h2 id="question" onClick={reqSelect}>Question</h2>
                    </div>
                    <div id='profileBox'>
                        {States.people.map((item)=>(
                            <Profile userid={item.id} key={item.userid}></Profile>
                        ))}
                    </div>
                </div>
            :
                null
            }
        </Layout>
    )
}

export default userPage