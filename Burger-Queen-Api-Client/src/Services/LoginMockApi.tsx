import { dataLogin } from "../Models/DataLogin";

export const LoginConection = async ({ email, password }: dataLogin) => {
  try {
    console.log("email:", email, "password:", password);
    if (!email || !password ) {
          alert("Faltan datos: el email o la contraseña no pueden estar vacíos");
          return;
        }
    const response = await fetch(
    "http://localhost:8080/login " ,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
    const data = await response.json();
    console.log("Login exitoso", data);
    localStorage.setItem('token', data.accessToken);
    console.log('token', data.accessToken) ;
    localStorage.setItem('user', JSON.stringify(data.user.role));
    redirectUser(data.user.role);
    
  } catch (error) {
    console.error("Error", (error as Error).message);
    alert(`Error: ${(error as Error).message}`);
  }
};

const redirectUser = (role:string) => {
  if (role === 'waiter') {
    window.location.href = '/products'; // Cambia a la ruta correspondiente
  } else if (role === 'chef') {
    window.location.href = '/orders'; // Cambia a la ruta correspondiente
  }
};
