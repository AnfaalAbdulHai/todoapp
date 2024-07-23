import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from "./Components/Todo/Todo";


const App = () => {
  // const [isloggedin,setisloggedIn] = useState(false);

  // const toggle =()=>{
  //   setisloggedIn(!isloggedin)
  // }
  return (
<>  
{/* {
  isloggedin ? <Login click={toggle}/>: <Signup click={toggle}/>
} */}

<Todo/>
  
</>


  );
};

export default App;

