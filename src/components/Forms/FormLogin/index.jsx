import { useForm } from "react-hook-form";
import { StyledParagraph, StyledTitleThree } from "../../../styles/typography";
import { useNavigate, Link } from "react-router-dom";
import { api } from "../../../services/api";
import { StyleFormContainer, StyleFormLogin } from "./style";
import { StyledButton } from "../../../styles/button";
import { Input } from "../../Input";
import { formLoginSchema } from "../../../services/formSchema";
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

export const FormLogin = () => {
  const [isTypePassword, setIsTypePassword] = useState(true);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formLoginSchema),
 });
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const loginOk = await api.post("/sessions", data);

      navigate("/dashboard");
    } catch (error) {
      toast(error);
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
        
          <StyledButton className="buttonEntrar" type="submit" buttonSize="mobile" buttonStyle="primary">
            Entrar
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
