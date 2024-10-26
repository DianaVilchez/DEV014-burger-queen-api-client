import { useState } from "react";
import { FormLogin } from "./FormLogin";
import { LoginConection } from "../Services/LoginMockApi";
// import { Background } from "./Background";


export const Login = () => {
 const [email,setUsername] = useState('');
 const [password,setPassword] = useState('');
  
 const handleLogin = async () => {
     await LoginConection({ email, password });
   };
  return (

     <FormLogin
       email={email}
       password={password}
       setUsername={setUsername}
       setPassword={setPassword}
       onLogin={handleLogin}
     />

   );  
}