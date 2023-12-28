// import React from "react";
// import { createMachine } from "xstate";
// import { useMachine } from "@xstate/react";
// const trafficLightMachine = createMachine({
//   initial: "red",
//   states: {
//     red: {
//       on: {
//         TIMER: "yellow",
//       },
//     },
//     yellow: {
//       on: {
//         TIMER: "green",
//       },
//     },
//     green: {
//       on: {
//         TIMER: "red",
//       },
//     },
//   },
// });
// function App() {
//   const [current, send] = useMachine(trafficLightMachine);
//   return (
//     <div className="flex flex-col items-center h-screen mt-8">
//       <div className="w-24 h-64 border-2 border-gray-400 rounded-lg bg-gray-200 flex flex-col justify-between p-2">
//         <div
//           className={`w-12 h-12 rounded-full mx-auto ${
//             current.matches("red") ? "bg-red-500" : "bg-gray-500"
//           }`}
//         />
//         <div
//           className={`w-12 h-12 rounded-full mx-auto ${
//             current.matches("yellow") ? "bg-yellow-500" : "bg-gray-500"
//           }`}
//         />
//         <div
//           className={`w-12 h-12 rounded-full mx-auto ${
//             current.matches("green") ? "bg-green-500" : "bg-gray-500"
//           }`}
//         />
//       </div>
//       <button
//         className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//         onClick={() => send("TIMER")}
//       >
//         Next
//       </button>
//     </div>
//   );
// }
// export default App;

import React from "react";
import { useMachine } from "@xstate/react";
import { createMachine } from "xstate";

// Define the state machine
const toggleMachine = createMachine(
  {
    id: "toggle",
    initial: "off",
    states: {
      on: {
        on: {
          TOGGLE: "off",
        },
      },
      off: {
        on: {
          TOGGLE: "on",
        },
      },
    },
  },
  // Define context (if needed)
  {
    // You can include any context data here
  }
);

const App = () => {
  // Use useMachine to create a machine instance
  const [current, send] = useMachine(toggleMachine);

  return (
    <div>
      <button onClick={() => send("TOGGLE")}>
        {current.matches("on") ? "Turn Off" : "Turn On"}
      </button>
      <p>The button is {current.value}</p>
    </div>
  );
};

export default App;


