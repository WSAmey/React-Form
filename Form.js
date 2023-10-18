import { func } from 'prop-types'
import React, { useEffect, useState } from 'react'

const Form = () => {
    const data={name:"", email:"", password:""};

    const [inputData,setInputData]=useState(data) //To store name,email and password values

    const [flag,setFlag]=useState(false);
    useEffect(()=>{
        console.log("Registered Sucessfully"); //when the flag value changes from false to true, then it will print the message "registered Successfully"
    },[flag]); //this useEffect hook will work when the flag value changes(that is if it changes to true)
           function handleData(e){
            setInputData({...inputData,[e.target.name]:e.target.value})
            /* The line of code setInputData({...inputData,[e.target.name]:e.target.value}) is used to update the inputData state variable whenever the user changes the value of one of the form fields.

            The setInputData function takes a single argument(that is {}), which is the new state of the inputData variable. In this case, we are using the spread operator (...) to spread the previous state of inputData into a new object. Then, we are adding the new value of the form field to the object using the [e.target.name]: e.target.value syntax.

            The [e.target.name]: e.target.value syntax creates a new property on the object with the name of the form field and the value of the form field. */
            
            console.log(inputData);  
        }
        function handleSubmit(e){
            e.preventDefault();
            if(!inputData.name || !inputData.email || !inputData.password){
                alert("All fields are Mandatory")
            }
            else{
                setFlag(true)
            }
        }
    return (
        <>

        <pre>{(flag)?<h2 className='ui-define'>Hello {inputData.name}, You have Registered successfully </h2>:""} </pre>
        
        {/* 
        The above line of code is a conditional rendering statement. It uses the flag state variable to determine which element to render. If the flag state variable is true, the h2 element with the message "Hello {inputData.name}, You have Registered successfully" will be rendered. Otherwise, nothing will be rendered. */}

    <form className='container' onSubmit={handleSubmit}>
        <div className='header'>
            <h1>Registration Form</h1>
        </div>
        <div>
            <input type='text' placeholder='Enter Your Name' name='name' value={inputData.name} onChange={handleData}/>
            {/* value attribute in input field will store the data  
                The value attribute of the input fields in the form is set to the corresponding variable in the inputData object. This means that when the user changes the value of one of the form fields, the corresponding variable in the inputData object will also be updated.
            */}
        </div>
        <div>
            <input type='text' placeholder='Enter Your Email' name='email' value={inputData.email} onChange={handleData}/>
        </div>
        <div>
            <input type='password' placeholder='Enter Your Password' name='password' value={inputData.password} onChange={handleData}/>
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>
    </form>
    </>
  )
}

export default Form