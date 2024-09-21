import { useState } from "react";
import { FormLogin } from "./FormLogin";
import { LoginConection } from "../Services/LoginServices";

export const Login = () => {
 const [username,setUsername] = useState('');
 const [password,setPassword] = useState('');
  
 const handleLogin = async () => {
     await LoginConection({ username, password });
   };
  return (
     <FormLogin
       username={username}
       password={password}
       setUsername={setUsername}
       setPassword={setPassword}
       onLogin={handleLogin}
     />
   );  
}