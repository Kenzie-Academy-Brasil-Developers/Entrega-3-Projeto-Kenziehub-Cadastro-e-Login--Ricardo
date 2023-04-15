import { useForm } from "react-hook-form";
import { Input } from "../../Input";
import { StyleModalRegisterTechnologyForm } from "./style";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledButton } from "../../../styles/button";
import { StyledTitleThree } from "../../../styles/typography";
import { formRegisterTechnologySchema } from "./formRegisterTechnologySchema";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import styles from "./style.module.css";

export const ModalRegisterTechnology = ({}) => {
  const { isShowModal, setIsShowModal, handleRegisterTechnology } =
    useContext(TechContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formRegisterTechnologySchema),
  });

  return (
    <div className={isShowModal ? styles.cotainerModalReg : "hidden"}>
      <div role="dialog" className={styles.modalReg}>
        <StyleModalRegisterTechnologyForm
          className="formTitle"
          onSubmit={handleSubmit(handleRegisterTechnology)}
        >
          <div className="formTitle">
            <StyledTitleThree fontSize="threeOne">
              Cadastrar Tecnologia
            </StyledTitleThree>
            <button onClick={() => setIsShowModal(!isShowModal)}>X</button>
          </div>
          <fieldset className="fieldsetModal">
            <Input
              type="text"
              id="title"
              label="Nome"
              placeholder="Digite o nome da technologia"
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
            className="buttonRegisterTechnology"
            type="submit"
            buttonSize="mobile"
            buttonStyle="primary"
          >
            Cadastrar Tecnológia
          </StyledButton>
        </StyleModalRegisterTechnologyForm>
      </div>
    </div>
  );
};
