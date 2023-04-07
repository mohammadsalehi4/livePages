import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/utils/db";
import User from "@/models/user";

export default NextAuth({
    session:{
        strategy:'jwt'
    },
    callbacks:{
        async  jwt({token,user}){
            if(user ?._id) token._id=user._id

            //har parametr digeii ham mishe dar token gharar dad

            return token
        },

        async session({session,token}){
            if(token?._id) session.user._id=token._id
            //baraye baghie parametr haii ke dar token hast ham bayad benevisim
            return token
        },

        providers:[
            CredentialsProvider({
                async authorize(credentials){
                    await db.connect()
                    const user=await User.findOne({
                        userId:credentials.userId
                    })
                }
            })
        ]
    }
})