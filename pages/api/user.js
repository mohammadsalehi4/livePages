import db from "@/utils/db"
import User from "@/models/user";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


async function handler(req,res){
    const States = useSelector(state => state);
    const dispatch = useDispatch();
    
    const data={
        name:'mohammad',
        userid:'msalehi79',
        password:12345678,
        followed:[]
    }

    await db.connect()

    await User.insertMany(data)

    //res.send({message:'added'})
}

export default handler