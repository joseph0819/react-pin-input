import React from 'react'
import { useState } from "react";
import {  useNavigate} from "react-router-dom";
import { account } from '../appwrite/appwriteConfig';

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

const userLogin = async (e) => {
  e.preventDefault()
  try {
   await account.createEmailSession(email,password)
    navigate("/profile ")
 } catch (error) {
   console.log(error);
 }
}

  return (
    <div>
      <>
      <div className="w-[500px] h-full flex flex-col bg-[#f5f5f5] pr-20 pl-8 justify-between ">
        <div className=" w-full flex flex-col">
          <div>
            <h3 className=" mb-2 mt-3 font-semibold text-2xl">sign up</h3>
            <p className="text-sm mb-3"> Welcome! Please enter your details</p>
          </div>
          <div>
            <form className="space-y-6" action="#" method="POST">
              <div className=" mt-1 w-full flex flex-col">
                
                <label htmlFor="email">email</label>
                <input
                  id="email"
                  name="email"
                  placeholder="email"
                  value={email}
                  className=" text-[13px] appearance-none px-2 block bg-transparent w-full my-2 py-1 text-black border-b border-black outline-none focus:outline-none mb-3"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <label htmlFor="password">password</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={password}
                  placeholder="password"
                  required
                  className=" text-[13px] appearance-none block w-full bg-transparent px-2 my-2 py-1 text-black border-b border-black outline-none focus:outline-none mb-3"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="w-full flex items-center justify-between mb-8">
                <div className="w-full flex items-center">
                  <input type="checkbox" className="w-2 h-2 mr-2" />
                  <p className="text-sm">Remember me</p>
                </div>
                <p className="underline underline-offset-2 text-sm cursor-pointer whitespace-nowrap ">
                  {" "}
                  forgot password?
                </p>
              </div>
              <div className=" w-full flex items-center justify-between mb-2">
                <p className="text-[#060606] text-sm font-normal">
                  Don't have an account?{""}
                  <span className="  font-medium text-sm underline underline-offset-1 cursor-pointer ">
                    sign up for free
                  </span>
                </p>
              </div>

              <div className="w-full flex ">
                <button
                  onClick={userLogin}
                  className="bg-[#060606] text-center  text-white px-6 text-[12px] py-1 rounded-md mb-8"
                >
                  Log in
                </button>
              </div>
            </form>
            <div className="w-full flex justify-center items-center relative py-2">
              <div className="w-full bg-[#060606] h-[1px]"></div>
              <p className="text-[#060606]/80 bg-[#f5f5f5] absolute">or</p>
            </div>
          </div>
        </div>
      </div>
    </>

    </div>
  )
}

export default Login
