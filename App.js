
// import './App.css';

// import Student from './components/Student';

// props,ternary operators

// // App.js is parent component
// function App() {
 
//   return (
//     // Also to use multiple elements(html contents) we need wrap them inside div tags
//     <div className="App">
//       {/* <Header/> {/*To use component we need do first import the variable and then pass it in 
//        "</>" self closing tag  
//       <h1>{name}</h1>  for using javascript in jsx we need to use "{}" curly braces */}

//       <Student
      
//       />
//        {/* <Student name="Rahul"
//         age={19}
//       />
//        <Student name="Chinmay"
//         age={34}
//       /> */}
  
//        {/*Where name="Amey" is props so we passing this prop from parent component App.js to child component Student.js*/}


//     </div>
//   );
// }

// export default App;

// import './App.css';
// import Header from './components/Header';
// import Movie from './components/Movie.js';
// import movies from "./movie.json"

// function App() {

//   // let login=true;

//   // if(login == false){
//   //   return <Header/>
//   // }

// //he return() method in React is a way to return data from a component. It returns the data that was passed into the component, which the parent component can then use. The return method is generally used when you want to return a single value from a component.

//   return (

//     <div className="App">
//     {/*Note:- You cannot use if-else statements inside JSX. If you want to check conditions inside JSX, use the ternary operator or put the conditional logic into a function and call that function from JSX.  */}
//     {
//       //ternary operator
//       /* login==true? <Header/>:<h1 style={{color:"black"}}>This is false</h1> */
//     }

//     {

//       //To use if-else inside jsx 

//       /* (()=>{
//           if(login){
//             return <h2>This is true</h2>
//           } 
//           else{
//             return <h2>This is false</h2>
//           }
//       })() */
//     }
//         <Header/>
//         <div className='main'>
//         {
//           movies.map((element)=>{
//             return(
//               <Movie 
//               title={element.Title} 
//               year={element.Year}
//               img={element.Poster}
//               />
//             )
//           })
//         }  
            
//         </div>
//     </div>
//   );
// }

// import './App.css';
// import Header from './components/Header';
// import React,{useState} from 'react';


// //useState hook

// function App() {

//   //const [num,setNum] is called as array destructuring
//   const [num,setNum]=useState(1) //num holds the initial value that is 1 which is in useState(1)
  
//   // num is the current state and setNum is a function that updates the state.

//   // useState() accepts an initial state and returns two values:

// // The current state.
// // A function that updates the state.

//   // const inc=()=>{
//   //   setNum(num+2); //once the setNum performs the add operation on num, the change is saved in num
//   // }

//   // const dec=()=>{
//   //   setNum(num-2); //once the setNum performs the subtract operation on num, the change is saved in num
//   // }


//   const inc=(n)=>{
//     setNum(num+n); //once the setNum performs the add operation on num, the change is saved in num
//   }

//   const dec=(n)=>{
//     setNum(num-n); //once the setNum performs the subtract operation on num, the change is saved in num
//   }

//   return (

//     <div className="App">
//       <Header/>
//       <div className='main'>
//           <h1 className='heading'>{num}</h1>
//           <div className='buttons'>
//           {/* <button className='btn' onClick={inc}>Increment</button>
//           <button className='btn' onClick={dec}>Decrement</button> */}

//           {/* We can also use inc() in onClick as if we need to pass parameters then we need to make arrow function  */}

//           <button className='btn' onClick={()=>inc(2)}>Increment</button>
//           <button className='btn' onClick={()=> dec(1)}>Decrement</button> 

//           </div>
//       </div>
//     </div>
//   );
// }




// import React,{useEffect, useState} from 'react';


// //useEffect hook

// function App() {
//   const[count,setCount]=useState(0);
//   const [data,setData]=useState("Ram")

//    //useEffect accepts two parameters, one function and another is optional
//   //if we dont pass array as second parameter to useEffect(), then useEffect() runs only on the first render and if we dont pass the second parameter then it will run on every render

//   useEffect(()=>{
//     console.log("component mounted");

//   },[count]) //Now the useEffect will only work if we click on count button, it wont work on update data button as we have passed only count variable in array to useEffect function as parameter.


//   const inc=()=>{
//     setCount(count+1);
//   }
//   const updateData=()=>{
//     setData("Sita")
//   }
//   return (

//     <div className="App">
//     <h1>UseEffect</h1>
//         <h1>Button clicked {count} times</h1>
//         <button onClick={inc}>Click</button>
//         <button onClick={updateData}> Update data</button>
//     </div>
//   );
// }

// import {useRef, useState} from 'react';


// //useRef hook
// //What is useRef? -DOM manipulate

// function App() {
//   const refElement = useRef(""); //refElement variable stores a reference to the input element. 
//   const [name,setName] = useState("Amey");

//   console.log(refElement);
//   const Reset=()=>{
//     setName("")
//     refElement.current.focus()//Now using refElement.current.focus(), once we enter any new name in input and click the button, the input field will again get focus.  


//     //refElement has a current property through which we can put all functionalities in DOM

//     //The current property of a useRef object is a mutable value that can be used to store any information between component re-renders. It is often used to store references to DOM elements, but it can also be used to store other types of data, such as scroll positions, animation state, and more.

//   }

//   const handleInput=()=>{
//     refElement.current.style.color="red";
//     refElement.current.value="Chinmay"
    
//   }

//   return (

//     <div className="App">
//     <h1>UseRef</h1>

//     {/* The ref attribute in the input tag is used to assign a reference to the input element to a variable in JavaScript. */}

//         <input ref={refElement} type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>

//         {/* The onChange event is fired whenever the value of the input field changes.
//         The e.target.value property contains the current value of the input field. */}

//         <button onClick={Reset}>Reset</button>
//         <button onClick={handleInput} >handle input</button>
//     </div>
//   );
// }

//Prop drilling?- 
/* Suppose we have parent component App.js and inside that we are calling ChildA.js component, inside childA.js we are calling ChildB.js component, inside childB.js we are calling ChildC.js component. 
  And suppose our requirement is that we need to pass a prop from parent App.js to child ChildC.js
  compnent then we need to first pass our prop from App.js->ChildA.js->ChildB.js->ChildC.js to pass the prop to ChildC.js from parent component App.js. So this is known as Prop drilling.
*/


//How to avoid it?- prop drilling can be avoided using context API or useContext() hook. 


// import React from "react";
// import './App.css'
// import ChildA from "./ChildA";

// function App(){
//   const name="Chinmay"
//   return(
//     <>

//         <h1>Learning Prop drilling</h1>
//         <ChildA name={name}/>
//     </>
//   );
// }



// import React, { createContext } from "react";
// import './App.css'
// import ChildA from "./ChildA";

//What is Context Api? //We can pass props from parent component to child component that is component in lowend level of hirarchy of directly
//process of Context Api create, provider, consumer  

//How to use it?

//First create a variable lets say data and assign  createContext() function to that data varable
//Then pass the data to the child component using data.Provider and export the data variable that has createContext() function, now inside child component import the data variable and use the tag data.
//Consumer in order to get the data passed from parent component.

//is context api also problemetic? -yes because if we pass two values then we need to make nested data.Consumer tags, and let suppose there are 10-15 data to be passed, then we need to make 15 nested consumer tags in child component which will cause callback hell. So for that we have a solution using useContext() hook
  
// const data =createContext();
// const data1=createContext();

// function App(){
//   const name="Amey";
//   const gender="Male";
//   return(
//     <>

//         <h1>Learning Prop drilling</h1>

//         <data.Provider value={name}>
//         <data1.Provider value={gender}>
//         <ChildA/>
//         </data1.Provider>
//         </data.Provider>
//     </>
//   );
// }
// export default App;
// export {data,data1}


// import React, { createContext } from "react";
// import './App.css'
// import ChildA from "./ChildA";

// //What is useContext() hook?
// //create, provider, useContext
// //How to use it?

// const data=createContext();
// const data1=createContext();

// function App(){
//   const firstName="Amey";
//   const userGender="Male";

//   return(
//     <>
//     <data.Provider value={firstName}>
//       <data1.Provider value={userGender}>

//         <ChildA/>
//       </data1.Provider>
//     </data.Provider>
  
//     </>
//   )
// }


// //component can only have one export default statement

// export default App;
// export {data,data1}


// import './App.css'
// import React, { useMemo, useState } from "react";

// //What is useMemo() and why we use it?
// //The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running. Or using useMemo we can stop the unecessary calling of functions.

// //How to use useMemo with example? 


// function App(){
// const [add, setAdd]=useState(0)
// const [minus, setMinus]=useState(100)

// const multiplication=useMemo(
//   function multiply(){
//   console.log("******************"); 
//   return add*10
// },[add]) //Now in useMemo we have passed add in array so that the multiply() function should be called only for add function.

// // function multiply(){
// //   console.log("******************"); //here we are calling this function so it should work only for add function but it is also getting called for subtraction function too.
// //   return add*10
// // }
//   return(
//     <>
//     <div className="App">
//       <h1>Learning useMemo</h1>
//       {/* {multiply()} */ multiplication}<br/>
//       <button onClick={()=>setAdd(add+1)}>Addition</button>
//       <span>{add}</span><br/>
//       <button onClick={()=>setMinus(minus-1)}>Subtraction</button>
//       <span>{minus}</span>
//     </div>
  
//     </>
//   )
// }


// import './App.css'
// import React, { useCallback, useState } from "react";
// import ChildA from './ChildA';

//What is useCallback() and why we use it?
//Use call back returns memoized function.When ever some element in react app re-renders, the functions are also re-created also known as referential integrity, so in order to stop the recreating of function we use useCallback hook

//How to use useCallback with example? 


// function App(){
// const [add, setAdd]=useState(0)
// const [count,setCount]=useState(0) 
// const Learning=useCallback(()=>{ //When ever some element in react app re-renders, the functions are also re-created also known as referential integrity, so in order to stop the recreating of function we use useCallback hook

//   // some operation
// },[count]) // we want whenever count variable changes, at that time, child component should also re-render 
// //here in useCallback(),the second parameter thai is array is the dependency , like when to recreate the function
//   return(
//     <>
//     <div className="App">
//       <h1>Learning useCallback</h1>
//       <ChildA Learning={Learning} count={count}/>
//       <h1>{add}</h1>
//       <button onClick={()=>setAdd(add+1)}>Addition</button>
//       <h1>{count}</h1>
//       <button onClick={()=>setCount((count+2))}>Count</button>
//     </div>
  
//     </>
//   )
// }



// import './App.css'
// import React, { useState } from 'react';

//Topics we will Cover-

//1 React Form

//2 Controlled Component

//->In React, Controlled Components are those in which form’s data is handled by the component’s state. It takes its current value through props and makes changes through callbacks like onClick,onChange, etc. A parent component manages its own state and passes the new values as props to the controlled component.

//3 Uncontrolled Component  


// controlled Components
// function App(){
//   const [name,setName]=useState("");
//   const[pswd,setPswd]=useState("");

// //So in handleChange() function, we are controlling input with react

//   function handleChange(e){

//     // console.log(e.target.value); //where e is event, target is the input field, value is the value you are entering in input field
//     // const capName=(e.target.value).toUpperCase()
//     // setName(capName)//this will set the user input value in name variable
//       console.log(e.target.name);
//     if(e.target.name=="firstName"){
//       const capName=(e.target.value).toUpperCase();
//       setName(capName);
//     }
//     else{
//       setPswd(e.target.value)
//     }

//   }

//   return(
//     <>
//       <form className='App'>
//         <label>First Name:</label><br/>
//         {/* So this is known as controlled component as we are controlling form using react */}
//         <input type="text" name='firstName' value={name} onChange={handleChange}/><br/>
//         <label>Password:</label><br/>

//         {/* <input type="text" value={pswd} onChange={handlePassword}/><br/> */}
//         {/* Suppose there are 15 input fields so we need to make 15 functions for the 15 event handlers   
//           better to make a single function for all inputs
//         */}
//         <input type="text" name='password' value={pswd} onChange={handleChange}/><br/>


//       </form>
//     </>
//   )
// }

// //uncontrolled components

// import './App.css'
// import React, { useRef } from 'react';

// function App(){
//   const refObject=useRef(); //As uncontrolled components are controlled by DOM so we need to use useRef hook in order to manipulate dom

//   console.log(refObject);

//   function handleSubmit(e){
//     e.preventDefault();
//     console.log((refObject.current.value).toUpperCase());
//   }

//   return(
//     <>
//       <form className='App' onSubmit={handleSubmit}>
//         <label>First Name:</label><br/>
//         {/* So this is known as controlled component as we are controlling form using react */}
//         <input type="text" ref={refObject} /><br/>
        
//         <button>Submit</button>
//       </form>
//     </>
//   )
// }



//Lifting state up or pass data from child to parent

// import './App.css'

// import Child from './Child'
// function App(){
//   function getData(data){
//     console.log(data);
//   }
//   return(
//     <>
//       <Child getData={getData}/>
//     </>
//   )
// }


// export default App;

import './App.css'
import Form from './Form';

function App(){
  
  return(
    <>
    <Form/>
    </>
  )
}


export default App;