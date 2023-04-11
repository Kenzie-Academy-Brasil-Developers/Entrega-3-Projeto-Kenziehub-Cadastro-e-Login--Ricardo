import { useForm } from "react-hook-form";
import { StyledParagraph, StyledTitleThree } from "../../../styles/typography";
import { useNavigate, Link } from "react-router-dom";
import { api } from "../../../services/api";
import { StyleFormContainer, StyleFormLogin } from "./style";
import { StyledButton } from "../../../styles/button";
import { Input } from "../../Input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { formLoginSchema } from "./formLoginSchema";

export const FormLogin = ({ setUser }) => {
  const [loading, setLoading] = useState(false);
  const [isTypePassword, setIsTypePassword] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formLoginSchema),
  });
  const navigate = useNavigate();

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
