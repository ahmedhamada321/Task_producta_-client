const BASE_URL = "http://localhost:8000/";

export const createUserAPI = async (userData: any) => {
  const response = await fetch(`${BASE_URL}users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return response.json();
};

export const getAllUserAPI = async (page: number) => {
  const response = await fetch(`${BASE_URL}users?page=${page}&limit=10`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
};
