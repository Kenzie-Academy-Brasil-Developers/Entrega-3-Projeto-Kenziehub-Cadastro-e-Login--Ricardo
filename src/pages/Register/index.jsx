import { FormRegister } from "../../components/Forms/FormRegister"
import { Header } from "../../components/Header"
import { StyleRegister } from "./style"

export const Register = () => {
    return (
        <StyleRegister >
            
                <Header page="register"/>
                <FormRegister />
            
        </StyleRegister>
    )
}