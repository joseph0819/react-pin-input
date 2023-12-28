// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import Profile from "./components/Profile";

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/profile" element={<Profile />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import { Machine, assign } from 'xstate';
// import { useMachine } from '@xstate/react';

// const loginMachine = Machine({
//   id: 'login',
//   initial: 'idle',
//   context: {
//     username: '',
//     password: '',
//     error: null,
//   },
//   states: {
//     idle: {
//       on: {
//         SUBMIT: 'submitting',
//         RESET: {
//           target: 'idle',
//           actions: 'resetForm',
//         },
//       },
//     },
//     submitting: {
//       invoke: {
//         src: 'submitLogin',
//         onDone: 'success',
//         onError: {
//           target: 'idle',
//           actions: 'setError',
//         },
//       },
//     },
//     success: {
//       on: {
//         RESET: {
//           target: 'idle',
//           actions: 'resetForm',
//         },
//       },
//     },
//   },
// });

// function App() {
//   const [state, send] = useMachine(loginMachine, {
//     actions: {
//       resetForm: assign({ username: '', password: '', error: null }),
//       setError: assign({ error: (context, event) => event.data }),
//     },
//     services: {
//       submitLogin: async (context) => {
//         // Simulate a login request
//         await new Promise((resolve, reject) => {
//           setTimeout(() => {
//             if (context.username === 'user' && context.password === 'password') {
//               resolve('Login successful');
//             } else {
//               reject('Login failed');
//             }
//           }, 1000);
//         });
//       },
//     },
//   });

//   return (
//     <div>
//       <h2>Login Form</h2>
//       {state.value === 'success' ? (
//         <div>
//           <p>Login Successful!</p>
//           <button onClick={() => send('RESET')}>Reset</button>
//         </div>
//       ) : (
//         <div>
//           <input
//             type="text"
//             placeholder="Username"
//             value={state.context.username}
//             onChange={(e) => send({ type: 'CHANGE', field: 'username', value: e.target.value })}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={state.context.password}
//             onChange={(e) => send({ type: 'CHANGE', field: 'password', value: e.target.value })}
//           />
//           {state.context.error && <p style={{ color: 'red' }}>{state.context.error}</p>}
//           <button disabled={state.value === 'submitting'} onClick={() => send('SUBMIT')}>
//             {state.value === 'submitting' ? 'Logging in...' : 'Log In'}
//           </button>
//           <button onClick={() => send('RESET')}>Reset</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import { Machine, assign } from 'xstate';
// import { useMachine } from '@xstate/react';

// const trafficLightMachine = Machine({
//   id: 'trafficLight',
//   initial: 'red',
//   states: {
//     red: {
//       on: {
//         TIMER: 'green',
//       },
//     },
//     green: {
//       on: {
//         TIMER: 'yellow',
//       },
//     },
//     yellow: {
//       on: {
//         TIMER: 'red',
//       },
//     },
//   },
// });

// function TrafficLight() {
//   const [state, send] = useMachine(trafficLightMachine);

//   const lightClasses = {
//     red: 'bg-red-500',
//     green: 'bg-green-500',
//     yellow: 'bg-yellow-300',
//   };

//   return (
//     <div className="flex flex-col items-center justify-center">
//       <div
//         className={`w-16 h-48 border-2 border-black rounded-md ${lightClasses[state.value]}`}
//       ></div>
//       <button
//         className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         onClick={() => send('TIMER')}
//       >
//         Change Light
//       </button>
//     </div>
//   );
// }

// export default TrafficLight;

// import React, { useEffect } from 'react';
// import { createMachine } from 'xstate';
// import { useMachine } from '@xstate/react';

// const countMachine = createMachine({
//   initial: 'active',
//   context: {
//     count: 0,
//   },
//   states: {
//     active: {
//       on: {
//         INC: {
//           actions: 'increment',
//         },
//         DEC: {
//           actions: 'decrement',
//         },
//         SET: {
//           actions: 'setCount',
//         },
//       },
//     },
//   },
//   on: {
//     RESET: 'active',
//   },
// });

// function CountComponent() {
//   const [state, send] = useMachine(countMachine, {
//     actions: {
//       increment: (context) => {
//         context.count += 1;
//       },
//       decrement: (context) => {
//         context.count -= 1;
//       },
//       setCount: (context, event) => {
//         context.count = event.value;
//       },
//     },
//   });

//   useEffect(() => {
//     console.log(state.context.count);
//   }, [state.context.count]);

//   return (
//     <div>
//       <button onClick={() => send('INC')}>Increment</button>
//       <button onClick={() => send('DEC')}>Decrement</button>
//       <button onClick={() => send({ type: 'SET', value: 10 })}>Set to 10</button>
//       <button onClick={() => send('RESET')}>Reset</button>
//       <p>Count: {state.context.count}</p>
//     </div>
//   );
// }

// export default CountComponent;

// import React from "react";
// import { createMachine } from "xstate";
// import { useMachine } from "@xstate/react";

// const trafficLightMachine = createMachine({
//   /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOgCdIBiAFQEkBZAUQCUBtABgF1FQAHAe1i4ALrn74eIAB6IAjAFYALCXarVAJgAcANh0BOReoA0IAJ6J17dSXXy1Adk17n69dvkBfDybRY8hUlMwABtg-gB3GgYWDm4kEAEhUXFJGQQAZm17Em1bVUVNdh11WXV7E3MES2s81UdnPVd3Lx8MHAJiEigKMHwopjYuSUSRMQl4tMzs3Lt2AqLc0vKzRE1ZElnVWUUivXS5xS9vEHx+CDhJX3aA4cFRlInEAFptCuf5Egav7+d0lpArv5OhQILckmNUohDG8EJpsvJNOkkex7Pt1Ip0oo9P9AR1AiEwuEwfdxqA0m52DlarI9i57LIYdUSPZZrJ6dpMVj1Di2kDSN0wL1iclSdIofZlLV2Ok4XpNEoFDC9JSikj9qirBj5H8jkA */
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
//     <div className="flex flex-col items-center h-screen  mt-8">
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

// import React from 'react';
// import { useMachine } from '@xstate/react';
// import { createMachine, assign } from 'xstate';

// const formMachine = createMachine({
//   id: 'form',
//   initial: 'step1',
//   context: {
//     data: {
//       name: '',
//       email: '',
//       phone: '',
//     },
//   },
//   states: {
//     step1: {
//       on: {
//         NEXT: 'step2',
//         UPDATE: {
//           actions: assign({
//             data: (context, event) => ({
//               ...context.data,
//               [event.name]: event.value,
//             }),
//           }),
//         },
//       },
//     },
//     step2: {
//       on: {
//         PREV: 'step1',
//         NEXT: 'step3',
//         UPDATE: {
//           actions: assign({
//             data: (context, event) => ({
//               ...context.data,
//               [event.name]: event.value,
//             }),
//           }),
//         },
//       },
//     },
//     step3: {
//       on: {
//         PREV: 'step2',
//         SUBMIT: 'completed',
//         UPDATE: {
//           actions: assign({
//             data: (context, event) => ({
//               ...context.data,
//               [event.name]: event.value,
//             }),
//           }),
//         },
//       },
//     },
//     completed: {
//       on: {
//         START_OVER: 'step1', // Go back to the first step
//       },
//       type: 'final',
//     },
//   },
// });

// const MultiStepForm = () => {
//   const [state, send, service] = useMachine(formMachine);

//   const { data } = state.context;

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     send('UPDATE', { name, value });
//   };

//   const handleSubmit = () => {
//     // Handle form submission logic (e.g., send data to a server)
//     console.log('Form Data:', data);
//     send('SUBMIT');
//   };

//   const handleStartOver = () => {
//     service.send('START_OVER');
//   };

//   return (
//     <div className="max-w-xl mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Multi-Step Form</h1>
//       {state.matches('step1') && (
//         <div>
//           <h2 className="text-lg font-semibold">Step 1: Personal Information</h2>
//           <input
//             type="text"
//             name="name"
//             value={data.name || ''}
//             placeholder="Name"
//             onChange={handleInputChange}
//             className="w-full p-2 border rounded mb-4"
//           />
//           <button
//             onClick={() => send('NEXT')}
//             className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
//           >
//             Next
//           </button>
//         </div>
//       )}
//       {state.matches('step2') && (
//         <div>
//           <h2 className="text-lg font-semibold">Step 2: Contact Information</h2>
//           <input
//             type="email"
//             name="email"
//             value={data.email || ''}
//             placeholder="Email"
//             onChange={handleInputChange}
//             className="w-full p-2 border rounded mb-4"
//           />
//           <button
//             onClick={() => send('PREV')}
//             className="bg-gray-400 text-white p-2 rounded hover:bg-gray-600 mr-2"
//           >
//             Previous
//           </button>
//           <button
//             onClick={() => send('NEXT')}
//             className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
//           >
//             Next
//           </button>
//         </div>
//       )}
//       {state.matches('step3') && (
//         <div>
//           <h2 className="text-lg font-semibold">Step 3: Additional Information</h2>
//           <input
//             type="text"
//             name="phone"
//             value={data.phone || ''}
//             placeholder="Phone Number"
//             onChange={handleInputChange}
//             className="w-full p-2 border rounded mb-4"
//           />
//           <button
//             onClick={() => send('PREV')}
//             className="bg-gray-400 text-white p-2 rounded hover:bg-gray-600 mr-2"
//           >
//             Previous
//           </button>
//           <button
//             onClick={handleSubmit}
//             className="bg-green-500 text-white p-2 rounded hover:bg-green-700"
//           >
//             Submit
//           </button>
//         </div>
//       )}
//       {state.matches('completed') && (
//         <div>
//           <h2 className="text-lg font-semibold">Your Details Have Been Recorded</h2>
//           <h3 className="text-lg font-semibold">Submitted User Details:</h3>
//           <ul>
//             <li><strong>Name:</strong> {data.name}</li>
//             <li><strong>Email:</strong> {data.email}</li>
//             <li><strong>Phone Number:</strong> {data.phone}</li>
//           </ul>
//           <button
//             onClick={handleStartOver}
//             className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
//           >
//             Start Over
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MultiStepForm;

// import React, { useState } from 'react';
// import { useMachine } from '@xstate/react';
// import { createMachine, assign } from 'xstate';

// // Define the state machine
// const cartMachine = createMachine(
//   {
//     id: 'cart',
//     initial: 'empty',
//     context: {
//       items: [],
//     },
//     states: {
//       empty: {
//         on: {
//           ADD_ITEM: {
//             target: 'hasItems',
//             actions: 'addItem',
//           },
//         },
//       },
//       hasItems: {
//         on: {
//           ADD_ITEM: {
//             actions: 'addItem',
//           },
//           REMOVE_ITEM: {
//             actions: 'removeItem',
//           },
//           CHECKOUT: 'empty',
//         },
//       },
//     },
//   },
//   {
//     actions: {
//       addItem: assign({
//         items: (context, event) => [...context.items, event.item],
//       }),
//       removeItem: assign({
//         items: (context, event) => context.items.filter((item) => item !== event.item),
//       }),
//     },
//   }
// );

// // Define the component
// const ShoppingCart = () => {
//   const [state, send] = useMachine(cartMachine);
//   const [formData, setFormData] = useState({ item: '' });
//   const cartItems = state.context.items;

//   const handleAddItem = () => {
//     if (formData.item) {
//       send({ type: 'ADD_ITEM', item: formData.item });
//       setFormData({ item: '' });
//     }
//   };

//   const handleRemoveItem = (item) => {
//     send({ type: 'REMOVE_ITEM', item });
//   };

//   return (
//     <div className="p-4 max-w-md mx-auto bg-white rounded shadow-lg">
//       <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
//       <div>
//         {cartItems.length === 0 ? (
//           <p className="text-gray-500">Your cart is empty.</p>
//         ) : (
//           <ul>
//             {cartItems.map((item, index) => (
//               <li
//                 key={index}
//                 className="flex justify-between items-center border-b border-gray-300 py-2"
//               >
//                 <span>{item}</span>
//                 <button
//                   onClick={() => handleRemoveItem(item)}
//                   className="text-red-600 hover:text-red-800"
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//       <div className="flex mt-4">
//         <input
//           type="text"
//           placeholder="Enter item"
//           className="p-2 border border-gray-300 w-full rounded"
//           value={formData.item}
//           onChange={(e) => setFormData({ item: e.target.value })}
//         />
//         <button
//           onClick={handleAddItem}
//           className="ml-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
//         >
//           Add Item
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ShoppingCart;

// import React from 'react';
// import { useMachine } from '@xstate/react';
// import { createMachine, assign } from 'xstate';

// // Define the state machine
// const formMachine = createMachine(
//   {
//     id: 'form',
//     initial: 'enterName',
//     context: {
//       firstName: '',
//       lastName: '',
//       email: '',
//       address: '',
//     },
//     states: {
//       enterName: {
//         on: {
//           NEXT: 'enterEmail',
//         },
//       },
//       enterEmail: {
//         on: {
//           NEXT: 'enterAddress',
//           PREV: 'enterName',
//         },
//       },
//       enterAddress: {
//         on: {
//           NEXT: 'displayDetails',
//           PREV: 'enterEmail',
//         },
//       },
//       displayDetails: {
//         on: {
//           PREV: 'enterAddress',
//         },
//       },
//     },
//   },
//   {
//     actions: {
//       updateFirstName: assign({
//         firstName: (_, event) => event.value,
//       }),
//       updateLastName: assign({
//         lastName: (_, event) => event.value,
//       }),
//       updateEmail: assign({
//         email: (_, event) => event.value,
//       }),
//       updateAddress: assign({
//         address: (_, event) => event.value,
//       }),
//     },
//   }
// );

// const MultiStepForm = () => {
//   const [state, send] = useMachine(formMachine);

//   const { firstName, lastName, email, address } = state.context;

//   return (
//     <div className="text-center">
//       <h2 className="text-2xl font-semibold mb-4">Multi-Step Form</h2>
//       {state.matches('enterName') && (
//         <div>
//           <label>
//             First Name:
//             <input
//               type="text"
//               value={firstName}
//               onChange={(e) => send({ type: 'updateFirstName', value: e.target.value })}
//             />
//           </label>
//           <br />
//           <label>
//             Last Name:
//             <input
//               type="text"
//               value={lastName}
//               onChange={(e) => send({ type: 'updateLastName', value: e.target.value })}
//             />
//           </label>
//           <br />
//           <button onClick={() => send('NEXT')}>Next</button>
//         </div>
//       )}
//       {state.matches('enterEmail') && (
//         <div>
//           <label>
//             Email:
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => send({ type: 'updateEmail', value: e.target.value })}
//             />
//           </label>
//           <br />
//           <button onClick={() => send('PREV')}>Previous</button>
//           <button onClick={() => send('NEXT')}>Next</button>
//         </div>
//       )}
//       {state.matches('enterAddress') && (
//         <div>
//           <label>
//             Address:
//             <input
//               type="text"
//               value={address}
//               onChange={(e) => send({ type: 'updateAddress', value: e.target.value })}
//             />
//           </label>
//           <br />
//           <button onClick={() => send('PREV')}>Previous</button>
//           <button onClick={() => send('NEXT')}>Next</button>
//         </div>
//       )}
//       {state.matches('displayDetails') && (
//         <div>
//           <p>First Name: {firstName}</p>
//           <p>Last Name: {lastName}</p>
//           <p>Email: {email}</p>
//           <p>Address: {address}</p>
//           <button onClick={() => send('PREV')}>Previous</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MultiStepForm;

// import React from "react";
// import { useMachine } from "@xstate/react";
// import { createMachine, assign } from "xstate";

// const formMachine = createMachine({
//   /** @xstate-layout N4IgpgJg5mDOIC5QDMD2AnAtgOlgFzAAcBGAYgDkBRADQBUBtABgF1FRDVYBLPL1AOzYgAHomIBWAJzZGs2cQDMk2QCZiAFhUAaEAE8xk4tgUmF6yevEKVjSQA4Avg51osuAiVIBVAAoARAEFaSiZWJBAObl4BIVEEdXUZcXUANjsAdksVC2J7dR19BDsjcTlGBVtGS2V0pxcMHHwiFVIfACVKADVQoUiePkFwuOIUxmx04pV1dIUJ4kY7RnECsXUxu1N1DeJ5xbU6kFdGjxaqOh7wvujB0DjZoxVJ8RTJF9yTZb1EGyNDFLSFHYVFIUrkDkd3M1vP4giEWL1OP0YkNvs9jAopOoKtYdkoVghJCoZBsTJkUjjiPtnIcGpDCApWh1uvDLojrrFELMFDIUsDGNlxOlHviJEZ1CM0ioARsVCZwbSmvTSABlLwAIQAsgBJBgs9hsgYchDiYrYUoTPmSZKyhT4myJcX-DZAkFg6kQxUM3yBYIXfVRQ0o+JpbCg9K5Oygyl2E0pEX80P-FLhjYg0lOan8VAQOBCI4IgPI26IAC03IsVkpyXSS0WI3xJZS8rciuIBaRNxEiGmIo241KjCrJilo3UzeOzXb7KDwOkjyr4kFhnDkhFFnRJlSylGxCB47pCingeL8XDZt54h2Eg2WJjdqq2D+aUpE3SNbM+4AxqhMIQADZgAQEBHkWXYIC8djYIs0yDmoGSzJ8hQ2NySb-Cojz-Io-IZg4QA */
//   id: "form",
//   initial: "step1",
//   context: {
//     data: {
//       name: "",
//       email: "",
//       phone: "",
//     },
//   },
//   states: {
//     step1: {
//       on: {
//         NEXT: "step2",
//         UPDATE: {
//           actions: assign({
//             data: (context, event) => ({
//               ...context.data,
//               [event.name]: event.value,
//             }),
//           }),
//         },
//       },
//     },
//     step2: {
//       on: {
//         PREV: "step1",
//         NEXT: "step3",
//         UPDATE: {
//           actions: assign({
//             data: (context, event) => ({
//               ...context.data,
//               [event.name]: event.value,
//             }),
//           }),
//         },
//       },
//     },
//     step3: {
//       on: {
//         PREV: "step2",
//         SUBMIT: "completed",
//         UPDATE: {
//           actions: assign({
//             data: (context, event) => ({
//               ...context.data,
//               [event.name]: event.value,
//             }),
//           }),
//         },
//       },
//     },
//     completed: {
//       type: "final",
//     },
//   },
// });

// const App = () => {
//   const [state, send] = useMachine(formMachine);

//   const { data } = state.context;

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     send("UPDATE", { name, value });
//   };

//   const handleSubmit = () => {
//     // Handle form submission logic (e.g., send data to a server)
//     console.log("Form Data:", data);
//     send("SUBMIT");
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-4 text-center">
//       <h1 className="text-2xl font-bold mt-4 mb-4">Students form</h1>
//       <form>
//         {state.matches("step1") && (
//           <div>
//             <h2 className="text-lg font-semibold mb-4">
//               Step 1: Personal Information
//             </h2>
//             <input
//               type="text"
//               name="name"
//               value={data.name || ""}
//               placeholder="Name"
//               onChange={handleInputChange}
//               className="w-full p-2 border rounded mb-4"
//             />
//             <button
//               onClick={() => send("NEXT")}
//               className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
//             >
//               Next
//             </button>
//           </div>
//         )}
//         {state.matches("step2") && (
//           <div>
//             <h2 className="text-lg font-semibold mb-4">
//               Step 2: Contact Information{" "}
//             </h2>
//             <input
//               type="email"
//               name="email"
//               value={data.email || ""}
//               placeholder="Email"
//               onChange={handleInputChange}
//               className="w-full p-2 border rounded mb-4"
//             />
//             <button
//               onClick={() => send("PREV")}
//               className="bg-gray-400 text-white p-2 rounded hover:bg-gray-600 mr-2"
//             >
//               Previous
//             </button>
//             <button
//               onClick={() => send("NEXT")}
//               className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
//             >
//               Next
//             </button>
//           </div>
//         )}
//         {state.matches("step3") && (
//           <div>
//             <h2 className="text-lg font-semibold mb-4">
//               Step 3: Additional Information
//             </h2>
//             <input
//               type="text"
//               name="phone"
//               value={data.phone || ""}
//               placeholder="Phone Number"
//               onChange={handleInputChange}
//               className="w-full p-2 border rounded mb-4"
//             />
//             <button
//               onClick={() => send("PREV")}
//               className="bg-gray-400 text-white p-2 rounded hover:bg-gray-600 mr-2"
//             >
//               Previous
//             </button>
//             <button
//               onClick={handleSubmit}
//               className="bg-green-500 text-white p-2 rounded hover:bg-green-700"
//             >
//               Submit
//             </button>
//           </div>
//         )}
//       </form>
//       {state.matches("completed") && (
//         <div className="mt-4">
//           <h2 className="text-lg font-semibold">
//             Your Details Have Been Recorded
//           </h2>
//           <h3 className="text-lg font-semibold">Submitted User Details:</h3>
//           <ul className="text-left">
//             <li>
//               <strong>Name:</strong> {data.name}
//             </li>
//             <li>
//               <strong>Email:</strong> {data.email}
//             </li>
//             <li>
//               <strong>Phone Number:</strong> {data.phone}
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

// import React, { useState } from 'react';

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { error: null, errorInfo: null, hasError: false };
//   }

//   componentDidCatch(error, errorInfo) {
//     this.setState({
//       error: error,
//       errorInfo: errorInfo,
//       hasError: true,
//     });
//     // You can also log error messages to an error reporting service here
//   }

//   render() {
//     if (this.state.hasError) {
//       return (
//         <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
//           <p className="font-bold">Oops! Something went wrong.</p>
//           <p>We're working on fixing this issue. Please try again later.</p>
//           {/* Display the error details */}
//           <details style={{ whiteSpace: 'pre-wrap', marginTop: '1rem' }}>
//             {this.state.error && this.state.error.toString()}
//             <br />
//             {this.state.errorInfo.componentStack}
//           </details>
//         </div>
//       );
//     }
//     return this.props.children;
//   }
// }

// const TodoApp = () => {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState('');
//   const [error, setError] = useState(null);

//   const addTask = () => {
//     try {
//       // Simulate an error in adding a new task
//       if (newTask === 'ErrorTask') {
//         throw new Error('Failed to add a new task.');
//       }

//       // Simulate a successful addition
//       setTasks((prevTasks) => [...prevTasks, newTask]);
//       setNewTask('');
//       setError(null);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const clearError = () => {
//     setError(null);
//   };

//   return (
//     <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
//       <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
//       {error && (
//         <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
//           <p className="font-bold">Error: {error}</p>
//           <button onClick={clearError} className="bg-red-500 text-white px-2 py-1 rounded-md mt-2">
//             Clear Error
//           </button>
//         </div>
//       )}
//       <div className="flex mb-4">
//         <input
//           type="text"
//           value={newTask}
//           onChange={(e) => setNewTask(e.target.value)}
//           className="border p-2 w-full rounded-md"
//         />
//         <button onClick={addTask} className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md">
//           Add
//         </button>
//       </div>
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index} className="mb-2">
//             {task}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// function App() {
//   return (
//     <div className="bg-gray-100 min-h-screen p-8">
//       <p className="text-lg font-bold">
//         Welcome to the To-Do List App with Fallback UI using Tailwind CSS!
//         <br />
//         Try adding a task with the name "ErrorTask" to simulate an error in adding a task.
//       </p>
//       <hr className="my-6" />
//       <ErrorBoundary>
//         <TodoApp />
//       </ErrorBoundary>
//     </div>
//   );
// }

// export default App;

// App.js

// import React from "react";
// import CarSection from "./CarSection";
// import ErrorBoundary from "./ErrorBoundary";

// function App() {
//   return (
//     <div className="container mx-auto p-4">
//       <ErrorBoundary>
//         <CarSection carName={"Toyota"} />
//       </ErrorBoundary>
//       <ErrorBoundary>
//         <CarSection carName={"Honda"} />
//       </ErrorBoundary>
//       <ErrorBoundary>
//         <CarSection carName={"Ford"} />
//       </ErrorBoundary>
//       <ErrorBoundary>
//         <CarSection carName={"Airbus"} />
//       </ErrorBoundary>
//     </div>
//   );
// }

// export default App;

// PinInputComponent.js

// import React, { useState } from "react";
// import PinInput from "react-pin-input";

// const App = () => {
//   const [pin, setPin] = useState("");

//   const handleComplete = (value) => {
//     // Handle the completed PIN input
//     setPin(value);
//   };

//   console.log("Submitting PIN:", pin);

//   return (
//     <div className="flex flex-col items-center min-h-screen bg-gray-100">
//       <h1 className="text-4xl font-bold mb-8 mt-8 ">Basic Example of React-Pin-Input </h1>
//       <PinInput
//         length={4} // Set the PIN length
//         onComplete={handleComplete}
//         secret
//         secretDelay={100}
//         type="alphabet"
//         focus
//       />
//       <div className="mt-8 font-bold">pin: {pin}</div>
//     </div>
//   );
// };

// export default App;

// OTPVerification.jsx

// import React, { useState } from 'react';
// import PinInput from 'react-pin-input';

// const App = () => {
//   const [pin, setPin] = useState('');
//   const [error, setError] = useState('');
//   const correctPIN = '1234';

//   const handlePinChange = (newPin) => {
//     setPin(newPin);
//     setError('');
//   };

//   const handlePinComplete = (completePin) => {
//     if (completePin !== correctPIN) {
//       setError('Invalid PIN. Please try again.');
//       setPin('');
//     }
//   };

//   const renderResult = () => {
//     if (pin === correctPIN) {
//       return <p className="success text-green-500 mt-2">Correct PIN entered!</p>;
//     }
//     return null;
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-4 border rounded-md shadow-md">
//       <h2 className="text-2xl font-semibold mb-4">Change ATM PIN</h2>
//       <PinInput
//         length={4}
//         secret
//         secretDelay={500}
//         onChange={handlePinChange}
//         onComplete={handlePinComplete}

//       />
//       {error && <p className="error text-red-500 mt-2">{error}</p>}
//       {renderResult()}
//     </div>
//   );
// };

// export default App;

// src/App.js
// import React, { useState } from 'react';
// import PinInput from 'react-pin-input';

// const FantasyTeamSetup = () => {
//   const fixedPin = '1234'; // Fixed PIN for demonstration
//   const [pin, setPin] = useState('');
//   const [selectedPlayers, setSelectedPlayers] = useState([]);
//   const [teamName, setTeamName] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handlePinComplete = (value) => {
//     setPin(value);
//   };

//   const handlePlayerSelection = (playerId) => {
//     if (selectedPlayers.includes(playerId)) {
//       setSelectedPlayers(selectedPlayers.filter((id) => id !== playerId));
//     } else {
//       setSelectedPlayers([...selectedPlayers, playerId]);
//     }
//   };

//   const handleTeamNameChange = (event) => {
//     setTeamName(event.target.value);
//   };

//   const handleSubmit = () => {
//     // Validate the entered PIN
//     if (pin === fixedPin) {
//       // PIN is correct
//       setSuccessMessage('Fantasy team submitted successfully!');
//       setErrorMessage('');
//       console.log('Fantasy team details:', {
//         pin,
//         teamName,
//         selectedPlayers,
//       });
//     } else {
//       // PIN is incorrect
//       setErrorMessage('Incorrect PIN. Please try again.');
//       setSuccessMessage('');
//       console.log('Incorrect PIN attempt');
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <h1 className="text-3xl font-bold mb-6">Fantasy Team Setup</h1>
//       <div className="mb-4">
//         <label htmlFor="teamName" className="block text-sm font-medium text-gray-600">
//           Team Name
//         </label>
//         <input
//           type="text"
//           id="teamName"
//           value={teamName}
//           onChange={handleTeamNameChange}
//           className="mt-1 p-2 border rounded-md w-64"
//         />
//       </div>
//       <PinInput onComplete={handlePinComplete} length={4} />
//       <p className="mt-4">Enter your secure PIN</p>

//       <div className="mt-8">
//         <h2 className="text-xl font-semibold mb-2">Select Players</h2>
//         <div className="grid grid-cols-3 gap-4">
//           {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((playerId) => (
//             <div
//               key={playerId}
//               className={`p-4 border rounded-md cursor-pointer ${
//                 selectedPlayers.includes(playerId) ? 'bg-blue-500 text-white' : 'bg-gray-200'
//               }`}
//               onClick={() => handlePlayerSelection(playerId)}
//             >
//               Player {playerId}
//             </div>
//           ))}
//         </div>
//       </div>

//       <button
//         onClick={handleSubmit}
//         className="mt-8 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
//       >
//         Submit Team
//       </button>

//       {errorMessage && (
//         <div className="mt-6 text-red-600 font-semibold">{errorMessage}</div>
//       )}

//       {successMessage && (
//         <div className="mt-6 text-green-600 font-semibold">{successMessage}</div>
//       )}
//     </div>
//   );
// };

// export default FantasyTeamSetup;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginAuth from "./LoginAuth";
import Welcome from "./Welcome";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginAuth />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
