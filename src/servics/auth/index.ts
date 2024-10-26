const BASE_URL = "http://localhost:8000/";
export const loginAPI = async (userName: string, password: string) => {
  const response = await fetch(`${BASE_URL}auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userName, password }),
  });
  return response.json();
};

export const verifyAPI = async (verificationToken: string) => {
  const response = await fetch(`${BASE_URL}auth/verification`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: verificationToken }),
  });
  return response.json();
};

export const meAPIService = async () => {
  const response = await fetch(`${BASE_URL}auth/me`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
};
