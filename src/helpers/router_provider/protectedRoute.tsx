import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Loading } from "../../components";

export const ProtectedRoute = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return token ? <Outlet /> : <Loading />;
};
