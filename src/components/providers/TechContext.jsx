import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";
import { api } from "../../services/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { user, loading, techsList, setTechsList } = useContext(UserContext);
  const [currentTech, setCurrentTech] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowModalEditTechnology, setIsShowModalEditTechnology] =
    useState(false);
  const token = localStorage.getItem("@TOKEN");
  useEffect(() => {
    setTechsList(user.techs);
  }, []);

  const handleRegisterTechnology = async (data) => {
    try {
      const registerTechnologyOk = await api.post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Tecnologia cadastrada com sucesso");
      setIsShowModal(!isShowModal);
      setTechsList([...techsList, registerTechnologyOk.data]);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleEditTechnology = async (data) => {
    try {
      const editOk = await api.put(`/users/techs/${currentTech.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newList = techsList.map((tech) => {
        if (editOk.data.id == tech.id) {
          return { ...tech, ...editOk.data };
        } else {
          return tech;
        }
      });
      setTechsList(newList);
      toast.success("Tecnologia Edita com sucesso");
      setIsShowModalEditTechnology(!isShowModalEditTechnology);
    } catch (error) {
      toast.error(error);
    }
  };

  const handleDellTechnology = async (idTech) => {
    try {
      const dellTech = await api.delete(`/users/techs/${currentTech.id}`,  {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newListTech = techsList.filter((tech) => tech.id !== idTech);
      toast("Tecnologia deletada com sucesso!");
      setTechsList(newListTech);
      setIsShowModalEditTechnology(!isShowModalEditTechnology);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <TechContext.Provider
      value={{
        currentTech,
        setCurrentTech,
        isShowModalEditTechnology,
        setIsShowModalEditTechnology,
        handleRegisterTechnology,
        handleEditTechnology,
        handleDellTechnology,
        techsList,
        isShowModal,
        setIsShowModal,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
