const BASE_URL = "http://localhost:8000/";

export const createProductAPI = async (productData: any) => {
  const response = await fetch(`${BASE_URL}admin/product/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productData),
  });
  return response.json();
};

export const getAllProductsAPI = async (page: number) => {
  const response = await fetch(
    `${BASE_URL}admin/product?page=${page}&limit=6`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );

  return response.json();
};
