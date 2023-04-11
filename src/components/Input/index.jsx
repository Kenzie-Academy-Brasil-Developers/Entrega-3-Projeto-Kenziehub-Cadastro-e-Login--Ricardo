import { forwardRef } from "react";
import { StyleInput } from "./style";
import imgEye from "../../assets/olho.svg";
import { Link } from "react-router-dom";

export const Input = forwardRef(
  (
    { id, label, error, children, isTypePassword, setIsTypePassword, ...rest },
    ref
  ) => {
    return (
      <StyleInput>
        {label ? <label htmlFor={id}>{label}</label> : null}
        <div className="inputpass">
          <input id={id} ref={ref} {...rest} />
          <button
            className={id == "password" ? "iconEye" : "hidden"}
            onClick={() => setIsTypePassword(!isTypePassword)}
          >
            <img src={imgEye} alt="Icone Olho" />
          </button>
        </div>
        {children}
        {error ? <p className="error">{error}</p> : null}
      </StyleInput>
    );
  }
);
