import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isTypePassword, setIsTypePassword] = useState(true);
  const [techsList, setTechsList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("@TOKEN");
        if (token) {
          const { sub } = jwtDecode(token);
          api.defaults.headers.common.Authorization = `Bearer ${token}`;
          const userResponse = await api.get(`/profile `);
          setUser(userResponse.data);
        } else {
          return;
        }
      } catch (error) {
        localStorage.clear;
        toast.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  const handleLogin = async (data) => {
    try {
      setLoading(true);
      const loginOk = await api.post("/sessions", data);
      localStorage.setItem("@TOKEN", loginOk.data.token);
      localStorage.setItem("@USERID", loginOk.data.user.id);
      setUser(loginOk.data.user);
      navigate("/dashboard");
    } catch (error) {
      toast.error("Ops! tem algo errado!");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (data) => {
    setLoading(true);
    try {
      const userOk = await api.post("/users", data);
      toast.success("conta criada com sucesso");
      setLoading(true);
      navigate("/login");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        handleLogin,
        handleRegister,
        user,
        loading,
        isTypePassword,
        setIsTypePassword,

        techsList,
        setTechsList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
