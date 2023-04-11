import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { StyledTitleThree } from "../../../styles/typography";
import { Input } from "../../Input";
import { StyledButton } from "../../../styles/button";

import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyleModalRegisterTechnologyForm } from "../ModalRegisterTechnology/style";
import { formEditTechnologySchema } from "./formEditTechnologySchema";

export const ModalDetails = async ({ isShowModal, setIsShowModal }) => {
  const { id } = useParams();

  const localStorageIdUserLogado = localStorage.getItem("@USERID");
  const [techsList, setTechsList] = useState([]);

  const technologyClicked = techsList.find((element) => {
    return element.id == id;
  });

  const loadUser = async (userId) => {
    try {
      const responseOk = await api.get(`/users/${userId}`);
      console.log(responseOk);
      setTechsList(responseOk.data.techs);
    } catch (error) {
      toast.error(error);
      console.log(error);
    }
  };

  useEffect(() => {
    loadUser(localStorageIdUserLogado);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formEditTechnologySchema),
  });

  const handleEditTechnology = async (data, id) => {
    try {
      const editOk = await api.put(`/users/techs/${id}`, data);
      console.log(editOk);
      toast.success("Tecnologia Edita com sucesso");
      setIsShowModal(!isShowModal);
    } catch (error) {
      toast.error(error);
      console.log(error);
    }
  };

  return (
    <StyleModalRegisterTechnologyForm
      onSubmit={handleSubmit(handleEditTechnology)}
    >
      <div className={isShowModal ? "formTitle" : "hidden"}>
        <StyledTitleThree fontSize="threeOne">
          Cadastrar Tecnologia
        </StyledTitleThree>
        <button onClick={() => setIsShowModal(!isShowModal)}>X</button>
      </div>
      <fieldset className={isShowModal ? "fieldsetModal" : "hidden"}>
        <Input
          type="text"
          id="title"
          label="Nome"
          value={"Estamos trabalhando nisso"}
          error={errors.title?.message}
          {...register("title")}
        />

        <p className="statusSelect">Selecionar status</p>
        <div className="statusFormRegister">
          <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Sênior">Sênior</option>
          </select>
          <p>{errors.status?.message}</p>
        </div>
      </fieldset>

      <StyledButton
        className={isShowModal ? "buttonRegisterTechnology" : "hidden"}
        type="submit"
        buttonSize="mobile"
        buttonStyle="primary"
      >
        Salvar alterações
      </StyledButton>
    </StyleModalRegisterTechnologyForm>
  );
};
