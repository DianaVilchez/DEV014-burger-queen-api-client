export const FetchProducts = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:8080/products", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    return data
}