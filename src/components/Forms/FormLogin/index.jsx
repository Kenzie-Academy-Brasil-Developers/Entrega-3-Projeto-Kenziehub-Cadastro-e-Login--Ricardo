import { useForm } from "react-hook-form";
import { StyledParagraph, StyledTitleThree } from "../../../styles/typography";
import { Link } from "react-router-dom";
import { StyleFormContainer, StyleFormLogin } from "./style";
import { StyledButton } from "../../../styles/button";
import { Input } from "../../Input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect, useState } from "react";
import { formLoginSchema } from "./formLoginSchema";
import { UserContext } from "../../providers/UserContext";

export const FormLogin = ({}) => {
  const { handleLogin, loading, isTypePassword, setIsTypePassword } =
    useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formLoginSchema),
  });

  return (
    <StyleFormContainer>
      <StyledTitleThree fonteSize="three">Login</StyledTitleThree>
      <StyleFormLogin onSubmit={handleSubmit(handleLogin)}>
        <fieldset>
          <Input
            type="email"
            id="email"
            label="Email"
            placeholder="Digite seu email"
            error={errors.email?.message}
            {...register("email")}
          />

          <Input
            isTypePassword={isTypePassword}
            setIsTypePassword={setIsTypePassword}
            type={isTypePassword ? "password" : "text"}
            id="password"
            label="Senha"
            placeholder="Digite sua senha"
            error={errors.password?.message}
            {...register("password")}
          />
        </fieldset>

        <StyledButton
          className="buttonEnter"
          type="submit"
          disabled={loading}
          buttonSize="mobile"
          buttonStyle="primary"
        >
          {loading ? "Entrando..." : "Entrar"}
        </StyledButton>
      </StyleFormLogin>
      <StyledParagraph className="p">
        ainda não possui uma conta
      </StyledParagraph>
      <Link to={"/register"}>
        <StyledButton buttonSize="mobile" buttonStyle="secundary">
          Cadastre-se
        </StyledButton>
      </Link>
    </StyleFormContainer>
  );
};
