const initialState={
    profileImage:"/images/prof.jpg",
    money:150,
    notifNumber:3,
    username:"Mohammad",
    people:[{
        name:"nicolas",
        followers:259,
        supporters:17,
        following:211,
        image:"/images/profile1.jpg",
        id:1,
        userId:"nick223",
        description:"hello this is example description.",
        email:"nicolas@gmail.com"
    },
    {
        name:"robert",
        followers:259,
        supporters:17,
        following:112,
        image:"/images/profile2.jpg",
        id:2,
        userId:"rob_rob",
        description:"hello this is example description.",
        email:"robert@gmail.com"
    },
    {
        name:"kevin",
        followers:259,
        supporters:26,
        following:198,
        image:"/images/profile3.jpg",
        id:3,
        userId:"kevin_hero",
        description:"hello this is example description.",
        email:"kevin@gmail.com"
    },
    {
        name:"dakota",
        followers:259,
        supporters:29,
        following:337,
        image:"/images/profile4.jpg",
        id:4,
        userId:"iamdakota",
        description:"hello this is example description.",
        email:"dakota@gmail.com"
    },
    ]
}

const reducer=(state=initialState,action)=>{
    
    return state
}

export default reducer