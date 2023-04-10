import { useForm } from "react-hook-form";
import { StyledParagraph, StyledTitleThree } from "../../../styles/typography";
import { useNavigate, Link } from "react-router-dom";
import { api } from "../../../services/api";
import { StyledButton } from "../../../styles/button";
import { Input } from "../../Input";
import { StyleFormContainer } from "../FormLogin/style";
import { StyleFormRegister } from "./style";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { formRegisterSchema } from "../../../services/formSchema";

export const FormRegister = ({toast}) => {
  const [isTypePassword, setIsTypePassword] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formRegisterSchema),
  });
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    console.log(data);
    try {
      const userOk = await api.post("/users", data);
      toast.success("conta criada com sucesso");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
  };

  return (
    <StyleFormContainer>
      <StyledTitleThree fonteSize="three">Crie sua conta</StyledTitleThree>
      <span>Rapido e grátis, vamos nessa</span>
      <StyleFormRegister onSubmit={handleSubmit(handleRegister)}>
        <fieldset className="fieldsetRegister">
          <Input
            type="name"
            id="name"
            label="Nome"
            placeholder="Digite aqui seu nome"
            error={errors.name?.message}
            {...register("name")}
          />

          <Input
            type="email"
            id="email"
            label="Email"
            placeholder="Digite aqui seu email"
            error={errors.email?.message}
            {...register("email")}
          />

          <Input
            isTypePassword={isTypePassword}
            setIsTypePassword={setIsTypePassword}
            type={isTypePassword ? "password" : "text"}
            id="password"
            label="Senha"
            placeholder="Digite aqui sua senha"
            error={errors.password?.message}
            {...register("password")}
          />

          <Input
            isTypePassword={isTypePassword}
            setIsTypePassword={setIsTypePassword}
            type={isTypePassword ? "password" : "text"}
            id="password"
            label="Confirmar Senha"
            placeholder="Digite aqui sua senha"
            error={errors.password?.message}
            {...register("password")}
          />

          <Input
            type="text"
            id="bio"
            label="Bio"
            placeholder="Fale sobre você"
            error={errors.bio?.message}
            {...register("bio")}
          />

          <Input
            type="text"
            id="contact"
            label="Contato"
            placeholder="Opção de contato"
            error={errors.contact?.message}
            {...register("contact")}
          />

          <p className="titleSelect">Selecionar módulo</p>
          <div className="selectFormRegister">
            <select {...register("course_module")}>
              <option value="Primeiro Módulo">Primeiro Módulo</option>
              <option value="Segundo Módulo">Segundo Módulo</option>
              <option value="Terceiro Módulo">Terceiro Módulo</option>
              <option value="Quarto Módulo">Quarto Módulo</option>
              <option value="Quinto Módulo">Quinto Módulo</option>
              <option value="Sexto Módulo">Sexto Módulo</option>
            </select>
            <p>{errors.course_module?.message}</p>
          </div>
        </fieldset>

        <StyledButton
          className="buttonRegister"
          type="submit"
          buttonSize="mobile"
          buttonStyle="primary-negative"
        >
          Cadastrar
        </StyledButton>
      </StyleFormRegister>
    </StyleFormContainer>
  );

};
