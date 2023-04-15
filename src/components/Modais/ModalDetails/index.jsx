import { StyledTitleThree } from "../../../styles/typography";
import { Input } from "../../Input";
import { StyledButton } from "../../../styles/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formEditTechnologySchema } from "./formEditTechnologySchema";
import { useContext } from "react";
import { StyleModalEditTechnologyForm } from "./style";
import { TechContext } from "../../providers/TechContext";
import styles from "./style.module.css";

export const ModalDetails = () => {
  const {
    currentTech,
    isShowModalEditTechnology,
    setIsShowModalEditTechnology,
    handleEditTechnology,
    handleDellTechnology,
  } = useContext(TechContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formEditTechnologySchema),
  });

  return (
    <div
      className={isShowModalEditTechnology ? styles.cotainerModalReg : "hidden"}
    >
      <div role="dialog" className={styles.modalReg}>
        <StyleModalEditTechnologyForm
          className={isShowModalEditTechnology ? "show" : "hidden"}
          onSubmit={handleSubmit(handleEditTechnology)}
        >
          <div className="formTitle">
            <StyledTitleThree fontSize="threeOne">
              Tecnologia Detalhes
            </StyledTitleThree>
            <button
              type="button"
              onClick={() => setIsShowModalEditTechnology(false)}
            >
              X
            </button>
          </div>
          <fieldset className="fieldsetModal">
            <Input
              type="text"
              disabled
              id="title"
              label="Nome do projeto"
              value={currentTech.title}
              error={errors.title?.message}
              {...register("title")}
            />

            <p className="statusSelect">Status</p>
            <div className="statusFormRegister">
              <select {...register("status")}>
                <option className="hidden" value="">
                  {currentTech.status}
                </option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Sênior">Sênior</option>
              </select>
              <p>{errors.status?.message}</p>
            </div>
          </fieldset>
          <div className="buttonExcluirTech">
            <StyledButton
              className="buttonRegisterTechnology"
              type="submit"
              buttonSize="mobileTechMd"
              buttonStyle="primary-negative"
            >
              Salvar alterações
            </StyledButton>
            <StyledButton
              type="button"
              onClick={() => handleDellTechnology(currentTech.id)}
              buttonSize="mobileSmallTech"
              buttonStyle="desabilitado"
            >
              Excluir
            </StyledButton>
          </div>
        </StyleModalEditTechnologyForm>
      </div>
    </div>
  );
};
