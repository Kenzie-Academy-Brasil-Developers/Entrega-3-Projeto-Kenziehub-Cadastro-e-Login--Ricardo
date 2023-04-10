import { FormRegister } from "../../components/Forms/FormRegister"
import { Header } from "../../components/Header"
import { StyleRegister } from "./style"

export const Register = ({toast}) => {
    return (
        <StyleRegister >
            
                <Header page="register"/>
                <FormRegister toast={toast}/>
            
        </StyleRegister>
    )
}