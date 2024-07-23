import {users } from "../dummyData/data.js"
import User from "../models/user.model.js";

const userResolver = {
  Mutation: {
    signUp: async(_,{input},context) =>{
      try {
        const {username,name,password,gender} =input;

        if(!usernae || !name || !password || !gender){
          throw new Error("all fields are required");
        }
        const existingUser = await User.findOne({username});
        if(existingUser){
          throw new  Error("User already exists");
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
          username,
          name,
          password:hashedPassword,
          gender,
        })

        await newUser.save();
        await context.login(newUser);
        return newUser;

      } catch (err){
        console.error("error in signUp:", err);
        throw new Error(err.message || "internal server error");
      }
    },
    login: async(_,{input},context) => {
      try {
        const {username,password} = input;
        const {user} = await context.authenticate("graphql-local", {username,password});

        await context.login(user);
        return user;

      } catch (error) {
        console.error("error in login:", err);
        throw new Error(err.message || "internal server error");

      }
    },
    logout: async(_,__,context) =>{
      try{
        await context.logout();
        req.session.destroy((err) => {
          if(err) throw err;
        });

        res.clearCookie("connect.sid");
        return {message: "logged out successfully"};
      } catch (err) {
        console.error("error in logout:",err);
        throw new Error(err.message || "internal server error");
      }
    }
  },
    Query: {
      authUser: async(_,__,context) => {
        try{
          const user = await context.getUsrt();
          return user;

        } catch (error) {
          console.error("error in authUser:", err);
        throw new Error(err.message || "internal server error");

        }
      },
      
      users: async(_, { userId }) => {
        try {
          const user = await User.findById(userId);
          return user;
        } catch(err) {
          console.error("error in login:", err);
        throw new Error(err.message || "internal server error");
        }
      },
    },
    User: {
      transactions: async (parent) => {
        try {
          const transactions = await transactionResolver.find({ userId: parent._id});
          return transactions;
        } catch (err) {
          console.log("error in user.transactions resolver:",err);
          throw new Error(err.message || "internal server error");
        }
      },
    },
    
};

export default userResolver