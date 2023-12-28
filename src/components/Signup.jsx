import React from "react";
import { useState } from "react";
import {  useNavigate} from "react-router-dom";

import { Client, Account, ID } from "appwrite";

const client = new Client().setEndpoint("https://cloud.appwrite.io/v1").setProject("64727897859f4a7915f7")

const Signup = () => {

const navigate = useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const postUserForm = (e) => {
  e.preventDefault()
  const account = new Account(client)
  account.create(ID.unique(), email, password, name)
  .then(response =>{
    console.log(response);
    navigate("/profile")
  }, error => {
    console.log(error);
  })

}
console.log(postUserForm);
  return (
    <>
      {/* <div className="w-[500px] h-full flex flex-col bg-[#f5f5f5] pr-20 pl-8 justify-between ">
        <div className=" w-full flex flex-col">
          <div>
            <h3 className=" mb-2 mt-3 font-semibold text-2xl">sign up</h3>
            <p className="text-sm mb-3"> Welcome! Please enter your details</p>
          </div>
          <div>
            <form className="space-y-6" action="#" method="POST">
              <div className=" mt-1 w-full flex flex-col">
                <label htmlFor="name">name</label>
                <input
                  id="name"
                  name="name"
                  value={name}
                  placeholder="name"
                  required
                  className="text-[13px] appearance-none px-2 bg-transparent block w-full py-1 text-black border-b border-black outline-none focus:outline-none mb-3"
                  onChange={(e) => {
                    setName(e.target.value);
                  }
                  
                }
                  
                />
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
                  onClick={postUserForm}
                  className="bg-[#060606] text-center  text-white px-6 text-[12px] py-1 rounded-md mb-8"
                >
                  Sign in
                </button>
              </div>
            </form>
            <div className="w-full flex justify-center items-center relative py-2">
              <div className="w-full bg-[#060606] h-[1px]"></div>
              <p className="text-[#060606]/80 bg-[#f5f5f5] absolute">or</p>
            </div>
          </div>
        </div>
      </div> */}


<section className="container h-screen mx-auto flex">
        <div className="flex-grow flex flex-col max-w-xl justify-center p-6">
          <h1 className="text-6xl font-bold">Sign Up</h1>
          <p className="mt-4">
            {" "}
            Already have an account ?{" "}
            <span
              className="cursor-pointer underline"
              
            >
              Login
            </span>{" "}
          </p>
          <form onSubmit={Signup}>
            <label className="block mt-6"> Name</label>
            <input
              className="w-full p-4 placeholder-gray-400 text-gray-700 bg-white text-lg border-0 border-b-2 border-gray-400 focus:ring-0 focus:border-gray-900"
              type="text"
              onChange={(e) => setName(e.target.value)}
              name="name"
              autoComplete="name"
            />

            <label className="block mt-6"> Email</label>
            {/* “Don’t worry if it doesn’t work right. If everything did, you’d be out of a job.”  */}
            <input
              className="w-full p-4 placeholder-gray-400 text-gray-700 bg-white text-lg border-0 border-b-2 border-gray-400 focus:ring-0 focus:border-gray-900"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              autoComplete="email"
            />
            <label className="block mt-6"> Password</label>
            <input
              className="w-full p-4 placeholder-gray-400 text-gray-700 bg-white text-lg border-0 border-b-2 border-gray-400 focus:ring-0 focus:border-gray-900"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              autoComplete="password"
            />

            <div className="mt-6">
              <button
                type="submit"
                onClick={postUserForm}
                disabled={!name || !email || !password}
                className="mx-auto mt-4 py-4 px-16 font-semibold rounded-lg shadow-md bg-gray-900 text-white border hover:border-gray-900 hover:text-gray-900 hover:bg-white focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Signup;
