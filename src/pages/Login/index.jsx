import { FormLogin } from "../../components/Forms/FormLogin";
import { Header } from "../../components/Header";
import { StyleLogin } from "./style";

export const Login = ({ setUser }) => {
  return (
    <StyleLogin>
      <Header page={"login"} />
      <FormLogin setUser={setUser} />
    </StyleLogin>
  );
};
