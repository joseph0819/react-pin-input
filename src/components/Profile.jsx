import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { account } from "../appwrite/appwriteConfig";
import TodoForm from "./TodoForm";
import Todos from "./Todos";

const Profile = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState("");

  useEffect(() => {
    const getData = account.get();
    getData.then(
      (response) => {
        setUserDetails(response);
        console.log(userDetails);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [userDetails]);

  const deleteUser = async (e) => {
    e.preventDefault();
    try {
      await account.deleteSession("current");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {userDetails ? (
        <div>
          <div className="min-h-min mx-auto mt-8  max-w-[1000px] flex flex-row justify-between px-[30px]  shadow-md sm:  ">
            <p className="text-[30px] mb-[20px]">
              {" "}
              Welcome{" "}
              <span className="text-red-400 text-[25px]">
                {userDetails.name}
              </span>
              <p className="text-[20px] py-[3px]">{userDetails.email}</p>{" "}
            </p>

            <div>
              <button
                className="bg-red-400 text-white rounded-md mt-8 p-1"
                onClick={deleteUser}
              >
                logout
              </button>
            </div>
          </div>

          {/* TODO FORM */}
          <TodoForm />
          {/* TODO BOX */}
          <Todos />
        </div>
      ) : (
        <>
          <p className="mt-4">
            Please login to see profile
            <Link to="/">
              <span className="bg-blue-300 cursor-pointer p-2 text-white">
                login
              </span>
            </Link>
          </p>
        </>
      )}
    </>
  );
};

export default Profile;
