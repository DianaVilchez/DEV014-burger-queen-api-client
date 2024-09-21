import { dataLogin } from "../Models/DataLogin";

export const LoginConection = async ({ username, password }: dataLogin) => {
  try {
    const response = await fetch(
      "https://dev-013-burger-queen-api-dianavilchez-diana-vilchezs-projects.vercel.app/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }
    );
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
    const data = await response.json();
    console.log("Login exitoso", data);
  } catch (error) {
    console.error("Error", (error as Error).message);
    alert(`Error: ${(error as Error).message}`);
  }
};
