import React from "react";
import { useState } from "react";

import { ID,Databases,Client } from "appwrite";

const TodoForm = () => {
  const [todo, setTodo] = useState("");

  const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64727897859f4a7915f7");;

const databases = new Databases(client);

 


  const handleSubmit = (e) => {
    e.preventDefault();
    
    const promise= databases.createDocument("647a7e317cb81f7aa169","647a7f395f54e475eb6b", "ID.unique()", {
        todo,
      })
      promise.then(
        function(response) {
          console.log(response);
        },
        function (error) {
          console.log(error);
        }
        
      );
    e.target.reset()
    console.log(promise)
  };
  
 
  return (
    <div>
      <form
        action="#" method="POST"
        className="flex justify-center mb-10"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          id=""
          name=""
          placeholder="enter todo"
          onChange={(e) =>{
            setTodo(e.target.value)
            console.log(e.target.event);
          }
        }
          
          className="mt-8 border rounded-md p-2 w-2/3 text-black border-b border-black outline-none focus:outline-none"
        />
        
        <button className="rounded-md bg-purple-500 p-[2px] mt-8 text-white ml-2 font-semibold">
          Add todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
